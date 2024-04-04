import ProjectIcon from "../components/ProjectIcon";

function Projects() {
    let data = [
        {
            id: "id",
            title: "Rotter y Krauss Tracker",
            description: "Tracking prices of glasses sold by Rotter y Krauss",
            link: "https://clementesepulveda.github.io/ryk_scraper/",
            image: "https://res.cloudinary.com/clegowi/image/upload/v1712193708/My-Website/Screenshot_2024-04-03_222126_dvrodl.png"
        },
        {
            id: "id",
            title: "Don't Fall",
            description: "2D platformer",
            link: "https://clementesepulveda.itch.io/dont-fall",
            image: "https://img.itch.zone/aW1nLzExMTA5ODU5LnBuZw==/315x250%23c/RxtHVm.png"
        },
        {
            id: "id",
            title: "Keepie Uppie",
            description: "This is a very long description. I am just testing something. do not worry about it. I will maybe fix it Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            link: "https://clementesepulveda.itch.io/keepie-uppie",
            image: "https://img.itch.zone/aW1nLzEwOTY3NzcwLnBuZw==/315x250%23c/xUgn9c.png"
        },
        {
            id: "id",
            title: "Wordle Clone",
            description: "Small Description",
            link: "https://clementesepulveda.github.io/wordle-clone/",
            image: "https://res.cloudinary.com/clegowi/image/upload/v1712194103/My-Website/Screenshot_2024-04-03_222749_bcnirb.png"
        },
        {
            id: "id",
            title: "Sierpinski Triangle Simulator",
            description: "Small Description",
            link: "https://clementesepulveda.itch.io/sierpinski-triangle-simulator",
            image: "https://img.itch.zone/aW1nLzEwODc3OTc0LnBuZw==/315x250%23c/KviNH2.png"
        },
        {
            id: "id",
            title: "Pacman Clone",
            description: "Small Description",
            link: "https://github.com/clementesepulveda/reactivepacman.github.io",
            image: "https://res.cloudinary.com/clegowi/image/upload/v1712194299/My-Website/Screenshot_2024-04-03_223113_wvrnz5.png"
        },
        // {
        //     id: "id",
        //     title: "Portafolio",
        //     description: "Website showing cool projects",
        //     link: "http://localhost:3000/",
        //     image: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        // },
    ]
    return (
        <div className="grid place-items-center gap-10 p-4 grid-auto-columns-1/2 py-10
        grid-cols-4  
        max-xl:grid-cols-3
        max-lg:grid-cols-2
        max-md:grid-cols-1">
            {data.map(function (object, i) {
                return <ProjectIcon data={object} key={i} />;
            })}
        </div>
    );
}

export default Projects;
