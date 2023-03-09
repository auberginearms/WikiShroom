import { ReactElement, useState } from "react";
import { SingleShroomDisplay} from "./ImageText";
import { useQuery } from "@apollo/client";
import { GET_CATALOG } from "./gql/query";

export function Catalog(): ReactElement | null {
  const { loading, error, data } = useQuery(GET_CATALOG);

  const [displayShroomIndex, setDisplayShroomIndex] = useState(0);

  if (!data) {
    return null;
  }
  const shroomData = data.cordyceps;

  const buttonElements = shroomData.map((shroom, index) => {
    return (
      <button
        onClick={() => {
          setDisplayShroomIndex(index);
        }}
      >
        {shroom.cordycepName}
      </button>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {buttonElements}
      </div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        {data.catalog.pageHeader}
      </h1>
      <SingleShroomDisplay
        image={shroomData[displayShroomIndex].cordycepImage}
        shroomName={shroomData[displayShroomIndex].cordycepName}
        shroomDescription={shroomData[displayShroomIndex].cordycepDescription}
      ></SingleShroomDisplay>
    </div>
  );
}
