import { UserContext } from "../context/UserContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export function Dashboard() {
    const { userLogged, setUserLogged, setLoggedIn, logout } = useContext(UserContext)
    
    return (
        <div>
            <h1>Benvenuto, {userLogged.nome}</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}