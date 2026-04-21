import { createContext, useEffect, useState } from "react";

export const GeneralContext = createContext()
export const GeneralProvider = ({children}) => {
    
    useEffect(() => {
        const getBlog = async () => {
            const blogres = await fetch('/data/posts.json');
            const blog = await blogres.json();
            setBlog(blog)
        };

        getBlog();
    }, [])

    const [blog, setBlog] = useState([])
    const [query, setQuery] = useState('')
    const searchedPosts = blog.filter((blog) => blog.title.toLowerCase().includes(query.toLowerCase()))

    return (
        <GeneralContext.Provider value={{query, setQuery, searchedPosts}}>
            {children}
        </GeneralContext.Provider>
    )
}