"use client"
import React, { useEffect, useState } from 'react'
import type { NextPage } from "next";
import Breadcrumb from '@/components/Common/Breadcrumb';
import Image from "next/image";
const Home: NextPage = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Jordan 1 Mid Light Smoke Grey",
            image: "https://img.freepik.com/premium-photo/sneaker-design-graffiti_1059430-13693.jpg",
            style: "Italic Minimal Design",
            size: "Small",
            color: "Light Blue",
            price: 36.00,
            discountPrice: 45.00,
            quantity: 1
        },
        {
            id: 2,
            name: "ordan 1 Retro Low OG",
            image: "https://img.freepik.com/premium-photo/shoe-logo-with-full-color-combination_640251-4976.jpg",
            style: "Italic Minimal Design",
            size: "Small",
            color: "Light Blue",
            price: 20.00,
            discountPrice: 30.00,
            quantity: 1
        },
        {
            id: 3,
            name: "ordan 1 Retro Low OG",
            image: "https://img.freepik.com/premium-photo/shoe-logo-with-full-color-combination_640251-4976.jpg",
            style: "Italic Minimal Design",
            size: "Small",
            color: "Light Blue",
            price: 20.00,
            discountPrice: 30.00,
            quantity: 1
        }
    ]);
    const totalPrice = products.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0).toFixed(2);
    return (
        <div>
            <div className="py-4 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                <Breadcrumb
                    pageName="Order Detail"
                />
                 <div className="mt-4 text-center w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                 <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">Giao dịch thành công</p>
                 </div>
                <div className="mt-4 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                        <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                            <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">Order Id:</p>
                            {products.map((product) => (
                                <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full" key={product.id}>
                                    <div className="pb-4 md:pb-8 w-full md:w-40 flex items-center">
                                    <Image className="object-cover lg:w-full w-1/2" width={300} height={300} src={product.image} alt="img" loading='lazy'/>
                                        <h3 className="lg:hidden text-xl text-center dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">{product.name}</h3>
                                    </div>
                                    <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                                            <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800 hidden lg:block">{product.name}</h3>
                                        </div>
                                        <div className="flex justify-between space-x-8 items-center w-full">
                                            <p className="text-base dark:text-white xl:text-lg leading-6">${product.price} <span className="text-red-300 line-through"> ${product.discountPrice}</span></p>
                                            <div className='flex'>
                                                <input value={product.quantity} type="text" id="number" readOnly className="border border-gray-200  rounded-full w-8 aspect-square outline-none text-gray-900 font-semibold text-sm bg-gray-100 text-center mx-2" />
                                            </div>
                                            <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">${product.price}</p>
                                        </div>
                                    </div> 
                                </div>
                            ))}
                        <div className='flex items-center justify-between'>
                            <p></p>
                            <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">${totalPrice}</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;