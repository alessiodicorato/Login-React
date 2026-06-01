import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export function UserProvider({ children }) {
	const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);
	const [user, setUser] = useState({});
	const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem("isLoggedIn") || false);
	const [userLogged, setUserLogged] = useState(localStorage.getItem("user") || null);
	const [error, setError] = useState(null);
	const [message, setMessage] = useState(null);
	const navigate = useNavigate();

	function register(dati) {
		try {
			const finalUser = { ...dati, ...user }
			const userExists = users.find((u) => u.email === user.email);
			if (userExists) {
				setError("Utente gia registrato");
				setMessage(null);
			} else {
				setUsers((prev) => [...prev, finalUser]);
				setError(null);
				setMessage("Registrazione effettuata con successo");
				setTimeout(() => {
					setMessage(null);
				}, 2000);
			}
		} catch (error) {
			console.log(error);
		}
	}

	function nextStep(dati) {
		setUser(dati);
		navigate("/registrazionefine");
	}

	function login(email, password) {
		const userExists = users.find((u) => u.email === email && u.password === password);
		if (userExists) {
			setMessage("Login effettuato con successo");
			setError(null);
			localStorage.setItem("isLoggedIn", true);
			setLoggedIn(true);
			localStorage.setItem("user", JSON.stringify(userExists));
			setUserLogged(userExists);
		} else {
			setMessage(null);
			setError("Credenziali errate");
			localStorage.setItem("isLoggedIn", false);
			setLoggedIn(false);
			localStorage.removeItem("user");
			setUserLogged(null);
		}
	}

	function logout() {
		setUserLogged(null);
		setLoggedIn(false);
		localStorage.removeItem("user");
		localStorage.setItem("isLoggedIn", false);
		navigate("/");
	}

	useEffect(() => {
		localStorage.setItem("users", JSON.stringify(users));
	}, [users]);

	return (
		<UserContext.Provider
			value={{
				users,
				setUsers,
				error,
				setError,
				message,
				setMessage,
				isLoggedIn,
				setLoggedIn,
				userLogged,
				setUserLogged,
				register,
				login,
				logout,
				user,
				setUser,
				nextStep,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
