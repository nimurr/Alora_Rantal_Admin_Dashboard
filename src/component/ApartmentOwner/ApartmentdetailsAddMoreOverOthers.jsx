import React from 'react'

export default function ApartmentdetailsAddMoreOverOthers() {
    return (
        <div>
            <div className='border  w-full rounded-lg mb-6'>
                <h4 className=' font-semibold p-2 text-2xl'>Add the Owner</h4>
                <div className='p-5 grid grid-cols-2 gap-5 capitalize taxt-base'>
                    <button className='bg-[#2cb5eb] text-white py-2 rounded-lg'>Choose Owner</button>
                    <button className='border border-[#2cb5eb] py-2 rounded-lg'>Create Owner</button>
                </div>
            </div>
            <div>
                <h2 className='text-2xl font-semibold mb-4'>Staff list </h2>
                <div className='border w-full rounded-lg mb-6'>
                    <div className='flex items-center p-2 justify-between'>
                        <h4 className='font-semibold text-center  text-xl'>Agents</h4>
                        <button className='bg-[#2cb5eb] text-white p-2 rounded-lg'>Add Agent</button>
                    </div>
                    {
                        [1, 2, 3, 4].map((item) => (
                            <div className='p-3 flex items-start justify-between gap-5 m-2 rounded-lg border border-[#2cb5eb]  capitalize taxt-base'>
                                <img className='w-20 rounded-lg' src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4855.jpg" alt="" />
                                <div>
                                    <h3 className='font-semibold'>Bashar islam</h3>
                                    <p>12133366666</p>
                                    <span>support@gmail.com</span>
                                </div>
                                <button className='w-1/2 bolck text-end'>Details</button>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <div className='border w-full rounded-lg mb-6'>
                    <div className='flex items-center p-2 justify-between'>
                        <h4 className='font-semibold text-center  text-xl'>Maintenance Crew </h4>
                        <button className='bg-[#2cb5eb] text-white p-2 rounded-lg'>Add Agent</button>
                    </div>
                    {
                        [1, 2, 3, 4].map((item) => (
                            <div className='p-3 flex items-start justify-between gap-5 m-2 rounded-lg border border-[#2cb5eb]  capitalize taxt-base'>
                                <img className='w-20 rounded-lg' src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4855.jpg" alt="" />
                                <div>
                                    <h3 className='font-semibold'>Bashar islam</h3>
                                    <p>12133366666</p>
                                    <span>support@gmail.com</span>
                                </div>
                                <button className='w-1/2 bolck text-end'>Details</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
