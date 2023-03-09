import { ReactElement, useState } from "react";
import { ImageText } from "./ImageText";
import { useQuery } from "@apollo/client";
import { GET_CATALOG } from "./gql/query";

export function Catalog(): ReactElement {
  const { loading, error, data } = useQuery(GET_CATALOG);

  const shroomData: { image: string; text: string }[] = [
    {
      image:
        "https://media.istockphoto.com/id/1298338829/vector/print.jpg?s=612x612&w=0&k=20&c=5md-EbBeSPaEPC2w2CT8GLMqy8FHrgSdCUnkRMVP0Zc=",
      text: "Shroom 1",
    },
    {
      image:
        "data:image/jpeg;base64,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",
      text: "Shroom 2",
    },
    {
      image:
        "https://t3.ftcdn.net/jpg/05/22/51/52/360_F_522515299_rKG2sXV20mUbyFGZcQqTm7fFURtbZANb.jpg",
      text: "Shroom 3",
    },
    {
      image:
        "https://t3.ftcdn.net/jpg/05/22/51/52/360_F_522515299_rKG2sXV20mUbyFGZcQqTm7fFURtbZANb.jpg",
      text: "Shroom 4",
    },
  ];
  const [displayShroomIndex, setDisplayShroomIndex] = useState(0);

  const buttonElements = shroomData.map((shroom, index) => {
    return (
      <button
        onClick={() => {
          setDisplayShroomIndex(index);
        }}
      >
        {shroom.text}
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
        {data?.catalog.pageHeader}
      </h1>
      <ImageText
        image={shroomData[displayShroomIndex].image}
        text={shroomData[displayShroomIndex].text}
      ></ImageText>
    </div>
  );
}
