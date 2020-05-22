import React from "react";
import "./collection-preview.scss";
import CollectionItem from "../collection-item/collection-item.component";

function CollectionPreview({ collection }) {
  let { title, items } = collection;

  return (
    <div className="collection-preview">
      <h1>{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
}

export default CollectionPreview;
