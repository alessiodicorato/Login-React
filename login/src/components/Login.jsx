import { useState, useContext } from "react"
import { UserContext } from "../context/UserContext"
import { useNavigate } from "react-router-dom"

export function Login() {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const { login, error, message, setMessage } = useContext(UserContext)
    const navigate = useNavigate()

    function handleChange(event) {
        const { name, value } = event.target
        setUser((prev) => ({
            ...prev, [name]: value
        }))
    }

    function handleLogin(event) {
        event.preventDefault()
        login(user.email, user.password)
        if (!error) {
            setTimeout(() => {
                navigate("/dashboard")
                setMessage(null)
            }, 1000)
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