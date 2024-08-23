import Image from 'next/image';
import React from 'react';
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
    return (
        <section className='bg-gray-400 '>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col lg:flex-row p-5 gap-10'>
                    <div>
                        <Image src='/hilink-logo.svg' alt='hlink' width={100} height={100} />
                    </div>
                    <div className='flex flex-col lg:flex-row'>
                        <div className='flex flex-col lg:flex-row w-full'>
                            <div className='flex w-full justify-between border border-red-800'>
                                <div className='flex-1'>
                                    <h2 className='text-black font-bold text-xl mt-1'>Learn More</h2>
                                    <div className='mt-8'>
                                        <p >Job</p>
                                        <p className='mt-3'>Contact Us</p>
                                        <p className='mt-3'>Environment </p>
                                        <p className='mt-3'>About HiLink</p>
                                        <p className='mt-3'>Private Policy</p>
                                    </div>
                                </div>
                                <div className='flex-1'>
                                    <h2 className='text-black font-bold text-xl mt-1'>Learn More</h2>
                                    <div className='mt-8'>
                                        <p >Job</p>
                                        <p className='mt-3'>Contact Us</p>
                                        <p className='mt-3'>Environment </p>
                                        <p className='mt-3'>About HiLink</p>
                                        <p className='mt-3'>Private Policy</p>
                                    </div>
                                </div>
                                <div className='flex-1'>
                                    <h2 className='text-black font-bold text-xl mt-1'>Learn More</h2>
                                    <div className='mt-8'>
                                        <p >Job</p>
                                        <p className='mt-3'>Contact Us</p>
                                        <p className='mt-3'>Environment </p>
                                        <p className='mt-3'>About HiLink</p>
                                        <p className='mt-3'>Private Policy</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div>
                        <h2 className='text-black font-bold text-xl mt-1 mb-3'>Social Media</h2>
                            <div className='flex gap-3 text-3xl'>
                                <FaFacebook></FaFacebook>
                                <FaFacebook></FaFacebook>
                                <FaFacebook></FaFacebook>
                                <FaFacebook></FaFacebook>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};



export default Footer;