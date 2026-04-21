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
                <div className="relative p-4 overflow-hidden">
                    <img src={satria} alt="" className="object-cover"/>
                    <div className="bg-linear-to-t from-black to-black/10 space-y-4 absolute bottom-0 right-0 left-0 z-10 w- lg:p-8">
                        <h1 className="text-center font-medium text-white text-2xl">Sugeng Rawuh, {guestName} <br /> Monggo Sekecaaken</h1>
                        <div className="bg-[#232425] flex justify-between px-2 py-1 rounded-full lg:pr-4">
                            <input type="text" name="" id="" placeholder="..." className="pl-4 text-white placeholder:text-gray-200 outline-none" onChange={e => setGuestName(e.target.value)} />
                            <div className="bg-[#747F69] text-white text-lg px-4 py-2 rounded-full">
                                Nama Anda
                            </div>
                        </div>
                    </div>
                </div>
                <article className="text-white text-center p-4">Selamat datang di website personal blog saya{guestName ? `, ${guestName}` : ''}. Di waktu senggang saya menyempatkan untuk membangun website ini sebagai media berpikir saya. Monggo pinarak dan happy reading😁</article>
                <section className="p-4 space-y-4 lg:grid grid-cols-3 lg:gap-8">
                    <div className="relative">
                        <img src={essays} alt="" className="rounded-2xl aspect-video" />
                        <h1 className="absolute bottom-4 p-4 text-white text-3xl font-medium">Tulisan</h1>
                        <p className="absolute bottom-1 pl-4 text-white text-xl italic">Essays</p>
                    </div>
                    <div className="relative">
                        <img src={essays} alt="" className="rounded-2xl aspect-video" />
                        <h1 className="absolute bottom-4 p-4 text-white text-3xl font-medium">Catatan</h1>
                        <p className="absolute bottom-1 pl-4 text-white text-xl italic">Essays</p>
                    </div>
                    <div className="relative">
                        <img src={essays} alt="" className="rounded-2xl aspect-video" />
                        <h1 className="absolute bottom-4 p-4 text-white text-3xl font-medium lg:pb-8">Gagasan</h1>
                        <p className="absolute bottom-1 pl-4 text-white text-xl italic pb-4">Essays</p>
                    </div>
                </section>
                <div className="space-y-4 p-4">
                    <p className="text-gray-200">Latest stories</p>
                    <div className="lg:grid grid-cols-3 lg:gap-8">
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