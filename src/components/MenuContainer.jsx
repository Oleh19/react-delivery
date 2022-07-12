import React, { useState } from 'react';
import { IoFastFood } from 'react-icons/io5';
import { categ, categories } from '../utils/data';
import { motion } from 'framer-motion';
import RowContainer from './RowContainer';
import { useStateValue } from './contex/StateProvider';

const MenuContainer = () => {
    const [filter, setFilter] = useState('');

    const [{ foodItems }, dispatch] = useStateValue();

    return (
        <section className='w-full my-6' id='menu'>
            <div className="w-full flex flex-col items-center justify-center">
                <p className='text-2x1 font-semibold capitalize text-headingColor 
                    relative before:absolute before:rounded-lg before:content before:w-32
                    before:h-1 before:-bottom-1 before:-left-0 before:bg-gradient-to-tr 
                  from-orange-300 to-orange-600 transition-all ease-in-out duration-100 mr-auto'>
                    Our Ice-Cream
                </p>

                <div className="w-full flex item-center justify-start lg:justify-center gap-8 py-6
                    overflow-x-scroll scrollbar-none">
                    {categories && categories.map((category) => (
                        <motion.div
                            whileTap={{ scale: 0.75 }}
                            key={category.id}
                            className={`group
                                ${filter === category.urlParamName
                                    ? 'bg-cartNumBg'
                                    : 'bg-card'}
                                    hover:bg-red-600 w-24 min-w-[94px] h-28 cursor-pointer rounded-lg
                                    shadow-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center
                                    duration-75 transition-all ease-in-out`}
                            onClick={() => setFilter(category.urlParamName)}>
                            <div className={` w-10 h-10 rounded-full
                            ${filter === category.urlParamName
                                    ? 'bg-card'
                                    : 'bg-cartNumBg'}
                                    group-hover:bg-card flex items-center justify-center`}>
                                <IoFastFood
                                    className={`${filter === category.urlParamName
                                        ? 'text-textColor'
                                        : 'text-white'}
                                        group-hover:text-textColor text-lg`} />
                            </div>
                            <p className={`text-sm ${filter === category.urlParamName
                                ? 'text-white'
                                : 'text-textColor'}
                                group-hover:text-card`}>
                                {category.name}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="w-full">
                    <RowContainer
                        flag={false}
                        data={foodItems?.filter(n => n.category === filter)} />
                </div>
            </div>
        </section>
    )
};

export default MenuContainer;