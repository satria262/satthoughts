import { createContext, useState } from "react";
import blog from '../data/posts.json'

export const GeneralContext = createContext()
export const GeneralProvider = ({children}) => {
    const [query, setQuery] = useState('')
    const searchedPosts = blog.filter((blog) => blog.title.toLowerCase().includes(query.toLowerCase()))

    return (
        <GeneralContext.Provider value={{query, setQuery, searchedPosts}}>
            {children}
        </GeneralContext.Provider>
    )
}