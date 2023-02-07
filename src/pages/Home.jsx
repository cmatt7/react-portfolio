// Components
import Menu from "../components/Menu.component";

// Images
import CodeAmico from "../assets/code-amico.png";
import { AiOutlineSend } from "react-icons/ai";
import { Link } from "react-router-dom";
import ParticlesComponent from "../components/Particles.component";

export default function Home() {
    return (
        <section className="flex flex-col lg:flex-row lg:justify-between h-screen w-full px-6 lg:px-12 2xl:px-40 lg:-mt-20">
            <div className="flex flex-col justify-end lg:justify-center text-white h-full gap-y-4">
                <span className="text-5xl text-blue-600">Hey there,</span>
                <h1 className="text-6xl">I am <span className="font-bold">Matt.</span></h1>

                <p>
                    I'm a Full Stack Developer based in São Paulo, Brazil.<br />
                    Love to create intuitive and beautiful web applications and design applications<br />
                    Got any ideas? <span className="font-semibold">Let's talk!</span>
                </p>

                <button type="button" className="flex justify-center items-center gap-x-1 bg-blue-600 hover:bg-blue-800 duration-300 ease-in-out p-2 rounded-md font-semibold">
                    <AiOutlineSend />
                    Hire me
                </button>

                <span className="text-center font-bold">or</span>

                <Link
                    to="/about"
                    className="hover:underline duration-300 ease-in-out text-center font-bold"
                >
                    I wanna know more about you
                </Link>
            </div>

            <figure className="flex justify-end items-center h-full">
                <img
                    src={CodeAmico}
                    alt="This cover has been designed using assets from Freepik.com"
                    className="lg:w-[750px]"
                />
            </figure>

            <ParticlesComponent/>
        </section>
    )
}