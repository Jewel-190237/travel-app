import Image from 'next/image';
import React from 'react';

const Guide = () => {
    return (
        <section>
            <div className='flex flex-col lg:flex-row gap-12 items-start lg:items-center justify-between'>
                <div className='flex-1'>
                    <Image src='/camp.svg' height={50} width={50} alt='camp' />
                    <h4 className='text-2xl text-[#30AF5B] uppercase'>We are here for you</h4>
                    <h1 className='text-6xl font-extrabold text-black'>Guide You <br className='hidden lg:flex' /> to Easy Path</h1>
                </div>
                <div className='flex-1'>
                    <p className='text-gray-400 text-justify'>Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
                </div>
            </div>

            <div className="w-full bg-cover bg-center bg-no-repeat p-0 md:p-4 lg:p-10 h-[220px] md:h-[300px] lg:h-[550px] rounded-xl" style={{ backgroundImage: "url('/boat.png')" }}>
                <div className='bg-white w-80 h-56 rounded-3xl mt-10 ml-10 pl-5'>
                    <div className='flex gap-4'>
                        <div>
                            <Image className='pt-5 ' src='/meter.svg' height={30} width={30} alt='camp' />
                        </div>
                        <div>
                            <div className=' mt-6 flex justify-between items-center gap-10'>
                                <p className='text-gray-400 text-xl'>Destination</p>
                                <p className='text-[#30AF5B] font-bold'>48 min</p>
                            </div>
                            <h3 className='text-black text-xl font-bold mt-3'>Aguas Calientes</h3>
                            <p className='text-gray-400 text-xl mt-12'>Start track</p>
                            <h3 className='text-black text-xl font-bold mt-3'>Wonorejo Pasuruan                            </h3>
                        </div>
                    </div>
                </div>
            </div>
lll
            <Image src='/calendar.svg' height={5000} width={5000} alt='camp' />

        </section>
    );
};

export default Guide;