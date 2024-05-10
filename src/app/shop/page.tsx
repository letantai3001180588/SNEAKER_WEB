"use client"
import React, { useEffect, useMemo, useState } from 'react'
import Product from "@/components/LatestArrivals";
import { Feature } from "@/types/feature";
import Breadcrumb from '@/components/Common/Breadcrumb';
import Link from 'next/link';
import Image from "next/image";
const featuresData: Feature[] = [
  {
    id: 1,
    name: "Jordan 1 Retro Low OG Trophy Room Away",
    price: 29.99,
    size: [36, 37, 36],
    category: "Nike",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
    image: "https://img.freepik.com/premium-photo/burst-summer-vibes-vibrant-photo-showcasing-colorful-sneakers-with-splashes-paint_774710-107.jpg"
  },
  {
    id: 2,
    name: "Jordan 1 Retro High OG Craft Ivory",
    price: 39.99,
    size: [36, 37, 36],
    category: "Nike",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
    image: "https://img.freepik.com/premium-photo/art-ready-print-colorful-graffiti-illustration_864306-2884.jpg"
  },
  {
    id: 3,
    name: "Jordan 1 Retro High OG",
    price: 49.99,
    size: [36, 37, 36],
    category: "Nike",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
    image: "https://img.freepik.com/premium-photo/colorful-graffiti-illustration-jordan-shoes-3_640251-1146.jpg"
  },
  {
    id: 4,
    name: "Jordan 1 Mid Light Smoke Grey",
    price: 19.99,
    size: [36, 37, 42],
    category: "Jordan",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
    image: "https://img.freepik.com/premium-photo/sneaker-design-graffiti_1059430-13693.jpg"
  },
  {
    id: 5,
    name: "Jordan 1 Retro Low OG",
    price: 59.99,
    size: [36, 37, 40],
    category: "MLB",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
    image: "https://img.freepik.com/premium-photo/shoe-logo-with-full-color-combination_640251-4976.jpg"
  },
  {
    id: 6,
    name: "Jordan 1 Retro Low OG SP",
    price: 34.99,
    size: [36, 37, 41],
    category: "MLB",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
    image: "https://img.freepik.com/premium-photo/colorful-pair-sneakers-with-word-nike-bottom_910054-71211.jpg"
  },
  {
    id: 7,
    name: "Jordan 1 Retro Low OG SP Mocha",
    price: 79.99,
    size: [36, 37, 39],
    category: "Nike",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
    image: "https://img.freepik.com/premium-photo/shoe-logo-with-full-color-combination_640251-5161.jpg"
  },
  {
    id: 8,
    name: "Jordan 1 Retro High OG University Blue",
    price: 44.99,
    size: [36, 37, 39],
    category: "MLB",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
    image: "https://img.freepik.com/premium-photo/shoe-logo-with-full-color-combination_640251-5155.jpg"
  },
  {
    id: 9,
    name: "Jordan 1 Retro Low OG Trophy Room Away",
    price: 29.99,
    size: [36, 37, 38],
    category: "Vans",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
    image: "https://img.freepik.com/premium-photo/shoe-logo-with-full-color-combination_640251-5155.jpg"

  },
  {
    id: 10,
    name: "Jordan 1 Retro High OG Craft Ivory",
    price: 39.99,
    size: [36, 37, 36],
    category: "Vans",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",

    image: "https://img.freepik.com/premium-photo/shoe-logo-with-full-color-combination_640251-5161.jpg"
  },
  {
    id: 11,
    name: "Jordan 1 Retro High OG",
    price: 49.99,
    size: [36, 37, 36],
    category: "Nike",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
    image: "https://img.freepik.com/premium-photo/colorful-graffiti-illustration-jordan-shoes-3_640251-1146.jpg"
  },
  {
    id: 12,
    name: "Jordan 1 Mid Light Smoke Grey",
    price: 99.99,
    size: [36, 37, 36],
    category: "Vans",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
    image: "https://img.freepik.com/premium-photo/sneaker-design-graffiti_1059430-13693.jpg"
  },
  {
    id: 13,
    name: "Jordan 1 Retro Low OG",
    price: 59.99,
    size: [36, 37, 36],
    category: "Nike",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
    image: "https://img.freepik.com/premium-photo/shoe-logo-with-full-color-combination_640251-4976.jpg"
  },
  {
    id: 14,
    name: "Jordan 1 Retro Low OG SP",
    price: 34.99,
    size: [36, 37, 42],
    category: "Jordan",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
    image: "https://img.freepik.com/premium-photo/colorful-pair-sneakers-with-word-nike-bottom_910054-71211.jpg"
  },
  {
    id: 15,
    name: "Jordan 1 Retro Low OG SP Mocha",
    price: 179.99,
    size: [36, 37, 42],
    category: "Jordan",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
    image: "https://img.freepik.com/premium-photo/art-ready-print-colorful-graffiti-illustration_864306-2884.jpg"
  },
  {
    id: 16,
    name: "Jordan 1 Retro High OG University Blue",
    price: 199.99,
    size: [36, 37, 42],
    category: "Jordan",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
    image: "https://img.freepik.com/premium-photo/burst-summer-vibes-vibrant-photo-showcasing-colorful-sneakers-with-splashes-paint_774710-107.jpg"
  },
];
const Shop = () => {
  const [price, setPrice] = useState(1);
  const [filteredItems, setFilteredItems] = useState<Feature[]>([]);
  const [size, setSize] = useState('35');
  const [category, setCategory] = useState('Nike');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = featuresData.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);
  const updatePrice = (event: any) => {
    setPrice(event.target.value);
  };

  const searchItems = () => {
    const newFilteredItems = featuresData.filter((item) => (
      item.price <= price &&
      item.size.includes(parseInt(size)) &&
      item.category === category
    ));
    setFilteredItems(newFilteredItems.slice(indexOfFirstItem, indexOfLastItem));
    setCurrentPage(1);
  };
  console.log("filteredItems", filteredItems);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Breadcrumb
        pageName="Shop"
      />
      <div className="text-center">
        <button
          className="lg:hidden font-medium rounded-full mt-8 text-sm px-5 py-2.5 mb-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:to-purple-600 "
          type="button"
          onClick={toggleDrawer}
        >
          {isOpen ? 'Hide Search' : 'Show Search'}
        </button>
        <div
          id="drawer-example"
          className={`fixed top-25 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
            } bg-white w-full dark:bg-gray-800`}
          aria-labelledby="drawer-label"
        >
          <button
            type="button"
            onClick={toggleDrawer}
            aria-controls="drawer-example"
            className=" rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center "
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <div>
            <ul>
              <li className="mt-5 cursor-pointer outline-none group">
                <span
                  className="font-normal text-lg leading-8 transition-all duration-500 ">Today’s New Deal</span>
              </li>
              <li className="mt-5 cursor-pointer outline-none group">
                <span
                  className="font-normal text-lg leading-8 transition-all duration-500 ">Jordan</span>
              </li>
              <li className="mt-5 cursor-pointer outline-none group">
                <span
                  className="font-normal text-lg leading-8 transition-all duration-500 ">Nike</span>
              </li>
              <li className="mt-5 cursor-pointer outline-none group ">
                <span
                  className="font-normal text-lg leading-8 transition-all duration-500 ">Adidas</span>
              </li>
              <li className="mt-5 cursor-pointer outline-none group">
                <span
                  className="font-normal text-lg leading-8 transition-all duration-500 ">MLB</span>
              </li>
              <li className="mt-5 cursor-pointer outline-none group">
                <span
                  className="font-normal text-lg leading-8 transition-all duration-500 ">ADLV</span>
              </li>
              <li className="mt-5 cursor-pointer outline-none w-full flex items-center justify-between">
                <span
                  className="font-normal w-15 text-lg leading-8 transition-all duration-500">Size</span>
                <div className="relative w-full ml-4">
                  <select id="FROM" onChange={(e) => setSize(e.target.value)}
                    value={size}
                    className="h-10 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
                    <option selected>All</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                  </select>

                  <svg className="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16"
                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827"
                      stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </li>
              <li className="mt-5 cursor-pointer outline-none w-full flex items-center justify-between">
                <span
                  className="font-normal w-15 text-lg leading-8 transition-all duration-500 ">Color</span>
                <div className="relative w-full ml-4">
                  <select id="FROM" onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    className="h-10 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
                    <option selected>All</option>
                    <option value="red">red</option>
                    <option value="yellow">yellow</option>
                    <option value="blue">blue</option>
                    <option value="black">black</option>
                    <option value="white">white</option>
                  </select>
                  <svg className="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16"
                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827"
                      stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="relative">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center max-lg:gap-6 justify-between w-full hidden sm:flex">
            <span className="font-normal text-lg leading-8 transition-all duration-500">Today’s New Deal</span>
            <ul className="flex flex-col sm:flex-row sm:items-center gap-12">
              <li className="mt-5 cursor-pointer outline-none group">
                <span
                  className="font-normal text-lg leading-8 transition-all duration-500 ">Jordan</span>
              </li>
              <li className="mt-5 cursor-pointer outline-none group">
                <span
                  className="font-normal text-lg leading-8 transition-all duration-500 ">Nike</span>
              </li>
              <li className="mt-5 cursor-pointer outline-none group ">
                <span
                  className="font-normal text-lg leading-8 transition-all duration-500 ">Adidas</span>
              </li>
              <li className="mt-5 cursor-pointer outline-none group">
                <span
                  className="font-normal text-lg leading-8 transition-all duration-500 ">MLB</span>
              </li>
              <li className="mt-5 cursor-pointer outline-none group">
                <span
                  className="font-normal text-lg leading-8 transition-all duration-500 ">ADLV</span>
              </li>
              <li className="mt-5 cursor-pointer outline-none w-40 flex items-center justify-between">
                <span
                  className="font-normal text-lg leading-8 transition-all duration-500 ">Size</span>
                <div className="relative w-full ml-4">
                  <select id="FROM" onChange={(e) => setSize(e.target.value)}
                    value={size}
                    className="h-10 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
                    <option selected>All</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                  </select>

                  <svg className="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16"
                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827"
                      stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </li>
              <li className="mt-5 cursor-pointer outline-none w-40 flex items-center justify-between">
                <span
                  className="font-normal text-lg leading-8 transition-all duration-500 ">Color</span>
                <div className="relative w-full ml-4">
                  <select id="FROM" onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    className="h-10 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
                    <option selected>All</option>
                    <option value="red">red</option>
                    <option value="yellow">yellow</option>
                    <option value="blue">blue</option>
                    <option value="black">black</option>
                    <option value="white">white</option>
                  </select>
                  <svg className="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16"
                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827"
                      stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </li>
            </ul>

          </div>
          <svg className="my-6 w-full" xmlns="http://www.w3.org/2000/svg" width="1216" height="2" viewBox="0 0 1216 2"
            fill="none">
            <path d="M0 1H1216" stroke="#E5E7EB" />
          </svg>
          <div className="grid">
            <div className="col-span-12 md:col-span-12 mt-4 lg:mt-0">
              <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                {filteredItems.length === 0 ? (
                  currentItems.map((features: any) => (
                    <div className="w-full" key={features.id}>
                      <div className="relative group inline-block justify-between">
                        <div className="card lg:w-80 w-90 h-96 p-6 rounded-lg ">
                          <div className="h-50 overflow-hidden transition-transform duration-500 transform-gpu hover:-translate-y-6 hover:-rotate-6">
                            <Image className="w-full h-full rounded-full object-cover transition-transform duration-500 transform-gpu group-hover:scale-105" width={300} height={300} src={features.image} alt="img" loading='lazy' />
                          </div>
                          <Link href="/product-detail">
                            <div className="mt-3 group-hover:opacity-0 group-hover:invisible transition-all text-xl font-bold text-center   duration-500 transform-gpu group-hover:translate-x-4 group-hover:translate-y-4">
                              {features.name}
                            </div>
                            <div className="group-hover:opacity-0 group-hover:invisible transition-all text-xl font-bold text-center   duration-500 transform-gpu group-hover:translate-x-4 group-hover:translate-y-4">
                              ${features.price}
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
                  ))
                ) : (
                  filteredItems?.map((features: any) => (
                    <div className="w-full" key={features.id}>
                      <div className="relative group inline-block justify-between">
                        <div className="card w-80 p-6 rounded-lg">
                          <div className="card__image overflow-hidden transition-transform duration-500 transform-gpu hover:-translate-y-6 hover:-rotate-6">
                            <Image className="w-full h-50 rounded-full object-cover transition-transform duration-500 transform-gpu group-hover:scale-105" width={300} height={300} src={features.image} alt="img" loading='lazy' />
                          </div>
                          <Link href="/product-detail">
                            <div className="text-xl font-bold text-center  transition-transform duration-500 transform-gpu group-hover:translate-x-4 group-hover:translate-y-4">
                              {features.name}
                            </div>
                            <div className="text-xl font-bold text-center  transition-transform duration-500 transform-gpu group-hover:translate-x-4 group-hover:translate-y-4">
                              ${features.price}
                            </div>
                            <div className="flex justify-center mt-4 opacity-0 invisible transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:mt-0">
                              <h3 className="mr-2 text-left">Size:</h3>
                              <span className="px-2 py-1 mr-2 dark:bg-white dark:text-black text-white bg-black  rounded">6</span>
                              <span className="px-2 py-1 mr-2 dark:bg-white dark:text-black text-white bg-black  rounded">7</span>
                              <span className="px-2 py-1 mr-2 dark:bg-white dark:text-black text-white bg-black  rounded">8</span>
                              <span className="px-2 py-1 mr-2 dark:bg-white dark:text-black text-white bg-black  rounded">9</span>
                            </div>
                            <div className=" flex justify-center  opacity-0 invisible transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:mt-4">
                              <h3 className="mr-2 text-left">Color:</h3>
                              <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                              <span className="w-4 h-4 bg-red-500 rounded-full mx-2"></span>
                              <span className="w-4 h-4 bg-black rounded-full"></span>
                            </div>
                            <div className="flex justify-center mt-4 opacity-0 invisible transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:mt-4">
                              <button className="bg-green-500 text-white px-4 py-2 rounded-full font-bold mr-2 transition-transform duration-500 transform-gpu hover:scale-90">Buy Now</button>
                              <button className="bg-green-500 text-white px-4 py-2 rounded-full font-bold transition-transform duration-500 transform-gpu hover:scale-90">Add Cart</button>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4">
                  <ul className="flex items-center justify-center pt-8">
                    <li className="mx-1">
                      <a
                        href="#0"
                        className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                        onClick={() => prevPage()}
                        aria-disabled={currentPage === 1}
                      >
                        Prev
                      </a>
                    </li>
                    {Array.from({ length: Math.ceil(featuresData.length / itemsPerPage) }).map((_, index) => (
                      <li key={index} className="mx-1">
                        <a
                          href="#0"
                          className={`flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white ${currentPage === index + 1 ? 'bg-primary text-white' : ''}`}
                          onClick={() => paginate(index + 1)}
                        >
                          {index + 1}
                        </a>
                      </li>
                    ))}
                    <li className="mx-1">
                      <a
                        href="#0"
                        className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                        onClick={() => nextPage()}
                        aria-disabled={currentPage === Math.ceil(featuresData.length / itemsPerPage)}
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </>
  );
};

export default Shop;
