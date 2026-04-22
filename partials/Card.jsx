import { Link } from "react-router-dom";
import { getPostImage } from "../src/utils/postAssets";

export default function Card ({post}) {
    return (
        <div key={post.id} className="rounded-lg transition-all duration-750 hover:-translate-y-2 my-4">
            <div className="relative rounded-lg overflow-hidden">
                <img src={getPostImage(post.image)} alt={post.title} className="" />
                <div className="absolute bg-linear-to-t from-black to-transparent bottom-0 flex flex-col justify-center w-full p-4 space-y-4">
                    <p className="text-gray-200 text-center"><i>by</i> {post.author} <i>on</i> {post.date}</p>
                    <h1 className="text-start text-gray-200 text-4xl">{post.title}</h1>
                    <p className="text-start text-gray-300 text-2xl">Over the last week I've jotted down a bunch of notes in a "Things to Blog"</p>
                    <Link to={`/posts/${post.slug}`} className="text-white font-medium rounded-full px-3 py-1 transition-all duration-500 border-[#DAC5A7] border-2 w-fit hover:bg-[#DAC5A7]">Continue Reading</Link>
                </div>
            </div>
        </div> 
    )
}
