import React from "react";
import "./List.scss";
import Card from "../Card/Card";
const List = () => {
  const data = [1, 2, 3, 4];
  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} Key={item.id} />
      ))}
    </div>
  );
};

export default List;
