import { useParams } from "react-router-dom"
import posts from '../data/posts.json'
import { useEffect, useState } from "react"
import Header from "../partials/Header"
import tiktok from "../src/assets/tiktok.png"
import instagram from "../src/assets/instagram.png"
import facebook from "../src/assets/facebook.png"
import { Link } from "react-router-dom"
import Footer from "../partials/Footer"

export default function Show() {
    const { slug } = useParams()
    const [post, setPost] = useState({})
    // const image =  `${process.env.PUBLIC_URL}/assets`
    useEffect(() => {
        const find = posts.find(item => item.slug == slug)
        console.log(find.slug)
        setPost(find)
}, [])
    return (
        <>
        <div className="bg-[#232425] text-white pt-16 pb-4">
            <Header />
        <div className="p-4">
            <div className="my-8 space-y-4">
                <p className="text-gray-400 font-medium text-center ">5 MIN READ</p>
                <p className="text-4xl text-white text-center font-semibold">{post.title}</p>
            </div>
            <div className="text-center text-gray-300">
                <p className="font-medium">{post.author}</p>
                <p>on {post.date}</p>
                <div className="flex justify-evenly w-1/2 mx-auto my-4">
                    <img src={tiktok} alt="" className="size-8 border-white bg-white border rounded-full" />
                    <img src={facebook} alt="" className="size-8 border-white bg-white border rounded-full" />
                    <img src={instagram} alt="" className="size-8 border-white bg-white border rounded-full" />
                </div>
            </div>
        </div>
        <img src={`/src/assets/${post.image}`} alt="" className="aspect-square object-cover" />
        <p className="text-center text-gray-400">{post.slug}</p>
        <div className="text-start p-4 space-y-2">
            <article>
                {post.content}
            </article>
            <Link to='/'>Back</Link>
        </div>
        </div>
        <Footer />
        </>
    ) 
}