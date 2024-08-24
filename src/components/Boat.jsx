import Image from 'next/image';
import React from 'react';

const Boat = () => {
    return (
        <div className=' mb-40 md:mb-10'>
            <div className='relative'>

                <Image
                    src="/boat.png"
                    alt="Camp Picture"
                    layout="responsive" 
                    width={1000}
                    height={1000}
                    className='rounded-3xl'
                />
              <div className='bg-white absolute top-20 left-20 rounded-3xl max-w-[300px]'>
                <div className='p-5 flex space-x-4 '>
                    <div>
                    <Image
                    src="/meter.svg"
                    alt="Camp Picture"
                   
                    width={30}
                    height={30}
                     className='rounded-3xl'
                />
                    </div>
                 <div>
                <div className='flex space-x-12'>
                    <p className='text-gray-30  md:text-lg'>Destination</p>
                    <p className='text-[#30AF5B] md:text-lg'>48 min</p>
                </div>
                  <h1 className=' md:text-xl text-black font-bold my-2'>Aguas Calientes</h1>
                  <div className='pt-8 md:pt-14'>
                    <p className='text-gray-30 md:text-lg'>Start track</p>
                    <h1 className=' md:text-xl text-black font-bold my-2'>Wonorejo Pasuruan
                    </h1>
                  </div>
                </div>
                </div>
                </div>
            </div>

        </div>
    );
};

export default Boat;