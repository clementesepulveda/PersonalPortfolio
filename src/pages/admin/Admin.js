import { Link } from "react-router-dom";

function Admin({ data }) {

    return (
        <div>
            <Link to='/admin/login' className='p-4'>Log in</Link>
            <Link to='/admin/projects' className='p-4'>Projects</Link>
        </div>
    );
}

export default Admin;
