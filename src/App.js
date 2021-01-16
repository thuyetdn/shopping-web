import React, {useState} from "react";
import Filter from "./components/Filter";
import Product from "./components/Product";
import data from "./data.json"
function App() {
  const [products,setProducts] = useState(data.products)
  const [size,setSize] = useState("")
  const [sort,setSort] = useState("")
  const  filterProducts = (event) =>{
    if (event.target.value === "") {
      setSize(event.target.value)
      setProducts(data.products)
    } else {
      setSize(event.target.value)
      setProducts( data.products.filter(
          (product) => 
          product.availableSizes.indexOf(event.target.value) >= 0
        ),
      )
    }
  } 
  const sortProducts = (event) =>{
    // const sort = event.target.value;
    setSort(sort)
    // console.log(sort)
    setProducts(products.slice().sort(
      (a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id < b._id
            ? 1
            : -1
        )
    )
    console.log(products)
  }

  return (
    <div className="grid-container">
      <header className="">
          <a href = "/">React Shopping Cart</a>
      </header>
      <main>
          <div className="content">
              <div className="main">
                 <Filter 
                        count={products.length}
                        size={size}
                        sort={sort}
                        filterProducts={filterProducts}
                        sortProducts={sortProducts}>
                  </Filter>
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
