import { getDatabase, push, ref, set } from 'firebase/database'
import React, { useRef, useState } from 'react'
import app from '../../firebase'
import { useNavigate  } from "react-router-dom"

export default function CreateProject() {
    const navigate = useNavigate();

    const titleRef = useRef()
    const descriptionRef = useRef()
    const linkRef = useRef()
    const imageRef = useRef()

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();

        const db = getDatabase(app);
        const newDocRef = push(ref(db, 'projects'));

        set(newDocRef, {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            link: linkRef.current.value,
            image: imageRef.current.value,
            order: 0,
        }).then(() => {
            alert('Created successfully.')
            navigate("/projects")
        }).catch((error) => {
            alert(`Error: ${error.message}`)
        })
    }

    return (
        <>
            <div className="flex justify-center bg-gren-500">
                <div className="dark:bg-slate-700 shadow-2xl border rounded-xl border-slate-200 dark:border-slate-500 p-6 m-6 w-screen max-w-xl">

                    <h2 className="text-center mb-4 text-3xl">Add a new project</h2>

                    {error && <div className="bg-red-400 rounded p-2 mb-4 text-center">{error}</div>}

                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <label>Title</label>
                        <input type="text" ref={titleRef} className="text-black my-2 rounded border p-1" required />
                        <label>Description</label>
                        <input type="text" ref={descriptionRef} className="text-black my-2 rounded border p-1" required />
                        <label>Link</label>
                        <input type="text" ref={linkRef} className="text-black my-2 rounded border p-1" required />
                        <label>Image</label>
                        <input type="text" ref={imageRef} className="text-black mt-2 rounded border p-1" required />

                        <button disabled={loading} className="bg-slate-800 text-white w-full rounded p-2 mt-8" type="submit">
                            Create
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
