"use client";

import { useState, useEffect } from "react";
import ProductList from "../ProductList/ProductList";
import { debounce } from "../../lib/debounce";
import styles from "./products.module.scss";
import Input from "../Input/Input";

export const ProductsClient = ({ initialProducts }: { initialProducts: any[] }) =>{
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(initialProducts);

  const runFilter = debounce((text: string) => {
    const results = initialProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(text.toLowerCase()) ||
        p.type.toLowerCase().includes(text.toLowerCase())
    );
    setFiltered(results);
  }, 300);

  useEffect(() => {
    runFilter(query);
  }, [query]);

  return (
    <div className={styles.container}>
      <h1>Productos</h1>
      <div className={styles.search}>
       <Input value={query} onChange={(e) => setQuery(e.target.value)} label="Buscar Producto"/>
      </div>
      <ProductList products={filtered} />
    </div>
  );
}