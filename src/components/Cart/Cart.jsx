import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
      desc: " long seelves with red and black varieties",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
      desc: " long seelves with red and black varieties",
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data.map((item) => (
        <div className="item" Key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 * {item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$220</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Resetcart</span>
    </div>
  );
};

export default Cart;
