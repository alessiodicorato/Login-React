import { useState, useContext } from "react"
import { UserContext } from "../context/UserContext"
import { useNavigate } from "react-router-dom"

export function Login() {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(null)
    const [message, setMessage] = useState(null)
    const { isLoggedIn, setLoggedIn, setUserLogged } = useContext(UserContext)
    const navigate = useNavigate()

    function handleChange(event) {
        const { name, value } = event.target
        setUser((prev) => ({
            ...prev, [name]: value
        }))
    }

    function handleLogin(event) {
        event.preventDefault()
        const userExists = users.find((u) => u.email === user.email && u.password === user.password)
        if (userExists) {
            setMessage("Login effettuato con successo")
            setError(null)
            localStorage.setItem("isLoggedIn", true)
            setLoggedIn(true)
            localStorage.setItem("user", JSON.stringify(userExists))
            setUserLogged(userExists)
            setTimeout(() => {navigate("/dashboard")}, 1000)
        } else {
            setMessage(null)
            setError("Credenziali errate")
            localStorage.setItem("isLoggedIn", false)
            setLoggedIn(false)
            localStorage.removeItem("user")
            setUserLogged(null)
        }
    }
    
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" placeholder="Inserisci la tua email" onChange={handleChange} />
                <input type="password" name="password" placeholder="Inserisci la tua password" onChange={handleChange} />
                <button type="submit">Login</button>
            </form>
            { error && <p>{error}</p> }
            { message && <p>{message}</p> }
        </div>
    )
}