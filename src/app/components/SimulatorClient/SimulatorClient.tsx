"use client";

import { useState } from "react";
import styles from "./simulator.module.scss";
import Input from "../Input/Input";
import BackButton from "../BackButton/BackButton";
import { useRouter } from "next/navigation";

interface Props {
  name: string;
  rate: string;
}
export default function SimulatorClient({ name, rate }: Props) {
  const router = useRouter();
  const rateValue = Number(rate);

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

    const final =
      i * Math.pow(1 + rateValue, t) +
      m * ((Math.pow(1 + rateValue, t) - 1) / rateValue);

    setResult(final);
  };

  const goToOnboarding = () => {
    router.push("/onboarding");
  };

  return (
    <div className={styles.page}>
      <BackButton />
      <div className={styles.container}>
        <h1>Simulador de {name}</h1>

        <div className={styles.inputsWrapper}>
          <Input label="Monto inicial (COP)" value={initial} onChange={setInitial} type="number" />
          <Input label="Aporte mensual" value={monthly} onChange={setMonthly} type="number" />
          <Input label="Meses" value={months} onChange={setMonths} type="number" />
        </div>

        {error && <p className={styles.error}>{error}</p>}

          <button onClick={calculate} className={styles.button}>
            Calcular Rentabilidad
          </button>

       
        {result && (
          <div className={styles.result}>
            Total estimado:{" "}
            {result.toLocaleString("es-CO", {
              style: "currency",
              currency: "COP",
            })}
          </div>
        )}


          <button onClick={goToOnboarding} className={styles.openFormButton}>
            Ir a Formulario Apertura
          </button>
      </div>
    </div>
  );
}