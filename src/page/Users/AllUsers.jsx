import React, { useState } from "react";
import { Table, ConfigProvider, Input, DatePicker, Form, Modal } from "antd";
import moment from "moment";
import { IoIosSearch } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const AllUsers = () => {
    /* ---------------- Demo Data ---------------- */
    const demoUsers = [
        {
            id: 1,
            name: "Lew",
            email: "Support.info@gmail.com",
            phone: "+8801780766782",
            role: "Renter user",
            joiningDate: "2025-03-12T09:30:00",
            location: "San Francisco, CA",
            image: "https://i.pravatar.cc/150?img=1",
        },
        {
            id: 2,
            name: "Imran",
            email: "Support.info@gmail.com",
            phone: "+8801780766782",
            role: "Apartment Owner",
            joiningDate: "2025-03-12T09:30:00",
            location: "London, UK",
            image: "https://i.pravatar.cc/150?img=2",
        },
        {
            id: 3,
            name: "Bashar Islam",
            email: "Support.info@gmail.com",
            phone: "+8801780766782",
            role: "Agent",
            joiningDate: "2025-03-12T09:30:00",
            location: "New York, USA",
            image: "https://i.pravatar.cc/150?img=3",
        },
        {
            id: 4,
            name: "Rubin",
            email: "Support.info@gmail.com",
            phone: "+8801780766782",
            role: "Maintenance crew",
            joiningDate: "2025-03-12T09:30:00",
            location: "Berlin, Germany",
            image: "https://i.pravatar.cc/150?img=4",
        },
        {
            id: 5,
            name: "Tom",
            email: "Support.info@gmail.com",
            phone: "+8801780766782",
            role: "Sub admin",
            joiningDate: "2025-03-12T09:30:00",
            location: "Paris, France",
            image: "https://i.pravatar.cc/150?img=5",
        },
    ];

    /* ---------------- State ---------------- */
    const [searchText, setSearchText] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    /* ---------------- Filters ---------------- */
    const filteredData = demoUsers.filter((user) => {
        const matchSearch =
            user.name.toLowerCase().includes(searchText.toLowerCase()) ||
            user.email.toLowerCase().includes(searchText.toLowerCase());

        const matchDate = selectedDate
            ? moment(user.joiningDate).format("YYYY-MM-DD") ===
            selectedDate.format("YYYY-MM-DD")
            : true;

        return matchSearch && matchDate;
    });

    /* ---------------- Table Columns ---------------- */
    const columns = [
        {
            title: "No",
            render: (_, __, index) => index + 1,
        },
        {
            title: "User Name",
            dataIndex: "name",
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
            title: "Role Type",
            dataIndex: "role",
            render: (role) => (
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm">
                    {role}
                </span>
            ),
        },
        {
            title: "Joining Date",
            dataIndex: "joiningDate",
            render: (date) => moment(date).format("DD MMM YYYY, hh:mm A"),
        },
        {
            title: "Action",
            render: (_, record) => (
                <IoEyeOutline
                    className="text-xl cursor-pointer text-[#2cb5eb]"
                    onClick={() => {
                        setSelectedUser(record);
                        setIsModalOpen(true);
                    }}
                />
            ),
        },
    ];

    return (
        <section className="py-5">
            {/* ---------------- Header ---------------- */}
            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
                <h1 className="text-2xl font-semibold">Recent User List</h1>

                <Form className="flex gap-2 items-center flex-wrap">
                    <Link to="/user-list/create-user" className="bg-[#2cb5eb] hover:!text-white text-white min-w-44 py-2 px-8 rounded-md">
                        Account create
                    </Link>
                    <div className="flex items-center gap-2">
                        <DatePicker
                            placeholder="Select Date"
                            onChange={(date) => setSelectedDate(date)}
                        />
                        <Input
                            placeholder="Search User"
                            prefix={<IoIosSearch />}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>
                </Form>
            </div>

            {/* ---------------- Table ---------------- */}
            <ConfigProvider
                theme={{
                    components: {
                        Table: {
                            headerBg: "#2cb5eb",
                            headerColor: "#fff",
                        },
                    },
                }}
            >
                <Table
                    columns={columns}
                    dataSource={filteredData}
                    rowKey="id"
                    pagination={{
                        position: ["bottomCenter"],
                        pageSize: 5,
                    }}
                />
            </ConfigProvider>

            {/* ---------------- User Details Modal ---------------- */}
            <Modal
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
                title="User Details"
                width={500}
            >
                {selectedUser && (
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <img
                                src={selectedUser.image}
                                alt="profile"
                                className="w-20 h-20 rounded-full border"
                            />
                            <h2 className="text-xl font-semibold">
                                {selectedUser.name}
                            </h2>
                        </div>

                        <Detail label="Email" value={selectedUser.email} />
                        <Detail label="Phone Number" value={selectedUser.phone} />
                        <Detail label="Role" value={selectedUser.role} />
                        <Detail label="Location" value={selectedUser.location} />
                        <Detail
                            label="Joining Date"
                            value={moment(selectedUser.joiningDate).format(
                                "DD MMM YYYY, hh:mm A"
                            )}
                        />
                    </div>
                )}
            </Modal>
        </section>
    );
};

/* ---------------- Reusable Detail Row ---------------- */
const Detail = ({ label, value }) => (
    <div className="flex justify-between border p-2 rounded-md">
        <span className="font-semibold">{label}</span>
        <span>{value}</span>
    </div>
);

export default AllUsers;
