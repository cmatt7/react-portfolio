export default function Copyright() {
    const year = new Date().toISOString().substring(0,4);

    return (
        <div className="flex flex-col items-center p-8 text-sm text-slate-400">
            <p>Designed & Built by Matt</p>
            <p>Copyright © {year} - All rights reserved</p>
        </div>
    )
}