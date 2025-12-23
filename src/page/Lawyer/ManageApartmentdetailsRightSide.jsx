 


import React from 'react'

export default function ManageApartmentdetailsRightSide() {
    return (
        <div>
            {/* Analytics */}
            <div >
                <h2 className='text-2xl font-semibold mb-4'>Analytics</h2>
                <div className='border  w-full rounded-lg mb-6'>
                    <h4 className='bg-[#2cb5eb31] font-semibold text-center py-2 text-xl'>Financial Snapshot</h4>
                    <div className='p-5 grid grid-cols-2 gap-5 capitalize taxt-base'>
                        <p className='mb-2'>total revenue earned  <br /><span className='font-bold'>$81.550.00</span></p>
                        <p className='mb-2'>total revenue YTD  <br /><span className='font-bold'>$8.250.00</span></p>
                        <p className='mb-2'>Monthly revenue  <br /><span className='font-bold'>$1,234.00</span></p>
                        <p className='mb-2'>outstanding balances  <br /><span className='font-bold'>$1,234.00</span></p>
                    </div>
                </div>
                <div className='border  w-full rounded-lg mb-6'>
                    <h4 className='bg-[#2cb5eb31] font-semibold text-center py-2 text-xl'>Occupancy & leasing</h4>
                    <div className='p-5 grid grid-cols-2 gap-5 capitalize taxt-base'>
                        <p className='mb-2'>Current Occupancy <br /><span className='font-bold'>95%</span></p>
                        <p className='mb-2'>lease Expiring
                            in next 90
                            days  <br /><span className='font-bold'>12</span></p>
                        <p className='mb-2'>Vacant Unit   <br /><span className='font-bold'>5</span></p>

                    </div>
                </div>
                <div className='border  w-full rounded-lg mb-6'>
                    <h4 className='bg-[#2cb5eb31] font-semibold text-center py-2 text-xl'>Maintenance Overview</h4>
                    <div className='p-5 grid grid-cols-2 gap-5 capitalize taxt-base'>
                        <p className='mb-2'>open work order <br /><span className='font-bold'>9</span></p>
                        <p className='mb-2'>average resolution time <br /><span className='font-bold'>35 Days</span></p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-2xl font-semibold'>Alerts </h2>
                <p className=' mb-4 mt-1 bg-red-100 text-red-500 inline-block px-2 rounded-lg'>Late Payment : 4</p>
                <div className='border w-full rounded-lg mb-6'>
                    <h4 className='bg-[#2cb5eb31] font-semibold text-center py-2 text-xl'>Owner</h4>
                    <div className='p-3 flex items-start justify-between gap-5 m-2 rounded-lg border border-[#2cb5eb]  capitalize taxt-base'>
                        <img className='w-20 rounded-lg' src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4855.jpg" alt="" />
                        <div>
                            <h3 className='font-semibold'>Bashar islam</h3>
                            <p>12133366666</p>
                            <span>support@gmail.com</span>
                        </div>
                        <button className='w-1/2 bolck text-end'>Details</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
