import "./Product.css";
import ProductCard from "./ProductCard";

import { products } from "../db/data";

const ProductList = () => {
  return (
    <div className="card-list">
      {products.map((item, index) => (
        <ProductCard
          key={index}
          imgURL={item.imgURL}
          productName={item.productName}
          price={item.price}
          itemsLeft={item.itemsLeft}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default ProductList;
