import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import {
  HomeIcon,
  CalendarDaysIcon, // Renamed from CalendarIcon
  TableCellsIcon,
  DocumentTextIcon,
  UserIcon,
} from "@heroicons/react/24/outline"; // Using Heroicons for icons

function Sidebar() {
  return (
    <div>
      <div className="bg-white w-70 flex flex-col h-screen shadow-md sticky">
        <div className="pr-6">
          <h1 className="text-4xl text-blue-900 font-extrabold cursor-pointer pt-20 pb-12 pl-8">
            Blue <span className="text-3xl font-bold">Hospital</span>
          </h1>
        </div>
        <nav className="flex-1 px-2 space-y-2">
          <SidebarLink text="Dashboard" icon={HomeIcon} active />
          <SidebarLink text="Appointment Request" icon={CalendarDaysIcon} />
          <SidebarLink text="Tables" icon={TableCellsIcon} />
          <SidebarLink text="Articles" icon={DocumentTextIcon} />
          <SidebarLink text="Profile" icon={UserIcon} />
        </nav>
      </div>
    </div>
  );
}

function SidebarLink({ text, icon, active }) {
  const IconComponent = icon;
  return (
    <Link
      to="/text"  // Change this route to an actual path as needed
      className={`flex items-center space-x-3 p-3 rounded-md transition duration-150 ease-in-out ${
        active
          ? "bg-indigo-100 text-blue-800 font-semibold"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
      }`}
    >
      <IconComponent className="h-5 w-5" />
      <span>{text}</span>
    </Link>
  );
}

export default Sidebar;
