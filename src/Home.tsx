import { ReactElement } from "react";

export function Home(): ReactElement {
  return (
    <div>
      <img src="https://media.istockphoto.com/id/1267041706/vector/hand-drawn-mushrooms-banner.jpg?s=170667a&w=0&k=20&c=hXenDpCIHQruvRPpGUGhRX0lKvQz7nx_w2q5V0jssMg="></img>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Welcome to Shroomland
      </h1>
      <p style={{ display: "flex", justifyContent: "center" }}>
        Prepare to be shroomed
      </p>
    </div>
  );
}
