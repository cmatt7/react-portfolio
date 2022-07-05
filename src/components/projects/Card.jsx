import { FolderOutlined, Link, GitHub } from "@mui/icons-material";

export default function Card({ title, children, langs, projectLink, gitLink }) {
    const iconsStyle = "hover:text-sky-600 duration-300";
    
    return (
        <div className="relative flex flex-col w-80 md:w-96 h-[320px] md:h-[300px] bg-zinc-900 shadow-2xl my-6 mx-auto md:m-8 rounded-md hover:-translate-y-2 duration-300 ease-in-out">
            <div className="card-body">
                <h2 className="card-title">
                    <FolderOutlined />
                    {title}
                </h2>

                <p className="text-md my-2 text-slate-300">
                    {children}
                </p>

                <div className="flex flex-row items-center justify-between">
                    <span className="text-slate-500 uppercase text-sm">
                        {langs}
                    </span>

                    <div>
                        {projectLink && 
                        (<a 
                            href={projectLink} 
                            target="_blank" 
                            rel="external noreferrer"
                            title="Visit this project website"
                            className={iconsStyle}
                        >
                            <Link />
                        </a>)
                        }

                        {gitLink &&
                        (<a 
                            href={`https://www.github.com/cmatt7/${gitLink}`} 
                            target="_blank" 
                            rel="external noreferrer"
                            title="Check the source code"
                            className={iconsStyle}    
                        >
                            <GitHub className="ml-3"/>
                        </a>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}