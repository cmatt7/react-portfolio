import Card from './Card';

export default function Projects() {
    return (
        <section className="pt-20 pb-44" id="projects" data-aos="fade-right">
            <div className="text-center">
                <h2 className="text-lg font-semibold uppercase text-slate-300">Projects</h2>
                <h1 className="text-2xl md:text-3xl font-bold pt-4">Take a look into my projects</h1>
            </div>

            <main className="flex flex-col lg:flex-row flex-wrap justify-center items-center my-8">
                <Card 
                    title="Portfolio"
                    langs="HTML5 | CSS3"
                    projectLink="https://cmatt7.github.io/meetme/"
                    gitLink="meetme"
                >
                    My first project, built in 2021. Applied the brief knowledge I had at the time, it was
                    just HTML5 and CSS3. 
                </Card>

                <Card
                    title="L&L Catcare"
                    langs="HTML5 | CSS3 | JS | PHP | MySQL"
                    projectLink="https://www.lelpet.com/login.php"
                >
                    This was also my first project, but this time as a professional developer.
                    I was able to work with integrations between IoT devices and API's to bring
                    data to the user. 
                </Card>
                
                <Card 
                    title="Portfolio V2.0"
                    langs="ReactJS | TailwindCSS"
                    projectLink="https://www.cmatt.dev/"
                    gitLink="react-portfolio"
                >
                    I had so many ideas to do using React, but the one I thought it would be the best
                    was a new portfolio, the version you are using right now is the second of my V2.0, 
                    decided to do some design changes and clean up my code
                </Card>

                <Card 
                    title="System built with NextJS"
                    langs="NextJS | TailwindCSS | Firebase"
                    gitLink="next-system"
                >
                    Oh hey, could you come back later? I'm building something really cool!
                </Card>
            </main>
        </section>
    )
}