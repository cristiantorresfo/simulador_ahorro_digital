import Image from "next/image";
import styles from "./page.module.scss";
import { ProductsClient } from "./components/ProductsClient/ProductsClient";
import Link from "next/link";
/* export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <h1>To get started, edit the page.js file.</h1>
          <p>
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className={styles.secondary}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
} */

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