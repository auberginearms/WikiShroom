import { ReactElement, useState } from "react";
import "./App.css";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Terms } from "./Terms";
import { Catalog } from "./Catalog";

function App(): ReactElement {
  const displayComponent = [Home, Catalog, About, Contact, Terms];
  const [component, setComponent] = useState("home");
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div id="header" style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => {
            setComponent("home");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            setComponent("catalog");
          }}
        >
          Catalog
        </button>
        <button
          onClick={() => {
            setComponent("about");
          }}
        >
          About
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {component === "home" && <Home />}
        {component === "catalog" && <Catalog />}
        {component === "about" && <About />}
        {component === "contact" && <Contact />}
        {component === "terms" && <Terms />}
      </div>
      <div id="footer" style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => {
            setComponent("contact");
          }}
        >
          Contact
        </button>
        <button
          onClick={() => {
            setComponent("terms");
          }}
        >
          Terms
        </button>
      </div>
    </div>
  );
}

export default App;
