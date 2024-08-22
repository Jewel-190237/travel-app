import Image from 'next/image';
import React from 'react';

const Guide = () => {
    return (
        <section>
            <div className='flex flex-col lg:flex-row gap-12 items-center'>
                <div className='flex-1'>
                    <Image src='/camp.svg' height={50} width={50} alt='camp' />
                    <h4 className='text-2xl text-[#30AF5B] uppercase'>We are here for you</h4>
                    <h1 className='text-6xl font-extrabold text-black w-full lg:w-4/6'>Guide You to Easy Path</h1>
                </div>
                <div className='flex-1'>
                    <p className='text-gray-400 text-justify'>Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
                </div>
                
            </div>
            <div className='mt-8'>
                    <Image className='rounded-2xl' src='/boat.png' height={30000} width={30000} alt='camp' />
                </div>

        </section>
    );
};

export default Guide;