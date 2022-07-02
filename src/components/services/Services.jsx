import { Phonelink, DesktopWindows, Psychology, Folder, ConnectWithoutContact } from '@mui/icons-material';

export default function Services() {
    return (
        <section className="py-20" data-aos="fade-down">

            <div className="text-center">
                <h2 className="text-lg font-semibold uppercase text-slate-300">Services</h2>
                <h1 className="text-2xl md:text-3xl font-bold pt-4">How may I help you?</h1>
            </div>

            <main className="flex flex-col lg:flex-row justify-center my-14">
                <CardInfo
                    title="Responsive"
                    text="Do you need your app to be visible on any device? Great! I can do this for you. 
                    Having responsive apps is critical for a better user experience on your system, 
                    as most of the time people are on their phones, so whenever they need a service or 
                    need to research something about you or your business, they can easily access it through 
                    from their devices"
                >
                    <Phonelink className="text-sky-600" fontSize="large" />
                </CardInfo>

                <CardInfo
                    title="Dynamic"
                    text="Do you need data integration from somewhere to your system or platform? Let me help you with that! 
                    I'll make it nice and fast so everyone can use it without any problems. After all, that's the point, isn't it?"
                >
                    <DesktopWindows className="text-sky-600" fontSize="large" />
                </CardInfo>

                <CardInfo
                    title="Mentorship"
                    text="I love to contribute knowledge whenever I can, I also love to learn! 
                    We all go through something in our lives, we all start somewhere and we all feel alone. 
                    A little guidance can go a long way for someone and I'm more than happy to help."
                >
                    <Psychology className="text-sky-600" fontSize="large" />
                </CardInfo>
            </main>

            <div className="flex flex-col md:flex-row justify-center items-center font-semibold uppercase">
                <button className="flex items-center bg-zinc-900 text-white py-3 px-4 rounded-md shadow-xl my-3 mx-5 hover:bg-zinc-800 hover:-translate-y-2 duration-500">
                    <Folder className="mr-3"/>
                    Check my projects
                </button>
                <span>or</span>
                <button className="flex items-center border-2 border-white text-white py-3 px-4 rounded-md shadow-xl my-3 mx-5 hover:bg-white hover:text-zinc-900 hover:-translate-y-2 duration-500">
                    <ConnectWithoutContact className="mr-3"/>
                    Contact Me
                </button>
            </div>
        </section>
    )
}

export function CardInfo({ children, title, text }) {
    return (
        <div className="flex flex-col items-center lg:w-4/6 my-6 px-8 md:px-24 lg:px-0 lg:mx-8 xl:mx-20" data-aos="fade-down">
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
            <p className="text-md text-left">{text}</p>
            {/* Text */}
        </div>
    )
}