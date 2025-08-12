import react from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="h-14 mx-auto bg-gray-00 fixed top-0 left-0 right-0 z-50 px-4
     bg-opacity-10 backdrop-blur-[6px] bg-gradient-to-b from-white/100 to-transparent">

        <div className='max-w-3xl mx-auto flex items-center justify-between h-full'>

            <Link to="/" 
            className="text-xl font-bold text-gray-800 ml-1">Shq</Link>

            <div className="space-x-1">
            
            <Link to="/" 
            className="text-sm font-semibold text-gray-950 geist
            bg-white 
            border border-gray-300 shadow-sm hover:shadow-lg transition duration-300 ease-in-out
            rounded-xl px-4 py-1.5 h-8">
            Home</Link>

            <Link to="/privileges" 
            className="text-sm font-semibold text-white geist
            bg-blue-400 
            border border-blue-500 shadow-sm hover:shadow-lg transition duration-300 ease-in-out
            rounded-xl px-4 py-1.5 h-8">
            Privileges</Link>

            </div>

        </div>

    </nav>
  );
}