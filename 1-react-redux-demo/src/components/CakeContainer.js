import React from "react";
import { connect } from "react-redux";

import { buyCake } from "../redux/cakes/cakeActions";

const CakeContainer = (props) => (
  <>
    <h2>Number of Cakes {props?.numOfCakes}</h2>
    <button onClick={props?.buyCake}>Buy Cake</button>
  </>
);

const mapStateToProps = (state) => ({ numOfCakes: state.numOfCakes });

const mapDispatchToProps = (dispatch) => ({
  buyCake: () => dispatch(buyCake()),
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const ConnectedCakeContainer = connectToStore(CakeContainer);

export default ConnectedCakeContainer;
