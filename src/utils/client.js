import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({ uri: "https://heli-server.herokuapp.com/gql" });

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
