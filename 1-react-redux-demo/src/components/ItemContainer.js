import React from "react";
import { connect } from "react-redux";

import { buyCake } from "../redux/cakes/cakeActions";
import { buyIceCream } from "../redux/iceCreams/iceCreamActions";

const ItemContainer = (props) => (
  <>
    <h2>
      Number of {props?.isCake ? "Cake" : "Ice Cream"} Items {props?.numOfItems}
    </h2>
    <button onClick={props?.buyCake}>Buy Cake</button>
  </>
);

const mapStateToProps = (state, ownProps) => ({
  numOfItems: ownProps.isCake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  buyCake: () => dispatch(ownProps.isCake ? buyCake() : buyIceCream()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
