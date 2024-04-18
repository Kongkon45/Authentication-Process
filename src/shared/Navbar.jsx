import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-center items-center gap-10 h-12 bg-blue-500'>
            <Link className='text-2xl font-bold text-white' to='/'>Home</Link>
            <Link className='text-2xl font-bold text-white' to="/login">Login</Link>
            <Link className='text-2xl font-bold text-white' to='/register'>Register</Link>
        </nav>
    </div>
  )
}

export default Navbar