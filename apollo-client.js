import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/harshkumar62367/web3-eventbrite-subgraph",
  cache: new InMemoryCache(),
});

export default client;