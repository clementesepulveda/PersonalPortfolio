import { useState } from 'react';
import { Link } from 'react-router-dom'

function ProjectIcon({ data }) {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(true)
    }
    const handleMouseUp = () => {
        setIsClicked(false)
    }

    return (
        <div onMouseDown={handleClick} onMouseUp={handleMouseUp} onTouchStart={handleClick} className={`bg-slate-100 dark:bg-slate-700 w-80 h-96 rounded-xl overflow-hidden shadow-2xl bg-opacity-50 ${isClicked ? 'scale-95': 'hover:scale-105'} transition-transform`}>
            <Link to={data['link']} className='bg-slate-100 dark:bg-slate-700 w-80 h-96 rounded-xl overflow-hidden shadow-2xl bg-opacity-50 focus:scale-95'>
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
