import styles from "./Card.module.scss";

export default function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}