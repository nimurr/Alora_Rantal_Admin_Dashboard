import { useEffect, useState } from "react";
import { ConfigProvider, Table, Form, Input, DatePicker, Modal } from "antd";
import moment from "moment";
import { IoIosSearch } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";

const { Item } = Form;

const Users = () => {
  /* ---------------- Demo Data ---------------- */
  const demoUserData = [
    {
      id: 1,
      renterName: "John Doe",
      email: "john.doe@example.com",
      phoneNumber: "123-456-7890",
      apartmentAssigned: "Driftwood Apartment",
      joiningDate: "2023-06-10",
    },
    {
      id: 2,
      renterName: "Jane Smith",
      email: "jane.smith@example.com",
      phoneNumber: "987-654-3210",
      apartmentAssigned: "Sunset Residency",
      joiningDate: "2023-06-05",
    },
    {
      id: 3,
      renterName: "Bob Johnson",
      email: "bob.johnson@example.com",
      phoneNumber: "555-123-4567",
      apartmentAssigned: "Ocean View",
      joiningDate: "2023-06-15",
    },
  ];

  /* ---------------- States ---------------- */
  const [searchText, setSearchText] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataSource, setDataSource] = useState(demoUserData);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  /* ---------------- Filters ---------------- */
  useEffect(() => {
    let filtered = demoUserData;

    if (searchText) {
      filtered = filtered.filter(
        (u) =>
          u.renterName.toLowerCase().includes(searchText.toLowerCase()) ||
          u.email.toLowerCase().includes(searchText.toLowerCase()) ||
          u.phoneNumber.includes(searchText)
      );
    }

    if (selectedDate) {
      const date = selectedDate.format("YYYY-MM-DD");
      filtered = filtered.filter(
        (u) => moment(u.joiningDate).format("YYYY-MM-DD") === date
      );
    }

    setDataSource(filtered);
  }, [searchText, selectedDate]);

  /* ---------------- Table Columns ---------------- */
  const columns = [
    {
      title: "No",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Renter Name",
      dataIndex: "renterName",
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
      title: "Apartment Assigned",
      dataIndex: "apartmentAssigned",
    },
    {
      title: "Joining Date",
      dataIndex: "joiningDate",
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
          }}
        />
      ),
    },
  ];

  return (
    <section>
      {/* ---------- Header ---------- */}
      <div className="md:flex justify-between items-center py-6 mb-4">
        <Link to="/" className="text-2xl flex items-center gap-2">
          <FaAngleLeft /> Renter List
        </Link>

        <Form layout="inline" className="flex gap-1 mt-4 md:mt-0">
          <Item>
            <DatePicker
              onChange={setSelectedDate}
              placeholder="Select Date"
              className="border border-[#2cb5eb]"
            />
          </Item>
          <Item>
            <Input
              placeholder="Search Renter"
              onChange={(e) => setSearchText(e.target.value)}
              className="border border-[#2cb5eb]"
            />
          </Item>
          <Item>
            <button className="size-8 rounded-full bg-[#2cb5eb] text-white flex items-center justify-center">
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

      {/* ---------- Details Modal ---------- */}
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        title="Renter Details"
        width={600}
      >
        {selectedUser && (
          <div className="space-y-3">
            <Detail label="Renter Name" value={selectedUser.renterName} />
            <Detail label="Email" value={selectedUser.email} />
            <Detail label="Phone Number" value={selectedUser.phoneNumber} />
            <Detail
              label="Apartment Assigned"
              value={selectedUser.apartmentAssigned}
            />
            <Detail
              label="Joining Date"
              value={moment(selectedUser.joiningDate).format("DD MMM YYYY")}
            />
            <button>
              <Detail label="Account details" value={selectedUser.phoneNumber} />
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
};

/* ---------- Helper Row ---------- */
const Detail = ({ label, value }) => (
  <div className="flex justify-between border-b py-2">
    <span className="font-semibold">{label}</span>
    <span>{value}</span>
  </div>
);

export default Users;
