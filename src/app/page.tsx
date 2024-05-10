import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Product from "@/components/LatestArrivals";
import ShortProduct from "@/components/ShortProduct";
import Tee from "@/components/Tee";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Service";
import Stats from "@/components/Stats";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sneaker",
  description: "Sneaker by Tấn Phát",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Product />
      {/* <AboutSectionOne /> */}
      <Tee />
      <Stats/>
      <ShortProduct />
      {/* <AboutSectionTwo /> */}
      <Video />
      <Testimonials />
      {/* <Pricing /> */}
      <Brands />
      <Blog />
      <Contact />
    </>
  );
}
