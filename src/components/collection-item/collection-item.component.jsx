import React from "react";
import "./collection-item.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import { useDispatch } from "react-redux";
import { addCartItems } from "../../redux/cart/cart.action";

function CollectionItem({ item }) {
  let { id, name, price, imageUrl } = item;

  let imageStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  const dispatch = useDispatch();

  return (
    <div className="collection-item" key={id}>
      <div style={imageStyle} className="item-image"></div>
      <div className="item-content">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <CustomButton onClick={() => dispatch(addCartItems(item))} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
}

export default CollectionItem;
