import { UserContext } from "../context/UserContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export function Dashboard() {
    const { userLogged, setUserLogged, setLoggedIn, logout } = useContext(UserContext)
    
    return (
        <div>
            <h1>Benvenuto, {userLogged.nome}</h1>
            <h2>I tuoi dati</h2>
            <h3>Nome: {userLogged.nome}</h3>
            <h3>Cognome: {userLogged.cognome}</h3>
            <h3>Email: {userLogged.email}</h3>
            <h3>Sesso: {userLogged.sesso}</h3>
            <h3>Età: {userLogged.eta}</h3>
            <button>Modifica dati</button>
            <button onClick={logout}>Logout</button>
        </div>
    )
}