import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

function Home() {
    return (
        <div>  
          <Navbar></Navbar>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Home
