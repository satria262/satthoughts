import Home from "../pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Show from "../pages/Show";
import { ToggleProvider } from "../contexts/Toggle";
import { GeneralProvider } from "../contexts/General";
import Essays from "../pages/category/Essays";
import Notes from "../pages/category/Notes";
import Ideas from "../pages/category/Ideas";
import AppLayout from "./AppLayout";

function App() {
  return (
    <GeneralProvider>
      <ToggleProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/posts/:slug" element={<Show />} />
              <Route path="/posts/essays" element={<Essays />} />
              <Route path="/posts/notes" element={<Notes />} />
              <Route path="/posts/ideas" element={<Ideas />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ToggleProvider>
    </GeneralProvider>
  );
}

export default App;
