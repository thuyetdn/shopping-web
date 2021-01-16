import formatCurrency from "../util";

function Product({products,addToCart}){
     const product = products.map((product) => (
          <li key={product._id}>
          <div className="product">
               <a  href={"#" + product._id}>
               <img src={product.image} alt={product.title}></img>
               <p className="product-name">{product.title}</p>
               </a>
               <div className="product-price">
               <div>{formatCurrency(product.price)}</div>
               <button onClick={() => addToCart(product) } className="button primary">Add To Cart</button>
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