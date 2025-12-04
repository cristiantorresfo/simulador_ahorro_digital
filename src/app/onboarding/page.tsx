"use client";

import { useState } from "react";
import styles from "./onboarding.module.scss";

export default function OnboardingPage() {
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("OK"); // simulado
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (token !== "OK") {
      setError("Recaptcha inválido.");
      return;
    }

    setError("");
    const uuid = crypto.randomUUID();
    setSuccess(`Solicitud registrada: ${uuid}`);
  };

  return (
    <div className={styles.container}>
      <h1>Onboarding</h1>

      <input placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Documento" value={document} onChange={(e) => setDocument(e.target.value)} />
      <input placeholder="Correo" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <input type="hidden" value={token} />

      {error && <p className={styles.error}>{error}</p>}

      <button onClick={submit}>Enviar</button>

      {success && <div className={styles.success}>{success}</div>}
    </div>
  );
}