import { useEffect, useState } from "react";
import { ConfigProvider, Table, Form, Input, DatePicker, Modal } from "antd";
import moment from "moment";
import { IoIosSearch, IoMdPersonAdd } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";

const { Item } = Form;

const AllAdmins = () => {
    /* -------------------- Demo Data -------------------- */
    const demoUserData = [
        {
            id: 1,
            fullName: "Bashar",
            name: "Basha 858",
            email: "demo@gmail.com",
            phoneNumber: "55555555555555",
            location: "San Francisco, CA",
            createdAt: "2025-02-16",
            apartmentCount: 1,
        },
    ];

    /* -------------------- States -------------------- */
    const [searchText, setSearchText] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataSource, setDataSource] = useState(demoUserData);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAdmin, setSelectedAdmin] = useState(null);

    /* -------------------- Filters -------------------- */
    useEffect(() => {
        let filtered = demoUserData;

        if (searchText) {
            filtered = filtered.filter(
                (user) =>
                    user.fullName.toLowerCase().includes(searchText.toLowerCase()) ||
                    user.email.toLowerCase().includes(searchText.toLowerCase()) ||
                    user.phoneNumber.includes(searchText)
            );
        }

        if (selectedDate) {
            const date = selectedDate.format("YYYY-MM-DD");
            filtered = filtered.filter(
                (user) =>
                    moment(user.createdAt).format("YYYY-MM-DD") === date
            );
        }

        setDataSource(filtered);
    }, [searchText, selectedDate]);

    /* -------------------- Table Columns -------------------- */
    const columns = [
        {
            title: "#SI",
            render: (_, __, index) => index + 1,
        },
        {
            title: "Full Name",
            dataIndex: "fullName",
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Phone Number",
            dataIndex: "phoneNumber",
        },
        {
            title: "Joined Date",
            dataIndex: "createdAt",
            render: (date) => moment(date).format("DD MMM YYYY"),
        },
        {
            title: "Action",
            render: (_, record) => (
                <IoEyeOutline
                    className="text-2xl cursor-pointer"
                    onClick={() => {
                        setSelectedAdmin(record);
                        setIsModalOpen(true);
                    }}
                />
            ),
        },
    ];

    return (
        <section>
            {/* -------------------- Header -------------------- */}
            <div className="md:flex justify-between items-center py-6 mb-4">
                <Link to="/" className="text-2xl flex items-center gap-2">
                    <FaAngleLeft /> Admins List
                </Link>

                <div className="flex items-center gap-4 flex-wrap">
                    <Form layout="inline" className="">
                        <Item>
                            <DatePicker
                                onChange={(date) => setSelectedDate(date)}
                                placeholder="Select Date"
                            />
                        </Item>
                        <Item>
                            <Input
                                placeholder="Search Admin"
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                        </Item>
                    </Form>
                </div>
            </div>

            {/* -------------------- Filters -------------------- */}


            {/* -------------------- Table -------------------- */}
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
                    dataSource={dataSource}
                    rowKey="id"
                    pagination={{
                        current: currentPage,
                        onChange: setCurrentPage,
                        position: ["bottomCenter"],
                    }}
                />
            </ConfigProvider>

            {/* -------------------- Details Modal -------------------- */}
            <Modal
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
                width={600}
                title="Details"
            >
                {selectedAdmin && (
                    <div className="space-y-4">
                        {/* Profile */}
                        <div className="flex items-center gap-4">
                            <img
                                src="https://i.pravatar.cc/100"
                                alt="profile"
                                className="w-20 h-20 rounded-full"
                            />
                            <h2 className="text-2xl font-semibold">
                                {selectedAdmin.fullName}
                            </h2>
                        </div>

                        {/* Details */}
                        <Detail label="Name" value={selectedAdmin.name} />
                        <Detail label="Email" value={selectedAdmin.email} />
                        <Detail label="Phone number" value={selectedAdmin.phoneNumber} />
                        <Detail label="Location" value={selectedAdmin.location} />
                        <Detail
                            label="Joining Date"
                            value={moment(selectedAdmin.createdAt).format("DD MMM YYYY")}
                        />

                        {/* Apartment Count */}
                        <Link to={`/admins/details/${selectedAdmin.id}`} className="flex justify-between items-center border p-3 rounded-md">
                            <span className="font-semibold">
                                Apartment Total Create (01)
                            </span>
                            <IoEyeOutline className="text-xl cursor-pointer" />
                        </Link>

                        {/* Actions */}
                        <div className="space-y-3 pt-4">
                            <button className="w-full bg-[#2cb5eb] text-white py-2 rounded-lg">
                                Manage Permissions and Changes
                            </button>
                            <button className="w-full bg-red-500 text-white py-2 rounded-lg">
                                Delete Role
                            </button>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};

/* -------------------- Reusable Detail -------------------- */
const Detail = ({ label, value }) => (
    <div className="flex justify-between border p-3 rounded-md">
        <span className="font-semibold">{label}</span>
        <span>{value}</span>
    </div>
);

export default AllAdmins;
