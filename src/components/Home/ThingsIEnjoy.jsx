import { useLayoutEffect } from "react";
import React from 'react'
import gsap from "gsap";

export default function ThingsIEnjoy() {
    const thingsEnjoy = [
        'Guitar',
        'Photography',
        'Books',
    ]

    useLayoutEffect(() => {
        const titles = gsap.utils.toArray('.things-enjoy-move')
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 })

        let ctx = gsap.context(() => {

            titles.forEach(title => {
                tl
                    .from(title, {
                        opacity: 0,
                        x: 30,
                    }, '<')
                    .to(title, {
                        opacity: 0,
                        x: -30,
                        delay: 1,
                    }, '<1')
            })
        });

        return () => ctx.revert();

    }, []);

    return (
        <></>
        // TODO finish this
        // <>
        //     <h1 className='text-4xl font-bold p-1 flex justify-center '>Things I enjoy doing</h1>
        //     <div className="flex py-4 bg-green-500 flex justify-center h-72">

        //         {thingsEnjoy.map((title, i) => (
        //             <div className='things-enjoy-move absolute' key='hi'>
        //                 <img src={`${process.env.PUBLIC_URL}/images/technologies/javascript.png`}
        //                     alt="Logo"
        //                     className='aspect-square object-contain' />
        //             </div>
        //         ))}
        //     </div>
        // </>
    )
}
