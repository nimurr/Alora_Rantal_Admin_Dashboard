/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { IoBagHandleSharp, IoDiamondOutline, IoSettingsSharp } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "/public/logo/dashboard_log.png";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/features/auth/authSlice";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaBriefcase, FaCopy, FaUserAlt, FaUsers, FaUsersCog } from "react-icons/fa";
import { MdDashboard, MdOutlineContactPage, MdOutlineHomeWork } from "react-icons/md";
// import { GiLightBulb } from "react-icons/gi";
import { HiLightBulb } from "react-icons/hi";
import { FaRegMoneyBill1, FaSackDollar } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { GrDocumentImage } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";
import logoimage from '/public/logo/Logo-Orange.png';
import { AiFillCrown } from "react-icons/ai";
import { PiBuildingApartmentLight } from "react-icons/pi";
import { BiSolidSchool } from "react-icons/bi";
import { HiClipboardDocumentCheck } from "react-icons/hi2";

const sidebarItems = [
  {
    path: "/",
    name: "Dashboard",
    icon: <MdDashboard className="size-6" />,
  },
  {
    path: "/roles",
    name: "Roles",
    icon: <FaUserAlt className="size-5" />,
  },
  {
    path: "/admins",
    name: "Sub Admin list",
    icon: <FaUsersCog className="size-6" />,
  },

  {
    path: "/manage-apartments",
    name: "Manage Apartments",
    icon: <PiBuildingApartmentLight className="size-6" />,
  },

  // {
  //   path: "/",
  //   name: "User list",
  //   icon: <FaUserAlt className="size-5" />,
  // },





  // {
  //   path: "/maintenance-crew",
  //   name: "Create Crew",
  //   icon: <FaUsers className="size-6" />,
  // },
  // {
  //   path: "/apartment-creator",
  //   name: "Submission fee list",
  //   icon: <IoDiamondOutline className="size-6" />,
  // },


  // {
  //   path: "/agent",
  //   name: "Agent List",
  //   icon: <FaUsers className="size-6" />,
  // },

  // {
  //   path: "/monthly-bill-statement",
  //   name: "Monthly Bill Statement",
  //   icon: <HiClipboardDocumentCheck className="size-6" />,
  // },











  {
    path: "/subscription",
    name: "Subscription ",
    icon: <AiFillCrown className="size-6" />,
  },

  {
    path: "/settings",
    name: "Settings",
    icon: <IoSettingsSharp className="size-6" />,
  },
];

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/auth");
  };

  return (
    <div>
      {/* Desktop Sidebar */}
      <div className="hidden overflow-y-auto md:block w-full md:w-[200px] lg:w-[250px] xl:w-[280px] h-full  bg-[#ffffff] fixed shadow-2xl">
        <Link to={"/"} className="flex flex-col justify-center items-center pt-5 gap-2 bg-white mb-5 text-black">
          <img src={logoimage} alt="logo" className="w-[60px]  py-5 " />
        </Link>
        <ul className="flex flex-col gap-5 mt-10">
          {sidebarItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `w-[80%] mx-auto px-5 py-2 flex justify-start items-center gap-3 text-black ${isActive ? " !text-white rounded-md bg-[#2cb5eb] " : ""
                }`
              }
            >
              {item?.icon}
              <h>{item.name}</h>
            </NavLink>
          ))}
        </ul>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-1 font-bold px-10 py-4 text-black  ml-6"
        >
          <IoIosLogOut className="size-8  p-1 text-red-600 rounded-md" />
          <span className="text-red-600">Logout</span>
        </button>

      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 overflow-y-auto left-0 z-40 w-64 h-full bg-[#2cb5eb] shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div onClick={toggleSidebar} className="absolute top-0 right-0 p-4">
          <RxCross1 className="size-6 text-black" />
        </div>
        <div className="flex flex-col justify-center items-center pt-5 gap-2 ">
          <img src={logoimage} alt="logo" className="h-20 mb-5" />
        </div>
        <ul className="flex flex-col gap-3 mt-10">
          {sidebarItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={toggleSidebar} // Close sidebar on link click
              className={({ isActive }) =>
                `w-[70%] mx-auto px-2 py-2 flex items-center gap-3 text-white ${isActive ? "bg-[#2cb5eb] " : ""
                }`
              }
            >
              {item?.icon}
              <h>{item.name}</h>
            </NavLink>
          ))}
        </ul>

        <button
          onClick={() => {
            setShowModal(true);
            toggleSidebar();
          }}
          className="flex items-center gap-2 px-10 ml-5 mt-5"
        >
          <IoIosLogOut className="size-8   p-1 text-red-600 rounded-md" />
          <span className="text-red-600">Logout</span>
        </button>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h3 className="text-lg font-bold mb-4">Confirm Logout</h3>
            <p className="mb-6">Are you sure you want to log out?</p>
            <div className="flex justify-between">
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Yes
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;