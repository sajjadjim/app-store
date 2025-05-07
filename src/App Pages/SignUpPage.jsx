import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext_File } from '../Provider/AuthProvider';

const SignUpPage = () => {

  const {createUser , setUser} = use(AuthContext_File)
//  create an handlle define the user information take 
const handleSignUp =(e)=>{
e.preventDefault()
// const name = e.target.name.value
// const photoUrl = e.target.photoUrl.value
const email = e.target.email.value 
const password = e.target.password.value 
// console.log({name , photoUrl ,email , password})
createUser(email , password).then((result)=>{
 const user =result.user;
 setUser(user)
 alert("Sign up done successfully ....")
}).catch((error)=>{
  alert(error)
})
} 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm mb-1">Full Name</label>
            <input
            name='name'
              type="text"
              placeholder="your name"
              required
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-1">Photo URL</label>
            <input
            name='photoUrl'
              type="url"
              placeholder="https://example.com/photo.jpg"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-1">Email</label>
            <input
            name='email'
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-1">Password</label>
            <input
            name='password'
              type="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <Link to='/login' className="text-blue-500 hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
