import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Menu from "./components/Menu.component";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Footer from "./components/Footer.component";

export default function App() {
    return (
        <BrowserRouter>
            <Menu/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/projects" element={<Projects/>}/>
            </Routes>

            <Footer/>
        </BrowserRouter>
    )
}