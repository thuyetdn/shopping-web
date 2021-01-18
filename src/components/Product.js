import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";
import { useState } from "react";

function Product({products,addToCart}){
     const [productModal, setProductModal] = useState(null)
     const openModal = (product) => {
         setProductModal(product)
     };
     const  closeModal = () => {
          setProductModal(null)
     };
     const product = products.map((product) => (
          <li key={product._id}>
          <div className="product">
               <a  href={"#" + product._id}
               onClick={() => openModal(product)}>
               <img src={product.image} alt={product.title}></img>
               <p className="product-name">{product.title}</p>
               </a>
               <div className="product-price">
               <div>{formatCurrency(product.price)}</div>
               <button onClick={() => addToCart(product) } 
                       className="button primary">Add To Cart
               </button>
               </div>
          </div>
          </li>
          ))
     return(
          <div>
               <Fade bottom cascade>
                    <ul className="products">
                         {product}
                    </ul>
               </Fade>
               {productModal && (
                    <Modal  isOpen={true} onRequestClose={closeModal}>
                    <Zoom>
                    <button className="close-modal" onClick={closeModal}>
                         x
                    </button>
                    <div className="product-details">
                         <img src={productModal.image} alt={productModal.title}></img>
                         <div className="product-details-description">
                         <p>
                              <strong>{productModal.title}</strong>
                         </p>
                         <p>{productModal.description}</p>
                         <p>
                              Avaiable Sizes:{" "}
                              {productModal.availableSizes.map((x) => (
                              <span>
                              {" "}
                              <button className="button">{x}</button>
                              </span>
                              ))}
                         </p>
                         <div className="product-price">
                              <div>{formatCurrency(productModal.price)}</div>
                              <button
                              className="button primary"
                              onClick={() => {
                              addToCart(productModal);
                              closeModal();
                              }}
                              >
                              Add To Cart
                              </button>
                         </div>
                         </div>
                    </div>
                    </Zoom>
                    </Modal>
               )}
          </div>
          
     )
}

export default Product;