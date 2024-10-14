import React from 'react';
// Admin Imports
import Dashboard from './components/adminlayout/AdminLayout';
// Auth Imports

// Icon Imports
import {
  MdHome,
  MdWallet
} from 'react-icons/md';
import { IoMdPaper,IoMdPulse} from "react-icons/io";

const routes = [
  {
    id:1,
    name: "Main Dashboard",
    icon: <MdHome className="h-6 w-6" />,
    component: <Dashboard />,
  },
  {
    id:2,
    name: "View Transactions",
    icon: <IoMdPaper className="h-6 w-6" />,
    component: <Dashboard />,
    secondary: true,
  },
  {
    id:3,
    name: "Income",
    icon: <MdWallet className="h-6 w-6" />,
    component: <Dashboard />,
  },
  {
    id:4,
    name: "Expenses",
    path: "profile",
    icon: <IoMdPulse className="h-6 w-6" />,
    component: <Dashboard />,
  }
];
export default routes;
