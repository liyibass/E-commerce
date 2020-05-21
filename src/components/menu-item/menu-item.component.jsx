import React from "react";
import "./menu-item.styles.scss";

function MenuItem({ title, imageUrl, size }) {
  console.log(imageUrl);

  let sectionStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className={`${size} menu-item`}>
      <div style={sectionStyle} className="backgroundImage" />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
