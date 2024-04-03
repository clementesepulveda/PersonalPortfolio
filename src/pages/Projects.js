import ProjectIcon from "../components/ProjectIcon";

function Projects() {
    let data = [
        {
            id: "asdfasdfasdf",
            title: "Rotter y Krauss Tracker",
            description: "Tracking Rotter y Krauss prices",
            image: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        },
        {
            id: "id",
            title: "Portafolio",
            description: "Website showing cool projects",
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
        {
            id: "id",
            title: "Cool Project",
            description: "Small Description",
            image: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        },
    ]
    return (
        <div className="grid place-items-center gap-3 p-4 grid-auto-columns-1/2 py-10
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
