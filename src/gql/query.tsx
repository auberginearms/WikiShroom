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
export const GET_ABOUT = gql(`
  query getAbout {
    about {
      pageDescription
      pageHeader
    }
  }
`);

export const GET_CATALOG = gql(`
query getCatalog {
  cordyceps {
    cordycepDescription
    cordycepImage
    cordycepName
  }
  catalog {
    pageDescription
    pageHeader
  }
}
`);

export const GET_TERMS = gql(`
  query getTerms {
    terms {
      pageDescription
      pageHeader
    }
  }
`);
