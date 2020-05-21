import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FiLogIn, FiArrowRight } from "react-icons/fi";
import "./style.css";
export default function Login() {
  return (
    <div className="login-container">
      <section className="form">
        <img src={logo} alt="Notes" />
        <form>
          <h1>
            Bem vindo,
            <br />
            <span> Faça seu login para continuar</span>
          </h1>
          <input className="inputLogin" placeholder="E-mail" /> <br />
          <input className="inputLogin" placeholder="Senha" />
          <button className="btnLogin">
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
  );
}
