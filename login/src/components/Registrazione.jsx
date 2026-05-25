import { useEffect, useState } from "react"

export function Registrazione() {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])
    const [user, setUser] = useState({
        nome: '',
        cognome: '',
        email: '',
        password: ''
    })
    const [error, setError] = useState(null)
    const [message, setMessage] = useState(null)
    
    function handleChange(event) {
        const { name, value } = event.target
        setUser((prev) => ({
            ...prev, [name]: value
        }))
    }

    function handleRegistrati(event) {
        event.preventDefault()
        const userExists = users.find((u) => u.email === user.email)
        if (userExists) {
            setError("Utente gia registrato")
            setMessage(null)
        } else {
            setUsers((prev) => [...prev, user])
            setError(null)
            setMessage("Registrazione effettuata con successo")
            setUser({
                nome: '',
                cognome: '',
                email: '',
                password: ''
            })
        }
    }

    useEffect(() => { localStorage.setItem("users", JSON.stringify(users)) }, [users])

    return (
        <div>
            <form onSubmit={handleRegistrati}>
                <input type="text" name="nome" placeholder="Inserisci il tuo nome" onChange={handleChange} value={user.nome} />
                <input type="text" name="cognome" placeholder="Inserisci il tuo cognome" onChange={handleChange} value={user.cognome}/>
                <input type="email" name="email" placeholder="Inserisci la tua email" onChange={handleChange} value={user.email} style={{borderColor: error ? "red" : ""}}/>
                <input type="password" name="password" placeholder="Inserisci la tua password" onChange={handleChange} value={user.password}/>
                <button type="submit">Registrati</button>
            </form>
            { error && <p>{error}</p> }
            { message && <p>{message}</p> }
        </div>
    )
}