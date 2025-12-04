"use client";

import styles from "./Input.module.scss";

interface Props {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  type?: string;
}

export default function Input({ label, value, onChange, type = "text" }: Props) {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}