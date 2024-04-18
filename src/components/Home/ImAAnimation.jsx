import { useLayoutEffect } from "react";
import React from 'react'
import gsap from "gsap";

export default function ImAAnimation() {
    const iCallMyself = [
        'Software Developer',
        'Programmer',
        'Data Science Engineer',
        'Game Developer',
        'Full-Stack Engineer',
        'Web Designer',
        'UX/UI Designer'
    ]

    useLayoutEffect(() => {
        const titles = gsap.utils.toArray('.im-moving-text')
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 0})

        let ctx = gsap.context(() => {

            titles.forEach(title => {
                tl
                    .from(title, {
                        opacity: 0,
                        y: 20,
                    }, '<')
                    .to(title, {
                        opacity: 0,
                        y: -20,
                        delay: 1,
                    }, '<1')
            })
        });

        return () => ctx.revert();

    }, []);

    return (
        <>
            <div className="flex py-4 h-48">
                <h2 className="text-xl sm:text-2xl md:text-5xl text-ellipsis">I'm a&#160;</h2>
                <div className="">
                    {iCallMyself.map((title, i) => (
                        <p className={`im-moving-text absolute text-xl sm:text-2xl md:text-5xl font-mono font-semibold`} key={i}>{title}</p>

                    ))}
                </div>
            </div>
        </>
    )
}
