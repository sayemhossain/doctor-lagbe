import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import Footer from "../Shared/Footer";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <>
      <div className="bg-blue-50">
        <div class="drawer drawer-mobile">
          <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content px-10 pt-2 pb-10">
            <div className="flex justify-between md:block mb-10">
              <h2 className="text-center md:text-2xl text-sm uppercase mt-5 text-gray-600 font-bold">
                Wellcome to your dashboard
              </h2>
              <label
                tabIndex="0"
                for="dashboard-sidebar"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
            <Outlet></Outlet>
          </div>
          <div class="drawer-side">
            <label for="dashboard-sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-48 text-base-content bg-base-100">
              <li>
                <Link to="/dashboard">My Appointment</Link>
              </li>
              <li>
                <Link to="/dashboard/review">My Reviews</Link>
              </li>
              <li>
                <Link to="/dashboard/history">Treatment History</Link>
              </li>
              <li>
                {admin && (
                  <>
                    <Link to="/dashboard/users">All Users</Link>
                    <Link to="/dashboard/addDoctor">Add Doctor</Link>
                    <Link to="/dashboard/manageDoctors">Manage Doctors</Link>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Dashboard;
