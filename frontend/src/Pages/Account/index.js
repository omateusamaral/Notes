import React from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import "./style.css";
export default function Account() {
  return (
    <div className="account-container">
      <div className="edit-account">
        <header>
          <h1>Editar sua conta</h1>
        </header>
        <Link to="" className="edit-email">
          <div>Email</div>
          <span>
            teste.com.br <FiChevronRight size={20} color="#000" />
          </span>
        </Link>
        <Link to="" className="edit-password">
          <div>
            Senha <FiChevronRight size={20} color="#000" />
          </div>
        </Link>
      </div>
    </div>
  );
}
