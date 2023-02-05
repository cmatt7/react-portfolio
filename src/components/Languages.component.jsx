import Programming from "../assets/programming.png";

export default function Languages() {
    const list = [
        {
            id: 1,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
            alt: "HTML5 - Icon"
        },
        {
            id: 2,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
            alt: "CSS3 - Icon"
        },
        {
            id: 3,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            alt: "JavaScript - Icon"
        },
        {
            id: 4,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            alt: "TypeScript - Icon"
        },
        {
            id: 5,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            alt: "ReactJS - Icon"
        },
        {
            id: 6,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
            alt: "TailwindCSS - Icon"
        },
        {
            id: 7,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            alt: "NodeJS - Icon"
        },
        {
            id: 8,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
            alt: "MongoDB - Icon"
        },
        {
            id: 9,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg",
            alt: "Laravel - Icon"
        },
        {
            id: 10,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
            alt: "SASS - Icon"
        },
        {
            id: 11,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
            alt: "Jest - Icon"
        },
        {
            id: 12,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
            alt: "Git - Icon"
        },
        {
            id: 13,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
            alt: "PHP - Icon"
        },
        {
            id: 14,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
            alt: "MySQL - Icon"
        },
        {
            id: 15,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
            alt: "Firebase - Icon"
        }
    ]

    return (
        <div className="flex flex-col lg:flex-row justify-between">
            <figure>
                <img
                    src={Programming}
                    alt="This cover has been designed using assets from Freepik.com"
                    className="lg:w-[600px] my-10"
                />
            </figure>

            <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-3">
                {list.map((item) => (
                    <figure
                        key={item.id}
                        className="flex justify-center items-center border-2 border-gray-800 rounded-md
                        hover:bg-white hover:backdrop-blur-md text-white 
                        w-40 h-40 duration-300 ease-in-out cursor-pointer"
                    >
                        <img
                            src={item.image}
                            alt={item.alt}
                            className="h-20 w-20"
                        />
                    </figure>
                ))}
            </div>
        </div>
    )
}