import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../auth/firebase-config.js";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const movie = useSelector((state) => state.addMovieReducer);

  console.log("currentUser", currentUser);

  //this function from firebase to last login
  const signOutFunc = async () => {
    await signOut(auth);
    localStorage.clear();
  };

  const goHomePage = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex justify-content-between">
          <a
            className="navbar-brand "
            href="/"
            style={{ color: "white" }}
            onClick={goHomePage}
          >
            React Movie
          </a>
          {currentUser && movie && (
            <div
              className="d-flex flex-direction-row "
              onClick={() => navigate("/Favourite")}
            >
              <AiFillStar className="star" />
              <h5>Favorite</h5>
            </div>
          )}

          <div className="buttons">
            {currentUser ? (
              <h3>{currentUser.displayName}</h3>
            ) : (
              <button
                type="button"
                className="ms-2 btn btn-outline-light"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}
            {currentUser ? (
              <button
                type="button"
                className="ms-2 btn btn-outline-light"
                onClick={() => signOutFunc()}
              >
                Logout
              </button>
            ) : (
              <button
                type="button"
                className="ms-2 btn btn-outline-light"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
