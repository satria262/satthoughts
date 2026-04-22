import { Link } from "react-router-dom";
import { getPostImage } from "../src/utils/postAssets";

export default function Card ({post, index = 0}) {
    return (
        <div
            key={post.id}
            className="page-enter my-4 rounded-lg transition-all duration-700 hover:-translate-y-2"
            style={{ "--enter-delay": `${760 + index * 110}ms` }}
        >
            <div className="story-card relative w-fit overflow-hidden rounded-lg border border-white/8 bg-white/3 shadow-[0_24px_80px_-48px_rgba(218,197,167,0.45)]">
                <img src={getPostImage(post.image)} alt={post.title} className="transition-transform duration-700 ease-out hover:scale-[1.03]" />
                <div className="absolute bottom-0 flex h-full w-full flex-col justify-end space-y-4 bg-linear-to-t from-black via-black/70 to-transparent p-4">
                    <p className="text-gray-200 text-center"><i>by</i> {post.author} <i>on</i> {post.date}</p>
                    <h1 className="text-start text-gray-200 text-4xl">{post.title}</h1>
                    <p className="text-start text-gray-300 text-2xl">{post.content.length > 72 ? `${post.content.slice(0, 72)}...` : post.content}</p>
                    <Link to={`/posts/${post.slug}`} className="w-fit rounded-full border-2 border-[#DAC5A7] px-3 py-1 text-white font-medium transition-all duration-500 hover:bg-[#DAC5A7] hover:text-[#171819]">Continue Reading</Link>
                </div>
            </div>
        </div> 
    )
}
