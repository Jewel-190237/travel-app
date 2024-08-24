import Image from 'next/image';
import React from 'react';
import { CiImageOn } from "react-icons/ci";
import { LuCalendarDays } from "react-icons/lu";
import { PiTriangleLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";

const OurFeatures = () => {
    return (
        <div className='mt-32 md:mt-0 mb-32'>
            <div className=" w-full bg-cover bg-center bg-no-repeat rounded-xl " style={{ backgroundImage: "url('/feature-bg.png')" }}>
                <div className='flex flex-col justify-center items-center mb-10'>
                    <Image src="/camp.svg" height={50} width={50} alt="Camp Picture" className='relative right-28 md:right-52' />
                    <h1 className="font-bold text-3xl md:text-7xl text-black -mt-3">
                        Our Features
                    </h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-16'>
                    <div className='hidden lg:flex'>
                        <Image className='rotate-12' src='/phone.png ' height={400} width={400} alt='phone'></Image>
                    </div>
                    <div className='col-span-2'>
                        <div className='flex flex-col lg:flex-row gap-14'>
                            <div>
                                <div className='bg-[#30AF5B] rounded-full p-5 w-16'>
                                    <CiImageOn className='text-white text-2xl'></CiImageOn>
                                </div>
                                <p className='mt-4 text-2xl md:text-3xl font-extrabold'>Real maps can be offline</p>
                                <p className='mt-8 text-gray-400 text-justify'>We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location</p>
                            </div>
                            <div>
                                <div className='bg-[#30AF5B] rounded-full p-5 w-16'>
                                    <LuCalendarDays className='text-white text-2xl'></LuCalendarDays>
                                </div>
                                <p className='mt-4 text-2xl md:text-3xl  font-extrabold'>Set an adventure schedule</p>
                                <p className='mt-8 text-gray-400 text-justify'>Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, theres no more discussion</p>
                            </div>
                        </div>
                        <div className='mt-14 flex flex-col lg:flex-row gap-14'>
                            <div>
                                <div className='bg-[#30AF5B] rounded-full p-5 w-16'>
                                    <PiTriangleLight className='text-white text-2xl'></PiTriangleLight>
                                </div>
                                <p className='mt-4 text-2xl md:text-3xl  font-extrabold'>Technology using augment reality
                                </p>
                                <p className='mt-8 text-gray-400 text-justify'>Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection</p>
                            </div>
                            <div>
                                <div className='bg-[#30AF5B] rounded-full p-5 w-16'>
                                    <CiLocationOn className='text-white text-2xl'></CiLocationOn>
                                </div>
                                <p className='mt-4 text-2xl md:text-3xl  font-extrabold'>Real maps can be offline</p>
                                <p className='mt-8 text-gray-400 text-justify'>We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurFeatures;