import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect,setRedirect] = useState(false);
  async function registerUser(e) {
    e.preventDefault();
    try{
        await axios.post("/register", {
            name,
            email,
            password,
          });
          
    }catch(error){
        console.log(error);
    }
    
  }
  if(redirect){
    return <Navigate to="/"/>
  }
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-lg mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Enter your username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">Sign Up</button>
          <div className="text-center py-2 text-gray-500">
            Allready a member?{" "}
            <Link to="/login" className="underline text-black">
              Login now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
