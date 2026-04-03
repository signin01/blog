import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className='py-6 flex justify-between items-center border-b border-slate-100 mb-8 bg-white/80 backdrop-blur-md sticky top-0 z-50 px-4 md:px-0'>
            {/* Logo Section */}
            <div className='cursor-pointer' onClick={() => navigate("/home")}>
                <h2 className='text-2xl font-black tracking-tighter text-slate-800 uppercase'>
                    Jacky<span className='text-indigo-600'>.Dev</span>
                </h2>
            </div>

            {/* Navigation Links */}
            <div className='flex items-center gap-1 md:gap-4'>
                <Link 
                    className='font-bold text-slate-600 hover:text-indigo-600 px-3 py-2 rounded-lg transition-all duration-300 text-sm md:text-base' 
                    to="/home"
                >
                    Home
                </Link>
                
                <Link 
                    className='font-bold text-slate-600 hover:text-indigo-600 px-3 py-2 rounded-lg transition-all duration-300 text-sm md:text-base' 
                    to="/blogs"
                >
                    Blogs
                </Link>
                
                <Link 
                    className='font-bold text-slate-600 hover:text-indigo-600 px-3 py-2 rounded-lg transition-all duration-300 text-sm md:text-base' 
                    to="/about"
                >
                    About
                </Link>

                {/* Action Button */}
                <button 
                    className='button-style ml-4 hidden sm:block shadow-indigo-100' 
                    onClick={() => navigate("/login")}
                >
                    Login
                </button>
            </div>
        </nav>
    );
}

export default Navbar;