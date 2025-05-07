import React, { use } from 'react'
import { FaAppStore } from "react-icons/fa";
import { NavLink } from 'react-router';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router';
import { AuthContext_File } from '../../Provider/AuthProvider';
import { Links } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
function Navbar() {
  // create a custome Navlink Bar 
  const { user, logOut } = use(AuthContext_File)
  // console.log(user.user.email)

  // Log ou function do here user 
  const handleLogOut = () => {
    logOut().then(() => {
    }).catch((error) => {
      console.log(error)
    })
    toast("Logout successfully Done ❌");
  }

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <ToastContainer />
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content grid gap-5 bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <p className=''>{user && user.email}</p>
            <NavLink to='/app'>App</NavLink>
            <NavLink to='/userProfile'>My Profile</NavLink>
            <NavLink to='/help'>Help & Contact</NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><FaAppStore />AppStore</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu flex gap-5 menu-horizontal px-1">
          <NavLink to='/app'>App</NavLink>
          <NavLink to='/userProfile'>My Profile</NavLink>
          <NavLink to='/help'>Help & Contact</NavLink>
          <p className=''>{user && user.email}</p>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/userProfile'><FaUserCircle className='h-8 w-auto mx-1 cursor-pointer' /></Link>
        {
          user ? <Link onClick={handleLogOut} className='flex justify-center items-center gap-1' to='/login'><button className="btn"> Logout</button></Link> :
            <Link className='flex justify-center items-center gap-1' to='/login'><button className="btn"> Login</button></Link>
        }
      </div>
    </div>
  )
}

export default Navbar
