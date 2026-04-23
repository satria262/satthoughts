import { Outlet } from "react-router-dom";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Analytics } from "@vercel/analytics/react";

export default function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Analytics />
    </>
  );
}
