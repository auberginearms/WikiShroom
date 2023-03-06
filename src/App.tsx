import { ReactElement, useState } from "react";
import "./App.css";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Terms } from "./Terms";
import { Catalog } from "./Catalog";
import { useQuery } from "@apollo/client";
import { GET_HOME } from "./gql/query";

function App(): ReactElement {
  const { loading, error, data } = useQuery(GET_HOME);
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
