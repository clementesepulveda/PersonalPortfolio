import ProjectIcon from "../components/ProjectIcon";

function Projects() {
    let data = [
        {
            id: "asdfasdfasdf",
            title: "Rotter y Krauss Tracker",
            description: "Tracking Rotter y Krauss prices",
            link: "https://clementesepulveda.github.io/ryk_scraper/",
            image: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        },
        {
            id: "id",
            title: "Portafolio",
            description: "Website showing cool projects",
            link: "http://localhost:3000/",
            image: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        },
        {
            id: "id",
            title: "Don't Fall",
            description: "2D platformer",
            image: "https://img.itch.zone/aW1nLzExMTA5ODU5LnBuZw==/315x250%23c/RxtHVm.png"
        },
        {
            id: "id",
            title: "Cool Project",
            description: "This is a very long description. I am just testing something. do not worry about it. I will maybe fix it Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        },
        {
            id: "id",
            title: "Cool Project",
            description: "Small Description",
            image: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        },
        {
            id: "id",
            title: "Cool Project",
            description: "Small Description",
            image: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        },
        {
            id: "id",
            title: "Cool Project",
            description: "Small Description",
            image: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        },
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
