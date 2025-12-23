import { useState } from "react";
import { Table, Modal, Switch, Input } from "antd";
import { IoEyeOutline, IoPencilOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Agents = () => {
    /* -------------------- Demo Data -------------------- */
    const agentsData = [
        {
            id: 1,
            apartmentName: "Suncity Villa",
            date: "16 Feb 2025",
            userName: "Bashar",
            agentName: "Basha 858",
            email: "demo@gmail.com",
            phone: "55555555555555",
            apartmentAssigned: "Suncity villa",
            joiningDate: "16 Feb 2025",
            location: "San Francisco, CA",
        },
    ];

    /* -------------------- States -------------------- */
    const [search, setSearch] = useState("");
    const [viewModal, setViewModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [selectedAgent, setSelectedAgent] = useState(null);
    const [paymentAccess, setPaymentAccess] = useState(true);

    /* -------------------- Table Columns -------------------- */
    const columns = [
        {
            title: "No",
            render: (_, __, index) => index + 1,
        },
        {
            title: "Agent Name",
            dataIndex: "agentName",
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Phone Number",
            dataIndex: "phone",
        },
        {
            title: "Apartment Assigned",
            dataIndex: "apartmentAssigned",
        },
        {
            title: "Joining Date",
            dataIndex: "joiningDate",
        },
        {
            title: "Action",
            render: (_, record) => (
                <div className="flex gap-3 text-xl">
                    <IoEyeOutline
                        className="cursor-pointer"
                        onClick={() => {
                            setSelectedAgent(record);
                            setViewModal(true);
                        }}
                    />
                    <IoPencilOutline
                        className="cursor-pointer"
                        onClick={() => {
                            setSelectedAgent(record);
                            setEditModal(true);
                        }}
                    />
                </div>
            ),
        },
    ];

    return (
        <section className="p-4">
            {/* -------------------- Header & Search -------------------- */}
            <div className="flex justify-between items-center mb-6">

                <Link to="/roles" className="flex my-5 items-center gap-2">
                    <FaAngleLeft className="text-2xl" />
                    <span className="text-2xl font-semibold">Agent User List</span>
                </Link>

                <div className="relative w-[300px]">
                    <Input
                        placeholder="Search Agent"
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-10 py-2 rounded-lg"
                    />
                    <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                </div>
            </div>

            {/* -------------------- Table -------------------- */}
            <Table
                columns={columns}
                dataSource={agentsData.filter((a) =>
                    a.agentName.toLowerCase().includes(search.toLowerCase())
                )}
                rowKey="id"
                pagination={{ position: ["bottomCenter"] }}
            />

            {/* -------------------- View Modal -------------------- */}
            <Modal
                open={viewModal}
                onCancel={() => setViewModal(false)}
                footer={null}
                width={600}
                title="Agent Details"
            >
                {selectedAgent && (
                    <div className="space-y-4">
                        {/* Profile */}
                        <div className="flex gap-4 my-5">
                            <img
                                src="https://i.pravatar.cc/100"
                                alt="profile"
                                className="w-16 h-16 rounded-full"
                            />
                            <div className="flex flex-col ">
                                <h3 className="text-xl font-semibold inline-block leading-3">Bashar</h3>
                                <p className="text-gray-500 inline-block leading-3">Apartment assigned</p>
                                <p className="font-medium inline-block leading-3">Suncity villa</p>
                            </div>
                        </div>

                        {/* Details */}
                        <Detail label="Name" value={selectedAgent.agentName} />
                        <Detail label="Email" value={selectedAgent.email} />
                        <Detail label="Phone number" value={selectedAgent.phone} />
                        <Detail label="Location" value={selectedAgent.location} />
                        <Detail label="Joining Date" value={selectedAgent.joiningDate} />

                        {/* Actions */}
                        <div className="space-y-3 pt-4">
                            <button className="w-full border border-[#72cdf2] bg-[#72cef259] py-2 rounded-lg">
                                Manage Permission
                            </button>
                            <button className="w-full bg-red-500 text-white py-2 rounded-lg">
                                Delete Role
                            </button>
                        </div>
                    </div>
                )}
            </Modal>

            {/* -------------------- Edit Modal -------------------- */}
            <Modal
                open={editModal}
                onCancel={() => setEditModal(false)}
                footer={null}
                width={500}
                title="Manage Permission"
            >
                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-lg">Payment Access</span>
                        <Switch
                            checked={paymentAccess}
                            onChange={setPaymentAccess}
                        />
                    </div>

                    <button className="w-full bg-[#72cdf2] text-white py-2 rounded-lg">
                        Save Changes
                    </button>
                </div>
            </Modal>
        </section>
    );
};

/* -------------------- Reusable Detail -------------------- */
const Detail = ({ label, value }) => (
    <div className="flex justify-between border p-2 rounded-md">
        <span className="font-semibold">{label}</span>
        <span>{value}</span>
    </div>
);

export default Agents;
