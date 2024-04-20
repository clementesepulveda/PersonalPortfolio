import { Markup } from 'interweave';
import { useState } from 'react';
import { Link } from 'react-router-dom'

function BlogIcon({ data }) {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(true)
    }
    const handleMouseUp = () => {
        setIsClicked(false)
    }

    return (
        <div className='w-full'>
            <div onMouseDown={handleClick} onMouseUp={handleMouseUp} onTouchStart={handleClick} className={`bg-slate-100 dark:bg-slate-700 w-full h-96 rounded-xl overflow-hidden shadow-2xl bg-opacity-50 ${isClicked ? 'scale-95' : 'hover:scale-105'} transition-transform`}>
                <Link to={data['link']} className='bg-slate-100 dark:bg-slate-700 h-96 rounded-xl overflow-hidden shadow-2xl bg-opacity-50 focus:scale-95 md:flex'>
                    <div className="relative w-full h-48 overflow-hidden md:h-full md:min-w-72 md:w-72">
                        <img className="absolute inset-0 w-full h-full object-cover"
                            src={data['image']}
                            alt="new"
                        />
                    </div>

                    <div className="p-3 h-5/6 overflow-hidden">
                        <h1 className="text-4xl font-bold">
                            {data['title']}
                        </h1>
                        <h2 className='pb-5 text-sm'>
                            {data['date']}
                        </h2>
                        <div className="blog-content line-clamp-6">
                            <Markup content={data.description} />
                        </div>
                    </div>
                </Link>
            </div>
        </div>

    );
}

export default BlogIcon;
