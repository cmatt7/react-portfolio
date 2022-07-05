import Logo from '../../images/logo.png';
import TopSvg from './TopSvg';
import { Chat, Instagram, GitHub, LinkedIn, Mail } from '@mui/icons-material';

export default function Footer() {
    const iconStyle = 'cursor-pointer text-white';

    return (
        <footer className="footer footer-center py-20 px-8 bg-zinc-900 text-primary-content relative" id="contact" data-aos="fade-down">
            <TopSvg />

            <div className="text-center" data-aos="fade-right">
                <h2 className="text-lg font-semibold uppercase text-slate-300">Contact me</h2>
                <h1 className="text-2xl md:text-3xl font-bold pt-3">Interested in something? Talk to me!</h1>

                <p className="text-md text-slate-300">
                    Do you have any ideas and want to take it out of the paper?<br />
                    Or maybe looking for a developer to hire?
                </p>
            </div>

            <a
                className="inline py-3 px-5 border-2 border-white bg-white text-zinc-900 rounded-md font-bold text-md uppercase hover:text-white hover:border-sky-600 hover:bg-sky-600 hover:-translate-y-1 duration-300"
                href="mailto: matheusc039@hotmail.com"
                target="_blank"
                rel="external noreferrer"
            >
                <Chat className="mr-2" />
                Let's talk
            </a>

            <div data-aos="fade-down">
                <figure>
                    <img
                        className="shadow-xl rounded-full h-32 my-4"
                        src={Logo}
                        alt="Matt's Logo"
                    />
                </figure>
                <p className="font-bold">Designed and built by Matt</p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>

            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.linkedin.com/in/cmatt7/" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-2 duration-300">
                        <LinkedIn className={`${iconStyle} hover:text-sky-600`} fontSize="medium" />
                    </a>

                    <a href="https://github.com/cmatt7" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-2 duration-300">
                        <GitHub className={`${iconStyle} hover:text-black`} fontSize="medium" />
                    </a>

                    <a href="https://www.instagram.com/c.matt7/" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-2 duration-300">
                        <Instagram className={`${iconStyle} hover:text-pink-500`} fontSize="medium" />
                    </a>

                    <a href="mailto: matheusc039@hotmail.com" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-2 duration-300">
                        <Mail className={iconStyle} fontSize="medium" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
