import "./Product.css";

const ProductCard = ({ imgURL,  productName, price, itemsLeft }) => {
  return (
    
      <div className="ProductCard">
        <img src={imgURL} alt="product image"/>
        <h2>{productName}</h2>
        <p>{price}</p>
        <p>{itemsLeft}</p>
      </div>
    
  );
};

export default ProductCard