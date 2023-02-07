import { BsLink, BsGithub } from "react-icons/bs";
import { AiOutlineFolder } from "react-icons/ai"

export default function Card({ title, description, tools, link, git }) {
    const cardStyle = "flex flex-col rounded-md bg-zinc-700 bg-opacity-50 drop-shadow-xl w-full md:w-[370px] h-64 p-6 text-gray-300 hover:-translate-y-2 duration-300 ease-in-out";

    return (
        <div className={cardStyle}>
            <h1 className="flex items-center gap-x-2 text-xl font-semibold">
                <AiOutlineFolder /> {title}
            </h1>

            <p className="mt-3 text-sm lg:text-md">
                {description}
            </p>

            <div className="flex justify-between items-end h-full">
                <span className="text-gray-400 text-sm">{tools}</span>

                <div className="flex gap-x-3 text-2xl">
                    {link ? (
                        <a href={link} target="_blank">
                            <BsLink className="hover:text-amber-500 hover:-translate-y-1 duration-300 ease-in-out cursor-pointer" />
                        </a>
                    ) : null}

                    {git ? (
                        <a href={git} target="_blank">
                            <BsGithub className="hover:text-black hover:-translate-y-1 duration-300 ease-in-out cursor-pointer" />
                        </a>
                    ) : null}
                </div>
            </div>
        </div>
    )
}