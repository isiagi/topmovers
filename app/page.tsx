import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Team from "@/components/team/Team";
import Testmonial from "@/components/testmonial/Testmonial";
import Why from "@/components/why/Why";

export default function Home() {
  return (
    <>
      <Hero />
      <Why />
      <Services />
      <Team />
      <Testmonial />
    </>
  );
}
