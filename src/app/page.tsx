import styles from "./page.module.scss";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className={styles.hero}>
      <div className={styles.overlay} />

      <section className={styles.content}>
        <h1 className={styles.title}>
          Construye tu futuro con el{" "}
          <span className={styles.highlight}>Ahorro Digital</span>
        </h1>

        <p className={styles.subtitle}>
          Simula, compara y descubre los productos de ahorro diseñados para ti.
          Una experiencia moderna, confiable y pensada para tu bienestar.
        </p>

        <Link href="/products" className={styles.button}>
          Conocer productos de ahorro
        </Link>
      </section>
    </main>
  );
}