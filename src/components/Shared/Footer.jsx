import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <section className='bg-gray-400 '>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    <div>
                        <Image src='/hilink-logo.svg' alt='hlink' width={100} height={100} />
                    </div>
                    <div className=''>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};



export default Footer;