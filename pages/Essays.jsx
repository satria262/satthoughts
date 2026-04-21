import { useContext } from "react";
import Header from "../partials/Header";
import image from "../src/assets/thumbnail.jpg";
import { GeneralContext } from "../contexts/GeneralContext";
import Card from "../partials/Card";
import Footer from "../partials/Footer";

export default function Essays() {
  const { searchedPosts } = useContext(GeneralContext);
  return (
    <>
      <Header />
      <div className="bg-[#232425] min-h-screen">
        <div>
          <img src={image} alt="" className="aspect-square" />
        </div>
        <div className="text-center text-white space-y-4 mt-4">
          <h1 className="">Essays</h1>
          <p>Media berpikir</p>
        </div>
        <div className="p-4">
          {searchedPosts.map((posts) => (
            <Card key={posts.id} post={posts} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
