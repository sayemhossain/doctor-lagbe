import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import BannerTwo from "./BannerTwo";
import Contact from "./Contact";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="bg-base-100">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <BannerTwo></BannerTwo>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
