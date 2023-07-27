import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
const FeaturedProducts = ({ type }) => {
  const data = [1, 2, 3, 4];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type}Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex optio
          molestiae, repudiandae rem necessitatibus, magni dolor enim,
          voluptatum officiis fugit expedita. Ex vel saepe veniam sunt. Soluta,
          harum sed.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
