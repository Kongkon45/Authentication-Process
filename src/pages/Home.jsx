// import React, { useState } from "react";
// import {
//   GoogleAuthProvider,
//   GithubAuthProvider,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";
// import auth from "../firebase/firebase.config";

// const Home = () => {
//   const [user, setUser] = useState(null);
//   const googleProvider = new GoogleAuthProvider();
//   const githubProvider = new GithubAuthProvider();

//   const handleGoogleLogin = () => {
//     signInWithPopup(auth, googleProvider)
//       .then((result) => {
//         const loginUser = result.user;
//         console.log(loginUser);
//         setUser(loginUser);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   const handleGithubLogin = () => {
//     signInWithPopup(auth, githubProvider)
//       .then((result) => {
//         const loginUser = result.user;
//         console.log(loginUser);
//         setUser(loginUser);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   const handleLogOut = () => {
//     signOut(auth)
//       .then(() => {
//         alert("User logOut successfully");
//         setUser(null);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   return (
//     <div>
//       {user ? (
//         <button
//           onClick={handleLogOut}
//           className="bg-green-500 text-white py-2 px-4 rounded-lg font-bold text-2xl "
//         >
//           LogOut
//         </button>
//       ) : (
//         <div>
//           {" "}
//           <button
//             onClick={handleGoogleLogin}
//             className="bg-green-500 text-white py-2 px-4 rounded-lg font-bold text-2xl "
//           >
//             Google Login
//           </button>
//           <button
//             onClick={handleGithubLogin}
//             className="bg-green-500 text-white py-2 px-4 rounded-lg font-bold text-2xl "
//           >
//             Github Login
//           </button>
//         </div>
//       )}

//       {user && (
//         <div>
//           <img src={user.photoURL} alt="photo" />
//           <h2>{user.displayName}</h2>
//           <p>{user.email}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;


import React, { useState } from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home
