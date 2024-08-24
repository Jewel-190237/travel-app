import React from 'react';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { TfiBook } from "react-icons/tfi";
import './styles.css';

import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const FeelingLost = () => {
    return (
        <div className='relative'>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <div className="relative w-full h-[600px]">
                            <Image
                                src='/img-1.png'
                                layout="fill"
                                objectFit="cover"
                                alt='Image 1'
                                className='rounded-3xl'
                            />
                        </div>
                        <div className='flex space-x-5 items-center absolute top-0 left-0 p-10 text-white '>
                            <div className='text-2xl bg-[#30AF5B] rounded-full '>
                                <div className='p-6 '>
                                    <TfiBook />
                                </div>
                            </div>
                            <div className=''>
                                <h1 className="text-white text-2xl  font-bold">Putuk Truno Camp</h1>
                                <h1 className="text-white text-xl pr-14 ">Prigen, Pasuruan</h1>
                            </div>
                        </div>
                        <div className='flex space-x-5 items-center absolute bottom-0 left-0 p-10 text-white '>
                            <div className='flex space-x-5'>
                                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-12">
                                        <Image src="/person-1.png" height={50} width={50} alt="Camp Picture" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-12">
                                        <Image src="/person-2.png" height={50} width={50} alt="Camp Picture" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-12">
                                        <Image src="/person-3.png" height={50} width={50} alt="Camp Picture" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-12">
                                        <Image src="/person-4.png" height={50} width={50} alt="Camp Picture" />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='text-white text-xl font-bold'>50+ Joined</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <div className="relative w-full h-[600px]">
                            <Image
                                src='/img-2.png'
                                layout="fill"
                                objectFit="cover"
                                alt='Image 1'
                                className='rounded-3xl'
                            />
                        </div>
                        <div className='flex space-x-5 items-center absolute top-0 left-0 p-10 text-white '>
                            <div className='text-2xl bg-[#30AF5B] rounded-full '>
                                <div className='p-6 '>
                                    <TfiBook />
                                </div>
                            </div>
                            <div className=''>
                                <h1 className="text-white text-2xl  font-bold">Putuk Truno Camp</h1>
                                <h1 className="text-white text-xl pr-14 ">Prigen, Pasuruan</h1>
                            </div>
                        </div>
                        <div className='flex space-x-5 items-center absolute bottom-0 left-0 p-10 text-white '>
                            <div className='flex space-x-5'>
                                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-12">
                                        <Image src="/person-1.png" height={50} width={50} alt="Camp Picture" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-12">
                                        <Image src="/person-2.png" height={50} width={50} alt="Camp Picture" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-12">
                                        <Image src="/person-3.png" height={50} width={50} alt="Camp Picture" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-12">
                                        <Image src="/person-4.png" height={50} width={50} alt="Camp Picture" />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='text-white text-xl font-bold'>50+ Joined</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

            <div className='max-w-[700px] bg-[#30AF5B] rounded-3xl text-white relative my-10 lg:my-0 lg:bottom-60  lg:left-[550px] z-10'> 
                <div className='p-16'>
                    <h1 className='text-4xl lg:text-6xl font-bold'>
                    Feeling Lost And<span className="block my-4">Not Knowing The</span>Way?
                    </h1>
                    <p className='mt-4 text-lg'>Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure</p>
                </div>
            </div>
        </div>
    );
};

export default FeelingLost;