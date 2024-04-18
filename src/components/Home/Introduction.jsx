import { useEffect, useState } from "react";
import SpeechBubble from "../SpeechBubble";

function Home() {
    const [iCallMyself, setICallMyself] = useState([
        'Software Developer',
        'Programmer',
        'Data Science Engineer',
        'Game Developer',
    ])


    useEffect(() => {
        const changeCallMyself = () => {
            let newList = [...iCallMyself]
            const elem = newList.shift()
            newList.push(elem)

            setICallMyself(newList)
        }

        const interval = setInterval(() => {
            changeCallMyself();
        }, 2000);

        return () => clearInterval(interval);
    }, [iCallMyself]);

    return (
        <>
            <div className="pl-16 pb-1">
                <SpeechBubble text={"Hi there! I'm"} />
            </div>
            
            <h1 className="text-3xl md:text-7xl lg:text-8xl xl:text-9xl">Clemente Sepúlveda</h1>

            <div className="flex py-4 h-48">
                <h2 className="text-2xl md:text-5xl">I'm a&#160;</h2>
                <div className="">
                    {/* used to load in the opacities */}
                    <div className="opacity-60"></div>
                    <div className="opacity-10"></div>

                    {iCallMyself.slice(0, 3).map((title, i) => (
                        <h2 className={`text-2xl md:text-5xl font-mono font-semibold opacity-${Math.round((100 + (10 - 100) * i / 2) / 10) * 10}`} key={i}>{title}</h2>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
