import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Link } from 'react-router'

const image ="https://idahocapitalsun.com/wp-content/uploads/2023/05/cellphone-2048x1365.jpeg"
function Root() {
    return (
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      `url(${image})`,
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to App Store</h1>
      <p className="mb-5">
      Apps, short for applications, are <span className='font-bold'>software programs designed to run on a mobile device like a smartphone or tablet.</span> They provide a wide range of functionalities, from social networking and entertainment to productivity and communication. 
      </p>
      <Link to='/app'><button className="btn btn-primary ">Expolore App</button></Link>
    </div>
  </div>
</div>
    )
}

export default Root
