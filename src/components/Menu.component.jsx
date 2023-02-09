// React
import { useState } from "react";
import { Link } from "react-router-dom";

// Assets
import Logo from "../assets/logo.png";
import { AiOutlineFolderOpen, AiOutlineHome, AiOutlineRest, AiOutlineTeam } from "react-icons/ai";
import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi";
import { RiSuitcaseLine } from "react-icons/ri";

export default function Menu() {
    const [open, setOpen] = useState(false)
    const [scroll, setScroll] = useState(false)
    const changeMenuScroll = () => {
        if (window.scrollY > 0) {
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
            title: "Experience",
            path: "/experience"
        },
        {
            id: 4,
            icon: <AiOutlineFolderOpen />,
            title: "Projects",
            path: "/projects"
        },
        {
            id: 5,
            icon: <AiOutlineTeam />,
            title: "Contact",
            path: "/contact"
        }
    ]

    window.addEventListener('scroll', changeMenuScroll);

    return (
        <>
            <div className={`${open ? "bg-blue-600" : null} block md:hidden px-6 py-4`}>
                {open ? (
                    <BiMenuAltRight className="text-white text-2xl cursor-pointer" onClick={() => setOpen(false)} />
                ) : (
                    <BiMenuAltLeft className="text-white text-2xl cursor-pointer" onClick={() => setOpen(true)} />
                )}
            </div>

            <nav
                className={`
                ${open ? "flex bg-blue-600" : "hidden"} md:flex
                sticky top-0 w-full px-5 lg:px-12 2xl:px-40 py-3 justify-between items-center
                ${scroll ? "bg-blue-600 backdrop-blur-md bg-opacity-20" : null} z-50
            `}>
                <figure className="hidden md:block">
                    <Link to="/">
                        <img src={Logo} alt="Matt - Logo" className="h-12" />
                    </Link>
                </figure>

                <ul className={`${open ? "flex flex-col items-start w-full" : null} flex gap-x-5 gap-y-5`}>
                    {items.map(i => (
                        <Link
                            to={i.path}
                            key={i.id}
                            className="flex items-center justify-center gap-x-1 text-white 
                        text-lg hover:text-blue-600 duration-300 ease-in-out"
                            onClick={() => setOpen(false)}
                        >
                            {i.icon}
                            {i.title}
                        </Link>
                    ))}
                </ul>
            </nav>
        </>
    )
}