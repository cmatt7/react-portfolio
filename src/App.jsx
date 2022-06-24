// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
// Components
import Header from "./components/header/Header";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";

export default function App() {
    AOS.init({
        duration: 1500
    });

    return (
        <>
            <Header/>
            <About/>
            <Experience/>

            {/* 
                <Services/>
                <Projects/>
                <Contact/>
                <Footer/>
            */}
        </>
    )
}