import Banner from "@/components/banner/Banner";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Nav from "@/components/nav/Nav";
import Services from "@/components/services/Services";
import Testmonial from "@/components/testmonial/Testmonial";
import Why from "@/components/why/Why";

export default function Home() {
  return (
    <>
      <Banner />
      <Nav />
      <Hero />
      <Why />
      <Services />
      <Testmonial />
      <Footer />
    </>
  );
}
