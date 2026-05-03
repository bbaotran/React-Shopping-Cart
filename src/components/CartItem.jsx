import { useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../features/cart/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total: ${item.price * item.quantity}</p>

      <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
      <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
      <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
    </div>
  );
}

export default CartItem;