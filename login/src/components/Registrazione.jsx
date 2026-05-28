import { useEffect, useState } from "react"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export function Registrazione() {
    const [user, setUser] = useState({
        nome: '',
        cognome: '',
        email: '',
        password: ''
    })

    const { nextStep, register, error, message } = useContext(UserContext)
    
    function handleChange(event) {
        const { name, value } = event.target
        setUser((prev) => ({
            ...prev, [name]: value
        }))
    }

    function handleRegistrati(event) {
        event.preventDefault()
        nextStep(user)
        if (error) {
            setUser({
				nome: "",
				cognome: "",
				email: "",
				password: "",
			});
        }
    }


    return (
        <div>
            <form onSubmit={handleRegistrati}>
                <input type="text" name="nome" placeholder="Inserisci il tuo nome" onChange={handleChange} value={user.nome} />
                <input type="text" name="cognome" placeholder="Inserisci il tuo cognome" onChange={handleChange} value={user.cognome}/>
                <input type="email" name="email" placeholder="Inserisci la tua email" onChange={handleChange} value={user.email} style={{borderColor: error ? "red" : ""}}/>
                <input type="password" name="password" placeholder="Inserisci la tua password" onChange={handleChange} value={user.password}/>
                <button type="submit">Avanti</button>
            </form>
            { error && <p>{error}</p> }
            { message && <p>{message}</p> }
        </div>
    )
}