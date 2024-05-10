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
                        <div className="   bg-gray-800 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                           <div className='flex flex-col lg:flex-row justify-between'>
                           <div>
                                <label htmlFor="FullName">Full Name</label>
                                <input type="text" className="w-full h-12  text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6" placeholder="Full Name" />
                            </div>
                            <div>
                                <label htmlFor="Phone">Phone</label>
                                <input type="text" className="w-full h-12  text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-1" placeholder="Phone" />
                            </div>
                           </div>
                           <div>
                                <label htmlFor="Address">Address</label>
                                <textarea
                                    id="address"
                                    name="address"
                                    rows={3}
                                    className="block w-full rounded-md border-0 py-1.5 px-4 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                            </div>
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
                                <div className="flex justify-between items-center w-full ">
                                    <p className="text-base dark:text-white leading-4 text-gray-800">Discount</p>
                                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">${totalPriceDiscount}</p>
                                </div>
                                <div className="flex justify-between items-center w-full border-gray-200 border-b"></div>
                                {/* <div className="flex justify-between text-gray-800 dark:text-white md:justify-between items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                    <p className="text-base dark:text-white leading-4 text-gray-800">Shipping</p>
                                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">0</p>
                                </div> */}

                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                                    <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">${totalPrice}</p>
                                </div>
                            </div>
                            {/* <div className="flex justify-around mt-8 items-center">
                                <input type="text" placeholder=' Your Discount 🔥' className='h-10 border border-gray-300 text-gray-900 p-1 rounded-md text-base font-normal leading-7  block  w-full appearance-none relative focus:outline-none bg-white transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 focus-within:bg-gray-50' />
                                <button className="md:mt-0 rounded-md dark:border-white ml-4 dark:hover:bg-gray-900 dark:bg-transparent dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border p-1 border-gray-800 font-medium  text-base  leading-4 ">Apply</button>
                            </div> */}
                            {/* <div className=" mt-8">
                                <button
                                    className="rounded-full w-full border border-gray-300  py-3 px-4  text-sm font-semibold text-center mb-8  ">CheckOut</button>
                            </div> */}
                             <div className="flex justify-between items-center w-full border-gray-200 border-b"></div>
                            <h3 className="text-xl mt-4">Payment</h3>
                           <div className="mt-4 flex justify-center items-center w-full space-y-6 flex-col">
                                <div className="flex w-full justify-between items-center md:justify-between md:items-between gap-1">
                                    <button onClick={() => handlePayment()} className="rounded-lg h-15 lg:w-30 w-40 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium text-base leading-4 text-gray-800 flex items-center justify-center">
                                        COD
                                    </button>
                                    <button onClick={() => handlePayment()} className="rounded-lg h-15 lg:w-30 w-40 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium flex items-center justify-center">
                                        <img src="/images/logopayment/logo_momo.png" alt="MOMO" className="h-15 w-30" />
                                    </button>
                                </div>
                                <div className="flex w-full justify-between items-center md:justify-between md:items-between gap-1">
                                    <button onClick={() => handlePayment()} className="rounded-lg h-15 lg:w-30 w-40 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium flex items-center justify-center">
                                        <img src="/images/logopayment/logo_zalopay.png" alt="ZALOPAY" />
                                    </button>
                                    <button onClick={() => handlePayment()} className="rounded-lg h-15 lg:w-30 w-40 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium flex items-center justify-center">
                                        <img src="/images/logopayment/visa.png" alt="VISA" className="h-15 w-30" />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;