import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUserRequest } from "../redux/users/userActions";

const SagaUserContainer = () => {
  const { loading, users = [], error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserRequest());
  }, [dispatch]);

  if (loading) {
    return <>Loading...</>;
  }

  return !error && users.length > 0 ? (
    <>
      <h2>Saga Users: </h2>
      <>{JSON.stringify(users.slice(0, 3))}</>
    </>
  ) : (
    <>{JSON.stringify(error)}</>
  );
};

export default SagaUserContainer;
