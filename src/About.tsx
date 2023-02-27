import { ReactElement } from "react";

export function About(): ReactElement {
  return (
    <div>
      <img
        src="https://as2.ftcdn.net/v2/jpg/03/30/58/07/1000_F_330580796_geQsH6tcDd750zN5uJzZfK6pg2xLSj3z.jpg"
        style={{ height: 333, width: 500 }}
      ></img>
      <h1 style={{ display: "flex", justifyContent: "center" }}>About Us</h1>
      <p style={{ display: "flex", justifyContent: "center" }}>
        We really love putting mushrooms in our ears
      </p>
    </div>
  );
}
