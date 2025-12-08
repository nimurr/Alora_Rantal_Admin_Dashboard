import React from 'react';

const AllRoles = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='grid grid-cols-2 gap-5'>
                <div className='hover:bg-[#28a5d6] md:h-60 h-40 md:w-60 w-40 border border-[#28a5d6] flex justify-center items-center rounded-3xl px-5 text-center hover:text-white text-xl font-semibold cursor-pointer'>
                    <h2>Apartment Owner</h2>
                </div>
                <div className='hover:bg-[#28a5d6] md:h-60 h-40 md:w-60 w-40 border border-[#28a5d6] flex justify-center items-center rounded-3xl px-5 text-center hover:text-white text-xl font-semibold cursor-pointer'>
                    <h2> Renter User</h2>
                </div>
                <div className='hover:bg-[#28a5d6] md:h-60 h-40 md:w-60 w-40 border border-[#28a5d6] flex justify-center items-center rounded-3xl px-5 text-center hover:text-white text-xl font-semibold cursor-pointer'>
                    <h2>Maintence Crew</h2>
                </div>
                <div className='hover:bg-[#28a5d6] md:h-60 h-40 md:w-60 w-40 border border-[#28a5d6] flex justify-center items-center rounded-3xl px-5 text-center hover:text-white text-xl font-semibold cursor-pointer'>
                    <h2>Agents</h2>
                </div>
            </div>
        </div>
    );
}

export default AllRoles;
