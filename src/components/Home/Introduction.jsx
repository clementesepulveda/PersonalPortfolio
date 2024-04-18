import SpeechBubble from "../SpeechBubble";

function Home() {

    return (
        <>
            <div className="pl-16 pb-4 md:pb-1">
                <SpeechBubble text={"Hi there! I'm"} />
            </div>
            
            <h1 className="text-3xl md:text-7xl lg:text-8xl xl:text-9xl">Clemente Sepúlveda</h1>
        </>
    );
}

export default Home;
