import { get, getDatabase, ref } from "firebase/database";
import ProjectIcon from "../components/ProjectIcon";
import app from "../firebase";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

function Projects() {
    let [projects, setProjects] = useState([])
    let [isLoading, setIsLoading] = useState(true)

    const fetchData = async () => {
        const db = getDatabase(app)
        const dbRef = ref(db, 'projects');
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
            let projectsData = Object.values(snapshot.val());
            projectsData = projectsData.sort((a, b) => a.order > b.order ? 1 : -1);
            setProjects(projectsData);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {isLoading ?
                <div className="bg-green- flex justify-center p-16">
                    <LoadingSpinner />
                </div>
                :
                <div className="flex flex-wrap justify-center gap-10 p-4 py-10">
                    {projects.map(function (object, i) {
                        return (
                            <div key={i} className="project-icon" style={{ animationDelay: `${i * 3 / 10}s` }}>
                                <ProjectIcon data={object} key={i} />
                            </div>
                        )

                    })}
                </div>
            }

            <style>{`
        
        .project-icon {
            opacity: 0; /* Initially hide */
            animation: fadeInFromLeft 1s ease forwards; /* Apply animation */
        }

        @keyframes fadeInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }`}</style>
        </>
    );
}

export default Projects;
