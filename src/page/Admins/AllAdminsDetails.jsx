import { useState } from "react";
import { Table, Switch } from "antd";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllAdminsDetails = () => {
  /* -------------------- State -------------------- */
  const [allowEdit, setAllowEdit] = useState(true);

  /* -------------------- Demo Change History -------------------- */
  const changeHistory = [
    {
      id: 1,
      date: "16 Feb 2025",
      title: "Apartment Permission Update",
      from: "View Only",
      to: "Edit Access",
    },
    {
      id: 2,
      date: "10 Feb 2025",
      title: "Role Updated",
      from: "Agent",
      to: "Admin",
    },
  ];

  /* -------------------- Table Columns -------------------- */
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Title of Change",
      dataIndex: "title",
    },
    {
      title: "Change From",
      dataIndex: "from",
    },
    {
      title: "Changed To",
      dataIndex: "to",
    },
  ];

  return (
    <section className="p-4">
      {/* -------------------- Header -------------------- */}
      <div className="flex items-start flex-wrap my-5 justify-between">
        <Link to="/admins" className="flex items-center gap-3 mb-6">
          <>
            <FaAngleLeft className="text-2xl" />
          </>
          <span className="text-2xl font-semibold">View Changes</span>
        </Link>

        {/* -------------------- Manage Permission -------------------- */}
        <div className="border rounded-lg p-5 mb-8 space-y-4">
          <h3 className="text-xl font-semibold">Manage Permission</h3>

          <div className="flex min-w-72 justify-between items-center border p-4 rounded-lg">
            <span className="font-medium text-lg">Allow Edits</span>
            <Switch checked={allowEdit} onChange={setAllowEdit} />
          </div>
        </div>
      </div>

      {/* -------------------- Change History Table -------------------- */}
      <div className="border rounded-lg p-5">
        <h3 className="text-xl font-semibold mb-4">Change History</h3>

        <Table
          columns={columns}
          dataSource={changeHistory}
          rowKey="id"
          pagination={{ position: ["bottomCenter"] }}
        />
      </div>
    </section >
  );
};

export default AllAdminsDetails;
