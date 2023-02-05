import Studying from "../assets/studying.png";

export default function AboutMe() {
    return (
        <div className="flex flex-col lg:flex-row justify-between">
            <div className="flex flex-col text-white gap-y-3">
                <h1 className="text-4xl font-bold text-blue-600">Pleasure,</h1>
                <p className="text-lg">
                    I'm from Brazil! Yes, tropical country, beaches, it's wonderful.<br />
                    Currently studying Computer Science | Bachelors at São Judas Tadeu University (USJT).<br />
                    I fell in love with programming in high school, started to study alone.<br />
                    After creating some pages, I was finally able to put my creativity to work!
                </p>

                <ul className="flex flex-col list-disc gap-y-2">
                    <h3 className="font-semibold text-blue-600 mb-2">Fun facts about me</h3>

                    <li className="ml-5">Basketball player, three point specialist</li>
                    <li className="ml-5">Big fan of Formula 1</li>
                    <li className="ml-5">I cheer for Scuderia Ferrari</li>
                </ul>

                <div className="flex flex-col items-center text-gray-400 mt-10">
                    <cite>"We have two ears and one mouth so that we can listen twice as much as we speak."</cite>
                    <cite>- Epictetus</cite>
                </div>
            </div>

            <figure>
                <img
                    src={Studying}
                    alt="This cover has been designed using assets from Freepik.com"
                    className="lg:w-[700px]"
                />
            </figure>
        </div>
    )
}