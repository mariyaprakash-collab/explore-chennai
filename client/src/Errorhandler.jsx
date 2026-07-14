import "./errorhandler.css";
import {NavLink} from "react-router-dom";

function ErrorHandler({ message }) {
  return (
    <div className="error-container">
      <h1>Oops!</h1>
      <h3>{message}</h3>
      <NavLink to="/">Return to HOME</NavLink>
    </div>
  );
}

export default ErrorHandler;