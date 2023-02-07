import ParticlesComponent from "../components/Particles.component";
import ContactImage from "../assets/contact.png";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";

export default function Contact() {
    return (
        <section className="flex flex-col justify-center items-center gap-x-20 h-screen px-6 lg:px-12 2xl:px-40">
            <ParticlesComponent />

            <div className="flex flex-col justify-center items-center">
                <h2 className="text-lg font-semibold uppercase text-slate-300">Contact me</h2>
                <h1 className="text-2xl md:text-3xl text-blue-600 font-bold pt-3">Interested in something? Talk to me!</h1>

                <p className="text-md text-slate-300 my-3">
                    Do you have any ideas and want to take it out of the paper?<br />
                    Or maybe looking for a developer to hire?
                </p>

                <div className="flex items-center gap-x-5">
                    <a
                        className="flex items-center gap-x-2 py-2.5 px-5 border-2 border-blue-600 bg-blue-600 text-white 
                        rounded-md font-bold text-md hover:text-zinc-900 hover:-translate-y-1 duration-300 my-4"
                        href="mailto: matheusc039@hotmail.com"
                        target="_blank"
                        rel="external noreferrer"
                    >
                        <AiOutlineMail className="text-xl" />
                        Let's talk
                    </a>

                    <a
                        className="flex items-center gap-x-2 py-2.5 px-5 border-2 border-white bg-white text-zinc-900 
                        rounded-md font-bold text-md hover:text-zinc-900 hover:-translate-y-1 duration-300 my-4"
                        href="https://www.linkedin.com/in/cmatt7/"
                        target="_blank"
                        rel="external noreferrer"
                    >
                        <AiFillLinkedin className="text-sky-600 text-xl" />
                        LinkedIn
                    </a>
                </div>

                <figure>
                    <img
                        src={ContactImage}
                        alt="This cover has been designed using assets from Freepik.com"
                        className="w-[350px] lg:w-[500px] mt-10"
                    />
                </figure>
            </div>
        </section>
    )
}