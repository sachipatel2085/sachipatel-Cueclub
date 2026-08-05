import { lazy, useState } from "react";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero/Hero";
import LoadingScreen from "./components/common/LoadingScreen";
import useLoading from "./hooks/useLoading";
import Story from "./story/Story";
import Experience from "./components/experience/Experience";
import Membership from "./components/membership/Membership";
import Events from "./components/events/Events";
const Gallery = lazy(() => import("./components/gallery/Gallery"));
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollTopButton from "./components/common/ScrollTopButton";

function App() {
  const loading = useLoading();
  return (
    <>
      {loading && <LoadingScreen />}
      <Navbar />
      <Hero />
      <Story />
      <Experience />
      <Membership />
      <Events />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollTopButton />
    </>
  );
}

export default App;
