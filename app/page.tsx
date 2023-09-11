import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Team from "@/components/team/Team";
import Testmonial from "@/components/testmonial/Testmonial";
import Why from "@/components/why/Why";
import Banner1 from "@/components/banner1/Banner1";

export default function Home() {
  return (
    <>
      <Hero />
      <Why />
      <Services />
      <Banner1 />
      <Team />
      <Testmonial />
    </>
  );
}
