import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-primary">AppEstimator</Link>
      <div className="flex items-center space-x-6">
        <Link to="/features" className="hover:text-primary">Features</Link>
        <Link to="/summary" className="hover:text-primary">Estimate</Link>
        <Link
          to="/features"
          className="bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
        >
          Start Estimating
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
