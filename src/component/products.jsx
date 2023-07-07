import { useState } from "react";
import Product from "./product";
const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      count: 2,
      productName: "lapTop",
    },
    {
      id: 2,
      count: 3,
      productName: "phone",
    },
    {
      id: 3,
      count: 4,
      productName: "tabLet",
    },
  ]);
  const handleDelete = (productsId) => {
    setProducts(products.filter((p) => p.id !== productsId));
  };

  return (
    <>
      {products.map((P, index) => (
        <>
          <Product
            kay={index}
            productName={P.productName}
            count={P.count}
            handleDelete={handleDelete}
            id={P.id}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            ratione repellat, obcaecati omnis nesciunt atque temporibus, ducimus
          </Product>
        </>
      ))}
    </>
  );
};

export default Products;
