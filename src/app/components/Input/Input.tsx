"use client";

import { useState, useEffect } from "react";
import styles from "./Input.module.scss";

interface Props {
  label?: string;
  value: string | number;
  onChange: (value: string) => void; 
  type?: string;
  noLabel?: boolean;
}

export default function Input({
  label = "",
  value,
  onChange,
  type = "text",
  noLabel = false,
}: Props) {
  const hasValue = value !== "" && value !== null && value !== undefined;

  const [displayValue, setDisplayValue] = useState("");

  useEffect(() => {
    if (type === "number") {
      const formatted = value
        ? new Intl.NumberFormat("es-CO").format(Number(value))
        : "";
      setDisplayValue(formatted);
    } else {
      setDisplayValue(String(value || ""));
    }
  }, [value, type]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "");

    const formatted = rawValue ? new Intl.NumberFormat("es-CO").format(Number(rawValue)) : "";

    setDisplayValue(formatted);
    onChange(rawValue); 
  };

  return (
    <div className={`${styles.field} ${noLabel ? styles.noLabel : ""}`}>
      <input
        type="text"
        value={displayValue}
        onChange={type === "number" ? handleChange : (e) => onChange(e.target.value)}
        className={hasValue ? styles.filled : ""}
        placeholder={noLabel ? label : " "}
      />
      {!noLabel && <label>{label}</label>}
    </div>
  );
}