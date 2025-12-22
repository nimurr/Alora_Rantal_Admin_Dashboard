import { useEffect, useState } from "react";
import { ConfigProvider, Table, Form, Input, DatePicker, Modal } from "antd";
import moment from "moment";
import { IoIosSearch } from "react-icons/io";
import { FaAngleLeft, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoEyeOutline, IoPencilOutline } from "react-icons/io5";

const { Item } = Form;

const MaintenanceCrew = () => {
  /* -------------------- Demo Data -------------------- */
  const demoCrewData = [
    {
      id: 1,
      crewName: "John Doe",
      email: "john@example.com",
      phoneNumber: "123-456-7890",
      apartmentAssigned: "A101",
      joiningDate: "2023-01-10",
    },
    {
      id: 2,
      crewName: "Jane Smith",
      email: "jane@example.com",
      phoneNumber: "987-654-3210",
      apartmentAssigned: "B202",
      joiningDate: "2023-03-15",
    },
  ];

  /* -------------------- States -------------------- */
  const [searchText, setSearchText] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataSource, setDataSource] = useState(demoCrewData);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCrew, setSelectedCrew] = useState(null);

  /* -------------------- Filters -------------------- */
  useEffect(() => {
    let filteredData = demoCrewData;

    if (searchText) {
      filteredData = filteredData.filter(
        (crew) =>
          crew.crewName.toLowerCase().includes(searchText.toLowerCase()) ||
          crew.email.toLowerCase().includes(searchText.toLowerCase()) ||
          crew.phoneNumber.includes(searchText)
      );
    }

    if (selectedDate) {
      const date = selectedDate.format("YYYY-MM-DD");
      filteredData = filteredData.filter(
        (crew) => moment(crew.joiningDate).format("YYYY-MM-DD") === date
      );
    }

    setDataSource(filteredData);
  }, [searchText, selectedDate]);

  /* -------------------- Table Columns -------------------- */
  const columns = [
    {
      title: "No",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Crew Name",
      dataIndex: "crewName",
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
        <div className="flex gap-3 text-xl">
          <IoEyeOutline
            className="cursor-pointer"
            onClick={() => {
              setSelectedCrew(record);
              setIsModalOpen(true);
            }}
          />
          <IoPencilOutline
            className="cursor-pointer"
            onClick={() => alert(`Editing ${record.crewName}`)}
          />
        </div>
      ),
    },
  ];

  return (
    <section>
      {/* -------------------- Header -------------------- */}
      <div className="md:flex justify-between items-center py-6 mb-4">
        <Link to="/" className="text-2xl flex items-center gap-2">
          <FaAngleLeft /> Maintenance Crew List
        </Link>

        <Form layout="inline">
          <Item>
            <DatePicker
              onChange={(date) => setSelectedDate(date)}
              placeholder="Select Joining Date"
              className="border border-[#39ceec]"
            />
          </Item>
          <Item>
            <Input
              placeholder="Search Crew"
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

      {/* -------------------- Table -------------------- */}
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

      {/* -------------------- Crew Details Modal -------------------- */}
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={600}
        title="Crew Details"
      >
        {selectedCrew && (
          <div className="space-y-3">
            <Detail label="Name" value={selectedCrew.crewName} />
            <Detail label="Email" value={selectedCrew.email} />
            <Detail label="Phone" value={selectedCrew.phoneNumber} />
            <Detail
              label="Apartment Assigned"
              value={selectedCrew.apartmentAssigned}
            />
            <Detail
              label="Joining Date"
              value={moment(selectedCrew.joiningDate).format("DD MMM YYYY")}
            />
          </div>
        )}
      </Modal>
    </section>
  );
};

/* -------------------- Reusable Detail Row -------------------- */
const Detail = ({ label, value }) => (
  <div className="flex justify-between border p-2 rounded-md">
    <span className="font-semibold">{label}</span>
    <span>{value}</span>
  </div>
);

export default MaintenanceCrew;
