import React from "react";
import { Link } from "react-router-dom";
import { FiPower, FiX } from "react-icons/fi";
import "./style.css";
export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <header>
        <h3>Bem vindo, </h3>
        <span>Mateus</span>
        <Link className="button">Criar um novo Note</Link>
        <button>
          <FiPower size={18} color="#f28500" />
        </button>
      </header>
      <h1>Notes Cadastrados</h1>
      <ul>
        <li>
          <p>titulo</p>
          <strong>descrição</strong>
          <p>lembrete: 03/05/200 Horas: 01:10</p>

          <button>
            <FiX size={20} color="#E02041" />
          </button>
        </li>
      </ul>
    </div>
  );
}
