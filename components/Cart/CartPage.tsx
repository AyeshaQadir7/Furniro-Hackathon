"use client"; // ✅ Ensures this runs only on the client side

import { useCart } from "react-use-cart";

const Cart = () => {
  const { items, totalItems, cartTotal, removeItem } = useCart();

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold">Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        items.map((item) => (
          <div key={item.id} className="flex justify-between p-4 border-b">
            <p>
              {item.name} - ${item.price}
            </p>
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))
      )}
      <h3 className="text-lg font-semibold mt-4">Total: ${cartTotal}</h3>
    </div>
  );
};

export default Cart;
