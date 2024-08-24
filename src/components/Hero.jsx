
import Image from 'next/image';
import React from 'react';
import { CloseOutlined } from '@ant-design/icons';

const Hero = () => {
    return (
        <div className="ml-5 mt-10 mb-0 md:mb-16 lg:mb-0  relative">
            <div className="flex flex-col lg:flex-row space-x-8">
                <div className="flex-1 z-10">
                    <Image src="/camp.svg" height={50} width={50} alt="Camp Picture" />
                    <h1 className="font-bold text-3xl md:text-7xl text-black -mt-3">
                        Putuk Truno
                        <span className="block mt-6">Camp Area</span>
                    </h1>
                    <p className="mt-6 text-gray-30 max-w-[520px]">
                        We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
                    </p>
                    <div className="flex mt-6 space-x-4">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        </div>
                        <p className="text-black">
                            <span className="font-bold">198k</span> Excellent Reviews
                        </p>
                    </div>
                    <div className="mt-6 flex space-x-4 md:space-x-12">
                        <button className="btn md:btn-lg btn-ghost text-white md:text-xl rounded-full bg-[#30AF5B]">Download App</button>
                        <div className="flex space-x-3">
                            <Image src="/play.svg" height={30} width={30} alt="Play" />
                            <p className="pt-5 font-bold">How we work?</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 relative lg:right-10 -top-20 h-[500px] ">
                    <div className="  ">
                        <Image
                            src="/hero.png"
                            layout="fill"
                            objectFit="cover"
                            alt="Hero Image"
                        />
                    </div>
                    <div className="bg-[#292C27] rounded-3xl max-w-[290px] relative top-32 md:top-28 left-0 md:left-4 z-10">
                        <div className="p-8 mb-20 md:mb-0">
                            <div className="text-gray-30 md:text-lg flex justify-between">
                                <h1>Location</h1>
                                <CloseOutlined />
                            </div>
                            <h1 className="text-white md:text-xl mb-8">Aguas Calientes</h1>
                            <div className="flex justify-between text-gray-30 md:text-lg">
                                <h1>Distance</h1>
                                <h1 className="mr-3">Elevation</h1>
                            </div>
                            <div className="text-white md:text-xl flex justify-between">
                                <h1>173.28 mi</h1>
                                <h1>2.040 km</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;



