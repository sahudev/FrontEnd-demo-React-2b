import ProductCard from "../ProductCard";

const products = [
  {
    title: "Apple New Tab",
    price: "Rs 50,000"
  },
  {
    title: "Amazon New Tab",
    price: "Rs 35,000"
  },
  {
    title: "Google New Tab",
    price: "Rs 40,000"
  },
  {
    title: "LG New Tab",
    price: "Rs 30,000"
  },
  {
    title: "Dell New Tab",
    price: "Rs 45,000"
  }
];

export default function Products() {
  return (
    <div>
      {products.map(function (product) {
        return <ProductCard title={product.title} price={product.price} />;
      })}
    </div>
  );
}
