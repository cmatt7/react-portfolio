import ParticlesComponent from "../components/Particles.component";
import ProjectsImage from "../assets/projects.png";
import Card from "../components/Projects/Card.component";

export default function Projects() {
    return (
        <section className="flex flex-col px-6 lg:px-12 2xl:px-40 mt-20">
            <ParticlesComponent />

            <div className="flex flex-col lg:flex-row justify-between md:items-center text-white gap-y-2">
                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold text-blue-600 mb-3">Projects</h1>
                    <p className="text-lg">
                        Here are some projects that I've worked on to get better at my programming skills.<br />
                        Oh, of course, I have the first version of my portfolio using only HTML & CSS.<br />
                        It was fun, after a while I started to learn JavaScript ES6+, ReactJS, Redux, Jest<br />
                        and some styling frameworks such as TailwindCSS and Styled Components.
                    </p>

                    <div className="flex flex-col md:flex-row gap-x-6 gap-y-6 mt-20">
                        <Card
                            title="Portfolio (v1.0)"
                            description="My first project, built in 2021. Applied the brief knowledge I had at the time, it was just HTML5 and CSS3."
                            tools="HTML5 | CSS3"
                            link="https://cmatt7.github.io/meetme/"
                            git="https://github.com/cmatt7/meetme"
                        />

                        <Card
                            title="Portfolio (v2.0)"
                            description="I had so many ideas to do using React, but the one I thought it would be the best was a new portfolio, the version you are using right now is the second of my V2.0, decided to do some design changes and clean up my code"
                            tools="ReactJS | TailwindCSS"
                            git="https://github.com/cmatt7/react-portfolio/tree/v2.0"
                        />
                    </div>
                </div>

                <figure className="hover:-translate-y-2 duration-300 ease-in-out">
                    <img
                        src={ProjectsImage}
                        alt="his cover has been designed using assets from Freepik.com"
                        className="md:w-[400px] lg:w-[500px]"
                    />
                </figure>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap gap-x-6 gap-y-6 mt-8">
                <Card
                    title="Portfolio (Current version)"
                    description="Thought about cleaning the design and information presented on my portfolio, so I decided to work on this current version."
                    tools="ReactJS | TailwindCSS | Framer Motion"
                    git="https://github.com/cmatt7/react-portfolio/tree/v2.0"
                />

                <Card
                    title="Weather Forecast"
                    description="Working on it!"
                    tools="ReactJS | TailwindCSS"
                    git="https://github.com/cmatt7/weather-forecast"
                />

                <Card
                    title="Landing page"
                    description="Working on it!"
                    tools="ReactJS | TailwindCSS"
                    git="https://github.com/cmatt7/landing-page"
                />

                <Card
                    title="To-Do List"
                    description="Working on it!"
                    tools="ReactJS | TailwindCSS | MongoDB | NodeJS"
                    git="https://github.com/cmatt7/todo-list"
                />
            </div>
        </section>
    )
}