import "./App.css";
import { Registrazione } from "./components/Registrazione";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const { isLoggedIn } = useContext(UserContext)
    useEffect(() => {
      console.log(isLoggedIn);
    }, [isLoggedIn])
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
					<Route path="/login" element={<Login></Login>}></Route>
					<Route path="/dashboard" element={isLoggedIn ? <Dashboard></Dashboard> : <Navigate to="/login"></Navigate>}></Route>
					<Route path="/registrazione" element={<Registrazione></Registrazione>}></Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;
