import Image from "next/image";
import styles from "./Card.module.scss";

export default function Card({
  title,
  image,
  children,
}: {
  title: string;
  image: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>

      <h3 className={styles.title}>{title}</h3>
      <div className={styles.text}>{children}</div>
      <button className={styles.button}>Simulación</button>
    </div>
  );
}