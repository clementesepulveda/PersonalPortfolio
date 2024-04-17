import ThemeSwitch from '../components/ThemeSwitch'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useState } from 'react';
import Hamburger from './Hamburger';

export default function Header() {
    const { currentUser } = useAuth()

    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }

    const handleClickLink = () => {
        setHamburgerOpen(false);
    }

    return (
        <>
            <div className='h-16'></div>

            {hamburgerOpen ?
                <div className='bg-white bg-opacity-20 dark:bg-slate-900 dark:bg-opacity-50 z-50 grid fixed w-screen backdrop-filter backdrop-blur-sm'>
                    <Link onClick={handleClickLink} to='/' className='p-4 hover:underline'>Home</Link>
                    <Link onClick={handleClickLink} to='/projects' className='p-4 hover:underline'>Projects</Link>
                    <Link onClick={handleClickLink} to='/blog' className='p-4 hover:underline'>Blog</Link>
                    <Link onClick={handleClickLink} to='/contact' className='p-4 hover:underline'>Contact</Link>
                    {currentUser ?
                        <Link onClick={handleClickLink} to='/admin' className='p-4 hover:underline'>Admin</Link> : null}
                </div> : <></>}

            <header className="fixed z-20 h-16 w-full dark:bg-slate-950 shadow-xl flex items-center justify-between fixed inset-0 bg-opacity-80 dark:bg-opacity-80 backdrop-filter backdrop-blur-sm">
                <div className='p-6 md:hidden cursor-pointer' onClick={toggleHamburger}>
                    <Hamburger />
                </div>

                <div className='hidden md:block'>
                    <Link to='/' className='p-4 hover:underline'>Home</Link>
                    <Link to='/projects' className='p-4 hover:underline'>Projects</Link>
                    <Link to='/blog' className='p-4 hover:underline'>Blog</Link>
                    <Link onClick={handleClickLink} to='/contact' className='p-4 hover:underline'>Contact</Link>
                    {currentUser ?
                        <Link to='/admin' className='p-4 hover:underline'>Admin</Link> : null}
                </div>

                <div className='p-6'>
                    <ThemeSwitch />
                </div>
            </header>


        </>
    )
}