import { useHistory } from "react-router-dom";
import "./featured-product.styles.scss";

const FeaturedProduct = ({ title, imageUrl, price, id }) => {
  const history = useHistory();

  return (
    <div
      className="featured-product"
      onClick={() => history.push(`/product/${id}`)}
    >
      <div className="featured-image">
        <img src={imageUrl} alt="product" />
      </div>
      <div className="name-price">
        <h3>{title}</h3>
        <p>{price}</p>
        <button className="button is-black nomad-btn">ADD TO CART</button>
      </div>
    </div>
  );
};

export default FeaturedProduct;
