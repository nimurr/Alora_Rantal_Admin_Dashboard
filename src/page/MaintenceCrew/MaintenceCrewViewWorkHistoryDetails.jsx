import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function MaintenceCrewViewWorkHistoryDetails() {
    return (
        <div>
            <Link to="/roles/apartment-owner" className="flex my-5 items-center gap-2">
                <FaAngleLeft className="text-2xl" />
                <span className="text-2xl font-semibold">Details</span>
            </Link>
            <div className='grid grid-cols-3'>
                <div className='border col-span-2 rounded-lg border-gray-200 p-5'>
                    <span className='text-center block'>Apartment Room number</span>
                    <h2 className='text-center block font-semibold mt-2 text-xl'>BG101 (1st floor)</h2>
                    <div className='flex items-center justify-between border-b pb-4 mt-4'>
                        <div>
                            <span>Apartment Name</span>
                            <h2 className='font-semibold'>Suncity Apartment </h2>
                        </div>
                        <div>
                            <span>Apartment Name</span>
                            <h2 className='font-semibold'>Suncity Apartment </h2>
                        </div>
                    </div>
                    <div className='flex items-center justify-between border-b pb-4 mt-4'>
                        <div>
                            <span>Issue date</span>
                            <h2 className='font-semibold'>Sat 12 April 2025  8.30 PM  </h2>
                        </div>
                        <div>
                            <span>Resolved date</span>
                            <h2 className='font-semibold'>Sat 12 April 2025  8.30 PM  </h2>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <span className='block mb-2 font-semibold'>Description</span>
                        <p className='text-gray-500'>I hope you're doing well. I wanted to inform you that there seems to be an issue with the fan and the air conditioner in my apartment room. The fan is not functioning properly, and the AC is either not cooling or not turning on.
                            I would appreciate it if you could kindly arrange for maintenance at your earliest convenience, as the weather is quite warm and it's becoming uncomfortable.Please let me know when a technician can come to check the issue.
                            Thank you in advance for your help.</p>
                    </div>
                    <div className='mt-4'>
                        <span className='block mb-2 font-semibold'>issue image</span>
                        <div className='flex items-center gap-2'>
                            <img className='w-20 rounded-lg' src="/category/category.png" alt="" />
                            <img className='w-20 rounded-lg' src="/category/category.png" alt="" />
                            <img className='w-20 rounded-lg' src="/category/category.png" alt="" />
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
