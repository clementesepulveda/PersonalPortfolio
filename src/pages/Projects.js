import { get, getDatabase, ref } from "firebase/database";
import ProjectIcon from "../components/ProjectIcon";
import app from "../firebase";
import { useEffect, useState } from "react";

function Projects() {
    let [projects, setProjects] = useState([])

    const fetchData = async () => {
        const db = getDatabase(app)
        const dbRef = ref(db, 'projects');
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
            setProjects(Object.values(snapshot.val()));
            console.log(Object.keys(snapshot.val()))
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    // let data = [
    //     {
    //         id: "id",
    //         title: "Rotter y Krauss Tracker",
    //         description: "Tracking prices of glasses sold by Rotter y Krauss",
    //         link: "https://clementesepulveda.github.io/ryk_scraper/",
    //         image: "https://res.cloudinary.com/clegowi/image/upload/v1712193708/My-Website/Screenshot_2024-04-03_222126_dvrodl.png"
    //     },
    //     {
    //         id: "id",
    //         title: "Don't Fall",
    //         description: "2D platformer made with Unity for a JTA Game Jam #6.",
    //         link: "https://clementesepulveda.itch.io/dont-fall",
    //         image: "https://img.itch.zone/aW1nLzExMTA5ODU5LnBuZw==/315x250%23c/RxtHVm.png"
    //     },
    //     {
    //         id: "id",
    //         title: "Keepie Uppie",
    //         description: "Simple game about keeping a ball up in the air with your head. Play on the browser or download the apk.",
    //         link: "https://clementesepulveda.itch.io/keepie-uppie",
    //         image: "https://img.itch.zone/aW1nLzEwOTY3NzcwLnBuZw==/315x250%23c/xUgn9c.png"
    //     },
    //     {
    //         id: "id",
    //         title: "Wordle Clone",
    //         description: "Don't want to wait a whole day for a new Wordle word? This one generates a new word every time you refresh the page.",
    //         link: "https://clementesepulveda.github.io/wordle-clone/",
    //         image: "https://res.cloudinary.com/clegowi/image/upload/v1712194103/My-Website/Screenshot_2024-04-03_222749_bcnirb.png"
    //     },
    //     {
    //         id: "id",
    //         title: "Snake Clone",
    //         description: "Simple HTML version of the classic game Snake. Made with React.",
    //         link: "https://clementesepulveda.github.io/snake-clone/",
    //         image: "https://cdn-icons-png.flaticon.com/512/528/528105.png"
    //     },
    //     {
    //         id: "id",
    //         title: "Sierpinski Triangle Simulator",
    //         description: "Generate a Sierpinski Triangle with a very weird property",
    //         link: "https://clementesepulveda.itch.io/sierpinski-triangle-simulator",
    //         image: "https://img.itch.zone/aW1nLzEwODc3OTc0LnBuZw==/315x250%23c/KviNH2.png"
    //     },
    //     {
    //         id: "id",
    //         title: "Pacman Clone",
    //         description: "Two player version of Pacman made with HTML. Each player has ability to shoot the other one",
    //         link: "https://github.com/clementesepulveda/reactivepacman.github.io",
    //         image: "https://res.cloudinary.com/clegowi/image/upload/v1712194299/My-Website/Screenshot_2024-04-03_223113_wvrnz5.png"
    //     },
    //     {
    //         id: "id",
    //         title: "Heroes Falsos: Una Historia Interactiva",
    //         description: "Choose your own adventure game for Discord. Deprecated since changed with Heroku.",
    //         link: "https://github.com/clementesepulveda/DiscordBot",
    //         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ZCDSDO2kBhIDA1e8gIdPwJEcTvzziPXnd66OaGdkGQ&s"
    //     },
    //     {
    //         id: "id",
    //         title: "Portafolio",
    //         description: "Website showing cool projects. Click here for a nice example of recursion.",
    //         link: "",
    //         image: "https://res.cloudinary.com/clegowi/image/upload/v1712248265/My-Website/Screenshot_2024-04-04_133005_yfl0gh.png"
    //     },
    // ]
    return (
        <div className="grid place-items-center gap-10 p-4 grid-auto-columns-1/2 py-10
        grid-cols-4  
        max-xl:grid-cols-3
        max-lg:grid-cols-2
        max-md:grid-cols-1">
            {projects.map(function (object, i) {
                return <ProjectIcon data={object} key={i} />;
            })}
        </div>
    );
}

export default Projects;
