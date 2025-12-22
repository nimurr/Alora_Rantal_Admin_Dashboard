import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import "antd/dist/reset.css";

export default function UserDetails() {
  const [openBillModal, setOpenBillModal] = useState(false);

  return (
    <div className="py-5 px-4 bg-[#f8fbff] min-h-screen">
      {/* Header */}
      <Link
        to="/roles/renter-user"
        className="text-2xl flex items-center gap-2 mb-6"
      >
        <FaAngleLeft /> Account details
      </Link>

      {/* ================= ROW 1 ================= */}
      <div className="grid grid-cols-1 items-start lg:grid-cols-3 gap-6 mb-8">
        {/* Application Fee */}
        <div className="border rounded-xl bg-white p-4 shadow-sm">
          <h3 className="bg-sky-500 text-white text-center py-2 rounded-md mb-4">
            Application Fee
          </h3>
          <div className="space-y-3 text-sm">
            <Row label="Submission fee" value="$120.00" />
            <Row label="Transaction ID" value="#12345678" />
            <Row label="Date" value="18 Feb 2025" />
          </div>
        </div>

        {/* Apartment Description */}
        <div className="border rounded-xl bg-white p-4 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Apartment Description</h3>
            <button className="text-sm bg-sky-500 text-white px-3 py-1 rounded-md">
              View Apartment
            </button>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <img
              src="/Apartment/image-1.jpg"
              alt=""
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold">Suncity Apartment</h4>
              <p className="text-xs text-gray-500">
                100 Smart Street, LA, USA
              </p>
            </div>
          </div>

          <div className="flex justify-end mb-4">
            <button
              onClick={() => setOpenBillModal(true)}
              className="underline font-semibold text-sky-500"
            >
              Manage bill
            </button>
          </div>

          <p className="font-semibold mb-3">
            Price : <span className="text-sky-500">$1200</span>{" "}
            <span className="text-xs text-gray-500">/ Per Month</span>
          </p>

          <div className="space-y-2 text-sm">
            <InputBox label="Unit Type" value="Studio" />
            <InputBox label="Location" value="San Francisco, CA" />
            <InputBox label="Room Number" value="BG101" />
            <InputBox label="Floor" value="1st Floor" />
          </div>
        </div>

        {/* User Details */}
        <div className="border rounded-xl bg-white p-4 shadow-sm">
          <h3 className="font-semibold mb-4">User Details</h3>
          <div className="flex items-center gap-3 mb-5">
            <img src="/logo/userimage.png" alt="" className="w-14 h-14 rounded-full" />
            <h4 className="font-semibold">Bashar</h4>
          </div>

          <div className="space-y-2 text-sm">
            <InputBox label="Name" value="Bashar 858" />
            <InputBox label="Email" value="demo@gmail.com" />
            <InputBox label="Phone number" value="5555555555" />
            <InputBox label="Location" value="San Francisco, CA" />
          </div>
        </div>
      </div>

      {/* ================= ROW 2 ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Payment History */}
        <div className="border rounded-xl bg-white p-4 shadow-sm">
          <h3 className="font-semibold mb-4">Payment History</h3>
          <div className="border rounded-md">
            <div className="grid grid-cols-3 text-sm font-semibold border-b p-2">
              <span>Transaction ID</span>
              <span>Amount</span>
              <span>Date</span>
            </div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="grid grid-cols-3 text-sm p-2 border-b">
                <span>1234 5678</span>
                <span>$1959.90</span>
                <span>2025-03-12</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bill Statement */}
        <div className="border rounded-xl bg-white p-4 shadow-sm">
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold">Bill Statement</h3>
            <input type="date" className="border px-3 py-1 rounded-md text-sm" />
          </div>
        </div>
      </div>

      {/* ================= ANT DESIGN MODAL ================= */}
      <Modal
        open={openBillModal}
        onCancel={() => setOpenBillModal(false)}
        footer={null}
        width={700}
        centered
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          Manage Billing System
        </h2>

        <div className="border p-4 rounded-lg mb-6">
          <ul>
            {[1, 2, 3, 4].map((i) => (
              <li
                key={i}
                className="flex justify-between items-center py-3 border-b"
              >
                <span>Gas Bill</span>
                <span className="flex items-center gap-2">
                  $100.00 <FiEdit className="cursor-pointer" />
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-end mt-4">
            <button className="bg-sky-500 text-white px-6 py-2 rounded-lg mb-2">
              Add Another Fee
            </button>
            <h3 className="font-semibold">
              Total: <span className="text-xl">$100.90</span>
            </h3>
          </div>
        </div>

        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">Personalize Bill</h3>
          <ul>
            {[1, 2].map((i) => (
              <li
                key={i}
                className="flex justify-between items-center py-3 border-b"
              >
                <span>Custom Fee</span>
                <span className="flex items-center gap-2">
                  $50.00 <FiEdit className="cursor-pointer" />
                </span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-end mt-4">
            <button className="bg-sky-500 text-white px-6 py-2 rounded-lg mb-2">
              Add Another Fee
            </button>
            <h3 className="font-semibold">
              Total: <span className="text-xl">$100.90</span>
            </h3>
          </div>
        </div>
      </Modal>
    </div>
  );
}

/* ---------- Reusable ---------- */
const Row = ({ label, value }) => (
  <div className="flex justify-between border rounded-md p-2 text-sm">
    <span>{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

const InputBox = ({ label, value }) => (
  <div className="border rounded-md px-3 py-2 text-sm flex justify-between">
    <span className="text-gray-500">{label}</span>
    <span>{value}</span>
  </div>
);
