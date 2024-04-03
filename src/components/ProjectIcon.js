import { useNavigate } from "react-router-dom";

function ProjectIcon({ data }) {
    let navigate = useNavigate();

    return (
        <div
            className="bg-red-500 w-80 h-96 cursor-pointer rounded-xl overflow-hidden shadow-2xl"
            onClick={() => navigate(data['id'])}
        >
            <div className="relative w-full h-48 overflow-hidden">
                <img className="absolute inset-0 w-full h-full object-cover"
                    src={data['image']}
                    alt="new"
                />
            </div>

            <div className="p-1">
                <h1 className="text-xl font-bold">
                    {data['title']}
                </h1>
                <p className="">
                    {data['description']}
                </p>
            </div>
        </div>
    );
}

export default ProjectIcon;
