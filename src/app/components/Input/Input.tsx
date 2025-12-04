"use client";

import styles from "./Input.module.scss";
interface Props {
  label?: string;
  value: string | number;
  onChange: (e: any) => void;
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

  return (
    <div className={`${styles.field} ${noLabel ? styles.noLabel : ""}`}>
      <input
        type={type}
        value={value}
          onChange={(e) => onChange(e.target.value)}

        className={hasValue ? styles.filled : ""}
        placeholder={noLabel ? label : " "}
      />

      {!noLabel && <label>{label}</label>}
    </div>
  );
}