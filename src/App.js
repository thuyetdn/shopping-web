import React, {useState} from "react";
import Product from "./components/Product";
import data from "./data.json"
function App() {
  const [products,setProducts] = useState(data.products)
  const [size,setSize] = useState("")
  const [sort,setSort] = useState("")
  return (
    <div className="grid-container">
      <header className="">
          <a href = "/">React Shopping Cart</a>
      </header>
      <main>
          <div className="content">
              <div className="main">
                 <Product products={products}></Product>
              </div>
              <div className="sidebar">
                Cart items
              </div>
          </div>
      </main>
      <footer>
        All right is reserved
      </footer>
    </div>
  );
}

export default App;
