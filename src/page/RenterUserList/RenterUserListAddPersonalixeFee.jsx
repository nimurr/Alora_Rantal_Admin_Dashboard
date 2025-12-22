import React, { useState } from "react";
import { FaAngleLeft, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function RenterUserListAddPersonalizeFee() {
    const [feeName, setFeeName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [fees, setFees] = useState([]);

    const handleAddFee = () => {
        if (feeName && price) {
            setFees([...fees, { feeName, price: Number(price), quantity }]);
            setFeeName("");
            setPrice("");
            setQuantity(1);
        }
    };

    const handleDelete = (index) => {
        const updatedFees = fees.filter((_, i) => i !== index);
        setFees(updatedFees);
    };

    return (
        <div className="p-6">
            <div>
                <Link
                    to="/roles/renter-user"
                    className="text-2xl flex items-center gap-2 mb-6"
                >
                    <FaAngleLeft /> Add Personalixe Fee
                </Link>

            </div>
            <div className="max-w-md mx-auto mt-10 p-3 bg-white border rounded-lg shadow-md">
                {/* Header */}
                <h2 className="text-xl font-semibold mb-6 text-center">Personalize Fee</h2>

                {/* Fee Form */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Fee Name</label>
                        <input
                            type="text"
                            className="w-full border rounded-md px-3 py-2"
                            value={feeName}
                            onChange={(e) => setFeeName(e.target.value)}
                            placeholder="Enter fee name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Price</label>
                        <input
                            type="number"
                            className="w-full border rounded-md px-3 py-2"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Enter price"
                        />
                    </div>

                    <div className="flex items-center gap-3 justify-end">
                        {/* <span className="text-sm font-medium">Quantity</span> */}
                        <button
                            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                            className="w-10 h-10 text-2xl bg-sky-500 text-white rounded-full flex items-center justify-center"
                        >
                            -
                        </button>
                        <span>{quantity}</span>
                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="w-10 h-10 text-2xl bg-sky-500 text-white rounded-full flex items-center justify-center"
                        >
                            +
                        </button>
                    </div>

                    <button
                        onClick={handleAddFee}
                        className="w-full bg-sky-500 text-white py-2 rounded-lg"
                    >
                        Save & Exit
                    </button>
                </div>

                {/* Fee List */}
                {fees.length > 0 && (
                    <div className="mt-6 border rounded-md p-4">
                        {fees.map((fee, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center py-2 border-b last:border-none"
                            >
                                <span>{fee.feeName}</span>
                                <span>
                                    {fee.price} x {fee.quantity}
                                </span>
                                <span>${fee.price * fee.quantity}</span>
                                <FaTimes
                                    className="text-red-500 cursor-pointer ml-3"
                                    onClick={() => handleDelete(index)}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
