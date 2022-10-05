import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  function inCartFunction() {
    setInCart(() => !inCart)
  }

  let cartClass, cartText

  if (inCart) {
    cartClass = "in-cart"
    cartText = "Remove From Cart"
  } else {
    cartClass = ""
    cartText = "Add to Cart"
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={inCartFunction} className="add">{cartText}</button>
    </li>
  );
}

export default Item;
