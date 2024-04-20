import { get, getDatabase, ref } from "firebase/database";
import app from "../../firebase";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useParams } from "react-router-dom";
import { Markup } from "interweave";
import './BlogContent.css';

function Blog() {
    const { id } = useParams()

    let [blog, setBlog] = useState([])
    let [isLoading, setIsLoading] = useState(true)

    const fetchData = async () => {
        const db = getDatabase(app)
        const dbRef = ref(db, `blogs/${id}`);
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
            setBlog(snapshot.val());
            console.log(blog)
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {isLoading ?
                <div className="flex justify-center p-16">
                    <LoadingSpinner />
                </div>
                :
                <div className="blog-content p-4">
                    <div className="text-7xl">{blog.title}</div>
                    <div className="text-sm pb-4">{blog.date}</div>

                    <div>
                        <Markup content={blog.content} />
                    </div>
                </div>
            }

        </>
    );
}

export default Blog;
