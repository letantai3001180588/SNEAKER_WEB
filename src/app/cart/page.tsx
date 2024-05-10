"use client"
import React, { useEffect, useState } from 'react'
import type { NextPage } from "next";
import Breadcrumb from '@/components/Common/Breadcrumb';
import Image from "next/image";
import Link from 'next/link';
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
    const incrementQuantity = (productId: any) => {
        setProducts(prevProducts => {
            return prevProducts.map(product => {
                if (product.id === productId) {
                    return { ...product, quantity: product.quantity + 1 };
                }
                return product;
            });
        });
    };

    const decrementQuantity = (productId: any) => {
        setProducts(prevProducts => {
            return prevProducts.map(product => {
                if (product.id === productId && product.quantity > 1) {
                    return { ...product, quantity: product.quantity - 1 };
                }
                return product;
            });
        });
    };
    const removeProduct = (productId: any) => {
        setProducts(prevProducts => {
            return prevProducts.filter(product => product.id !== productId);
        });
    };
    const handlePayment = () => {
        window.location.href = '/orderdetail';
    }
    const totalPrice = products.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0).toFixed(2);
    const total = products.reduce((total, product) => {
        return total + (product.discountPrice * product.quantity);
    }, 0).toFixed(2);
    const totalPriceDiscount = products.reduce((total, product) => {
        return total + ((product.discountPrice - product.price) * product.quantity);
    }, 0).toFixed(2);
    return (
        <div>
            <div className="py-4 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                <Breadcrumb
                    pageName="Cart"
                />
                <div className="mt-4 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                        <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                            <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>
                            {products.map((product) => (
                                <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full" key={product.id}>
                                    <div className="pb-4 md:pb-8 w-full md:w-40 flex items-center">
                                        <Image className="object-cover lg:w-full w-1/2" width={300} height={300} src={product.image} alt="img" loading='lazy' />
                                        <h3 className="lg:hidden text-xl text-center dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">{product.name}</h3>
                                    </div>
                                    <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                                            <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800 hidden lg:block">{product.name}</h3>
                                        </div>
                                        <div className="flex justify-between space-x-8 items-center w-full">
                                            <p className="text-base dark:text-white xl:text-lg leading-6">${product.price} <span className="text-red-300 line-through"> ${product.discountPrice}</span></p>
                                            <div className='flex'>
                                                <button onClick={() => decrementQuantity(product.id)} className="group rounded-full border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                                                    <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" width="10" height="10" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.5 9.5H13.5" stroke="" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                                <input value={product.quantity} type="text" id="number" readOnly className="border border-gray-200  rounded-full w-8 aspect-square outline-none text-gray-900 font-semibold text-sm bg-gray-100 text-center mx-2" />
                                                <button onClick={() => incrementQuantity(product.id)} className="group rounded-full border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                                                    <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" width="10" height="10" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.75 9.5H14.25M9 14.75V4.25" stroke="" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">${product.price}</p>
                                            <button onClick={() => removeProduct(product.id)} className="group rounded-full border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                                                <svg className="text-gray-900 transition-all duration-500 group-hover:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                        <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
                        <div className="mt-8 flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                            <div className="flex justify-center items-center w-full space-y-6 flex-col border-gray-200 border-b pb-4">
                                <div className="flex justify-between w-full">
                                    <p className="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
                                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">${total}</p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base dark:text-white leading-4 text-gray-800">Discount</p>
                                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">${totalPriceDiscount}</p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                                    <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">${totalPrice}</p>
                                </div>
                            </div>
                            <div className="mt-8">
                                <Link href="/checkout">
                                    <button className="rounded-full w-full border border-gray-300  py-3 px-4  text-sm font-semibold text-center mb-8">CheckOut</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;