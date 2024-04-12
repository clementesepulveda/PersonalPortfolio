import { get, getDatabase, ref } from "firebase/database";
import ProjectIcon from "../../components/ProjectIcon";
import app from "../../firebase";
import { useEffect, useState } from "react";

function AdminProjects() {
    let [projects, setProjects] = useState([])

    const fetchData = async () => {
        const db = getDatabase(app)
        const dbRef = ref(db, 'projects');
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
            let projectsData = Object.keys(snapshot.val()).map(id => ({ id, ...snapshot.val()[id], link: `/admin/projects/${id}` }));
            projectsData = projectsData.sort((a, b) => a.order < b.order ? 1 : -1);
            setProjects(projectsData);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="grid place-items-center gap-10 p-4 grid-auto-columns-1/2 py-10
        grid-cols-4  
        max-xl:grid-cols-3
        max-lg:grid-cols-2
        max-md:grid-cols-1">
            {projects.map(function (object, i) {
                return <ProjectIcon data={object} key={i} />;
            })}
        </div>
    );
}

export default AdminProjects;
