import { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";


const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {

    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
       const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
          setError(true)
        },
        () => {
         
          getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            })
            console.log("File available at", downloadURL);
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChat", res.user.uid), {})
            navigate("/")

          });
        }
      );
      
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="bg-[#a7bcff] min-h-screen flex items-center justify-center">
      <div className="bg-white py-5 px-16 rounded-xl flex flex-col gap-3 items-center">
        <p className="text-2xl font-bold text-[#5d5b8d]">Lets chat</p>
        <p className="font-medium text-[#5d5b8d] text-sm">Register</p>

        <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter name"
            className="p-4 border-b border-[#5d5b8d] outline-0"
          />

          <input
            type="email"
            placeholder="Email"
            className="p-4 border-b border-[#5d5b8d] outline-0"
          />

          <input
            type="password"
            placeholder="Enter password"
            className="p-4 border-b border-[#5d5b8d] outline-0"
          />

          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            className="p-4 border-b border-[#5d5b8d]"
          />

          <label
            htmlFor="file"
            className="flex items-center gap-5 text-[#8da4f1] text-sm cursor-pointer"
          >
            <img className="w-8" src={Add} alt="" />
            <p>Add an avatar</p>
          </label>

          <button className="bg-[#7b96ec] text-white p-3 font-bold hover:opacity-90">
            Sign up
          </button>
          {error && <span>Something went wrong</span>}
        </form>

        <p className="text-[#5d5b8d] text-xs mt-3">
          Already have an account?<Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
