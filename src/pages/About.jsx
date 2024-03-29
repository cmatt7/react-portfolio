import ParticlesComponent from "../components/Particles.component";
import AboutMe from "../components/AboutMe.component";
import Languages from "../components/Languages.component";

export default function About() {
    return (
        <section className="flex flex-col px-6 lg:px-12 2xl:px-40 mt-10">
            <ParticlesComponent />

            <AboutMe/>

            <h1 className="text-4xl text-blue-600 text-center font-semibold mb-20">Languages & Tools</h1>

            <Languages/>
        </section>
    )
}