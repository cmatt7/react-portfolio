import ParticlesComponent from "../components/Particles.component";
import ExperienceImage from "../assets/experience.png";
import InfoContainer from "../components/Experience/InfoContainer.component";
import Title from "../components/Experience/Title.component";
import Time from "../components/Experience/Time.component";
import Activities from "../components/Experience/Activities.component";
import Skills from "../components/Experience/Skills.componet";

export default function Experience() {
    return (
        <section className="flex flex-col w-screen px-6 lg:px-12 2xl:px-40 mt-10">
            <ParticlesComponent />

            <div className="flex flex-col md:flex-row justify-between w-full">
                <div className="flex flex-col justify-start items-start text-white h-full gap-y-4">
                    <span className="text-5xl font-semibold text-blue-600">Experience</span>

                    <p className="mt-4">

                    </p>
                </div>

                <figure>
                    <img
                        src={ExperienceImage}
                        alt=""
                        className="w-[400px] lg:w-[500px]"
                    />
                </figure>
            </div>

            <main className="grid grid-cols-1 md:grid-cols-2 gap-y-10 mt-10">
                {/* Soulog Fulfillment */}
                <InfoContainer>
                    <Title>Soulog Fulfillment</Title>

                    <Time>Oct 2022 - Jan 2023</Time>

                    <Activities>
                        <li>Assigned to design and build systems for both workers and customers</li>
                        <li>Developed a Rest API using MongoDB and NodeJS</li>
                        <li>Created systems using ReactJS and TailwindCSS</li>
                        <li>Maintained regular communication with customers to meet their needs</li>
                    </Activities>

                    <Skills>ReactJS | TailwindCSS | NodeJS | MongoDB | Git</Skills>
                </InfoContainer>

                {/* Instituto InovaNex */}
                <InfoContainer>
                    <Title>Instituto InovaNex</Title>

                    <Time>Oct 2021 - Feb 2022</Time>

                    <Activities>
                        <li>Designed and developed a platform for an IoT engineering project</li>
                        <li>Organized and managed all projects on GitHub</li>
                        <li>Developed an API using PHP and MySQL</li>
                        <li>Created an automation process to deploy new versions of code once it was merged and ready to production</li>
                    </Activities>

                    <Skills>HTML5 | CSS3 | JS | PHP | MySQL | Git</Skills>
                </InfoContainer>

                {/* TopNetworks | Gestão de TI */}
                <InfoContainer>
                    <Title>TopNetworks | Gestão de TI</Title>

                    <Time>Aug 2021 - Oct 2021</Time>

                    <Activities>
                        <li>Repaired and configured network infrastructure in new work environments</li>
                        <li>Provided technical support to customers</li>
                        <li>Conducted computer repairs</li>
                        <li>Maintained regular communication with customers to meet their needs</li>
                    </Activities>
                </InfoContainer>
            </main>

        </section>
    )
}