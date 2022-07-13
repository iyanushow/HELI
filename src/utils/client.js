import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://heli-gql.herokuapp.com/",
  cache: new InMemoryCache(),
});
