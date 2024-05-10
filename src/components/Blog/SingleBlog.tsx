"use client"
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;
  useEffect(() => {
    AOS.init();
  }, []);

  const data = ["flip-left","flip-right","fade-up", "fade-left", "fade-right","fade-up-right","fade-up-left","fade-down-right","fade-down-left"];
  const [aosData, setAosData] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setAosData(data[randomIndex]);
  }, []);
  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark" data-aos={aosData}>
        <Link
          href="/blog-details"
          className="relative block aspect-[37/22] w-full"
        >
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <Image src={image} alt="image" fill loading='lazy'/>
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href="/blog-details"
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-6 border-b  border-opacity-10 pb-6 text-base font-medium  dark:border-opacity-10">
            {paragraph}
          </p>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r  border-opacity-10 pr-5  dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={author.image} alt="author" fill loading='lazy'/>
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium ">
                  By {author.name}
                </h4>
                <p className="text-xs">{author.designation}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium ">
                Date
              </h4>
              <p className="text-xs ">{publishDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
