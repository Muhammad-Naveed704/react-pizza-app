import "./home.css";

function Navbar() {
  return (
    <nav style={{ width: "97%" }}>
      <div className="mainHeading">
        <h1> - FAST REACT PIZZA CO. -</h1>
      </div>
      <div className="ourmenu">
        <h1>Our Menu</h1>
      </div>
      <div className="para">
        <p>
          {" "}
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
