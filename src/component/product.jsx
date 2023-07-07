import { useState } from "react";
function Product(props) {
  const [number, setNumber] = useState(props.count);

  const handleDecrease = () => {
    setNumber(number - 1);
  };
  const handleDelete = () => {
    setNumber(number - number);
  };
  return (
    <>
      <span className="m-2 ">{props.productName}</span>
      <span className="m-2 ">{number}</span>
      <br />
      <button
        onClick={() => handleIncrease(number, setNumber)}
        className="btn m-2 w-10 h-10 bg-blue-600"
      >
        +
      </button>
      <button
        onClick={handleDecrease}
        className="btn m-2 w-10 h-10 bg-blue-600"
      >
        _
      </button>
      <button onClick={handleDelete} className="btn m-2 w-12 h-10 bg-red-600">
        delete
      </button>
      <img src="https://picsum.photos/200" style={{ borderRadius: "50%" }} />
      <p>{props.children}</p>
    </>
  );
}
const handleIncrease = (number, setNumber) => {
  setNumber(number + 1);
};

export default Product;
