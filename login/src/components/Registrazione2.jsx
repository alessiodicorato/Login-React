import { useState } from "react"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export function StepTwo() {
    const [dati, setDati] = useState({ eta: "", sesso: "m" })
    const { register, error, message } = useContext(UserContext)


    function handleChange(event) {
        const { name, value } = event.target
        setDati((prev) => ({
            ...prev, [name]: value
        }))
    }

    async function handleRegistrati(event) {
        event.preventDefault()
        register(dati)
    }

    return (
        <form onSubmit={handleRegistrati}>
            <input type="number" placeholder="Età" name="eta" onChange={handleChange}></input>
            <select name="sesso" onChange={handleChange}>
                <option value="m">M</option>
                <option value="f">F</option>
            </select>
            <button type="submit">Registrati</button>
            {error && <p>{error}</p>}
            {message && <p>{message}</p>}
        </form>
    )
}