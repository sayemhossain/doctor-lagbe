import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="bg-gray-100">
      <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content mr-28 p-10">
          <div className="flex justify-between">
            <h3 className="text-center text-primary text-2xl font-bold uppercase">
              My Appointment
            </h3>
            <button class="btn btn-outline btn-primary">Button</button>
          </div>
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">Item 1</Link>
            </li>
            <li>
              <Link to="/dashboard/review">Item 2</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
