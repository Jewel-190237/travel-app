import Image from 'next/image';
import React from 'react';

const GuidYou = () => {
    return (
        <div className='mb-20 mt-0 lg:-mt-24'>
            <div className='flex flex-col md:flex-row justify-between'>
                <div>
                <Image src="/camp.svg" height={50} width={50} alt="Camp Picture" />
                    <p className='text-[#30AF5B] text-2xl mb-4 -mt-2 uppercase'>We are here for you</p>
                    <h1 className='text-2xl md:text-3xl lg:text-6xl font-bold text-black'>Guide You <br /> <span className='block my-4'>to Easy Path </span> </h1>
                    
                </div>
                <div className='max-w-[520px] flex items-center text-lg'>
                <p className='text-gray-30'>Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
                </div>
            </div>
        </div>
    );
};

export default GuidYou;