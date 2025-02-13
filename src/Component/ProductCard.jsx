

const ProductCard = ({ imgURL,  productName, price, description, itemsLeft }) => {
  return (
      <div className="product-card">
        <img src={imgURL} alt="product image"/>
        <p className="product-name">{productName}</p>
        <p className="product-description">{description}</p>
        <p className="product-price">{price}</p>
        <p>{itemsLeft}</p>
      </div>
    
  );
};

export default ProductCard