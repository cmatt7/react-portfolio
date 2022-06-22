import { Instagram, GitHub, LinkedIn } from '@mui/icons-material';

export default function Social() {
    const iconStyle = 'm-2 cursor-pointer';

    return (
        <section className="flex justify-end px-3">
            <LinkedIn className={iconStyle} fontSize="medium" />
            <GitHub className={iconStyle} fontSize="medium" />
            <Instagram className={iconStyle} fontSize="medium" />
        </section>
    )
}