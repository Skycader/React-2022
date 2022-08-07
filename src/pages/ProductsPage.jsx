import { Product } from "../components/Product";
import "../index.css";
import { useProducts } from "../hooks/products";
import Loader from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage"; //if no export DEFAULT, then use {}
import Modal from "../components/Modal";
import CreateProduct from "../components/CreateProduct";
// import { useState } from "react";
import {useContext} from 'react'
import { IProduct } from "../models";
import {ModalContext} from '../context/ModalContext'


export function ProductsPage() {
    
        const { loading, error, products, addProduct } = useProducts();
        // const [modal, setModal] = useState(false);
        // const {modal,open,close} = useContext(ModalState)
        const {modal, open, close} = useContext(ModalContext)
        const createHandler = (product: IProduct) => {
          // setModal(false);
          close()
          addProduct(product);
        };
        return (
          <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
      
            {modal && (
              <Modal title="Create new product" onClose={close}>
                <CreateProduct onCreate={createHandler} />
              </Modal>
            )}
      
            <button 
            className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2-xl px-4 py-2"
            onClick={open}>
              +
            </button>
      
            {/* <Product product={products[0]}/> */}
            {/* <Product product={products[1]}/> */}
          </div>
        );
   
}