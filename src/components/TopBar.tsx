import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <div>
        <div className='bg-cyan-500 fixed top-0 left-0 right-0 sidecolor xl:block lg:hidden md:hidden sm:block hidden '>
        <div className="navbar">
  <div className="navbar-start">
  </div>
  <div className="navbar-center">
    <h1 className="">Feedbook</h1>
  </div>
  <div className="navbar-end pr-10">
    <div>
     <Link to={'/login'} ><h2 className='text-4xl text-white'>Login</h2></Link>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost  avatar">
        <div className="w-14 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="./public/nuser.png" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
            Profile
        </li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  </div>
</div>
           
            
        </div>
      
    </div>
  )
}

export default TopBar
