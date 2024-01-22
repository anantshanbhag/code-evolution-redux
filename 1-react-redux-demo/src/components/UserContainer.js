import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUsers } from "../redux/users/userActions";

const UserContainer = () => {
  const { loading, users = [], error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <>Loading...</>;
  }

  return !error && users.length > 0 ? (
    <>
      <h2>Users: </h2>
      <>{JSON.stringify(users.slice(0, 3))}</>
    </>
  ) : (
    <>{JSON.stringify(error)}</>
  );
};

export default UserContainer;
