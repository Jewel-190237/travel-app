import Image from 'next/image';
import React from 'react';
import { CiImageOn } from "react-icons/ci";
import { LuCalendarDays } from "react-icons/lu";
import { PiTriangleLight } from "react-icons/pi";


const OurFeature = () => {
    return (
        <section>
            <div className='lg:w-2/5 mx-auto mt-20'>
                <div className='flex flex-col'>
                    <div className=''>
                        {/* <Image className='' src='/camp.svg' height={50} width={50} alt='feature'></Image> */}
                    </div>
                    <div>
                        <h1 className='text-center -mt-2 text-6xl font-extrabold text-black '>Our Feature</h1>
                    </div>
                </div>
            </div>

            <div className="mt-10 mb-60 w-full bg-cover bg-center bg-no-repeat p-0 md:p-4 lg:p-10 h-[220px] md:h-[300px] lg:h-[550px] rounded-xl" style={{ backgroundImage: "url('/feature-bg.png')" }}>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='hidden lg:flex'>
                        <Image className='rotate-12' src='/phone.png ' height={400} width={400} alt='phone'></Image>
                    </div>
                    <div className='col-span-2'>
                        <div className='flex flex-col lg:flex-row gap-14'>
                            <div>
                                <div className='bg-[#30AF5B] rounded-full p-5 w-16'>
                                    <CiImageOn className='text-white text-2xl'></CiImageOn>
                                </div>
                                <p className='mt-4 text-3xl font-extrabold'>Real maps can be offline</p>
                                <p className='mt-8 text-gray-400 text-justify'>We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location</p>
                            </div>
                            <div>
                                <div className='bg-[#30AF5B] rounded-full p-5 w-16'>
                                    <LuCalendarDays className='text-white text-2xl'></LuCalendarDays>
                                </div>
                                <p className='mt-4 text-3xl font-extrabold'>Set an adventure schedule</p>
                                <p className='mt-8 text-gray-400 text-justify'>Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, theres no more discussion</p>
                            </div>
                        </div>
                        <div className='mt-20 flex flex-col lg:flex-row gap-14'>
                            <div>
                                <div className='bg-[#30AF5B] rounded-full p-5 w-16'>
                                    <CiImageOn className='text-white text-2xl'></CiImageOn>
                                </div>
                                <p className='mt-4 text-3xl font-extrabold'>Real maps can be offline</p>
                                <p className='mt-8 text-gray-400 text-justify'>We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location</p>
                            </div>
                            <div>
                                <div className='bg-[#30AF5B] rounded-full p-5 w-16'>
                                    <CiImageOn className='text-white text-2xl'></CiImageOn>
                                </div>
                                <p className='mt-4 text-3xl font-extrabold'>Real maps can be offline</p>
                                <p className='mt-8 text-gray-400 text-justify'>We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};


export default OurFeature;