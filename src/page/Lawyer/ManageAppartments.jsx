import { useState } from "react";
import { Table } from "antd";
import { IoSearch } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

export default function ManageAppartments() {
  const [searchText, setSearchText] = useState("");

  const apartmentData = [
    {
      id: 1,
      name: "Suncity",
      address: "London",
      owner: "Lew",
      staff: 4,
      date: "2025-03-12",
      time: "09:30 AM",
    },
    {
      id: 2,
      name: "Suncity",
      address: "London",
      owner: "Lew",
      staff: 4,
      date: "2025-03-12",
      time: "09:30 AM",
    },
  ];

  const filteredData = apartmentData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.address.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    {
      title: "Apartment Name",
      dataIndex: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Owner Name",
      dataIndex: "owner",
    },
    {
      title: "Active Staff",
      dataIndex: "staff",
    },
    {
      title: "Date of Creation",
      render: (_, record) => (
        <span>
          {record.date} <br />
          <span className="text-gray-400 text-sm">{record.time}</span>
        </span>
      ),
    },
    {
      title: "View",
      render: () => (
        <Link to="/manage-apartments/view/1">
          <IoEyeOutline className="text-2xl text-gray-600" />
        </Link>
      ),
    },
  ];

  return (
    <section className="p-5">
      {/* ---------------- Header ---------------- */}
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">

        <Link to="/" className="flex my-5 items-center gap-2">
          <FaAngleLeft className="text-2xl" />
          <span className="text-2xl font-semibold">Manage Apartments</span>
        </Link>

        {/* ---------------- Search ---------------- */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Link to="/manage-apartments/create" className="bg-[#2cb5eb] text-white px-6 py-3 rounded-lg">
            Create Apartment
          </Link>
          <div className="relative  max-w-sm">
            <input
              type="text"
              placeholder="Search Apartment"
              className="w-full py-3 pl-12 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2cb5eb]"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          </div>
        </div>
      </div>


      {/* ---------------- Table ---------------- */}
      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="id"
        pagination={{ position: ["bottomCenter"] }}
      />
    </section>
  );
}
