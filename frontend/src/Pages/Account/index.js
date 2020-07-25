import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import "./style.css";
export default function Account() {
  const email = localStorage.getItem("email");

  return (
    <>
      <Link className="backlink" to="/dashboard">
        <FiArrowLeft size={35} color="#000" />
      </Link>
      <div className="account-container">
        <div className="edit-account">
          <header>
            <h1>Editar sua conta</h1>
          </header>
          <Link to="/editemail" className="edit-email">
            <div>Email</div>
            <span>
              {email} <FiChevronRight size={20} color="#000" />
            </span>
          </Link>
          <Link to="" className="edit-password">
            <div>
              Senha <FiChevronRight size={20} color="#000" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
