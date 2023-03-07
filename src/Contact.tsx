import { ReactElement } from "react";
import { useQuery } from "@apollo/client";
import { GET_CONTACT } from "./gql/query";

export function Contact(): ReactElement {
  const { loading, error, data } = useQuery(GET_CONTACT);

  return (
    <div>
      <img
        src="https://post.healthline.com/wp-content/uploads/2019/02/Psychedelic_Mushrooms_Color-1200x628-Facebook.jpg"
        style={{ height: 500, width: 1000 }}
      ></img>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        {data?.contact.pageHeader}
      </h1>
      <p style={{ display: "flex", justifyContent: "center" }}>
      {data?.contact.pageDescription}
      </p>
    </div>
  );
}
