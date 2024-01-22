import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { buyCake } from "../redux/cakes/cakeActions";

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Number of Cakes {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </>
  );
};

export default HooksCakeContainer;
