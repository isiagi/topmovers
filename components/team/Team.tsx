import Image from "next/image";
import image1 from "@/public/hero.jpg";

function Team() {
  return (
    <div>
      <div className="md:px-12 px-2 text-center py-12">
        <h2 className="text-3xl text-[#096FC2] border-b-2 pb-3 border-[#EA6E71] w-fit uppercase">Our Team</h2>
        <p className="text-slate-600 max-w-xl py-6 mb-3">
          Our team at Top Movez Uganda is a dedicated group of professionals with
          extensive experience in the moving industry. We are committed to
          providing exceptional service and making your move a seamless and
          stress-free experience.
        </p>
        <div className="h-[500px]">
          <Image src={image1} alt="" className="h-full" objectFit="cover"/>
        </div>
      </div>
    </div>
  );
}

export default Team;


// #NSY-505-56719
