import { UserContext } from "../context/UserContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export function Dashboard() {
    const { userLogged, setUserLogged, setLoggedIn } = useContext(UserContext)
    const navigate = useNavigate()

    function handleLogout() {
        setUserLogged(null)
        setLoggedIn(false)
        localStorage.removeItem("user")
        localStorage.setItem("isLoggedIn", false)
        navigate("/")
    }

    return (
        <div>
            <h1>Benvenuto, {userLogged.nome}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}