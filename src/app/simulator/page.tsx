"use client";

import { useState } from "react";
import styles from "./simulator.module.scss";
import Input from "../components/Input/Input";

export default function SimulatorPage() {
  const [initial, setInitial] = useState("0");
  const [monthly, setMonthly] = useState("0");
  const [months, setMonths] = useState("1");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const i = Number(initial);
    const m = Number(monthly);
    const t = Number(months);

    if (i <= 0 || m < 0 || t <= 0) {
      setError("Todos los valores deben ser mayores a cero.");
      return;
    }

    setError("");

    const r = 0.005; // 0.5% mensual
    const final =
      i * Math.pow(1 + r, t) + m * ((Math.pow(1 + r, t) - 1) / r);

    setResult(final);
  };

  return (
    <div className={styles.container}>
      <h1>Simulador de Ahorro</h1>

      <Input label="Monto inicial" value={initial} onChange={setInitial} type="number" />
      <Input label="Aporte mensual" value={monthly} onChange={setMonthly} type="number" />
      <Input label="Meses" value={months} onChange={setMonths} type="number" />

      {error && <p className={styles.error}>{error}</p>}

      <button onClick={calculate} className={styles.button}>
        Calcular
      </button>

      {result && (
        <div className={styles.result}>
          Total estimado:{" "}
          {result.toLocaleString("es-CO", {
            style: "currency",
            currency: "COP"
          })}
        </div>
      )}
    </div>
  );
}