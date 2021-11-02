import React, { useEffect, useState } from "react"

export function Admin() {
    const [count, setCount] = useState<string>()

    //   const refreshCounter = async () => {
    //     const res = await counter.getValue()
    //     setCount(res.toString())
    //   }

    //   useEffect(() => {
    //     refreshCounter()
    //   }, [])

    //   const onIncrementClick = async () => {
    //     await counter.increment()
    //     refreshCounter()
    //   }

    return (
        <>
            <div className="dark">
                <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">

                    {/*  Sidebar */}
                    <div className="fixed flex flex-col  left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
                        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                            <ul className="flex flex-col py-4 space-y-1">
                                <li className="px-5 hidden md:block">
                                    <div className="flex flex-row items-center h-8">
                                        <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Icptree</div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                        <span className="inline-flex justify-center items-center ml-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                                <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                            </svg>
                                        </span>

                                        <span className="ml-2 text-sm tracking-wide truncate">My Page</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                        <span className="inline-flex justify-center items-center ml-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                            </svg>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">analytics</span>
                                        <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full">New</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                        <span className="inline-flex justify-center items-center ml-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">referrals</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                        <span className="inline-flex justify-center items-center ml-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path className="stroke-1" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                            </svg>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">Notifications</span>
                                        <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span>
                                    </a>
                                </li>
                                <li className="px-5 hidden md:block">
                                    <div className="flex flex-row items-center mt-5 h-8">
                                        <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Settings</div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                        <span className="inline-flex justify-center items-center ml-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path className="stroke-1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                            </svg>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">Account</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                        <span className="inline-flex justify-center items-center ml-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">Settings</span>
                                    </a>
                                </li>
                            </ul>
                            <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright NnsDAO Labs @2021</p>
                        </div>
                    </div>

                    <div className="h-full ml-14 mt-5 mb-10 md:ml-64">

                        <div className="mt-8 mx-4">
                            <div className="grid grid-cols-1 md:grid-cols-2">

                                <div className="bg-gray-800 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg md:max-w-2xl">
                                    <h2>Add New  Links & Embeds </h2>
                                    <div className="mt-6">
                                        <form action="#" method="POST" className="space-y-6">
                                            <div>
                                                <label className="block text-left text-sm font-medium text-white">Title</label>
                                                <div className="mt-1">
                                                    <input id="Title" name="Title" type="Title" placeholder="Your Title" className="
                                                        block
                                                        w-full
                                                        px-5
                                                        py-3
                                                        text-base text-neutral-600
                                                        placeholder-gray-500
                                                        transition
                                                        duration-500
                                                        ease-in-out
                                                        transform
                                                        border border-transparent
                                                        rounded-lg
                                                        bg-gray-50
                                                        focus:outline-none
                                                        focus:border-transparent
                                                        focus:ring-2
                                                        focus:ring-white
                                                        focus:ring-offset-2
                                                        focus:ring-offset-gray-300
                                                        " />
                                                </div>
                                            </div>
                                            <div className="space-y-1">
                                                <label className="block text-left text-sm font-medium text-neutral-600"> Url </label>
                                                <div className="mt-1">
                                                    <input id="url" name="url" type="url" placeholder="Your Url" className="
                                                        block
                                                        w-full
                                                        px-5
                                                        py-3
                                                        text-base text-neutral-600
                                                        placeholder-gray-500
                                                        transition
                                                        duration-500
                                                        ease-in-out
                                                        transform
                                                        border border-transparent
                                                        rounded-lg
                                                        bg-gray-50
                                                        focus:outline-none
                                                        focus:border-transparent
                                                        focus:ring-2
                                                        focus:ring-white
                                                        focus:ring-offset-2
                                                        focus:ring-offset-gray-300
                                                        "/>
                                                </div>
                                            </div>

                                            <div>
                                                <button type="submit" className="
                                                        flex
                                                        items-center
                                                        justify-center
                                                        w-full
                                                        px-10
                                                        py-4
                                                        text-base
                                                        font-medium
                                                        text-center text-white
                                                        transition
                                                        duration-500
                                                        ease-in-out
                                                        transform
                                                        bg-blue-400
                                                        rounded-xl
                                                        hover:bg-blue-500
                                                        focus:outline-none
                                                        focus:ring-2
                                                        focus:ring-offset-2
                                                        focus:ring-blue-500
                                                        "> Add </button>
                                            </div>
                                        </form>
                                    </div>

                                </div>

                            </div>

                            <div className="block py-10">
                                <div className="max-w-2xl mx-auto">
                                    {/* Profile banner and avatar */}
                                    <div className="w-full ">
                                        <div className="w-full bg-gray-800 h-48 rounded-t-lg ">
                                            <div className="flex justify-center items-center pt-10  text-white">
                                                <img className="w-28 h-28 p-1 bg-white rounded-full" src="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb" alt="" />
                                                <div className="ml-5 font-bold flex flex-col text-left ">
                                                    <div className="break-words">NnsDAO</div>
                                                    <div className="font-semibold text-sm italic dark">Bio: game meta</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Profile general information */}
                                    <div className="bg-gray-600 rounded-b-lg p-5 pt-10 flex flex-col">

                                        <ul className="flex flex-col p-4">
                                            <li className="flex flex-row mb-2 ">
                                                <div className="select-none cursor-pointer dark:bg-gray-700 rounded-md flex flex-1 justify-center items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg ">
                                                    <div className="flex flex-col rounded-md w-10 h-10 bg-gray-200 justify-center items-center mr-4">💧</div>
                                                    <div className="pl-1">
                                                        <div className="font-medium">Icpdrops</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="flex flex-row mb-2">
                                                <div className="select-none cursor-pointer dark:bg-gray-700 rounded-md flex flex-1 justify-center items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                                    <div className="flex flex-col rounded-md w-10 h-10 bg-gray-200 justify-center items-center mr-4">⚽️</div>
                                                    <div className="pl-1">
                                                        <div className="font-medium">Footbal</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="flex flex-row mb-2">
                                                <div className="select-none cursor-pointer dark:bg-gray-700 rounded-md flex flex-1 justify-center items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                                    <div className="flex flex-col rounded-md w-10 h-10 bg-gray-200 justify-center items-center mr-4">♾️</div>
                                                    <div className="pl-1">
                                                        <div className="font-medium">Dfinity</div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}