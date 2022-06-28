import Tools from './Tools';
import Matt from '../../images/matt.jpg';

export default function About() {
    return (
        <main className="relative" id="about">
            <div className="custom-shape-divider-bottom-1655917476">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                </svg>
            </div>

            <section className="flex flex-col items-center px-8 my-10 lg:p-8" data-aos="fade-right">
                <h1 className="text-2xl font-bold my-2" data-aos="fade-down">About me</h1>
                <div className="flex flex-col justify-center items-center lg:flex-row">
                    <p className="text-md font-normal py-4 md:w-2/6" data-aos="fade-up">
                        Hi there, my name is Matheus Cruz but feel free to call me Matt. I'm a Full Stack Developer from Brazil, overwhelmed and obsessed by technology and everything that it provides to the world.
                        Started to see the world of programming when I was 15 years old, inspired by my father and brothers to get into this path and I've been learning ever since.<br/>
                        My first experience was with HTML and CSS building a basic and silly page, turned out be one of the best things i've ever done it!
                    </p>
                    <div className="avatar justify-center" data-aos="fade-right">
                        <div className="w-40 h-40 md:w-52 md:h-full mask mask-hexagon md:ml-10 md:my-0 my-10">
                            <img src={Matt} alt="Matheus Cruz"/>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex flex-col w-full lg:h-3/6 bg-zinc-900 mx-auto lg:bottom-20" data-aos="fade-right">
                <Tools />

                <div className="custom-shape-divider-top-1656022149">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
        </main>
    )
}