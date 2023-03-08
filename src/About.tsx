import { ReactElement } from "react";
import { useQuery } from "@apollo/client";
import { GET_ABOUT } from "./gql/query";

export function About(): ReactElement {
  const { loading, error, data } = useQuery(GET_ABOUT);

  return (
    <div>
      <img
        src="https://as2.ftcdn.net/v2/jpg/03/30/58/07/1000_F_330580796_geQsH6tcDd750zN5uJzZfK6pg2xLSj3z.jpg"
        style={{ height: 333, width: 500 }}
      ></img>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        {data?.about.pageHeader}
      </h1>
      <p style={{ display: "flex", justifyContent: "center" }}>
        {data?.about.pageDescription}
      </p>
    </div>
  );
}
