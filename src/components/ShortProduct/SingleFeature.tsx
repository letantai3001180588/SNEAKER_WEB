import { Feature } from "@/types/feature";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import Link from "next/link";
const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { name, price, image } = feature;
  useEffect(() => {
    AOS.init();
  }, []);

  const data = ["fade-left", "fade-right","fade-up-right","fade-up-left","fade-down-right","fade-down-left"];
  const [aosData, setAosData] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setAosData(data[randomIndex]);
  }, []);
  return (
    <div className="w-full" data-aos={aosData}>
      <div className="container mx-auto px-4">
      <div className="relative group inline-block justify-between">
          <div className="card w-80 h-60 p-6 rounded-lg ">
            <div className="h-50 overflow-hidden transition-transform duration-500 transform-gpu hover:-translate-y-6 hover:-rotate-6">
              <Image className="w-full h-full rounded-full object-cover transition-transform duration-500 transform-gpu group-hover:scale-105" width={300} height={300} src={image} alt="img" loading='lazy' />
            </div>
            <Link href="/product-detail">
              <div className="mt-3 group-hover:opacity-0 group-hover:invisible transition-all text-xl font-bold text-center   duration-500 transform-gpu group-hover:translate-x-4 group-hover:translate-y-4">
                {name}
              </div>
              <div className="group-hover:opacity-0 group-hover:invisible transition-all text-xl font-bold text-center   duration-500 transform-gpu group-hover:translate-x-4 group-hover:translate-y-4">
                ${price}
              </div>
              <div className="flex justify-center items-center opacity-0 invisible transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:mt-0">
                <h3 className="mr-2">Size:</h3>
                <span className="px-2 py-1 mr-2 dark:bg-white dark:text-black text-white bg-black  rounded">6</span>
                <span className="px-2 py-1 mr-2 dark:bg-white dark:text-black text-white bg-black   rounded">7</span>
                <span className="px-2 py-1 mr-2 dark:bg-white dark:text-black text-white bg-black  rounded">8</span>
                <span className="px-2 py-1 mr-2 dark:bg-white dark:text-black text-white bg-black  rounded">9</span>
              </div>
              <div className="flex justify-center items-center opacity-0 invisible transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:mt-4">
                <h3 className="mr-2">Color:</h3>
                <span className="w-4 h-4 mr-2 bg-green-500 rounded-full"></span>
                <span className="w-4 h-4 mr-2 bg-red-500 rounded-full mx-2"></span>
                <span className="w-4 h-4 mr-2 bg-black rounded-full"></span>
              </div>
            </Link>
          </div>
        </div>
        </div>
      </div>
  );
};

export default SingleFeature;
