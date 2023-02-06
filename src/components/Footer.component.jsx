export default function Footer() {
    return (
        <footer className="p-4 bg-blue-600 backdrop-blur-md bg-opacity-20 shadow py-5 mt-10">
            <span
                className="block text-sm text-gray-300 sm:text-center"
            >
                © {new Date().getFullYear()} Matt. All Rights Reserved.
            </span>
        </footer>

    )
}
