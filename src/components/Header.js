import ThemeSwitch from '../components/ThemeSwitch'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Header() {
    const { currentUser } = useAuth()

    return (
        <>
            <header className="fixed z-50 h-16 w-full dark:bg-slate-950 shadow-xl flex items-center justify-between fixed inset-0 bg-opacity-80 dark:bg-opacity-80 backdrop-filter backdrop-blur-sm">

                <Link to='/home' className='p-4 hover:underline'>Home</Link>

                <div>
                    <Link to='/about' className='p-4 hover:underline'>About</Link>
                    <Link to='/projects' className='p-4 hover:underline'>Projects</Link>
                    <Link to='/blog' className='p-4 hover:underline'>Blog</Link>
                    <Link to='/contact' className='p-4 hover:underline'>Contact</Link>
                    {currentUser ? 
                    <Link to='/admin' className='p-4 hover:underline'>Admin</Link> : null}
                    
                </div>
                <ThemeSwitch />
            </header>

            <div className="h-16"></div>
        </>
    )
}