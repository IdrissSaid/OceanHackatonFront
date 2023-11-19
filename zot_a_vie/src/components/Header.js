import logo from '../img/logoCinor.png'

export default function Header() {
    return (
        <nav className='mx-auto flex justify-center h-36 m-5'>
            <img style={{height: "100%"}}  src={logo} alt="logo"/>
        </nav>
    )
}