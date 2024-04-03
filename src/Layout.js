import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function Layout() {
    return (
        <div className="flex flex-col h-screen">
            <div className="pb-4">
                <Header />
            </div>
            <main className="flex-grow">
                <Outlet />
            </main>

            <div className="pt-4">
                <Footer />
            </div>
        </div>
    )
}