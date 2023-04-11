import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navber container mx-auto h-20 flex items-center justify-between border-b border-teal-950'>
      <Link to='/' className='logo text-3xl font-medium text-teal-600'>Proxima </Link>
    </nav>
  )
}

export default Navbar