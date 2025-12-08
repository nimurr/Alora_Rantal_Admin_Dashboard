import React from 'react';
import { FiEdit } from 'react-icons/fi';

const ApartmentOwnerManageBillingSystem = () => {
    return (
        <div>
            <h1 className='py-5 bg-[#bee8f9] text-center rounded-lg text-2xl font-semibold'>Manage Billing System</h1>
            <div className='border border-gray-200 p-5 my-5 rounded-lg'>
                <ul>
                    <li className='flex border-b border-gray-200 py-5 items-center justify-between'><span>Gas Bill</span> <span className='flex items-center gap-2'>$100.00 <FiEdit className='cursor-pointer' /></span></li>
                    <li className='flex border-b border-gray-200 py-5 items-center justify-between'><span>Gas Bill</span> <span className='flex items-center gap-2'>$100.00 <FiEdit className='cursor-pointer' /></span></li>
                    <li className='flex border-b border-gray-200 py-5 items-center justify-between'><span>Gas Bill</span> <span className='flex items-center gap-2'>$100.00 <FiEdit className='cursor-pointer' /></span></li>
                    <li className='flex border-b border-gray-200 py-5 items-center justify-between'><span>Gas Bill</span> <span className='flex items-center gap-2'>$100.00 <FiEdit className='cursor-pointer' /></span></li>
                    <li className='flex border-b border-gray-200 py-5 items-center justify-between'><span>Gas Bill</span> <span className='flex items-center gap-2'>$100.00 <FiEdit className='cursor-pointer' /></span></li>
                </ul>
                <div className='flex flex-col items-end mt-5'>
                    <button className='py-3 mb-3 px-10 rounded-lg bg-[#2cb5eb] text-white'>Add Another Fee</button>
                    <h3 className='font-semibold'>Additional Fee Total <span className='text-2xl font-semibold'>$100.</span><span className='text-sm'>90</span></h3>
                </div>
            </div>
            <div className='border border-gray-200 p-5 my-5 rounded-lg'>
                <h3 className='mb-5 font-semibold text-2xl'>Personalize Bill</h3>
                <ul>
                    <li className='flex border-b border-gray-200 py-5 items-center justify-between'><span>Gas Bill</span> <span className='flex items-center gap-2'>$100.00 <FiEdit className='cursor-pointer' /></span></li>
                    <li className='flex border-b border-gray-200 py-5 items-center justify-between'><span>Gas Bill</span> <span className='flex items-center gap-2'>$100.00 <FiEdit className='cursor-pointer' /></span></li>
                    <li className='flex border-b border-gray-200 py-5 items-center justify-between'><span>Gas Bill</span> <span className='flex items-center gap-2'>$100.00 <FiEdit className='cursor-pointer' /></span></li> 
                </ul>
                <div className='flex flex-col items-end mt-5'>
                    <button className='py-3 mb-3 px-10 rounded-lg bg-[#2cb5eb] text-white'>Add personalize Fee</button>
                    <h3 className='font-semibold'>Personalize Bill Total <span className='text-2xl font-semibold'>$100.</span><span className='text-sm'>90</span></h3>
                </div>
            </div>

        </div>
    );
}

export default ApartmentOwnerManageBillingSystem;
