import { ReactElement } from "react";

export function ImageText(props: {
  image: string;
  text: string;
}): ReactElement {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        placeContent: "center",
        alignContent: "center",
      }}
    >
      <div>
        <h2>{props.text}</h2>
        <p>Here is a {props.text}. It is cute</p>
      </div>
      <img src={props.image} style={{ width: 100 }}></img>
    </div>
  );
}
