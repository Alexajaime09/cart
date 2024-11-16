import { Layout } from "./components";
import { Home } from "./pages";
import { Details } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/:slug" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
