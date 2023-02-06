import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Menu from "./components/Menu.component";

// Pages
import Home from "./pages/Home.component";
import About from "./pages/About.component";
import Services from "./pages/Services.components";
import Footer from "./components/Footer.component";

export default function App() {
    return (
        <BrowserRouter>
            <Menu/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
            </Routes>

            <Footer/>
        </BrowserRouter>
    )
}