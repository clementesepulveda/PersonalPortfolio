import { get, getDatabase, ref, update, remove } from 'firebase/database'
import React, { useRef, useEffect } from 'react'
import app from '../../firebase'
import { useParams, useNavigate } from "react-router-dom"

export default function UpdateProject() {
    const { id } = useParams();
    const navigate = useNavigate();

    const titleRef = useRef()
    const descriptionRef = useRef()
    const linkRef = useRef()
    const imageRef = useRef()


    useEffect(() => {
        const fetchData = async () => {
            const db = getDatabase(app)
            const dbRef = ref(db, `projects/${id}`);
            const snapshot = await get(dbRef);
    
            if (snapshot.exists()) {
                let projectData = snapshot.val();
    
                titleRef.current.value = projectData['title']
                descriptionRef.current.value = projectData['description']
                linkRef.current.value = projectData['link']
                imageRef.current.value = projectData['image']
            }
        }
        
        fetchData();
    }, [id]);

    const handleUpdate = async (event) => {
        event.preventDefault();

        const db = getDatabase(app);

        const updates = {};
        updates[`projects/${id}`] = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            link: linkRef.current.value,
            image: imageRef.current.value,
        }

        update(ref(db), updates).then(() => {
            alert('Updated successfully.')
        }).catch((error) => {
            alert(`Error: ${error.message}`)
        })
    }

    const handleDelete = async (event) => {
        event.preventDefault();

        const db = getDatabase(app);

        try {
            await remove(ref(db, `projects/${id}`));
            alert('Deleted successfully.');
            navigate("/projects")
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <>
            <div className="flex justify-center bg-gren-500">
                <div className="dark:bg-slate-700 shadow-2xl border rounded-xl border-slate-200 dark:border-slate-500 p-6 m-6 w-screen max-w-xl">

                    <h2 className="text-center mb-4 text-3xl">Update project</h2>

                    <form onSubmit={handleUpdate} className="flex flex-col">
                        <label>Title</label>
                        <input type="text" ref={titleRef} className="text-black my-2 rounded border p-1" required />
                        <label>Description</label>
                        <input type="text" ref={descriptionRef} className="text-black my-2 rounded border p-1" required />
                        <label>Link</label>
                        <input type="text" ref={linkRef} className="text-black my-2 rounded border p-1" />
                        <label>Image</label>
                        <input type="text" ref={imageRef} className="text-black mt-2 rounded border p-1" required />

                        <button className="bg-slate-800 text-white w-full rounded p-2 mt-8" type="submit">
                            Update
                        </button>
                    </form>
                    <button onClick={handleDelete} className="bg-red-700 text-white w-full rounded p-2 mt-8" type="submit">
                        Delete
                    </button>
                </div>
            </div>
        </>
    )
}
