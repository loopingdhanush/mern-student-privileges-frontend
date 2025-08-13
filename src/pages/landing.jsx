import react from 'react';
import { Link } from 'react-router-dom';

export default function Landing(){
    return(
    <div className="min-h-screen flex flex-col items-center justify-center ">
    <div className='flex flex-col items-center justify-center max-w-lg mx-4 text-center animate-fadeIn'>
        <div className="mb-4 bg-black h-24 w-24 rounded-full flex items-center justify-center">
            <h1 className='text-3xl geist font-bold text-white item '>Shq</h1>
        </div>
        <h1 className='text-4xl font-normal mb-4 ebg '>Join, learn, and grow with a community that fuels your success.</h1>
        <p className='text-lg text-gray-700 mb-4 geist'>Explore and Claim your student privileges with ease.</p>
        <Link to="/privileges" 
            className="text-sm font-bold text-white geist
            bg-blue-400 
            border border-blue-500 shadow-sm hover:shadow-lg transition duration-300 ease-in-out
            rounded-xl px-4 py-1.5 h-8 ">
            Privileges
        </Link>

        

        <p className='text-sm text-gray-500 mt-4'>© 2023 Shq. All rights reserved.</p>
    </div>
    </div>)
}