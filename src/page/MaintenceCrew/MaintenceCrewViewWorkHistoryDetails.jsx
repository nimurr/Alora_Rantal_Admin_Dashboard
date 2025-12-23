import React from 'react';
import { FaAngleLeft, FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function MaintenceCrewViewWorkHistoryDetails() {
    return (
        <div>
            <Link to="/roles/maintence-crew" className="flex my-5 items-center gap-2">
                <FaAngleLeft className="text-2xl" />
                <span className="text-2xl font-semibold">Details</span>
            </Link>
            <div className='grid xl:grid-cols-3 gap-5'>
                <div className='border lg:col-span-2 rounded-lg border-gray-200 p-5'>
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
                    <div className='mt-4'>
                        <span className='block mb-2 font-semibold'>issue video</span>
                        <img className='w-full h-44 mt-5 object-cover rounded-lg' src="/category/category.png" alt="" />
                    </div>
                </div>
                <div>
                    <div className='border p-5 rounded-lg'>
                        <span className='block mb-2 font-semibold'>Maintenance Crew details</span>
                        <div className='my-3'>
                            <span>Resolving issue date</span>
                            <span>Sat 12 April 2025  8.30 PM </span>
                        </div>
                        <div className='flex  gap-3 mt-5'>
                            <img className='w-10 h-10 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnFRPx77U9mERU_T1zyHcz9BOxbDQrL4Dvtg&s" alt="" />
                            <div>
                                <h2 className='font-semibold'>name</h2>
                                <span className='text-sm'>John Doe</span>
                            </div>
                        </div>
                        <div className='flex  gap-3 mt-5'>
                            <MdEmail className='text-2xl text-gray-400' />
                            <div>
                                <h2 className='font-semibold'>email</h2>
                                <span className='text-sm'>support@gmail.com</span>
                            </div>
                        </div>
                        <div className='flex  gap-3 mt-5'>
                            <FaPhone className='text-2xl text-gray-400' />
                            <div>
                                <h2 className='font-semibold'>phone number</h2>
                                <span className='text-sm'>0178000000</span>
                            </div>
                        </div>
                    </div>
                    <div className='border p-5 rounded-lg mt-5'>
                        <span className='block mb-2 font-semibold'>Resolved By Owner</span>
                        <p className='text-gray-500 mt-1'>Resolving issue date <br /> Sat 12 April 2025  8.30 PM </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
