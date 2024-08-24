import Image from 'next/image';
import React from 'react';

const Shared = () => {
    return (
        <div className='max-w-[1320px] mx-auto mt-40 md:mt-20 '>
            <footer className="footer px-8 md:px-0">
                <nav>
                    <a className="font-bold text-2xl -mt-1"><span>Hi</span><span className="text-[#30AF5B]">link.</span></a>
                </nav>
                <nav>
                    <h6 className="text-xl font-semibold  text-black">Learn More</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                </nav>
                <nav>
                    <h6 className="text-xl font-semibold text-black">Our Community</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                </nav>
                <nav>
                    <h6 className="text-xl font-semibold text-black">Contact Us</h6>
                    <a className="link link-hover text-black">Admin Officer: 123-456-7890</a>
                    <a className="link link-hover text-black">Email Officer: hilink@akinthil.com</a>
                </nav>
                <nav>
                    <h6 className="text-xl font-semibold text-black -mt-1">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <Image src="/twitter.svg" height={30} width={30} alt="Camp Picture" />
                        </a>
                        <a>
                            <Image src="/facebook.svg" height={30} width={30} alt="Camp Picture" />
                        </a>
                        <a>
                            <Image src="/youtube.svg" height={30} width={30} alt="Camp Picture" />
                        </a>
                        <a>
                            <Image src="/instagram.svg" height={30} width={30} alt="Camp Picture" />
                        </a>
                        <a>
                            <Image src="/wordpress.svg" height={30} width={30} alt="Camp Picture" />
                        </a>
                    </div>
                </nav>
            </footer>
            <div className='border-[1px] border-gray-30 my-10'></div>
            <div>
                <footer className="footer footer-center mb-10  p-4">
                    <aside>
                        <p>Copyright © {new Date().getFullYear()} Hilink | All rights reserved</p>
                    </aside>
                </footer>
            </div>
        </div>
    );
};

export default Shared;