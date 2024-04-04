
function ProjectIcon({ data }) {
    return (
        <a href={data['link']}
            className="bg-slate-700 w-80 h-96 rounded-xl overflow-hidden shadow-2xl bg-opacity-50"
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
        </a>
    );
}

export default ProjectIcon;
