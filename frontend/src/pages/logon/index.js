import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import { FiLogIn } from "react-icons/fi";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";
import heroespng from "../../assets/heroes.png";

export default function Logon() {
  const [id, setId] = useState("");
  const history = useHistory()

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post("session", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      history.push('/profile')
    } catch (error) {
      alert("Falha no login.");
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="be the hero" />
        <form onSubmit={handleLogin}>
          <h1> Faça seu logon </h1>
          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="E02042" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroespng} alt="be the hero" />
    </div>
  );
}