import { NavLink } from "react-router-dom"
export function Header() {
    return(
        <header>
            <div className="logo">Nefrodzv.blog</div>
            <nav>
                <ul className="menu">
                    <li className="menu-item"><NavLink to="/">Home</NavLink></li>
                    <li className="menu-item">Item</li>
                    <li className="menu-item"><NavLink to="/about">About</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}