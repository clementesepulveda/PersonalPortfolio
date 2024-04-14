import { Link } from 'react-router-dom'

function ProjectIcon({ data }) {
    return (
        <div className='bg-slate-100 dark:bg-slate-700 w-80 h-96 rounded-xl overflow-hidden shadow-2xl bg-opacity-50'>
            <Link to={data['link']} className='bg-slate-100 dark:bg-slate-700 w-80 h-96 rounded-xl overflow-hidden shadow-2xl bg-opacity-50'>
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
            </Link>
        </div>

    );
}

export default ProjectIcon;
