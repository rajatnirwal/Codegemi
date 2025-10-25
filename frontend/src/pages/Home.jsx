import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Services from "../components/Services";
import About from "../components/About";
import Solution from "../components/Solution";
import Phases from "../components/Phases";
import Challenges from "../components/Challenges";
import { assets } from "../assets/assets";
import Team from "../components/ClientReview";
import ContactForm from "../components/ContactForm";
import Blog from "../components/Blog";
import VideoWithTransition from "../components/VideoWithTransition";
import FloatingSidebar from "../components/FloatingSidebar";

const Home = () => {
  return (
    <div className="w-full h-full ">
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <Services />
      <About />
      <Solution />
      <Phases />
      <Challenges />
      <VideoWithTransition />
      <Team />
      <ContactForm />
      <Blog />
      <Footer />
      <FloatingSidebar />
    </div>
  );
};

export default Home;
