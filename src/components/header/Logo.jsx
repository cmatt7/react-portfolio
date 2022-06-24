import LogoImage from '../../images/logo.png';

export default function Logo() {
    return (
        <>
            <figure className="mr-72 animate-bounce w-60 h-60">
                <img 
                    className="rounded-full drop-shadow-2xl"
                    src={LogoImage}
                    alt="Logo"
                />
            </figure>
        </>
    )
}