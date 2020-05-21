import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import logo from "../../assets/logo.png";
import { FiLogIn, FiArrowRight } from "react-icons/fi";
import "./style.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await api.post("sessions", { email, password });

      const { token } = response.data;
      if (token) {
        localStorage.setItem("token", `Bearer ${token}`);

        history.push("/dashboard");
      } else {
        alert("Dados não econtrado. Verifique o que foi digitado.");
      }
    } catch (error) {
      alert("Dados não econtrado. Verifique o que foi digitado.");
    }
  }
  return (
    <>
      <div className="login-container">
        <section className="form">
          <img src={logo} alt="Notes" />
          <form>
            <h1>
              Bem vindo,
              <br />
              <span> Faça seu login para continuar</span>
            </h1>
            <input
              type="email"
              className="inputLogin"
              placeholder="E-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />{" "}
            <br />
            <input
              type="password"
              className="inputLogin"
              placeholder="Senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              type="submit"
              className="btnLogin"
              onClick={(event) => handleLogin(event)}
            >
              Entrar <FiArrowRight size={20} color="#fff" />
            </button>
            <br />
            <Link className="LinkRegister" to="/singup">
              <FiLogIn size={16} color="#000" className="spaceFI" />
              Realizar cadastro
            </Link>
          </form>
        </section>
      </div>

      <p>
        Thanks for pngtree for provide the imagens of page login and register{" "}
        <br />
        logo png from pngtree.com
        <a href="https://pngtree.com/so/logo">logo png from pngtree.com</a>
        {"  "}
        <br />
        computer png from pngtree.com -{" "}
        <a href="https://pngtree.com/so/computer">
          computer png from pngtree.com
        </a>
      </p>
    </>
  );
}
