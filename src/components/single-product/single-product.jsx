import React, { useContext, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ProductsContext } from "../../context/products-context";
import Layout from "../shared/layout";
import "./single-product.styles.scss";

const SingleProduct = () => {
  const { products } = useContext(ProductsContext);
  const params = useParams();
  const history = useHistory();
  const [product, setProduct] = useState(null);
  const { id } = params;
  useEffect(() => {
    let product;
    if (id) {
      product = products.find((item) => Number(item.id) === Number(id));
    }

    // if product does not exist, redirec to shop page
    if (!product) {
      return history.push("/shop");
    }

    setProduct(product);
  }, [id, product, history, products]);
  // while we check for product
  if (!product) {
    return null;
  }
  const { imageUrl, title, price, description } = product;

  return (
    <Layout>
      <div className="single-product-container">
        <div className="product-image">
          <img src={imageUrl} alt="product" />
        </div>
        <div className="product-details">
          <div className="name-price">
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div className="add-to-cart-btns">
            <button
              className="button is-white nomad-btn"
              id="btn-white-outline"
            >
              ADD TO CART
            </button>

            <button
              className="button is-black nomad-btn"
              id="btn-white-outline"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className="product-description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleProduct;
