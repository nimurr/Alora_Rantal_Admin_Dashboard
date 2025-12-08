import React, { useState } from 'react';

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
            <div className="flex border-b-2 justify-center border-gray-300">
                <button
                    className={`w-full text-lg ${activeTab === 'moveIn' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                    onClick={() => handleTabClick('moveIn')}
                >
                    Move In
                </button>
                <button
                    className={`w-full text-lg ${activeTab === 'moveOut' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                    onClick={() => handleTabClick('moveOut')}
                >
                    Move Out
                </button>
                <button
                    className={`w-full text-lg ${activeTab === 'reserved' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                    onClick={() => handleTabClick('reserved')}
                >
                    Reserved
                </button>
            </div>

            {/* Tab Content */}
            <div className="mt-4">
                {activeTab === 'moveIn' && (
                    <div>
                        <h3 className="text-xl font-bold">Move In Details</h3>
                        <p><strong>Unit:</strong> {unitData.unit} ({unitData.type})</p>
                        <p><strong>Move In Date:</strong> {unitData.moveIn.date}</p>
                        <p><strong>Renter Name:</strong> {unitData.moveIn.renter}</p>
                    </div>
                )}
                {activeTab === 'moveOut' && (
                    <div>
                        <h3 className="text-xl font-bold">Move Out Details</h3>
                        <p><strong>Unit:</strong> {unitData.unit} ({unitData.type})</p>
                        <p><strong>Move Out Date:</strong> {unitData.moveOut.date}</p>
                        <p><strong>Renter Name:</strong> {unitData.moveOut.renter}</p>
                    </div>
                )}
                {activeTab === 'reserved' && (
                    <div>
                        <h3 className="text-xl font-bold">Reserved Details</h3>
                        <p><strong>Unit:</strong> {unitData.unit} ({unitData.type})</p>
                        <p><strong>Reserved Date:</strong> {unitData.reserved.date}</p>
                        <p><strong>Renter Name:</strong> {unitData.reserved.renter}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ApartmentOwnerRenterTracker;
