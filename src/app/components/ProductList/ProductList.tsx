import Card from "../Card/Card";

export default function ProductList({ products }: { products: any[] }) {
  return (
    <div>
      {products?.map((p) => (
        <Card key={p.id} title={p.name}>
          <p><strong>Tipo:</strong> {p.type}</p>
          <p>{p.description}</p>
        </Card>
      ))}
    </div>
  );
}