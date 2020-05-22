import React from "react";
import "./collection-item.style.scss";

function CollectionItem({ item }) {
  let { id, name, price, imageUrl } = item;

  let imageStyle = {
    background: `url(${imageUrl})`,
  };

  return (
    <div className="collection-item" key={id}>
      <div className="image" style={imageStyle}></div>
      <div className="item-content">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
}

export default CollectionItem;
