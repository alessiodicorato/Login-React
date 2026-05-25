import { NavLink, Outlet } from "react-router-dom"

export function Layout() {
    return (
        <div>
            <nav>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/login" >Login</NavLink>
                <NavLink to="/registrazione" >Registrazione</NavLink>
                <NavLink to="/dashboard" >Dashboard</NavLink>
            </nav>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <p>Tutti i diritti riservati.</p>
            </footer>
        </div>

    )
}