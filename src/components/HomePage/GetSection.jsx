import Image from 'next/image';
import React from 'react';

const GetSection = () => {
    return (
        <section>
            <div className="mt-10 mb-[800px] lg:mb-60 w-full bg-cover bg-center bg-no-repeat p-0 md:p-4 lg:p-10 h-[550px] rounded-2xl" style={{ backgroundImage: "url('/pattern.png')" }}>
                {/* <Image className='' src='/pattern.png' height={50} width={50} alt='feature'></Image> */}
                <div className='flex flex-col md:flex-row items-center'>
                    <div className='flex-1 p-10'>
                        <h2 className='text-white font-bold text-6xl'>Get for <br /> free now!
                        </h2>
                        <p className='mt-10 text-white'>Available on iOS and Android</p>
                        <div className='flex flex-col md:flex-row'>
                            <button className='w-full rounded-full bg-white text-green-700'>
                                <Image className='' src='/apple.svg' height={50} width={50} alt='feature'/>

                            </button>

                        </div>
                    </div>
                    <div>

                    </div>
                </div>

            </div>
        </section>
    );
};


export default GetSection;