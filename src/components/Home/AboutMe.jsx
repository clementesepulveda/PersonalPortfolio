import React from 'react'

export default function AboutMe() {
    return (
        <>
            <div className='about-me-container m-w-full text-justify p-2'>
                <h2 className=''>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </h2>

            </div>

            <style>{`
                .about-me-container {
                    max-width: 35rem;
                    background-color: green;
                }
            `}</style>
        </>
    )
}
