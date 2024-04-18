import {
  GithubAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import auth from "../firebase/firebase.config";
import { Link } from "react-router-dom";

const Login = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loginUser, setLoginUser] = useState(null);
  const emailRef = useRef(null);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });

    setRegisterError("");
    setSuccess("");

    // login logic
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        if (user.emailVerified) {
          setSuccess("User Login successfully");
        } else {
          alert("Please check your email and verify your email");
        }
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };

  //   forgot password
  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      setRegisterError("Please provide a email");
      return;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      setRegisterError("please provide a valid email");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please check your email");
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };

  // google login
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogOut = ()=>{
    signOut(auth)
    .then(()=>{
      alert("User logOut successfully");
      setLoginUser(null)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div>
      <h2 className="text-2xl font-bold my-3 text-center">Login Form</h2>
      <form
        onSubmit={handleSubmit}
        className="w-1/3 mx-auto border-2 shadow-xl p-8 rounded-xl"
      >
        <div>
          <label className="text-md font-bold" htmlFor="email">
            Email :{" "}
          </label>
          <input
            className="border-2 rounded-lg py-1 px-2 w-full mb-4"
            placeholder="Enter your Email ..."
            type="email"
            ref={emailRef}
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
          <span
            className="absolute right-2 top-8 text-sm font-bold cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <p>show</p> : <del>show</del>}
          </span>
        </div>
        <label className="label">
          <a
            onClick={handleResetPassword}
            href="#"
            className="label-text-alt link link-hover"
          >
            {" "}
            <button className="btn btn-link">Forgot password?</button>
          </a>
        </label>
        <div className="flex justify-center items-center">
          <button className="bg-green-500 text-white py-1 px-4 rounded-xl font-bold text-2xl ">
            Login
          </button>
        </div>
        {registerError && (
          <p className="text-red-500 text-center">{registerError}</p>
        )}
        {success && <p className="text-green-500 text-center">{success}</p>}
        <p>
          New to this website ? Please{" "}
          <Link to="/register">
            <button className="btn btn-active btn-link">Register</button>
          </Link>
        </p>
        <div className="text-center">
          {loginUser ? (
            <button
              onClick={handleLogOut}
              className="bg-red-500 text-white py-1 px-4 rounded-lg text-xl font-bold "
            >
              LogOut
            </button>
          ) : (
            <div className="flex justify-around">
              <button
                onClick={handleGoogleLogin}
                className="bg-orange-500 text-white py-1 px-4 rounded-lg text-xl font-bold"
              >
                Google
              </button>
              <button
                onClick={handleGithubLogin}
                className="bg-blue-500 text-white py-1 px-4 rounded-lg text-xl font-bold"
              >
                Github
              </button>
            </div>
          )}
        </div>
      </form>

      {loginUser && (
        <div className="border-2 p-6 rounded-lg w-1/4 mx-auto my-6">
          <img
            className="mx-auto rounded-full"
            src={loginUser.photoURL}
            alt="photo"
          />
          <h1 className="text-center text-2xl font-bold">
            {loginUser.displayName}
          </h1>
          <p className="text-center text-md font-bold">{loginUser.email}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
