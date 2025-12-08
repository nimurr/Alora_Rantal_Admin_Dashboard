import { Modal } from 'antd';
import React, { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ApartmentOwnerManageBillingSystem from '../../component/ApartmentOwner/ApartmentOwnerManageBillingSystem';

const Apartmentdetails = () => {
    // State for Modal Visibility
    const [isModalVisible, setIsModalVisible] = useState(false);

    // Function to handle showing the modal
    const handleShowModal = () => {
        setIsModalVisible(true);
    };

    // Function to handle modal cancellation
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <Link to={"/apartment-owner"} className="text-2xl flex items-center mt-10">
                <FaAngleLeft />  Apartment details
            </Link>

            <div className='max-w-[650px] my-5'>
                {/* Apartment Image */}
                <img className="w-full h-[300px] rounded-lg" src="/Apartment/image-1.jpg" alt="Apartment" />

                {/* Apartment Info */}
                <div className="flex items-center justify-between my-5">
                    <div>
                        <h2 className="text-2xl font-semibold">Driftwood Apartment</h2>
                        <p>100 Smart Street, LA, USA</p>
                    </div>
                </div>
                <div className="space-y-3 mt-5">
                    <span className="text-2xl font-semibold border-b-2 border-[#39ceec]">Apartment Images</span>
                    <div className="grid grid-cols-4 gap-3 mt-3">
                        <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Apartment" />
                        <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Apartment" />
                        <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Apartment" />
                        <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Apartment" />
                    </div>
                </div>

                {/* Apartment Description */}
                <div className="space-y-3 mt-5">
                    <span className="text-2xl font-semibold border-b-2 border-[#39ceec]">Apartment Description</span>
                    <p>
                        Welcome to Suncity Apartments, where comfort meets convenience. Located in a prime urban neighborhood, Suncity offers stylish 1, 2, and 3-bedroom units designed for modern living.
                        Each apartment features spacious layouts, large windows with natural light, fully equipped kitchens, premium fittings, and private balconies with stunning city views.
                    </p>
                </div>

                <div className="space-y-3 mt-5">
                    <span className="text-2xl font-semibold border-b-2 border-[#39ceec]">Parking Type</span>
                    <p>
                        Street Parking
                    </p>
                </div>



            </div>

            {/* Apartment Unit List Section */}
            <div className="space-y-3 my-5">
                <span className="text-2xl font-semibold border-b-2 border-[#39ceec]">Apartment  Facilities</span>
                <div className="grid grid-cols-8 gap-3 mt-3">
                    <div onClick={handleShowModal} className='border cursor-pointer border-[#39ceec] p-2 rounded-lg'>
                        <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Studio" />
                        <hr className='mt-3 mb-2' />
                        <span className='border-b-2 border-[#222222]'>Garden</span>
                    </div>
                    <div onClick={handleShowModal} className='border cursor-pointer border-[#39ceec] p-2 rounded-lg'>
                        <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Studio" />
                        <hr className='mt-3 mb-2' />
                        <span className='border-b-2 border-[#222222]'>Parking</span>
                    </div>
                    <div onClick={handleShowModal} className='border cursor-pointer border-[#39ceec] p-2 rounded-lg'>
                        <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Studio" />
                        <hr className='mt-3 mb-2' />
                        <span className='border-b-2 border-[#222222]'>Parking</span>
                    </div>
                    <div onClick={handleShowModal} className='border cursor-pointer border-[#39ceec] p-2 rounded-lg'>
                        <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Studio" />
                        <hr className='mt-3 mb-2' />
                        <span className='border-b-2 border-[#222222]'>Parking</span>
                    </div>
                </div>
            </div>

            <div className="space-y-3 my-5">
                <span className="text-2xl font-semibold border-b-2 border-[#39ceec]">Unit list </span>
                <div className="grid grid-cols-8 gap-3 mt-3">
                    <div onClick={handleShowModal} className='border cursor-pointer border-[#39ceec] p-2 rounded-lg'>
                        <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Studio" />
                        <hr className='mt-3 mb-2' />
                        <span className='border-b-2 border-[#222222]'>Studio (4)</span>
                    </div>
                    <div onClick={handleShowModal} className='border cursor-pointer border-[#39ceec] p-2 rounded-lg'>
                        <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Studio" />
                        <hr className='mt-3 mb-2' />
                        <span className='border-b-2 border-[#222222]'>Bed room (4)</span>
                    </div>
                    <div onClick={handleShowModal} className='border cursor-pointer border-[#39ceec] p-2 rounded-lg'>
                        <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Studio" />
                        <hr className='mt-3 mb-2' />
                        <span className='border-b-2 border-[#222222]'>2 Bed room (4)</span>
                    </div>
                    <div onClick={handleShowModal} className='border cursor-pointer border-[#39ceec] p-2 rounded-lg'>
                        <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Studio" />
                        <hr className='mt-3 mb-2' />
                        <span className='border-b-2 border-[#222222]'>Pent house (4)</span>
                    </div>
                </div>
            </div>

            {/* Modal for Apartment Details */}
            <Modal
                visible={isModalVisible}
                onCancel={handleCancel}
                width={600}
                footer={null}
            >
                <div className="max-w-[800px] mx-auto mt-10 ">
                    <img className='w-full h-[300px] rounded-lg mb-2' src="/Apartment/image-1.jpg" alt="" />
                    {/* Studio Title and Room Number */}
                    <div className="">
                        <div>
                            <h2 className="text-3xl font-semibold text-orange-500 mb-5">Studio</h2>
                            <p className="text-gray-600 flex items-center justify-between space-y-2 text-base">Room Number: <strong>BG101</strong></p>
                            <p className="text-gray-600 flex items-center justify-between space-y-2 text-base">Floor: <strong>1st Floor</strong></p>
                        </div>
                    </div>

                    {/* Apartment Facilities */}
                    <div className="my-5">
                        <span className="text-2xl font-semibold border-b-2 border-[#39ceec]">BG101 Facilities</span>
                        <div className="grid grid-cols-3 gap-3 mt-3">
                            {/* Facilities Icons */}
                            <div className="flex items-center gap-2 bg-gradient-to-tl from-[#39ceec] to-[#125461] text-white rounded-full p-2 justify-center">
                                <span className="text-blue-500">🛏️</span>
                                <span>3 Bedrooms</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gradient-to-tl from-[#39ceec] to-[#125461] text-white rounded-full p-2 justify-center">
                                <span className="text-blue-500">🛁</span>
                                <span>2 Bathrooms</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gradient-to-tl from-[#39ceec] to-[#125461] text-white rounded-full p-2 justify-center">
                                <span className="text-blue-500">📏</span>
                                <span>1600 Sq Ft</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gradient-to-tl from-[#39ceec] to-[#125461] text-white rounded-full p-2 justify-center">
                                <span className="text-blue-500">🍽️</span>
                                <span>1 Kitchen Room</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gradient-to-tl from-[#39ceec] to-[#125461] text-white rounded-full p-2 justify-center">
                                <span className="text-blue-500">🌐</span>
                                <span>Wi-Fi</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gradient-to-tl from-[#39ceec] to-[#125461] text-white rounded-full p-2 justify-center">
                                <span className="text-blue-500">🚗</span>
                                <span>Parking</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gradient-to-tl from-[#39ceec] to-[#125461] text-white rounded-full p-2 justify-center">
                                <span className="text-blue-500">🌳</span>
                                <span>Garden</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gradient-to-tl from-[#39ceec] to-[#125461] text-white rounded-full p-2 justify-center">
                                <span className="text-blue-500">🔲</span>
                                <span>Lift</span>
                            </div>
                        </div>
                    </div>

                    {/* Images Section */}
                    <div className='mt-5'>
                        <span className="text-2xl font-semibold border-b-2 border-[#39ceec]">BG101 Images</span>
                        <div className="grid grid-cols-4 gap-3 mt-3">
                            <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Apartment Image 1" />
                            <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Apartment Image 2" />
                            <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Apartment Image 3" />
                            <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Apartment Image 4" />
                        </div>
                    </div>
                </div>

            </Modal>

            <ApartmentOwnerManageBillingSystem />


        </div>
    );
}

export default Apartmentdetails;
