import { Phonelink, DesktopWindows, Psychology } from '@mui/icons-material';

export default function Services() {
    const cardStyle = "artboard phone-1 bg-black my-14 mx-auto md:mx-10 lg:mx-20 rounded-md drop-shadow-lg"

    return (
        <section className="py-20" data-aos="fade-down">

            <div className="text-center">
                <h2 className="text-lg font-semibold uppercase text-slate-300">Services</h2>
                <h1 className="text-2xl md:text-3xl font-bold pt-4">How may I help you?</h1>
            </div>

            <main className="flex flex-col lg:flex-row justify-center my-14">
                <CardInfo
                    title="Responsive"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor molestie neque, eu cursus nisi aliquet ac. 
                    In varius diam auctor quam lobortis euismod. Donec ut turpis sem. 
                    Quisque accumsan augue velit, eu ultricies ipsum tristique quis. 
                    Quisque tincidunt leo nec quam malesuada, et porttitor arcu porttitor."
                >
                    <Phonelink className="text-sky-600" fontSize="large" />
                </CardInfo>

                <CardInfo
                    title="Dynamic"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor molestie neque, eu cursus nisi aliquet ac. 
                    In varius diam auctor quam lobortis euismod. Donec ut turpis sem. 
                    Quisque accumsan augue velit, eu ultricies ipsum tristique quis. 
                    Quisque tincidunt leo nec quam malesuada, et porttitor arcu porttitor."
                >
                    <DesktopWindows className="text-sky-600" fontSize="large" />
                </CardInfo>

                <CardInfo
                    title="Mentorship"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor molestie neque, eu cursus nisi aliquet ac. 
                    In varius diam auctor quam lobortis euismod. Donec ut turpis sem. 
                    Quisque accumsan augue velit, eu ultricies ipsum tristique quis. 
                    Quisque tincidunt leo nec quam malesuada, et porttitor arcu porttitor."
                >
                    <Psychology className="text-sky-600" fontSize="large" />
                </CardInfo>
            </main>

        </section>
    )
}

export function CardInfo({ children, title, text }) {
    return (
        <div className="flex flex-col items-center my-6 px-8 md:px-24 lg:px-0 lg:mx-8 xl:mx-24" data-aos="fade-down">
            {/* Icon */}
            <span className="flex justify-center items-center w-20 h-20 bg-white rounded-full">
                {children}
            </span>
            {/* Icon */}

            {/* Title */}
            <h2 className="text-xl font-semibold my-4">
                {title}
            </h2>
            {/* Title */}

            {/* Text */}
            <p className="text-md text-justify">{text}</p>
            {/* Text */}
        </div>
    )
}