"use client"
import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <div className="flex overflow-hidden space-x-16 py-12 bg-gray-light">
      <div className="flex space-x-16 animate-infinite-scroll ">
        {brandsData.map((brand) => (
          <Image src={brand.image} key={brand.id} alt={brand.name} width={100} height={100} />
        ))}
      </div>
    </div>
  );
};

export default Brands;
