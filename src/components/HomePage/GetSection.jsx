import Image from 'next/image';
import React from 'react';

const GetSection = () => {
    return (
        <section>
            <div className="mt-10 mb-[800px] lg:mb-60 w-full bg-cover bg-center bg-no-repeat p-0 md:p-4 lg:p-10 h-full lg:h-[600px] rounded-2xl" style={{ backgroundImage: "url('/pattern.png')" }}>
                {/* <Image className='' src='/pattern.png' height={50} width={50} alt='feature'></Image> */}
                <div className='flex flex-col items-center lg:items-start md:flex-row gap-10 p-4'>
                    <div className='flex-1 pt-0 lg:pt-20'>
                        <h2 className='text-white font-bold text-6xl'>Get for <br /> free now!
                        </h2>
                        <p className='mt-10 text-white'>Available on iOS and Android</p>
                        <div className='flex flex-col lg:flex-row gap-8 mt-10'>
                            <button className='flex items-center justify-center gap-3 w-full rounded-full bg-white text-green-700 p-4'>
                                <Image className='' src='/apple.svg' height={20} width={20} alt='feature' />
                                app store
                            </button>
                            <button className='flex items-center justify-center gap-3 w-full rounded-full  text-white border border-white p-4'>
                                <Image className='' src='android.svg' height={20} width={20} alt='feature' />
                                play store
                            </button>

                        </div>
                    </div>
                    <div className='flex-1 flex justify-center items-center lg:h-[850px] overflow-hidden -mt-40'>
                        <Image className='object-center ' src='/phones.png' height={500} width={500} alt='feature'></Image>
                    </div>
                </div>

            </div>
        </section>
    );
};


export default GetSection;