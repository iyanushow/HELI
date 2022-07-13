import { gql } from "@apollo/client";

export const GetUsers = gql`
  query GetLocations {
    transactions {
      id
      name
      type
      date
      email
      phone
      status
      amount
    }
  }
`;
