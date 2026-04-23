import { useContext } from "react"
import { Link } from "react-router-dom"
import { ToggleContext } from "../contexts/ToggleContext"
import Footer from "../partials/Footer"

export default function Menu () {
    const {setOnMenu} = useContext(ToggleContext)

    return (
        <div className="w-full h-screen bg-[#232425] fixed inset-0 z-20 overflow-y-auto pt-16">
            <div className="min-h-full flex flex-col justify-between">
                <div className="p-4 flex flex-col justify-center items-start flex-1 space-y-2 text-3xl text-white font-medium">
                    <Link to='/' className="hover:text-[#DAC5A7] transition-all" onClick={() => setOnMenu(false)}>Home</Link>
                    <Link to='/posts/essays' className="hover:text-[#DAC5A7] transition-all" onClick={() => setOnMenu(false)}>Essays</Link>
                    <Link to='/posts/notes' className="hover:text-[#DAC5A7] transition-all" onClick={() => setOnMenu(false)}>Notes</Link>
                    <Link to='/posts/ideas' className="hover:text-[#DAC5A7] transition-all" onClick={() => setOnMenu(false)}>Ideas</Link>
                </div>
                <div>
                    <div className="p-4 flex flex-col items-center space-y-2 justify-center w-full">
                        <span className="bg-[#DAC5A7] text-white text-xl text-center w-full rounded-full py-2">Subscribe</span>
                        <p className="text-white">Sign In</p>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
