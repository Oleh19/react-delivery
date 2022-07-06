import React, { useEffect, useRef } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';

const RowContainer = ({ flag, data, scrollValue }) => {

    const rowContainer = useRef( );
    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue]);

    return (
        <div id='first'
            ref={rowContainer}
            className="w-full flex items-center justify-center">
            <div className={`w-[86%] hover:w-full flex items-center my-12 scroll-smooth rounded-3xl duration-100
            transition-all ease-in-out bg-rowBg  gap-3
            ${flag ? 'overflow-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap'
                }`}>
                {data && data.map(item => (
                    <div
                        key={item.id}
                        className="w-275 min-w-[275px] md:hover:w-340 h-auto bg-cardOverlay 
                    rounded-lg my-11 p-2 mr-5 backdrop-blur-lg hover:drop-shadow-xl
                    duration-100">
                        <div className="w-full flex items-center">
                            <motion.img
                                whileHover={{ scale: 1.2 }}
                                src={item?.imageUrl}
                                alt='Image'
                                className='w-40 -mt-10 ml-2 drop-shadow-2xl rounded-2xl'
                            />
                            <motion.div
                                whileTap={{ scale: 0.75 }}
                                className="w-8 h-8 rounded-full bg-red-600 flex items-center
                            justify-center cursor-pointer hover:shadow-xl">
                                <MdShoppingBasket className='text-white' />
                            </motion.div>
                        </div>
                        <div className="w-full flex flex-col items-end justify-end">
                            <p className='text-textColor font-semibold text-base md:text-lg'>
                                {item?.title}
                            </p>
                            <p className='mt-1 text-sm text-gray-500'>{item?.calories} Calories</p>
                            <div className="flex items-center gap-8">
                                <p className='text-lg text-headingtColor font-semibold'>
                                    <span className='text-lg text-red-500'>$</span> {item?.price}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RowContainer;