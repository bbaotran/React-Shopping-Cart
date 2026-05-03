import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>Shopping Cart App</h1>

      <div className="layout">
        <div className="column products">
          <ProductList />
        </div>

        <div className="column cart">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;