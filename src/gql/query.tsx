import { gql } from "@apollo/client";

export const GET_HOME = gql`
query Query {
    home {
      pageDescription
      pageHeader
    }
  }
`;

