import React from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview";

import "./shop.style.scss";
import { useSelector } from "react-redux";

function ShopData() {
  const collections = useSelector((state) => state.shopData.shopData);
  return (
    <div>
      <div className="shop-page">
        {collections.map((collection) => {
          return (
            <CollectionPreview key={collection.id} collection={collection} />
          );
        })}
      </div>
    </div>
  );
}

export default ShopData;
