import Image from 'next/image';
import React from 'react';

const GoFree = () => {
    return (
        <div
            className='rounded-3xl bg-cover bg-center '
            style={{ backgroundImage: "url('/pattern.png')" }}
        >
            <div className='flex flex-col lg:flex-row space-x-20'>
                <div className='p-4 md:p-20 '>
                    <h1 className='text-6xl font-bold text-white mt-10'>Get for <br /> free now!</h1>
                    <h1 className='text-xl font-bold text-white my-10 '>Available on iOS and Android</h1>
                    <div className='my-10 flex space-x-2 md:space-x-5 '>
                        <button className="btn md:btn-wide md:btn-lg space-x-4 rounded-full text-[#30AF5B]">
                            <Image src='/apple.svg' height={30} width={30} alt='Apple' className=''></Image>
                            App Store
                        </button>
                        <button className="btn md:btn-wide md:btn-lg space-x-4 rounded-full bg-[#292D27] text-white">
                            <Image src='/android.svg' height={30} width={30} alt='Apple' className=''></Image>
                            App Store
                        </button>
                    </div>
                </div>

                <div className='relative  overflow-hidden lg:h-[550px] flex items-center justify-center'>
                    <Image src='/phones.png' height={800} width={500} alt='Apple' className=' object-center'></Image>
                </div>
            </div>
        </div>
    );
};

export default GoFree;
