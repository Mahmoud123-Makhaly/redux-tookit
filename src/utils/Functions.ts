import type { IProduct } from "../interfaces";

export const itemIsFoundInCartItems = (
  cartItems: IProduct[],
  product: IProduct
) => {
  const isExist = cartItems.find((item) => item.id === product.id);
  if (isExist) {
    return cartItems.map((item) =>
      item.id === product.id ? { ...item, qty: item.qty! + 1 } : item
    );
  }
  return [...cartItems, { ...product, qty: 1 }];
};
