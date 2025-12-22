import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaFilter } from 'react-icons/fa';

const ApartmentOwnerRenterTracker = () => {
    // State to manage which tab is active
    const [activeTab, setActiveTab] = useState('moveIn');

    // Data for the unit and renter
    const unitData = {
        unit: 'BG101',
        type: 'Studio',
        moveIn: { date: '3/11/2025 8:30 PM', renter: 'Mark Ruban' },
        moveOut: { date: 'TBD', renter: 'TBD' },
        reserved: { date: 'TBD', renter: 'TBD' }
    };

    // Tab click handler
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="w-full mx-auto bg-white rounded-lg shadow-md p-4">
            {/* Tabs */}
            <div className="flex border-b-2 justify-center font-semibold border-[#2cb5eb57]">
                <button
                    className={`w-full py-2 text-lg ${activeTab === 'moveIn' ? 'border-b-2 border-[#2cb5eb] text-[#2cb5eb]' : 'text-gray-500'}`}
                    onClick={() => handleTabClick('moveIn')}
                >
                    Move In
                </button>
                <button
                    className={`w-full py-2 text-lg ${activeTab === 'moveOut' ? 'border-b-2 border-[#2cb5eb] text-[#2cb5eb]' : 'text-gray-500'}`}
                    onClick={() => handleTabClick('moveOut')}
                >
                    Move Out
                </button>
                <button
                    className={`w-full py-2 text-lg ${activeTab === 'reserved' ? 'border-b-2 border-[#2cb5eb] text-[#2cb5eb]' : 'text-gray-500'}`}
                    onClick={() => handleTabClick('reserved')}
                >
                    Reserved
                </button>
            </div>

            {/* Tab Content */}
            <div className="mt-4">
                {activeTab === 'moveIn' && (
                    <div>
                        <div className='bg-gray-200 rounded-lg flex items-center justify-around py-3'>
                            <FaChevronLeft className='cursor-pointer text-xl' />
                            <span>Fab 2025</span>
                            <FaChevronRight className='cursor-pointer text-xl' />
                        </div>
                        <div className='my-10 flex items-center justify-between flex-wrap gap-20'>
                            <input className='w-auto md:min-w-[400px] border border-[#2cb5eb] py-2 px-3 rounded-lg' type="text" placeholder="Search Unit/Name/Renter Name" />
                            <div className='w-12 h-12 bg-[#2cb5eb] flex items-center justify-center rounded-full cursor-pointer '>
                                <FaFilter className='text-xl text-white' />
                            </div>
                        </div>

                        <div className='border p-5 rounded-lg border-gray-200'>
                            <img className='h-40 w-full object-cover rounded-lg mb-2' src="/category/category.png" alt="" />
                            <div className='flex items-center justify-between text-xl font-semibold'>
                                <span>
                                    <strong className='text-xl mr-2'>Unit:</strong>
                                    {unitData.unit}
                                </span>
                                <span>({unitData.type})</span>
                            </div>
                            <hr className='my-3' />
                            <div className=' text-lg flex items-center justify-between'>
                                <p><strong>Move In Date:</strong> {unitData.moveIn.date}</p>
                                <p className='bg-[#2cb5eb] px-3 py-1 rounded-lg text-white cursor-pointer hover:bg-[#2cb5ebb0]'>{unitData.moveIn.renter}</p>
                            </div>
                        </div>

                        <div className='border p-5 rounded-lg border-gray-200'>
                            <img className='h-40 w-full object-cover rounded-lg mb-2' src="/category/category.png" alt="" />
                            <div className='flex items-center justify-between text-xl font-semibold'>
                                <span>
                                    <strong className='text-xl mr-2'>Unit:</strong>
                                    {unitData.unit}
                                </span>
                                <span>({unitData.type})</span>
                            </div>
                            <hr className='my-3' />
                            <div className=' text-lg flex items-center justify-between'>
                                <p><strong>Move In Date:</strong> {unitData.moveIn.date}</p>
                                <p className='bg-[#2cb5eb] px-3 py-1 rounded-lg text-white cursor-pointer hover:bg-[#2cb5ebb0]'>{unitData.moveIn.renter}</p>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 'moveOut' && (
                    <div>
                        <div className='bg-gray-200 rounded-lg flex items-center justify-around py-3'>
                            <FaChevronLeft className='cursor-pointer text-xl' />
                            <span>Fab 2025</span>
                            <FaChevronRight className='cursor-pointer text-xl' />
                        </div>
                        <div className='my-10 flex items-center justify-between flex-wrap gap-20'>
                            <input className='w-auto md:min-w-[400px] border border-[#2cb5eb] py-2 px-3 rounded-lg' type="text" placeholder="Search Unit/Name/Renter Name" />
                            <div className='w-12 h-12 bg-[#2cb5eb] flex items-center justify-center rounded-full cursor-pointer '>
                                <FaFilter className='text-xl text-white' />
                            </div>
                        </div>

                        <div className='border p-5 rounded-lg border-gray-200'>
                            <img className='h-40 w-full object-cover rounded-lg mb-2' src="/category/category.png" alt="" />
                            <div className='flex items-center justify-between text-xl font-semibold'>
                                <span>
                                    <strong className='text-xl mr-2'>Unit:</strong>
                                    {unitData.unit}
                                </span>
                                <span>({unitData.type})</span>
                            </div>
                            <hr className='my-3' />
                            <div className=' text-lg flex items-center justify-between'>
                                <p><strong>Move In Date:</strong> {unitData.moveIn.date}</p>
                                <p className='bg-[#2cb5eb] px-3 py-1 rounded-lg text-white cursor-pointer hover:bg-[#2cb5ebb0]'>{unitData.moveIn.renter}</p>
                            </div>
                        </div>

                        <div className='border p-5 rounded-lg border-gray-200'>
                            <img className='h-40 w-full object-cover rounded-lg mb-2' src="/category/category.png" alt="" />
                            <div className='flex items-center justify-between text-xl font-semibold'>
                                <span>
                                    <strong className='text-xl mr-2'>Unit:</strong>
                                    {unitData.unit}
                                </span>
                                <span>({unitData.type})</span>
                            </div>
                            <hr className='my-3' />
                            <div className=' text-lg flex items-center justify-between'>
                                <p><strong>Move In Date:</strong> {unitData.moveIn.date}</p>
                                <p className='bg-[#2cb5eb] px-3 py-1 rounded-lg text-white cursor-pointer hover:bg-[#2cb5ebb0]'>{unitData.moveIn.renter}</p>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 'reserved' && (
                    <div>
                        <div className='bg-gray-200 rounded-lg flex items-center justify-around py-3'>
                            <FaChevronLeft className='cursor-pointer text-xl' />
                            <span>Fab 2025</span>
                            <FaChevronRight className='cursor-pointer text-xl' />
                        </div>
                        <div className='my-10 flex items-center justify-between flex-wrap gap-20'>
                            <input className='w-auto md:min-w-[400px] border border-[#2cb5eb] py-2 px-3 rounded-lg' type="text" placeholder="Search Unit/Name/Renter Name" />
                            <div className='w-12 h-12 bg-[#2cb5eb] flex items-center justify-center rounded-full cursor-pointer '>
                                <FaFilter className='text-xl text-white' />
                            </div>
                        </div>

                        <div className='border p-5 rounded-lg border-gray-200'>
                            <img className='h-40 w-full object-cover rounded-lg mb-2' src="/category/category.png" alt="" />
                            <div className='flex items-center justify-between text-xl font-semibold'>
                                <span>
                                    <strong className='text-xl mr-2'>Unit:</strong>
                                    {unitData.unit}
                                </span>
                                <span>({unitData.type})</span>
                            </div>
                            <hr className='my-3' />
                            <div className=' text-lg flex items-center justify-between'>
                                <p><strong>Move In Date:</strong> {unitData.moveIn.date}</p>
                                <p className='bg-[#2cb5eb] px-3 py-1 rounded-lg text-white cursor-pointer hover:bg-[#2cb5ebb0]'>{unitData.moveIn.renter}</p>
                            </div>
                        </div>

                        <div className='border p-5 rounded-lg border-gray-200'>
                            <img className='h-40 w-full object-cover rounded-lg mb-2' src="/category/category.png" alt="" />
                            <div className='flex items-center justify-between text-xl font-semibold'>
                                <span>
                                    <strong className='text-xl mr-2'>Unit:</strong>
                                    {unitData.unit}
                                </span>
                                <span>({unitData.type})</span>
                            </div>
                            <hr className='my-3' />
                            <div className=' text-lg flex items-center justify-between'>
                                <p><strong>Move In Date:</strong> {unitData.moveIn.date}</p>
                                <p className='bg-[#2cb5eb] px-3 py-1 rounded-lg text-white cursor-pointer hover:bg-[#2cb5ebb0]'>{unitData.moveIn.renter}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ApartmentOwnerRenterTracker;
