import { useContext, useEffect, useState } from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import Menu from "./Menu";
import thumbnail from '../src/assets/thumbnail.jpg'
import { Link } from "react-router-dom";
import { ToggleContext } from "../contexts/Toggle";
import posts from '../data/posts.json'
import { GeneralContext } from "../contexts/General";
import Card from "../partials/Card";
import satria from '../src/assets/satria.jpeg'
import essays from '../src/assets/essays.jpg'

export default function Home () {
    const [blog, setBlog] = useState(posts)
    const {onMenu, setOnMenu} = useContext(ToggleContext)
    const {query, searchedPosts} = useContext(GeneralContext)
    const [guestName, setGuestName] = useState('')

    return (
        <>
        <Header searchedPosts={searchedPosts} />
            <div className="bg-[#171819] border-b-2 border-[#292A2B] pt-16">
                <div className="relative">
                    <img src={satria} alt="" className=""/>
                    <div className="bg-linear-to-t from-black to-black/10 p-4 space-y-4 absolute bottom-0 z-10 w-full">
                        <h1 className="text-center font-medium text-white text-2xl">Sugeng Rawuh, {guestName} <br /> Monggo Sekecaaken</h1>
                        <div className="bg-[#232425] flex justify-between px-2 py-1 rounded-full">
                            <input type="text" name="" id="" placeholder="..." className="pl-4 text-white placeholder:text-gray-200 outline-none" onChange={e => setGuestName(e.target.value)} />
                            <div className="bg-[#747F69] text-white text-lg px-4 py-2 rounded-full">
                                Nama Anda
                            </div>
                        </div>
                    </div>
                </div>
                <article className="text-white p-4">Selamat datang di website personal blog saya{guestName ? `, ${guestName}` : ''}. Di waktu senggang saya menyempatkan untuk membangun website ini sebagai media berpikir saya. Monggo pinarak dan happy reading😁</article>
                <section className="p-4 space-y-4">
                    <div className="relative">
                        <img src={essays} alt="" className="rounded-2xl aspect-video" />
                        <h1 className="absolute bottom-0 p-4 text-white text-3xl font-medium">Essays</h1>
                    </div>
                    <div className="relative">
                        <img src={essays} alt="" className="rounded-2xl aspect-video" />
                        <h1 className="absolute bottom-0 p-4 text-white text-3xl font-medium">Notes</h1>
                    </div>
                    <div className="relative">
                        <img src={essays} alt="" className="rounded-2xl aspect-video" />
                        <h1 className="absolute bottom-0 p-4 text-white text-3xl font-medium">Ideas</h1>
                    </div>
                </section>
                <div className="space-y-4 p-4">
                    <p className="text-gray-200">Latest stories</p>
                    <div className="">
                        {searchedPosts.map(post => (
                            <Card key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </div>
            {!onMenu &&
            <Footer />}
        </>
    )
}