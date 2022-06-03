import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="flex flex-col justify-between h-screen">
      <Navbar title="Github Finder"/>
      <main className="container mx-auto px-3 pb-12">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/notfound" element={<NotFound/>}/>
      <Route path="/*" element={<NotFound/>}/>
     </Routes>
      </main>
     <Footer footerYear={2022}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
