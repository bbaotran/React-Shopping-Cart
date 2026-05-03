import { products } from "../data/products";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id}>
          <h4>{p.name}</h4>
          <p>${p.price}</p>
          <button onClick={() => dispatch(addItem(p))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;