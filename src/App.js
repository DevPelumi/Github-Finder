import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from "./context/Alert/AlertContext";
import Alert from "./components/layout/Alert";

function App() {
  return (
    <GithubProvider>
    <AlertProvider>
     <Router>
     <div className="flex flex-col justify-between h-screen">
       <Navbar title="Github Finder"/>
       <main className="container mx-auto px-3 pb-12">
       <Routes>
       <Route path="/" element={
         <>
          <Alert/>
          <Home/>
         </> 
       }/>
       <Route path="/user/:login" element={<User/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/notfound" element={<NotFound/>}/>
       <Route path="/*" element={<NotFound/>}/>
       </Routes>
       </main>
      <Footer footerYear={2022}/>
     </div>
     </Router>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;
