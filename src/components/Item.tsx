import React from "react";
import { Product } from "../types";
import "../sass/products.sass";

const ProductItem: React.FC<Product> = ({ category, image, price, title, rating }) => {
  return (
    <li className="product-item">
      <p className="product-item__category">{category}</p>
      <p className="product-item__title">{title}</p>

      <img className="product-item__image" src={image} />
      <span className="product-item__price">{price}</span>
      <span className="product-item__rating">{rating.rate}</span>
    </li>
  );
};

export default ProductItem;
