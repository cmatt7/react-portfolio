import { useState } from 'react';
import {
    Menu,
    Close,
    HomeOutlined,
    PersonOutline,
    BusinessCenterOutlined,
    ShoppingBagOutlined,
    FolderOutlined,
    ConnectWithoutContactOutlined
}
    from '@mui/icons-material';

export default function NavBar() {
    // Icons style
    const menuStyleToggle = "absolute left-4 top-4 md:left-3.5 md:top-3.5 hover:-translate-y-1 cursor-pointer z-20 duration-300"
    const iconsStyle = `mr-2.5 md:mr-1`;

    // Mobile menu state
    let [open, setOpen] = useState(false);

    // Menu background color change
    const [menuScroll, setMenuScroll] = useState(false);
    function changeMenuScroll() {
        if (window.scrollY > 0) {
            setMenuScroll(true);
        } else {
            setMenuScroll(false);
        }
    }

    window.addEventListener('scroll', changeMenuScroll);

    return (
        <header className="fixed top-0 left-0 w-full z-10">
            <nav className={`flex py-3.5 justify-center duration-300 ease bg-zinc-900
            ${menuScroll && "bg-sky-600 backdrop-blur-md bg-opacity-50"}`}>
                
                <div className="p-3" onClick={() => setOpen(!open)}>
                    {open ? (
                        <Close className={menuStyleToggle}/>
                    ) : (
                        <Menu className={menuStyleToggle}/>
                    )}
                </div>

                <ul className={`${!open ? "hidden" : "flex"} flex-col md:flex-row my-6 md:my-0 duration-300`}>
                    <Item component="#home">
                        <HomeOutlined className={iconsStyle} />
                        Home
                    </Item>

                    <Item component="#about">
                        <PersonOutline className={iconsStyle} />
                        About
                    </Item>

                    <Item component="#experience">
                        <BusinessCenterOutlined className={iconsStyle} />
                        Experience
                    </Item>

                    <Item component="#services">
                        <ShoppingBagOutlined className={iconsStyle} />
                        Services
                    </Item>

                    <Item component="#projects">
                        <FolderOutlined className={iconsStyle} />
                        Projects
                    </Item>

                    <Item component="#contact">
                        <ConnectWithoutContactOutlined className={iconsStyle} />
                        Contact
                    </Item>
                </ul>
            </nav>
        </header>
    )
}

export function Item({children, component}) {
    return (
        <li
            onClick={() => {
                const anchor = document.querySelector(`${component}`)
                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }}

            className="flex items-center font-semibold text-md cursor-pointer px-5 py-6 md:py-0 hover:-translate-y-1 duration-300 ease"
        >
            {children}
        </li>
    )
}