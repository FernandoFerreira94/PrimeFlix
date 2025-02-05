import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../DataBase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handlelogin(e) {
    e.preventDefault();

    if (email !== "" && isValidEmail && password !== "") {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success("Login");
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
      <h1>Acessar Conta</h1>
      <form onSubmit={handlelogin}>
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
        <input type="submit" value="Login" />
      </form>
      <a className="link" href="/register">
        Não possue uma conta? Register-se
      </a>
    </section>
  );
}
