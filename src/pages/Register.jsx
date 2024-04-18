import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import auth from "../firebase/firebase.config";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accept = e.target.terms.checked;
    console.log({name, email, password, accept });

    setRegisterError("");
    setSuccess("");

    if(password.length < 6){
        setRegisterError("Password minimum 6 Character");
        return;
    }
    else if(!/[A-Z]/.test(password)){
        setRegisterError("Password must be only uppercase character");
        return;
    }
    else if(!accept){
        setRegisterError("please Accepts our terms and conditions");
        return;
    }


    createUserWithEmailAndPassword(auth, email, password)
    .then((result)=>{
        const user = result.user;
        console.log(user)
        setSuccess("User is Created")

        // update user profile 
        updateProfile(user, {displayName : name, photoURL : "https://example.com/jane-q-user/profile.jpg"})
        .then(()=>{
            setSuccess("User profile is updated")
        })
        .catch((error)=>{
            setRegisterError(error.message)
        })

        // email verify 
        sendEmailVerification(user)
        .then(()=>{
            alert("please check your email and verify your email")
        })
    })
    .catch((error)=>{
        console.log(error)
        setRegisterError(error.message)
    })
  };
  return (
    <div>
      <h2 className="text-2xl font-bold my-3 text-center">Register Form</h2>
      <form
        onSubmit={handleSubmit}
        className="w-1/3 mx-auto border-2 shadow-xl p-8 rounded-xl"
      >
        <div>
          <label className="text-md font-bold" htmlFor="name">
            Name :{" "}
          </label>
          <input
            className="border-2 rounded-lg py-1 px-2 w-full mb-4"
            placeholder="Enter your Name ..."
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        <div>
          <label className="text-md font-bold" htmlFor="email">
            Email :{" "}
          </label>
          <input
            className="border-2 rounded-lg py-1 px-2 w-full mb-4"
            placeholder="Enter your Email ..."
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="relative">
          <label className="text-md font-bold" htmlFor="password">
            Password :{" "}
          </label>
          <input
            className="border-2 rounded-lg py-1 px-2 w-full mb-4"
            placeholder="Enter your Password ..."
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            required
          />
          <span className="absolute right-2 top-8 text-sm font-bold cursor-pointer" onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <p>show</p> : <del>show</del>}</span>
        </div>
        <div className="flex gap-2 mb-3">
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms">Please Accepts our terms and conditions</label>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-green-500 text-white py-1 px-4 rounded-xl font-bold text-2xl ">
            Register
          </button>
        </div>
        {registerError && <p className="text-red-500 text-center">{registerError}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
        <p>Already have an Account ? please<Link to="/login"><button className="btn btn-active btn-link">Login</button></Link></p>
      </form>

      
    </div>
  );
};

export default Register;
