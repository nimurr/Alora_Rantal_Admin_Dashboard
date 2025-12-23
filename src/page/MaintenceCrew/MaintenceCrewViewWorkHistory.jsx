import React, { useState } from "react";
import { FaAngleLeft, FaArrowLeft } from "react-icons/fa";
import { Modal, Input, Select, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Option } = Select;

export default function MaintenceCrewViewWorkHistory() {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [selectedUnit, setSelectedUnit] = useState(null);

    const units = [
        { id: 1, status: "Vacant", statusColor: "bg-orange-500" },
        { id: 2, status: "Occupied", statusColor: "bg-green-500" },
        { id: 3, status: "Reserved", statusColor: "bg-yellow-400 text-black" },
        { id: 4, status: "Requested", statusColor: "bg-sky-400" },
    ];

    return (
        <div className="py-6 min-h-screen">
            {/* Header */}
            <div className="flex items-center justify-between mb-5 flex-wrap gap-4">
                <Link to="/roles/apartment-owner" className="flex items-center gap-2">
                    <FaAngleLeft className="text-2xl" />
                    <span className="text-2xl font-semibold">View Work History</span>
                </Link>

                <div className="flex items-center border rounded-full px-4 py-2 bg-white shadow-sm">
                    <input placeholder="Room number or Renter name" className="outline-none w-auto" />
                    <span className=" text-sky-500">🔍</span>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {units.map((unit) => (
                    <Link 
                        to={`/roles/maintence-crew/view-work-history/details/${unit.id}`}
                        key={unit.id}
                        className="bg-white rounded-xl border shadow-sm overflow-hidden"
                    >
                        <img
                            src="/Apartment/image-1.jpg"
                            alt=""
                            className="h-44 w-full object-cover"
                        />

                        <div className="p-5">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        Driftwood Apartment
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        100 Smart Street, LA, USA
                                    </p>
                                </div>

                                <span
                                    className={`${unit.statusColor} text-white text-xs px-3 py-1 rounded-full`}
                                >
                                    {unit.status}
                                </span>
                            </div>

                            <p className="mt-3 font-semibold">Studio</p>

                            <div className="mt-3 space-y-2 text-sm">
                                <div className="flex justify-between border-b pb-2">
                                    <span className="text-gray-500">
                                        Room Number
                                    </span>
                                    <span className="font-medium">BG101</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Floor</span>
                                    <span className="font-medium">1st Floor</span>
                                </div>
                            </div>


                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
}

/* -------- Small Helper -------- */
const Detail = ({ label, value }) => (
    <div className="flex justify-between border p-2 rounded">
        <span className="font-semibold">{label}</span>
        <span>{value}</span>
    </div>
);
