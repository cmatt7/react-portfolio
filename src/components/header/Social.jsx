import { Instagram, GitHub, LinkedIn } from '@mui/icons-material';

export default function Social() {
    const iconStyle = 'm-2 cursor-pointer text-white hover:text-sky-600';

    return (
        <section className="flex justify-end px-3">
            <a href="https://www.linkedin.com/in/matheus-cruz-561958207/" target="_blank" rel="noopener noreferrer">
                <LinkedIn className={iconStyle} fontSize="medium" />
            </a>

            <a href="https://github.com/cmatt7" target="_blank" rel="noopener noreferrer">
                <GitHub className={iconStyle} fontSize="medium" />
            </a>

            <a href="https://www.instagram.com/c.matt7/" target="_blank" rel="noopener noreferrer">
                <Instagram className={iconStyle} fontSize="medium" />
            </a>
        </section>
    )
}