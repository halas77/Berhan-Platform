import Navbar from "@/components/Navbar";
import { AboutUs, ContactUs, Footer, Hero, Services } from "@/sections";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Navbar Section */}

      <Navbar />

      {/* Hero Section  */}

      <Hero />

      {/* Services Section */}

      <Services />

      {/* About Section */}

      <AboutUs />

      {/* Contact Section */}

      <ContactUs />

      {/* Footer Section */}

      <Footer />
    </main>
  );
}
