import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Info from "@/components/Info";
import LandingPage from "@/components/LandingPage";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="">
      <Navbar />
      <LandingPage />
      <Marquee />
      <Info />
      <Carousel />
      <Footer />
      {/* Horizontal scroll effect */}
      {/* vertical scroll with projects and testimonials */}
      {/* overlapping pages footer */}
    </main>
  );
}
