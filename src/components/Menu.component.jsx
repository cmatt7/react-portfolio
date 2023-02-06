// React
import { useState } from "react";
import { Link } from "react-router-dom";

// Assets
import Logo from "../assets/logo.png";
import { AiOutlineHome, AiOutlineRest } from "react-icons/ai"
import { RiSuitcaseLine } from "react-icons/ri";

export default function Menu() {
    const [open, setOpen] = useState(false)
    const [scroll, setScroll] = useState(false)

    const changeMenuScroll = () => {
        if(window.scrollY > 0) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    const items = [
        {
            id: 1,
            icon: <AiOutlineHome />,
            title: "Home",
            path: "/"
        },
        {
            id: 2,
            icon: <AiOutlineRest />,
            title: "About",
            path: "/about"
        },
        {
            id: 3,
            icon: <RiSuitcaseLine />,
            title: "Services",
            path: "/services"
        }
    ]

    window.addEventListener('scroll', changeMenuScroll);

    return (
        <nav 
            className={`
                sticky top-0 w-full px-5 lg:px-20 2xl:px-40 py-3 flex justify-between items-center
                ${scroll ? "bg-blue-600 backdrop-blur-md bg-opacity-20" : null}
            `}>
            <figure className="hidden lg:block">
                <Link to="/">
                    <img src={Logo} alt="Matt - Logo" className="h-12" />
                </Link>
            </figure>

            <ul className="flex gap-x-5">
                {items.map(i => (
                    <Link
                        to={i.path}
                        key={i.id}
                        className="flex items-center justify-center gap-x-1 text-white 
                        text-lg hover:text-blue-600 duration-300 ease-in-out"
                    >
                        {i.icon}
                        {i.title}
                    </Link>
                ))}
            </ul>
        </nav>
    )
}