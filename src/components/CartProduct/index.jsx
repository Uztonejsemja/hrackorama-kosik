import React, { useContext } from "react";
import { SettingsContext } from "../../settings_context";
import './style.css';

const CartProduct = ({ name, price }) => {
  const { currency } = useContext(SettingsContext);

  return (
    <div className="cart-product">
      <span>{name}</span>
      <span>{price} {currency}</span>
    </div>
  )
};

export default CartProduct;
