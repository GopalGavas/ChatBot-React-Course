import { Link } from "react-router";
import Header from "../components/Header";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <title>Error 404</title>
      <Header />
      <div className="container">
        <p className="error-heading">Error: 404</p>
        <p className="error-text">
          Oops! the page you are looking for does not exists
        </p>
        <Link className="error-redirect" to="/">
          Go back Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
