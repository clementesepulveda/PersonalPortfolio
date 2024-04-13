import React from 'react'

export default function Hamburger() {
    return (
        <>
            <div className='hamburger'>
                <div className='burger burger1 bg-black dark:bg-white'></div>
                <div className='burger burger2 bg-black dark:bg-white'></div>
                <div className='burger burger3 bg-black dark:bg-white'></div>
            </div>

            <style>{`
                .hamburger {
                    width: 2rem;
                    height: 2rem;
                    display: flex;
                    justify-content: space-around;
                    flex-flow: column nowrap;
                    z-index: 10;
                }
                .burger {
                    width: 2rem;
                    height: 0.25rem;
                    border-radius: 10px;
                    transform-origin: 1px;
                    transitino: all 0.3s linear;
                }
            `}</style>
        </>

    )
}
