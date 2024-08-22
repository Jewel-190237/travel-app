import Image from 'next/image';
import React from 'react';

const Guide = () => {
    return (
        <section>
            <div className='flex flex-col lg:flex-row gap-20'>
                <div >
                    <Image src='/public/camp.svg' height={50} width={50} alt='camp' />
                    <h4 className='text-2xl text-[#30AF5B]'>We are here for you</h4>
                    <h1 className='text-6xl font-extrabold text-black'>Guide You to Easy Path</h1>
                </div>
                <div>
                    <p className='text-gray-400 text-justify'>Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
                </div>
            </div>

        </section>
    );
};

export default Guide;