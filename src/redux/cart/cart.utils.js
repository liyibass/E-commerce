export const addItemToCart = (cartItems, newItem) => {
  // 創建是否已有重複商品的flag
  const existFlag = cartItems.find((item) => item.id === newItem.id);
  // 無重複商品則直接新增並返回
  if (!existFlag) {
    return [...cartItems, { ...newItem, quantity: 1 }];
  } else {
    // 有重複的話 依序比較各個商品跟newItem的id
    // 看要增加那個商品的數量
    // 如果沒有一樣 就繼續判斷下一個商品
    // 如果有一樣的 就為該商品的quantity加1
    return cartItems.map((cartItem) => {
      if (newItem.id !== cartItem.id) {
        return cartItem;
      } else {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
    });
  }
};

export const minusItemToCart = (cartItems, adjustItem) => {
  // 建立商品數量是否=1的flag
  const onlyOne = adjustItem.quantity === 1;
  // 如果flag=true，則直接從購物車中剔除（X）
  // 如果flag=true，就不能再繼續減少數量了（O）
  if (onlyOne) {
    // return cartItems.filter((item) => item.id !== adjustItem.id);
    return cartItems;
  }
  // 如果flag=false，代表商品數量不只一個
  // 就要從購物車中把他找出來，並且quantity-1
  else {
    return cartItems.map((cartItem) => {
      if (cartItem !== adjustItem) {
        return cartItem;
      } else {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
    });
  }
};

export const deleteItemFromCart = (cartItems, adjustItem) => {
  return cartItems.filter((cartItem) => cartItem.id !== adjustItem.id);
};
