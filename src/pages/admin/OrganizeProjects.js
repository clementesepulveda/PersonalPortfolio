import { get, getDatabase, ref, update } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import app from '../../firebase';
import { useNavigate, Link } from "react-router-dom"

export default function OrganizeProjects() {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([])

    const handleUpdate = (event) => {
        event.preventDefault();

        const db = getDatabase(app);

        const updates = {};
        projects.forEach(project => {
            updates[`projects/${project.id}`] = {
                title: project.title,
                description: project.description,
                link: project.link,
                image: project.image,
                order: project.order,
            }
        });

        update(ref(db), updates).then(() => {
            alert('Updated successfully.')
        }).catch((error) => {
            alert(`Error: ${error.message}`)
        })
    }

    const moveDown = (itemPos) => {
        const index = itemPos - 1; // itemPos starts at 1, i starts at 0

        if (index < 0 || index >= projects.length - 1) {
            return;
        }

        let tempProjects = [...projects]; // Create a copy of projects

        let temp = tempProjects[index];
        tempProjects[index] = tempProjects[index + 1];
        tempProjects[index + 1] = temp;

        tempProjects[index].order = index + 1;
        tempProjects[index + 1].order = index + 2;

        setProjects(tempProjects);
    }

    const moveUp = (itemPos) => {
        const index = itemPos - 1; // itemPos starts at 1, i starts at 0

        if (index <= 0 || index >= projects.length) {
            return;
        }

        let tempProjects = [...projects]; // Create a copy of projects

        let temp = tempProjects[index];
        tempProjects[index] = tempProjects[index - 1];
        tempProjects[index - 1] = temp;

        tempProjects[index].order = index + 1;
        tempProjects[index - 1].order = index;

        setProjects(tempProjects);
    }

    useEffect(() => {
        const fetchData = async () => {
            const db = getDatabase(app)
            const dbRef = ref(db, 'projects');
            const snapshot = await get(dbRef);

            if (snapshot.exists()) {
                let projectsData = Object.keys(snapshot.val()).map(id => ({
                    id, ...snapshot.val()[id]
                }));
                projectsData = projectsData.sort((a, b) => a.order > b.order ? 1 : -1);
                projectsData.forEach((obj, index) => {
                    obj.order = index + 1; // Adding 1 to index to start IDs from 1

                });

                setProjects(projectsData);
            }
        }

        fetchData();
    }, []);

    return (
        <div>

            <button className="bg-slate-800 text-white w-fit rounded p-2 mt-8 ml-2" type="submit">
                <Link
                    to={'..'}
                    onClick={(e) => {
                        e.preventDefault();
                        navigate(-1);
                    }}
                    className='p-4'>Back
                </Link>
            </button>
            <br />
            <button className="bg-slate-800 text-white w-fit rounded p-2 mt-8 ml-2" onClick={handleUpdate}>
                Update
            </button>

            <div className="gap-4">
                {projects.map(function (object, i) {
                    return (
                        <div key={i} className="flex my-4">
                            <div className='flex items-center'>
                                <button
                                    onClick={() => moveUp(object.order)}
                                    className='size-16 rounded text-5xl bg-slate-800 dark:bg-slate-500 text-white ml-1 mx-1 
                                        sm:ml-4 
                                        md:ml-10 md:size-24'>
                                    &#x2191;
                                </button>
                                <button
                                    onClick={() => moveDown(object.order)}
                                    className='size-16 rounded text-5xl bg-slate-800 dark:bg-slate-500 text-white md:ml-10 md:size-24'>
                                    &#x2193;
                                </button>
                            </div>
                            <img src={object.image} alt="project preview" className='size-16 mx-5 object-cover rounded md:size-24' />
                            <div className='md:text-2xl'>{object.title}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
