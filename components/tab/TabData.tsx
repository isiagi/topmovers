import Image from "next/image";
import image1 from "@/public/hero.jpg";

type Props = {};

function TabData({}: Props) {
  return (
    <div className="">
      <div>
        <div className="h-[400px]">
          <Image src={image1} alt="" className="h-full rounded" objectFit="cover" />
        </div>
        <div>
          <p>
            {" "}
            Moving companies can help you move locally within a city or region,
            as well as facilitate long-distance moves across different cities,
            states, or even countries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TabData;
