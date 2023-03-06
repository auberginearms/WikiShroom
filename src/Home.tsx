import { ReactElement } from "react";
import { useQuery } from "@apollo/client";
import { GET_HOME } from "./gql/query";

export function Home(): ReactElement {
  const { loading, error, data } = useQuery(GET_HOME);
  return (
    <div>
      <img src="https://media.istockphoto.com/id/1267041706/vector/hand-drawn-mushrooms-banner.jpg?s=170667a&w=0&k=20&c=hXenDpCIHQruvRPpGUGhRX0lKvQz7nx_w2q5V0jssMg="></img>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        {data?.home.pageHeader}
      </h1>
      <p style={{ display: "flex", justifyContent: "center" }}>
        {data?.home.pageDescription}
      </p>
    </div>
  );
}
