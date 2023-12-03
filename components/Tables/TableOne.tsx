"use client"

import { BRAND } from "@/types/brand";
import { Progress } from "@nextui-org/react";
import Image from "next/image";
import './styles.modules.css';

const brandData: BRAND[] = [
  {
    logo: "/images/brand/XP.png",
    name: "Google",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: "/images/brand/ClockWork.png",
    name: "Twitter",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex flex-col">
        {brandData.map((brand, key) => (
          <div
            className={`eheheheh  ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="concocnoc">
              <Progress aria-label="Loading..." color={"secondary"} style={{opacity: 1, position : "absolute"}} className="hihihihihi" value={(1 / (key + 2)) * 100}/>
              <Progress aria-label="Loading..." color={"primary"} style={{opacity: 0.1, position : "absolute"}} className="hihihihihi" value={100}/>
            </div>
            <div className="flex items-center gap-3  ossbb">
                <Image src={brand.logo} alt="Brand" width={200} height={100}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
