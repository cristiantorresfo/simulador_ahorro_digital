
import {ProductsClient} from "../components/ProductsClient/ProductsClient";

export const revalidate = 60;

async function getProducts() {
  const products = await import("../../data.json");
  return products.default;
}

export default async function ProductsPage() {
  const products = await getProducts();
  return <ProductsClient initialProducts={products} />;
}
