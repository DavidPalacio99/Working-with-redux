import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { unsetUser } from "../reducers/user/userSlice";

import { ProductsList } from "../Components/Products/ProductsList";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(unsetUser());
    navigate("/");
  };

  return (
    <>
      <h2>Home</h2>
      <p>
        Welcome {user.name} / {user.email}
      </p>
      <button className="btn btn-primary" onClick={handleLogout}>
        Log out
      </button>
      <hr />
      <ProductsList />
    </>
  );
};
