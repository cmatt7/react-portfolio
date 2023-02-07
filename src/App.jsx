import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Menu from "./components/Menu.component";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer.component";

export default function App() {
    return (
        <BrowserRouter>
            <Menu/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/experience" element={<Experience/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>

            <Footer/>
        </BrowserRouter>
    )
}