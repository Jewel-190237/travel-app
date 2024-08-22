import Image from 'next/image';
import React from 'react';
import { Flex, Rate } from 'antd';

import { MdOutlineSlowMotionVideo } from "react-icons/md";



const HomePage = () => {
    return (
        <div className='flex gap-8'>
            <div className='flex-1 ml-5'>
                <div className='mt-10'>
                    <Image className='' src='/camp.svg' height={50} width={50} alt='icon' />
                </div>
                <h1 className='text-8xl font-extrabold text-black -mt-4'>Putuk Truno <br /> Camp Area</h1>
                <p className='mt-5 text-[#8f7d7d]'>We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app</p>

                <div className='mt-10 flex gap-8 items-center'>
                    <div>
                        <Flex gap="middle">
                            <Rate defaultValue={5} />
                        </Flex>
                    </div>
                    <div className='text-xl'>
                        <span className='font-bold text-[#021639]'>198k</span> <span className='text-[#021639]'>Excellent Reviews</span>
                    </div>
                </div>

                <div className='mt-10 flex gap-12 items-center'>
                    <div>
                        <button className='rounded-full font-bold p-5 text-white bg-[#30AF5B] text-xl'>
                            Download App
                        </button>
                    </div>
                    <div className=''>

                        <button className=' bg-white text-black rounded-3xl flex items-center gap-2'>
                            <Image className='' src='/play.svg' height={30} width={30} alt='icon' />
                            <span className='font-bold text-xl'>How it works</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex-1'>
                <Image className='w-full' src='/pattern-bg.png' height={100} width={100} alt='icon' />
            </div>

        </div>
    );
};

export default HomePage;