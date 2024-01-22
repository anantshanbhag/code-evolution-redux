import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { buyIceCream } from "../redux/iceCreams/iceCreamActions";

const HooksIceCreamContainer = () => {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Number of IceCreams {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
    </>
  );
};

export default HooksIceCreamContainer;
