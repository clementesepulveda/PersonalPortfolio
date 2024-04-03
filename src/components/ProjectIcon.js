import { useNavigate } from "react-router-dom";

function ProjectIcon({ data }) {
    let navigate = useNavigate();

    return (
        <div
            className="bg-slate-700 w-80 h-96 cursor-pointer rounded-xl overflow-hidden shadow-2xl bg-opacity-50"
            onClick={() => window.location.href = data['link']}
        >
            <div className="relative w-full h-48 overflow-hidden">
                <img className="absolute inset-0 w-full h-full object-cover"
                    src={data['image']}
                    alt="new"
                />
            </div>

            <div className="p-3">
                <h1 className="text-xl font-bold">
                    {data['title']}
                </h1>
                <p className="pt-4">
                    {data['description']}
                </p>
            </div>
        </div>
    );
}

export default ProjectIcon;
