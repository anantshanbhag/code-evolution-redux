import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { buyCake } from "../redux/cakes/cakeActions";

const NewHooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const [number, setNumber] = useState(1);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Number of Cakes {numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
      <button onClick={() => dispatch(buyCake(number))}>
        {number > 1 ? `buy ${number} cakes` : "buy cake"}
      </button>
    </>
  );
};

export default NewHooksCakeContainer;
