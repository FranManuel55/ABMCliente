import { Spinner } from "react-bootstrap";
import "./Loader.css"

const Loader = () => {
  return (
    <div className="loader">
      <Spinner animation="border" variant="info" className="loader-spinner" />
    </div>
  );
};

export default Loader;