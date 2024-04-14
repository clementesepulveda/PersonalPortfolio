import { Link } from "react-router-dom";

function Admin() {

    return (
        <div className="grid grid-cols-1 gap-4 place-items-center">
            <div className="bg-slate-500 text-white w-full rounded p-2 mt-8 w-fit text-center shadow-2xl">
                <Link to='/admin/projects' className='p-4'>Projects</Link>
            </div>

            <div className="bg-slate-500 text-white w-full rounded p-2 mt-8 w-fit text-center shadow-2xl">
                <Link to='/admin/projects/create' className='p-4'>Create project</Link>
            </div>

        </div>
    );
}

export default Admin;
