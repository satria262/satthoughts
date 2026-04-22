import { useContext } from "react"
import { useParams } from "react-router-dom"
import Header from "../partials/Header"
import tiktok from "../src/assets/tiktok.png"
import instagram from "../src/assets/instagram.png"
import facebook from "../src/assets/facebook.png"
import { Link } from "react-router-dom"
import Footer from "../partials/Footer"
import { GeneralContext } from "../contexts/GeneralContext"
import { getPostImage } from "../src/utils/postAssets"

export default function Show() {
    const { slug } = useParams()
    const { getPostBySlug } = useContext(GeneralContext)
    const post = getPostBySlug(slug)

    if (!post) {
        return (
            <>
                <div className="bg-[#232425] pb-4 pt-16 text-white">
                    <Header />
                    <div className="p-4 text-center">
                        <p className="text-2xl font-semibold">Post not found</p>
                        <Link to="/" className="mt-4 inline-block text-[#8F9E80]">
                            Back
                        </Link>
                    </div>
                </div>
                <Footer />
            </>
        )
    }

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
            </div>
        </div>
        <div className="flex justify-center">
        <img src={getPostImage(post.image)} alt={post.title} className="aspect-square object-cover rounded-lg" />
        </div>
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
