export default function Button({ children, link }) {
    return (
        <button
        onClick={link}
        className="relative h-12 w-40 overflow-hidden border rounded-md border-primary text-primary shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-primary before:duration-300 before:ease-out hover:text-white hover:shadow-primary hover:before:h-40 hover:before:w-40 hover:before:opacity-80"
        >
        <span className="relative z-10">{children}</span>
        </button>
    );
}