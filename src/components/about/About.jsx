import Tools from './Tools';
import Matt from '../../images/matt.jpg';

export default function About() {
    return (
        <main id="about">

            <section className="flex flex-col xl:flex-row justify-center pt-20 pb-28 px-8 xl:px-28" data-aos="fade-right">

                <div className="flex flex-col mb-6 md:w-5/6 lg:w-4/6 2xl:w-3/6 mx-auto">
                    <div className="text-center md:text-left" data-aos="fade-down">
                        <h1 className="text-lg font-semibold uppercase text-slate-300">About me</h1>
                        <h1 className="text-2xl md:text-3xl font-bold pt-2">Let me introduce myself</h1>
                    </div>

                    <p className="text-md py-4" data-aos="fade-down">
                        Hi there, my name is Matheus Cruz but feel free to call me Matt. I'm a Full Stack Developer from Brazil, overwhelmed and obsessed by technology and everything that it provides to the world.
                        Started to see the world of programming when I was 15 years old, inspired by my father and brothers to get into this path and I've been learning ever since.<br />
                        My first experience was with HTML and CSS building a basic and silly page, turned out be one of the best things i've ever done it!
                    </p>

                    <figure className="flex justify-center my-8">
                        <img
                            className="rounded-full w-52 h-52 border-white border-2" 
                            src={Matt} 
                            alt="Matheus Cruz"
                        />
                    </figure>
                </div>

                <Tools />
            </section>
        </main>
    )
}