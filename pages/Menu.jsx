import { useContext } from "react"
import { Link, useRoutes } from "react-router-dom"
import { ToggleContext } from "../contexts/Toggle"

export default function Menu () {
    const {onMenu, setOnMenu} = useContext(ToggleContext)

    return (
        <div className="w-full p-4 flex flex-col justify-between h-screen bg-[#232425] fixed top-0 z-20">
            <div className="flex flex-col justify-center items-start h-full space-y-2 text-3xl text-white font-medium">
                <Link to='/' className="hover:text-[#77836B] transition-all" onClick={() => setOnMenu(false)}>Home</Link>
                <Link to='/posts/essays' className="hover:text-[#77836B] transition-all" onClick={() => setOnMenu(false)}>Essays</Link>
                <Link to='/posts/notes' className="hover:text-[#77836B] transition-all" onClick={() => setOnMenu(false)}>Notes</Link>
                <Link to='/posts/ideas' className="hover:text-[#77836B] transition-all" onClick={() => setOnMenu(false)}>Ideas</Link>
            </div>
            {/* <Link to={'/'}>Subscribe</Link> */}
            <div className="flex flex-col items-center space-y-2 justify-center w-full">
                <span className="bg-[#77836B] text-white text-xl text-center w-full rounded-full py-2">Subscribe</span>
                <p className="text-white">Sign In</p>
            </div>
        </div>
    )
}