"use client";

import { CartProvider } from "react-use-cart";

const CartWrapper = ({ children }: { children: React.ReactNode }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default CartWrapper;
