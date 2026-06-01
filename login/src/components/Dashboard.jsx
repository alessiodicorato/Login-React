import { UserContext } from "../context/UserContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export function Dashboard() {
    const { userLogged, setUserLogged, setLoggedIn, logout, users, setUsers } = useContext(UserContext)
    const [modifica, setModifica] = useState(false)
    const [user, setUser] = useState(userLogged)

    function handleChange(event) {
        const { name, value } = event.target
        setUser((prev) => ({
            ...prev, [name]: value
        }))
    }

    function handleModifica (event){
        event.preventDefault()
     setUserLogged(user)
     const userExist= users.findIndex((u)=>u.email === user.email)
     setUsers(users.splice(userExist,1,user))
     setModifica(false)
     

    }

    return (
        <div>
            <h1>Benvenuto, {userLogged.nome}</h1>
            <h2>I tuoi dati</h2>
            {modifica ? <form onSubmit={handleModifica}>
                <input type="text" name="nome" placeholder={userLogged.nome} onChange={handleChange} />
                <input type="text" name="cognome" placeholder={userLogged.cognome} onChange={handleChange}  />
                <input type="number" name="eta" placeholder={userLogged.eta} onChange={handleChange}  />
                <select name="sesso" onChange={handleChange} >
                    <option value="m">M</option>
                    <option value="f">F</option>
                </select>
                <button type="submit">Salva modifiche</button></form> : <div>
                <h3>Nome: {userLogged.nome}</h3>
                <h3>Cognome: {userLogged.cognome}</h3>
                <h3>Email: {userLogged.email}</h3>
                <h3>Sesso: {userLogged.sesso}</h3>
                <h3>Età: {userLogged.eta}</h3>
                <button onClick={() => setModifica(true)}>Modifica dati</button></div>}


            <button onClick={logout}>Logout</button>
        </div>
    )
}