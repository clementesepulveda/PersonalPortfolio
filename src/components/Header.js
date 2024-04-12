import ThemeSwitch from '../components/ThemeSwitch'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Header() {
    const { currentUser } = useAuth()
    console.log(currentUser)
    return (
        <>
            <header className="fixed z-50 h-16 w-full dark:bg-slate-950 shadow-xl flex items-center justify-between fixed inset-0 bg-opacity-80 dark:bg-opacity-80 backdrop-filter backdrop-blur-sm">

                <Link to='/home' className='p-4'>Home</Link>

                <div>
                    <Link to='/about' className='p-4'>About</Link>
                    <Link to='/projects' className='p-4'>Projects</Link>
                    <Link to='/blog' className='p-4'>Blog</Link>
                    <Link to='/contact' className='p-4'>Contact</Link>
                    {currentUser ? 
                    <Link to='/admin' className='p-4'>Admin</Link> : null}
                    
                </div>
                <ThemeSwitch />
            </header>

            <div className="h-16"></div>
        </>
    )
}