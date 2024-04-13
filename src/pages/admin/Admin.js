import { Link } from "react-router-dom";

function Admin() {

    return (
        <div>
            <Link to='/admin/projects' className='p-4'>Projects</Link>
            <Link to='/admin/create-project' className='p-4'>create project</Link>
        </div>
    );
}

export default Admin;
