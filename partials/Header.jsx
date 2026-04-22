import { useContext, useEffect, useState } from "react"
import { ToggleContext } from "../contexts/ToggleContext";
import Menu from "../pages/Menu";
import { Link } from "react-router-dom";
import { GeneralContext } from "../contexts/GeneralContext";

export default function Header() {
    const { onMenu, setOnMenu } = useContext(ToggleContext)
    const {setQuery, searchedPosts} = useContext(GeneralContext)
    const [onSearch, setOnSearch] = useState(false);

    useEffect(() =>{
        if (onMenu) {
        document.body.style.overflow = 'hidden';
        } else {
        document.body.style.overflow = 'auto';
        }
    }, [onMenu])
    return (
        <>
        <header className="fixed top-0 bg-[#232425] w-full p-4 flex justify-between items-center z-30">
            <h1 className="text-[#77836B] text-4xl font-bold">ADITAMA</h1>
            <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white" role="button" onClick={() => setOnSearch(!onSearch)}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <div className="flex flex-col" role="button" onClick={() => setOnMenu(!onMenu)}>
                    <span className={`size-6 text-white transition-all -mb-2 ${onMenu ? 'rotate-45 -mb-2' : 'rotate-0'}`}>──</span>
                    <span className={`size-6 text-white transition-all -mt-2 ${onMenu ? '-rotate-45 -mt-4 -ml-0.5' : 'rotate-0'}`}>──</span>
                </div>
            </div>
        </header>
        {onSearch &&
        <>
            <search className="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-start justify-center pt-20  z-20" onClick={() => setOnSearch(false)}>
                <div className="absolute bg-white flex justify-between items-center w-9/10 p-4 rounded-lg space-x-2" onClick={(e) => e.stopPropagation()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type="text" name="" id="" placeholder="Search posts, tags and authors" className="placeholder:text-gray-400 text-black w-full outline-none" onChange={(e) => setQuery(e.target.value)} />
                    <button className="text-black" onClick={() => setOnSearch(false)}>cancel</button>
                </div>
                <div className="flex flex-col mt-12 w-9/10 rounded-b-lg bg-white">
                {searchedPosts.map(posts => (
                    <div key={posts.id} className="text-gray-400 p-2 z-20">
                        <Link to={`/posts/${posts.slug}`} className="">{posts.title}</Link>
                    </div>
                ))}
            </div>
            </search>
        </> 
        }
        {onMenu && 
        <>
            <Menu />
        </>}
        </>
    )
}
