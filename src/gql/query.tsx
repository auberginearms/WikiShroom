import { gql } from "../__generated__/gql";

export const GET_HOME = gql(`
  query getHome {
    home {
      pageDescription
      pageHeader
    }
  }
`);

export const GET_CONTACT = gql(`
  query getContact {
    contact {
      pageDescription
      pageHeader
    }
  }
`);
