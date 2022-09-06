import React, { useState, useEffect } from "react";
import { getProducts } from "../services/product.service";
import DataList from "./DataList";
// import { getProducts } from "../services/product.service";

export default function ProductList() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    (async () => {
      const products = await  getProducts()
      console.log(products)
      setproducts(products);
    })();
  }, []);
 
 

  return (
    <div> 
    <DataList rows={products}></DataList>
    </div>
  );
}
