import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, NavLink } from "react-router-dom";
export default function Header(props) {
    const [show, setShow] = useState(null);
    // const [profile, setProfile] = useState(false);
    const handleChange = (e) => {
        e.preventDefault()
        props.change(e.target.value)
    }
    let counter = useSelector((state) => state.favorites.counter)
    return (
        <>
            <div className="bg-gray-200 h-full w-full">
                {/* Code block starts */}
                <nav className="w-full mx-auto hidden xl:block bg-gray-800 shadow">
                    <div className="container px-6 justify-between h-16 flex items-center lg:items-stretch mx-auto">
                        <div className="h-full flex items-center">
                            <div className="mr-10 flex items-center">
                                <img className="shadow-2xl shadow-slate-50 bg-white rounded-2xl" src="./assets/images/logo.png" alt="logo" width={50} height="50" />
                                <h3 className="text-base text-white font-bold tracking-normal leading-tight ml-3 hidden lg:block">Movies App</h3>
                            </div>
                            <ul className="pr-12 xl:flex items-center h-full hidden">
                                <li className="cursor-pointer h-full flex items-center hover:text-orange-700 text-sm text-white tracking-normal ">
                                    <NavLink to="/movies" className={isActive => "w-full h-full  flex " + (isActive ? "border-b-2 border-orange-700" : "")}>

                                        <p className="flex self-center">Movies</p>
                                    </NavLink>
                                </li>
                                <li className="cursor-pointer h-full flex items-center hover:text-orange-700 text-sm text-white mx-10 tracking-normal ">
                                    <NavLink to="/favorites" className={isActive => "w-full h-full  flex " + (isActive ? "border-b-2 border-orange-700" : "")}>

                                        <p className="flex self-center">
                                            Favorites

                                        </p>
                                        <div className="mask mask-star-2 ml-2 w-11  bg-orange-700 shadow-xl shadow-slate-400 ">
                                            <p className="p-4 pt-5 text-white font-bold text-xl">{counter}</p>
                                        </div>
                                    </NavLink>

                                </li>

                            </ul>
                        </div>
                        <div className="h-full xl:flex items-center justify-end hidden">
                            <div className="w-full h-full flex items-center">
                                <div className="w-full pr-12 h-full flex items-center border-gray-700 border-r">
                                    <div className="relative w-full">
                                        <div className="text-white absolute ml-3 inset-0 m-auto w-4 h-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={10} cy={10} r={7} />
                                                <line x1={21} y1={21} x2={15} y2={15} />
                                            </svg>
                                        </div>
                                        <input value={props.inputSearch} onInput={handleChange} onFocus={handleChange} className="border border-gray-700 focus:outline-none focus:border-indigo-700 w-56 rounded text-sm text-white bg-gray-700 pl-8 py-2" type="text" placeholder="Search" />
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </nav>
                {/* Navbar */}
                <nav>
                    <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-gray-800 fixed top-0 z-40">
                        <div className="w-24">
                            <img className="shadow-md shadow-slate-500 bg-white rounded-2xl" src="./assets/images/logo.png" alt="logo" width={50} height="50" />

                        </div>
                        <div>
                            <div id="menu" className="text-white hover:cursor-pointer" onClick={() => setShow(!show)}>
                                {show ? (
                                    " "
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1={4} y1={6} x2={20} y2={6} />
                                        <line x1={4} y1={12} x2={20} y2={12} />
                                        <line x1={4} y1={18} x2={20} y2={18} />
                                    </svg>
                                )}
                            </div>
                        </div>
                    </div>
                    {/*Mobile responsive sidebar*/}
                    <div className={show ? "absolute xl:hidden w-full h-screen top-0 transform -translate-x-0 z-50" : "absolute xl:hidden w-full h-full transform -translate-x-full z-50"} id="mobile-nav">
                        <div className="bg-gray-800 opacity-50 w-full h-full" onClick={() => setShow(!show)} />
                        <div className="w-64 z-40 fixed overflow-y-auto  top-0 bg-gray-800 shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
                            <div className="px-6 h-full ">
                                <div className="flex flex-col justify-between h-full w-full ">
                                    <div>
                                        <div className="mt-6 flex w-full items-center justify-between">
                                            <div className="flex items-center justify-between w-full">
                                                <div className="flex items-center">
                                                    <img className="shadow-md shadow-slate-500 bg-white rounded-2xl" src="./assets/images/logo.png" alt="logo" width={50} height="50" />
                                                    <p className="text-base  text-white ml-3">Movies</p>
                                                </div>
                                                <div id="cross" className="text-white hover:cursor-pointer" onClick={() => setShow(!show)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <line x1={18} y1={6} x2={6} y2={18} />
                                                        <line x1={6} y1={6} x2={18} y2={18} />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="f-m-m">
                                            {/* <a className="cursor-pointer"> */}
                                            <li className="text-white pt-10">
                                                <div className="flex items-center">
                                                    <NavLink to="/movies" className={isActive => "w-full h-full  flex " + (isActive ? "text-orange-700" : "text-white")}>

                                                        <div className="w-6 h-6 md:w-8 md:h-8 ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <rect x={4} y={4} width={6} height={6} rx={1} />
                                                                <rect x={14} y={4} width={6} height={6} rx={1} />
                                                                <rect x={4} y={14} width={6} height={6} rx={1} />
                                                                <rect x={14} y={14} width={6} height={6} rx={1} />
                                                            </svg>
                                                        </div>
                                                        <p className=" xl:text-base text-base ml-3">
                                                            Movies
                                                        </p>
                                                    </NavLink>

                                                </div>
                                            </li>
                                            {/* </a> */}
                                            {/* <a className="cursor-pointer"> */}
                                            <li className="text-white pt-8">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <NavLink to="/favorites" className={isActive => "w-full h-full  flex " + (isActive ? "text-orange-700" : "text-white")}>

                                                            <div className="w-6 h-6 md:w-8 md:h-8 ">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                                                </svg>
                                                            </div>
                                                            <p className=" xl:text-base  text-base ml-3">Favorites</p>
                                                        </NavLink>
                                                    </div>

                                                </div>
                                            </li>
                                            {/* </a> */}
                                        </ul>
                                    </div>
                                    <div className="w-full pt-4">
                                        <div className="flex justify-center mb-4 w-full">
                                            <div className="relative w-full">
                                                <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth={1} stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <circle cx={10} cy={10} r={7} />
                                                        <line x1={21} y1={21} x2={15} y2={15} />
                                                    </svg>
                                                </div>
                                                <input value={props.inputSearch} onChange={handleChange} className="bg-gray-100 focus:outline-none rounded w-full text-sm text-gray-500 bg-gray-700 pl-10 py-2" type="text" placeholder="Search" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Sidebar ends */}

                {/* Code block ends */}
            </div>
        </>
    );
}