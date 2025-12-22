import { useEffect, useState } from "react";
import {
    ConfigProvider,
    Table,
    Form,
    Input,
    DatePicker,
    Modal,
} from "antd";
import moment from "moment";
import { IoIosSearch } from "react-icons/io";
import { FaAngleLeft, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";

const { Item } = Form;

const ApartmentOwner = () => {
    /* ---------------- Demo Data ---------------- */
    const demoUserData = [
        { id: 1, fullName: "John Doe", email: "john.doe@example.com", phoneNumber: "123-456-7890", createdAt: "2023-06-10", status: "active", gender: "male" },
        { id: 2, fullName: "Jane Smith", email: "jane.smith@example.com", phoneNumber: "987-654-3210", createdAt: "2023-06-05", status: "inactive", gender: "female" },
        { id: 3, fullName: "Bob Johnson", email: "bob.johnson@example.com", phoneNumber: "555-123-4567", createdAt: "2023-06-15", status: "active", gender: "male" },
    ];

    /* ---------------- States ---------------- */
    const [searchText, setSearchText] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataSource, setDataSource] = useState(demoUserData);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [apartmentVisible, setApartmentVisible] = useState(false);

    /* ---------------- Filters ---------------- */
    useEffect(() => {
        let filtered = demoUserData;

        if (searchText) {
            filtered = filtered.filter(
                (u) =>
                    u.fullName.toLowerCase().includes(searchText.toLowerCase()) ||
                    u.email.toLowerCase().includes(searchText.toLowerCase()) ||
                    u.phoneNumber.includes(searchText)
            );
        }

        if (selectedDate) {
            const date = selectedDate.format("YYYY-MM-DD");
            filtered = filtered.filter(
                (u) => moment(u.createdAt).format("YYYY-MM-DD") === date
            );
        }

        setDataSource(filtered);
    }, [searchText, selectedDate]);

    /* ---------------- Table Columns ---------------- */
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
                        setSelectedUser(record);
                        setIsModalOpen(true);
                        setApartmentVisible(false);
                    }}
                />
            ),
        },
    ];

    return (
        <section>
            {/* ---------- Header ---------- */}
            <div className="md:flex justify-between items-center py-6 mb-4">
                <Link to="/roles" className="text-2xl flex items-center gap-2">
                    <FaAngleLeft /> Apartment Creator List
                </Link>

                <Form layout="inline">
                    <Item>
                        <DatePicker
                            onChange={setSelectedDate}
                            placeholder="Select Date"
                            className="border border-[#39ceec]"
                        />
                    </Item>
                    <Item>
                        <Input
                            placeholder="Search User"
                            onChange={(e) => setSearchText(e.target.value)}
                            className="border border-[#39ceec]"
                        />
                    </Item>
                    <Item>
                        <button className="size-8 rounded-full bg-[#39ceec] flex items-center justify-center">
                            <IoIosSearch />
                        </button>
                    </Item>
                </Form>
            </div>

            {/* ---------- Table ---------- */}
            <ConfigProvider
                theme={{
                    components: {
                        Table: {
                            headerBg: "#72cdf2",
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

            {/* ---------- Modal ---------- */}
            <Modal
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
                width={850}
                title="User Details"
            >
                {selectedUser && (
                    <>
                        {/* User Info */}
                        <div className="space-y-3">
                            <div className="flex justify-between border p-2 rounded">
                                <span className="font-semibold">Name</span>
                                <span>{selectedUser.fullName}</span>
                            </div>
                            <div className="flex justify-between border p-2 rounded">
                                <span className="font-semibold">Email</span>
                                <span>{selectedUser.email}</span>
                            </div>
                            <div className="flex justify-between border p-2 rounded">
                                <span className="font-semibold">Status</span>
                                <span>{selectedUser.status}</span>
                            </div>
                            <div className="flex justify-between border p-2 rounded">
                                <span className="font-semibold">Phone</span>
                                <span>{selectedUser.phoneNumber}</span>
                            </div>
                            <div className="flex justify-between border p-2 rounded">
                                <span className="font-semibold">User Type</span>
                                <span>{selectedUser.gender}</span>
                            </div>
                            <div className="flex justify-between border p-2 rounded">
                                <span className="font-semibold">Joining Date</span>
                                <span>{moment(selectedUser.createdAt).format("DD MMM YYYY")}</span>
                            </div>
                        </div>
                        <Link to={`/roles/apartment-owner/apartment-details/${selectedUser.id}`} className="w-full block text-center bg-[#39ceec] text-white py-2 rounded mt-3">View Apartment</Link>

                    </>
                )}
            </Modal>
        </section>
    );
};

export default ApartmentOwner;
