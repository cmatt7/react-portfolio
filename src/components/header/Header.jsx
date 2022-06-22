import Social from "./Social";
import Logo from './Logo';

export default function Header() {
    return (
        <header className="w-full h-screen bg-neutral-200">
            {/* Social Media / Contact */}
            <Social />

            <div className="flex flex-row justify-center items-center h-5/6">
                <Logo />

                <div className="flex flex-col px-32">
                    <h2 className="text-4xl font-normal">Hi, I'm <span className="font-bold animate-bounce">Matt</span></h2>
                    <h1 className="text-5xl font-semibold mt-2">Full Stack Developer</h1>
                </div>
            </div>
        </header>
    )
}