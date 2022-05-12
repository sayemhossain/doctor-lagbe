import React from "react";
import Banner from "./Banner";
import BannerTwo from "./BannerTwo";
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
    </div>
  );
};

export default Home;
