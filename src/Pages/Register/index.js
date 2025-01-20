import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../DataBase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleCadastrar(e) {
    e.preventDefault();

    if (email !== "" && isValidEmail(email) && password !== "") {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success("Cadastro feito com sucesso");
          navigate("/admin", { replace: true });
        })
        .catch((e) => {
          alert(e);
        });
    } else {
      toast.error("Preencha todos os campos corretamente.");
    }
  }

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  return (
    <section className="container">
      <h1>Cadastrar</h1>
      <p>Insira seus dados para realizar o cadastro!</p>
      <form onSubmit={handleCadastrar}>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="*******"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" value="Cadastrar" />
      </form>
      <a className="link" href="/login">
        Já possui uma conta? Login.
      </a>
    </section>
  );
}
