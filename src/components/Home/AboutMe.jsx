import React from 'react'

export default function AboutMe() {
    return (
        <>
            <div className='m-w-full text-justify grid sm:grid-cols-2 place-items-start'>
                {/* <img
                    src="https://i.ibb.co/yQVxVfx/360-F-57687532-x-RY2y9-BNw-KS7-USH36np-KWMx-Yj-Om5-Ov-OC-removebg-preview.png"
                    alt="me chilling"
                    className='sm:hidden size-fit scale-x-[-1]'
                /> */}

                <div className='p-2 sm:p-4 bg-slate-100 dark:bg-slate-700 rounded shadow-xl h-full'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                {/* <img
                    src="https://i.ibb.co/yQVxVfx/360-F-57687532-x-RY2y9-BNw-KS7-USH36np-KWMx-Yj-Om5-Ov-OC-removebg-preview.png"
                    alt="me chilling"
                    className='hidden sm:block size-fit scale-x-[-1]'
                /> */}
            </div>

            <style>{`
                .about-me-container {
                }
            `}</style>
        </>
    )
}
