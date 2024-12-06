import Image from "next/image";
import Navbar from "./Components/Navbar";
import { bgSimplifySectionDesktop, bgSimplifySectionTablet } from "@/assets";
import LandingPage from "./Components/LandingPage";
import FeaturesPage from "./Components/FeaturesPage";
import Testimonials from "./Components/Testimonials";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className=" h-screen w-screen overflow-y-scroll overflow-x-hidden relative">
      <Image
        src={bgSimplifySectionTablet}
        className=" absolute -top-20 -right-10 -z-10 "
        alt="bgDeskPattern"
      />
      <Navbar />
      <LandingPage />
      <FeaturesPage />
      <Testimonials />
      <Banner />
      <Footer />
    </div>
  );
}
