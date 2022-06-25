import LogoImage from '../../images/logo.png';

export default function Logo() {
    return (
        <>
            <figure className="my-20 xl:mr-72 lg:mr-44 md:mr-12 md:my-0 animate-bounce">
                <img 
                    className="rounded-full drop-shadow-2xl w-44 h-44 lg:w-52 lg:h-52"
                    src={LogoImage}
                    alt="Logo"
                />
            </figure>
        </>
    )
}