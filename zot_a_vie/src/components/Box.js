export default function Box({children}) {
    return (
        <div className="px-10 w-96 h-44 py-4 rounded-xl grid grid-row-2 bg-white">
            {children}
        </div>
    )
}