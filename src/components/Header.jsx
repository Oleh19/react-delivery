import React, { useState } from 'react';
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md';
import { motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';

import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';

import { Link } from 'react-router-dom';
import { async } from '@firebase/util';
import { useStateValue } from './contex/StateProvider';
import { actionType } from './contex/reducer';

const Header = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{ user }, dispatch] = useStateValue();

    const [isMenu, setIsMenu] = useState(false);

    const login = async () => {
        if (!user) {
            const { user: { oreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider)
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            });
            localStorage.setItem('user', JSON.stringify(providerData[0]));
        } else {
            setIsMenu(!isMenu);
        }
    };

    const logout = () => {
        setIsMenu(false)
        localStorage.clear()
        dispatch({
            type: actionType.SET_USER,
            user: null,
        });
    };

    return (
        <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary ">

            {/* desktop */}

            <div className="hidden md:flex w-full h-full item-senter justify-between">
                <Link to={'/'} className='flex items-center gap-2'>
                    <motion.img whileTap={{ scale: 0.85 }}
                        src={Logo}
                        className="w-11 object-cover"
                        alt="logo"
                    />
                    <p className='text-headingColor text-xl font-bold'>
                        Cossack <br />Delivery</p>
                </Link>

                <div className="flex items-center gap-8">
                    <motion.ul
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className="flex items-center gap-8">
                        <li className='text-base text-textColor 
                        hover:text-headingColor duration-100 
                        transition-all ease-in-out cursor-pointer'>
                            Home
                        </li>
                        <li className='text-base text-textColor 
                        hover:text-headingColor duration-100 
                        transition-all ease-in-out cursor-pointer'>
                            Menu
                        </li>
                        <li className='text-base text-textColor 
                        hover:text-headingColor duration-100 
                        transition-all ease-in-out cursor-pointer'>
                            About Us
                        </li>
                        <li className='text-base text-textColor 
                        hover:text-headingColor duration-100 
                        transition-all ease-in-out cursor-pointer'>
                            Service
                        </li>
                    </motion.ul>

                    <div className="relative flex items-center justify-center">
                        <MdShoppingBasket
                            className="text-textColor text-2x1 ml-8 cursor-pointer 
                        w-6 h-6 " />
                        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full
                         bg-cartNumBg flex items-center justify-center">
                            <p className='text-xs text-white font-semibold'>2</p>
                        </div>
                    </div>

                    <div className="relative">
                        <motion.img whileTap={{ scale: 0.7 }}
                            src={user ? user.photoURL : Avatar}
                            className="w-16 min-w-[40px] h-12 min-h-[40px] cursor-pointer rounded-full"
                            alt='avatar'
                            onClick={login}
                        />
                        {
                            isMenu && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.6 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.6 }}
                                    className='flex flex-col w-40 bg-gray-50 rounded-lg absolute shadow-xl right-0'>
                                    {
                                        user && user.email === "ilchenko19061998@gmail.com" && (
                                            <Link to={'/createItem'}>
                                                <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 
                                    transitio(n-all duration-100 ease-in-out text-textColor text-base'
                                                    onClick={() => setIsMenu(false)}>
                                                    New item <MdAdd />
                                                </p>
                                            </Link>
                                        )
                                    }
                                    <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200
                                    transition-all duration-100 ease-in-out text-textColor text-base'
                                        onClick={logout}>
                                        Log out <MdLogout />
                                    </p>
                                </motion.div>
                            )
                        }
                    </div>
                </div>
            </div>

            {/* mobile */}

            <div className="flex md:hidden w-full h-full items-center justify-between ">
                <div className="relative flex items-center justify-center">
                    <MdShoppingBasket className="text-textColor text-2x1 ml-8 
                    cursor-pointer w-6 h-6 " />
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full 
                        bg-cartNumBg flex items-center justify-center">
                        <p className='text-xs text-white font-semibold'>2</p>
                    </div>
                </div>

                <Link to={'/'} className='flex items-center gap-2'>
                    <motion.img whileTap={{ scale: 0.85 }}
                        src={Logo}
                        className="w-11 object-cover"
                        alt="logo"
                    />
                    <p className='text-headingColor text-xl font-bold'>
                        Cossack <br />gunpowder</p>
                </Link>

                <div className='relative'>
                    <motion.img whileTap={{ scale: 0.7 }}
                        src={user ? user.photoURL : Avatar}
                        className="w-16 min-w-[40px] h-12 min-h-[40px] cursor-pointer rounded-full"
                        alt='avatar'
                        onClick={login}
                    />
                    {
                        isMenu && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                className='flex flex-col w-40 bg-gray-50 rounded-lg 
                                absolute shadow-xl right-0'>
                                {
                                    user && user.email === "ilchenko19061998@gmail.com" && (
                                        <Link to={'/createItem'}>
                                            <p className='rounded-lg px-4 py-2 flex items-center 
                                            gap-3 cursor-pointer hover:bg-slate-200 
                                            transition-all duration-100 ease-in-out 
                                            text-textColor text-base'>
                                                New item <MdAdd />
                                            </p>
                                        </Link>
                                    )
                                }
                                <ul
                                    className="flex flex-col">
                                    <li className='rounded-lg px-4 py-2 text-base text-textColor hover:text-headingColor 
                                    hover:bg-slate-200 duration-100 transition-all ease-in-out cursor-pointer'>
                                        Home
                                    </li>
                                    <li className='rounded-lg px-4 py-2 text-base text-textColor hover:text-headingColor 
                                    hover:bg-slate-200 duration-100 transition-all ease-in-out cursor-pointer'>
                                        Menu
                                    </li>
                                    <li className='rounded-lg px-4 py-2 text-base text-textColor hover:text-headingColor 
                                    hover:bg-slate-200 duration-100 transition-all ease-in-out cursor-pointer'>
                                        About Us
                                    </li>
                                    <li className='rounded-lg px-4 py-2 text-base text-textColor hover:text-headingColor 
                                    hover:bg-slate-200 duration-100 transition-all ease-in-out cursor-pointer'>
                                        Service
                                    </li>
                                </ul>
                                <p className='m-2 p-2 shadow-lg rounded-lg px-4 py-2 flex items-center gap-3 cursor-pointer
                                 hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base 
                                 justify-center bg-gray-200'
                                    onClick={logout}>
                                    Log out <MdLogout />
                                </p>
                            </motion.div>
                        )
                    }
                </div>
            </div>
        </header>
    )
};

export default Header;