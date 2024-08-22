import Image from 'next/image';
import React from 'react';

const OurFeature = () => {
    return (
        <section>
            <div className='mt-20 mx-auto w-full md:w-4/6 lg:w-1/3'>
                <div className=''>
                    <div className='flex flex-col'>
                        <Image className='' src='/camp.svg' height={50} width={50} alt='feature'></Image>
                    </div>
                    <div>
                        <h1 className=' text-6xl font-extrabold text-black '>Our Feature</h1>
                    </div>
                </div>
            </div>

            <div className="mt-20 w-full bg-cover bg-center bg-no-repeat p-0 md:p-4 lg:p-10 h-[220px] md:h-[300px] lg:h-[550px] rounded-xl" style={{ backgroundImage: "url('/feature-bg.png')" }}>

            </div>

        </section>
    );
};


export default OurFeature;