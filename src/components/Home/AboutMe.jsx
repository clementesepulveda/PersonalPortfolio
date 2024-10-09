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
                Welcome to my digital space! I'm Clemente, a passionate developer with a versatile skill set ranging from full-stack engineering to game development and data science. 
                My work is a blend of creative problem-solving and technical expertise, all driven by a desire to bring innovative ideas to life. 
                Whether I'm designing intuitive user interfaces or building powerful data-driven solutions, I thrive on transforming challenges into polished, functional outcomes. 
                Take a look around, and let's create something remarkable together.
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
