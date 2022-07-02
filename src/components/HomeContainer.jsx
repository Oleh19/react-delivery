import React from 'react';

import Delivery from '../img/delivery.jpeg';
import HeroBg from '../img/heroBG.jpeg';
import { heropData } from '../utils/data';

const HomeContainer = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
            id="home">
            <div className="py-2 px-2 flex-1 flex flex-col 
                items-start justify-center gap-6">

                <div className='flex items-center gap-2 justify-center 
                    bg-gray-300 px-4 py-2 mt-4 rounded-xl'>
                    <p className='text-base text-gray-700 font-semibold'>
                        Delivery</p>
                    <div className='w-6 h-6 rounded-xl overflow-hidden drop-shadow-xl'>
                        <img src={Delivery}
                            className='w-full h-full object-contain'
                            alt="delivery" />
                    </div>
                </div>

                <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide
                 text-headingColor'>
                    The Fastest Delivery in
                    <span className='text-red-600 text-[3rem] lg:text-[5rem]'>
                        Your City</span>
                </p>
                <p className='text-base text-textColor text-center md:text-left md:w-[80%]'></p>
                <button type='button'
                    className='bg-gradient-to-r 
                     from-gray-400 to bg-gray-300 w-full md:w-auto rounded-xl
                     px-4 py-3 hover:shadow-lg transition-all ease-in-out duration-100'>
                    Order Now
                </button>
            </div>
            <div className='py-2 flex-1 flex items-center relative'>
                <img src={HeroBg}
                    className='ml-auto h-420 w-full lh:h-650 lg:w-auto rounded-2xl drop-shadow-xl'
                    alt='bacground' />

                {/* <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center py-4 gap-4 flex-wrap">
                    {heropData && heropData.map(n => (
                        <div key={n.id} className=" lg:w-190 p-4 bg-cardOverlay rounded-3xl backdrop-blur-md flex flex-col  items-center justify-center drop-shadow-lg">
                            <img src={n.imgageSrc} className='w-12 lg:w-30 -mt-5 lg:-mt-10 rounded-xl' alt='img' />

                            <p className='text-base lg:text-xl font-semibold text-textColor mt-4 lg:mt-4'>{n.name}</p>

                            <p className='text-[12px] lg:text-sm text-gray-500 font-semibold my-1 lg:my-3'>{n.desc}</p>

                            <p className='text-sm font-semibold text-gray-500'><span className=' text-xs text-red-500'>
                                $</span>{n.price}</p>
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    )
}

export default HomeContainer