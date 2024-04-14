import { get, getDatabase, ref } from "firebase/database";
import ProjectIcon from "../components/ProjectIcon";
import app from "../firebase";
import { useEffect, useState } from "react";

function Projects() {
    let [projects, setProjects] = useState([])

    const fetchData = async () => {
        const db = getDatabase(app)
        const dbRef = ref(db, 'projects');
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
            let projectsData = Object.values(snapshot.val());
            projectsData = projectsData.sort((a, b) => a.order > b.order ? 1 : -1);
            setProjects(projectsData);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="grid place-items-center gap-10 p-4 grid-auto-columns-1/2 py-10
            grid-cols-4  
            max-xl:grid-cols-3
            max-lg:grid-cols-2
            max-md:grid-cols-1">
                {projects.map(function (object, i) {
                    return (
                        <div className="project-icon bg-slate-100 dark:bg-slate-700 w-80 h-96 rounded-xl overflow-hidden shadow-2xl bg-opacity-50" style={{ animationDelay: `0.${i}s` }}>
                            <ProjectIcon data={object} key={i} />
                        </div>
                    )

                })}
            </div>

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
