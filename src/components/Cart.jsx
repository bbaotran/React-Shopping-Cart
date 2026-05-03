import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function Cart() {
  const items = useSelector(state => state.cart.items);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>

      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <h3>Total Items: {totalItems}</h3>
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
}

export default Cart;