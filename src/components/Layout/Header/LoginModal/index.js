import React, { useState } from "react";
import axios from "axios";

import "./index.css"

const LoginModal = ({ show, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);

      alert("Login successful!");

      onClose();
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className={`modal ${show ? "show" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          ×
        </span>
        <h2 className="modal-content-login-title">Daxil ol</h2>
        <form onSubmit={handleSubmit}>
          <div className="modal-content-login-email-inp-wrapper">
            <label>Email adresinizi daxil edin</label>
            <div>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email adres"
                    required
                />
            </div>
          </div>
          <div className="modal-content-login-password-inp-wrapper">
            <label>Şifrənizi daxil edin</label>
            <div>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Şifrə"
                    required
                />
                <i className="bi bi-eye"></i>
            </div>
            <div className="modal-content-login-password-forgot-pass-wrapper">
                <a href="#">Şifrəmi unutdum</a>
            </div>
          </div>
          <button className="modal-content-login-submit-btn" type="submit">Daxil ol</button>
        </form>
        {error && <p className="error">{error}</p>}
        <div className="login-modal-goto-register-page-wrapper">
            <a className="login-modal-goto-register-page-link">
                <span>Hesabınız yoxdur?</span> <strong>Qeydiyyat</strong>
            </a>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
