import { ReactElement } from "react";

export function SingleShroomDisplay(props: {
  image: string | undefined | null;
  shroomName: string | null | undefined;
  shroomDescription: string | null | undefined;
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
        <h2>{props.shroomName}</h2>
        <p>{props.shroomDescription}</p>
      </div>
      {props.image ? (
        <img src={props.image} style={{ width: 100 }}></img>
      ) : (
        "No image to display"
      )}
    </div>
  );
}
