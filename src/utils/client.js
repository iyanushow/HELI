import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "hhttps://heli-gql.herokuapp.com/",
  cache: new InMemoryCache(),
});
