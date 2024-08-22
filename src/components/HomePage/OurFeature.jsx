import Image from 'next/image';
import React from 'react';

const OurFeature = () => {
    return (
        <section>
            <div className='lg:w-2/5 mx-auto mt-20'>
                <div className=' '>
                    <div className='flex flex-col'>
                        <Image className='' src='/camp.svg' height={50} width={50} alt='feature'></Image>
                    </div>
                    <div>
                        <h1 className='-mt-2 text-6xl font-extrabold text-black '>Our Feature</h1>
                    </div>
                </div>
            </div>

            <div className="mt-10 w-full bg-cover bg-center bg-no-repeat p-0 md:p-4 lg:p-10 h-[220px] md:h-[300px] lg:h-[550px] rounded-xl" style={{ backgroundImage: "url('/feature-bg.png')" }}>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div>
                        <Image className='rotate-45' src='/phone.png ' height={200} width={200} alt='phone'></Image>
                    </div>
                    <div className='col-span-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque facere laborum voluptate eum laudantium pariatur? Provident, soluta delectus quos in laudantium molestias hic, nihil deserunt illo voluptate possimus impedit architecto!
                    </div>
                </div>

            </div>

        </section>
    );
};


export default OurFeature;