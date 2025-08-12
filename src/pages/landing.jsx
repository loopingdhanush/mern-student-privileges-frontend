import react from 'react';
import { Link } from 'react-router-dom';

export default function Landing(){
    return(
    <div className="mx-5">
    <div className='flex flex-col items-center justify-center max-w-xl mx-auto text-center animate-fadeIn'>
        <h1 className='text-2xl font-noraml mb-4 ebg mt-24'>Welcome to GrowLab</h1>
        <h1 className='text-4xl font-normal mb-4 ebg '>Join, learn, and grow with a community that fuels your success.</h1>
        <p className='text-lg text-gray-700 mb-4 geist'>Explore and manage your student privileges with ease.</p>
        <Link to="/privileges" 
            className="text-sm font-bold text-white geist
            bg-blue-400 
            border border-blue-500 shadow-sm hover:shadow-lg transition duration-300 ease-in-out
            rounded-xl px-4 py-1.5 h-8 ">
            Privileges</Link>
    </div>
    </div>)
}