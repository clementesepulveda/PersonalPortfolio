import ThemeSwitch from '../components/ThemeSwitch'
export default function Header() {
    return (
        <>
            <header className="fixed z-50 h-16 w-full dark:bg-slate-950 shadow-xl flex items-center justify-between fixed inset-0 bg-opacity-80 dark:bg-opacity-80 backdrop-filter backdrop-blur-sm">

                <a className="p-4" href="/">Home</a>

                <div>
                    <a className="p-4" href="/about">About</a>
                    <a className="p-4" href="/projects">Projects</a>
                    <a className="p-4" href="/contact">Contact</a>
                </div>
                
                <ThemeSwitch />
            </header>

            <div className="h-16"></div>
        </>
    )
}