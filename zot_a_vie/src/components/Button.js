export default function Button({ children, link }) {
    return (
        <button onClick={link} className="border-4 px-4 border-primary text-primary rounded-md hover:bg-primary hover:text-white">
            <span className="text-center font-bold">{children}</span>
        </button>
    )
}