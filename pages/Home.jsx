import { useContext, useState } from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import { ToggleContext } from "../contexts/ToggleContext";
import { GeneralContext } from "../contexts/GeneralContext";
import Card from "../partials/Card";
import satriahero from "../src/assets/satria-hero.png";
import essays from "../src/assets/essays.jpg";
import notes from "../src/assets/category/notes.jpg";
import programming from "../src/assets/category/programming.jpg";

export default function Home() {
  const { onMenu } = useContext(ToggleContext);
  const { searchedPosts } = useContext(GeneralContext);
  const [guestName, setGuestName] = useState("");

  return (
    <>
      <Header />
      <div className="border-b-2 border-[#292A2B] bg-[#171819] pt-16">
        <div className="relative overflow-hidden lg:p-4 lg:h-170">
          <img src={satriahero} alt="" className="object-cover w-full h-100" />
          <div className="absolute right-0 bottom-0 left-0 h-full flex flex-col justify-end pb-4 z-10 space-y-4 bg-linear-to-t from-black to-black/10 lg:p-8">
            <h1 className="text-center text-2xl font-medium text-white">
              Selamat datang
              <br />
              Salam hangat dari saya Satria Aditama.
            </h1>
            <div className="flex justify-between rounded-full bg-[#232425] px-2 py-1">
              <input
                type="text"
                placeholder="..."
                className="pl-4 text-white outline-none placeholder:text-gray-200"
                onChange={(e) => setGuestName(e.target.value)}
              />
              <div className="rounded-full bg-[#747F69] px-4 py-2 text-lg text-white">
                Nama Anda
              </div>
            </div>
          </div>
        </div>
        <article className="p-4 text-center text-white">
          Aditama. Di waktu senggang saya
          menyempatkan untuk membangun website ini sebagai media berpikir saya.
          Monggo pinarak dan happy reading!
        </article>
        <section className="p-4 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="relative h-20">
            <img src={essays} alt="" className="aspect-video rounded-t-2xl md:rounded-2xl " />
            <h1 className="absolute bottom-4 p-4 text-3xl font-medium text-white">
              Tulisan
            </h1>
            <p className="absolute bottom-1 pl-4 text-xl italic text-white">
              Essays
            </p>
          </div>
          <div className="relative h-20">
            <img src={notes} alt="" className="aspect-video md:rounded-2xl " />
            <h1 className="absolute bottom-4 p-4 text-3xl font-medium text-white">
              Catatan
            </h1>
            <p className="absolute bottom-1 pl-4 text-xl italic text-white">
              Notes
            </p>
          </div>
          <div className="relative h-20">
            <img src={programming} alt="" className="aspect-video rounded-b-2xl md:rounded-2xl " />
            <h1 className="absolute bottom-4 p-4 text-3xl font-medium text-white">
              Temuan
            </h1>
            <p className="absolute bottom-1 pl-4 text-xl italic text-white">
              Ideas
            </p>
          </div>
        </section>
        <div className="space-y-4 p-4">
          <p className="text-gray-200">Latest stories</p>
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {searchedPosts.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
      {!onMenu && <Footer />}
    </>
  );
}
