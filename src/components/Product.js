import formatCurrency from "../util";

function Product({products}){
     const product = products.map((product) => (
          <li key={product._id}>
          <div className="product">
               <a href={"#" + product._id}>
               <img src={product.image} alt={product.title}></img>
               <p>{product.title}</p>
               </a>
               <div className="product-price">
               <div>{formatCurrency(product.price)}</div>
               <button className="button primary">Add To Cart</button>
               </div>
          </div>
          </li>
          ))
     return(
          <div>
               <ul className="products">
                    {product}
               </ul>
          </div>
     )
}

export default Product;