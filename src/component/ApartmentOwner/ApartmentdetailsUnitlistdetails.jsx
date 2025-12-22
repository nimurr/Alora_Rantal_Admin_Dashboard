import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Modal, Input, Select, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Option } = Select;

export default function ApartmentdetailsUnitlistdetails() {
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
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <Link to="/roles/apartment-owner" className="flex items-center gap-3">
                    <FaArrowLeft className="cursor-pointer" />
                    <h2 className="text-2xl font-semibold">Unit list details</h2>
                </Link>

                <div className="flex items-center border rounded-full px-4 py-2 bg-white shadow-sm">
                    <input placeholder="Search" className="outline-none" />
                    <span className="ml-2 text-sky-500">🔍</span>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {units.map((unit) => (
                    <div
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

                            {/* Actions */}
                            <div className="flex justify-end gap-3 mt-5">
                                <button
                                    onClick={() => {
                                        setSelectedUnit(unit);
                                        setEditOpen(true);
                                    }}
                                    className="px-6 py-2 rounded-full bg-sky-500 text-white"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => {
                                        setSelectedUnit(unit);
                                        setPreviewOpen(true);
                                    }}
                                    className="px-6 py-2 rounded-full border border-sky-500 text-sky-500"
                                >
                                    Preview
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ---------------- Preview Modal ---------------- */}
            <Modal
                open={previewOpen}
                onCancel={() => setPreviewOpen(false)}
                footer={null}
                title="Unit Details"
                width={600}
            >
                <div className="space-y-3">
                    <img
                        src="/Apartment/image-1.jpg"
                        alt=""
                        className="h-44 w-full object-cover"
                    />
                    <Detail label="Unit Name" value="Driftwood Apartment" />
                    <Detail label="Unit Type" value="Studio" />
                    <Detail label="Square Fit" value="1600 sq ft" />
                    <Detail label="Price" value="$1590" />
                    <Detail label="Bedrooms" value="3" />
                    <Detail label="Bathrooms" value="3" />
                </div>
            </Modal>

            {/* ---------------- Edit Modal ---------------- */}
            <Modal
                open={editOpen}
                onCancel={() => setEditOpen(false)}
                title="Edit Unit"
                width={600}
                footer={null}
            >
                <div className="space-y-4">
                    <Input className="w-full py-2" placeholder="Unit Name" />
                    <Select className="w-full h-10" placeholder="Select Unit">
                        <Option value="studio">Studio</Option>
                        <Option value="bedroom">Bedroom</Option>
                        <Option value="2bed">2 Bed Room</Option>
                        <Option value="3bed">3 Bed Room</Option>
                        <Option value="penthouse">Pent House</Option>
                    </Select>

                    <Input className="w-full py-2" placeholder="Enter Total Number of Unit" />
                    <Input className="w-full py-2" placeholder="Unit Square Fit" />
                    <Input className="w-full py-2" placeholder="Add Unit Price" />
                    <Input className="w-full py-2" placeholder="Bed Rooms" />
                    <Input className="w-full py-2" placeholder="Bathrooms" />
                    <Input className="w-full py-2" placeholder="Add Amenities" />
                </div>

                {/* Upload Section */}
                <div className="mt-5 space-y-4">
                    <Upload className="w-full py-2 mt-3" multiple>
                        <Button icon={<UploadOutlined />}>
                            Upload Unit Images
                        </Button>
                    </Upload>

                    <p className="text-xs text-gray-500">
                        Please upload jpeg or png files under 25 MB.
                    </p>
                </div>

                <div className="flex justify-end mt-6">
                    <button className="bg-sky-500 w-full text-white px-8 py-2 rounded-lg">
                        Update
                    </button>
                </div>
            </Modal>
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
