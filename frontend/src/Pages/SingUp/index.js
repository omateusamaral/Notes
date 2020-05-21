import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import register from "../../assets/register.png";
import "./style.css";
export default function Singup() {
  return (
    <>
      <div className="register-container">
        <div className="linktop">
          <Link className="backlink" to="/">
            <FiArrowLeft size={16} color="#000" className="spaceFI" />
            Voltar
          </Link>
        </div>
        <img src={register} alt="Register" />
        <form>
          <h1>Cadastro</h1>
          <p>casdrata-se e tenha acesso a nossa plataforma.</p>
          <input placeholder="Seu nome" required />
          <input type="email" placeholder="Seu melhor E-mail" required />
          <input type="password" placeholder="Sua senha" required />
          <button className="btn">Cadastrar-se</button>
        </form>
      </div>
    </>
  );
}
