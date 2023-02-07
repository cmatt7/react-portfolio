export default function Footer() {
    return (
        <footer className="px-6lg:px-20 2xl:px-40 py-8 mt-10">
            <hr className="my-3 border-gray-500"/>

            <span
                className="block text-sm text-gray-500 sm:text-center"
            >
                © {new Date().getFullYear()} Matt. All Rights Reserved.
            </span>
        </footer>

    )
}
