import LogoImage from '../../images/logo.png';

export default function Logo() {
    return (
        <>
            <figure className="px-40">
                <div className="">

                </div>
                <img 
                    className="rounded-full drop-shadow-2xl"
                    src={LogoImage}
                    alt="Logo"
                />
            </figure>
        </>
    )
}