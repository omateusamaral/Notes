import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";
export default function Login() {
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
            <input className="inputLogin" placeholder="E-mail" /> <br />
            <input className="inputLogin" placeholder="Senha" />
            <button className="btnLogin">
              Entrar <span> →</span>
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
