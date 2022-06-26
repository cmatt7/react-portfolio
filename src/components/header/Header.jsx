import Social from "./Social";
import Logo from './Logo';

import { Button } from '@mui/material';
import { KeyboardDoubleArrowDownOutlined } from '@mui/icons-material';

export default function Header() {
    return (
        <header className="w-full h-screen bg-zinc-900">
            {/* Social Media / Contact */}
            <Social />

            <div className="flex flex-col md:flex-row justify-center items-center h-5/6">
                <Logo />

                <div className="flex flex-col text-white">
                    <h2 className="text-4xl md:text-4xl font-normal">Hi, I'm <span className="font-bold animate-bounce">Matt</span></h2>
                    <h1 className="text-3xl md:text-5xl font-semibold mt-2.5 mb-5">Full Stack Developer</h1>

                    <Button variant="contained">
                        <a href="#about" className="font-bold relative">
                            <KeyboardDoubleArrowDownOutlined /> Meet me
                        </a>
                    </Button>
                </div>
            </div>
        </header>
    )
}