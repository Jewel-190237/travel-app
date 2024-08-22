import Image from 'next/image';
import React from 'react';
import { Flex, Rate } from 'antd';
import { CloseOutlined } from '@ant-design/icons'

const HomePage = () => {
    return (
        <section>
            <div className=''>
                <div className='-mt-40 ml-[600px]'>
                    {/* style={{ backgroundImage: "url('/hero.png')" }} */}
                    <Image className=' ' src='/hero.png' height={1000} width={1000} alt='icon' />
                </div>
                <div className='relative -top-[400px] w-full md:w-1/2 ml-5'>
                    <div className='mt-10'>
                        <Image className='' src='/camp.svg' height={50} width={50} alt='icon' />
                    </div>
                    <h1 className='text-6xl md:text-8xl font-extrabold text-black -mt-4'>Putuk Truno Camp Area</h1>
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

                    <div className='mt-10 flex flex-col md:flex-row gap-12 items-center'>
                        <div className='w-full'>
                            <button className='rounded-full w-full font-bold p-5 text-white bg-[#30AF5B] text-xl'>
                                Download App
                            </button>
                        </div>
                        <div className=' w-full mx-auto'>
                            <button className='w-full bg-white text-black rounded-3xl flex items-center justify-center gap-2'>
                                <Image className='' src='/play.svg' height={30} width={30} alt='icon' />
                                <span className='font-bold text-xl'>How it works</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='relative rounded-2xl -right-[670px] -top-[840px] bg-[#292C27] w-72 h-52 text-white'>
                    <div className='flex pt-6  pl-4 justify-between'>
                        <p className='text-gray-400'>Location</p>
                        <CloseOutlined className='pr-8' />
                    </div>
                    <h3 className='pl-4 font-bold text-xl text-white'>Aguas Calientes</h3>

                    <div className='flex justify-between'>
                        <div className='mt-3 pt-6  pl-4'>
                            <p className='text-gray-400'>Distance</p>
                            <h3 className='font-bold text-xl text-white'>173.28 mi</h3>
                        </div>
                        <div className='mt-3 pt-6  pr-4'>
                            <p className='text-gray-400'>Elevation</p>
                            <h3 className='font-bold text-xl text-white'>2.040 km</h3>
                        </div>

                    </div>


                </div>
            </div>


        </section>
    );
};

export default HomePage;