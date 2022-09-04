import { Route, Routes } from "react-router-dom";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import Navbar from "./Pages/Shared/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import MyReview from "./Pages/Dashboard/MyReview";
import MyHistory from "./Pages/Dashboard/MyHistory";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import ManageDoctors from "./Pages/Dashboard/ManageDoctors";
import ManageReviews from "./Pages/Dashboard/ManageReviews";
import Bkash from "./Pages/Dashboard/Payment/Bkash";
import Nagad from "./Pages/Dashboard/Payment/Nagad";
import Payment from "./Pages/Dashboard/Payment/Payment";
import PaymentStatus from "./Pages/Dashboard/PaymentStatus/PaymentStatus";
import AllUsers from "./Pages/Dashboard/AllUsers";
import AllAdmin from "./Pages/Dashboard/AllAdmin";
import ManagePayment from "./Pages/Dashboard/ManagePayment/ManagePayment";
import ContactUs from "./Pages/ContactUs/ContactUs";
import ManageContactMessage from "./Pages/Dashboard/ManageContactMessage/ManageContactMessage";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}>
            <Route index element={<Bkash></Bkash>}></Route>
            <Route path="bkash" element={<Bkash></Bkash>}></Route>
            <Route path="nagad" element={<Nagad></Nagad>}></Route>
          </Route>
          <Route
            path="paymentstatus"
            element={<PaymentStatus></PaymentStatus>}
          ></Route>
          <Route
            path="managepayment"
            element={<ManagePayment></ManagePayment>}
          ></Route>
          <Route
            path="addDoctor"
            element={
              <RequireAdmin>
                <AddDoctor></AddDoctor>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageDoctors"
            element={
              <RequireAdmin>
                <ManageDoctors></ManageDoctors>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageReviews"
            element={
              <RequireAdmin>
                <ManageReviews></ManageReviews>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="managecontact"
            element={<ManageContactMessage></ManageContactMessage>}
          ></Route>
          <Route path="alluser" element={<AllUsers></AllUsers>}></Route>
          <Route path="alladmin" element={<AllAdmin></AllAdmin>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
// http://localhost:5000/
