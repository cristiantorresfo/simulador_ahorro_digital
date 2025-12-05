
"use client";

import { useRef } from "react";
import Card from "../Card/Card";
import styles from "./ProductList.module.scss";

export default function ProductList({ products }: { products: any[] }) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollOneCard = (direction: "left" | "right") => {
    const c = carouselRef.current;
    if (!c) return;

    const itemEl = c.querySelector(`.${styles.item}`) as HTMLElement;
    if (!itemEl) return;

    const itemWidth = itemEl.clientWidth + 24; 

    if (direction === "left") {
      if (c.scrollLeft <= 0) {
        c.scrollTo({ left: c.scrollWidth, behavior: "smooth" });
      } else {
        c.scrollBy({ left: -itemWidth, behavior: "smooth" });
      }
    }

    if (direction === "right") {
      const isAtEnd =
        c.scrollLeft + c.clientWidth >= c.scrollWidth - 5;
      if (isAtEnd) {
        c.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        c.scrollBy({ left: itemWidth, behavior: "smooth" });
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.hint}>Desliza para ver los productos →</p>

      <button
        className={`${styles.arrow} ${styles.left}`}
        onClick={() => scrollOneCard("left")}
      >
        ‹
      </button>

      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={() => scrollOneCard("right")}
      >
        ›
      </button>

      <div ref={carouselRef} className={styles.carousel}>
        {products?.map((p) => (
          <div key={p.id} className={styles.item}>
            <Card title={p.name} image={p.image} rate={p.rate} >
              <p><strong>Tipo:</strong> {p.type}</p>
              <p>{p.description}</p>
              {p.rate && (
                <p>
                  <strong>Rentabilidad:</strong>{" "}
                  {(p.rate * 100).toFixed(2)}% EA
                </p>
              )}
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}