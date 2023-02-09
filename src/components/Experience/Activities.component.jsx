export default function Activities({ children }) {
    return(
        <ul className="flex flex-col text-white text-sm md:text-lg list-disc ml-5">
            { children }
        </ul>
    )
}