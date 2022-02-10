import { ApolloServer, gql } from 'apollo-server';
import { resolvers, Query } from './schemas';

const rootQuery = gql`
  type Query {
    _empty: String
  }
`;

const server = new ApolloServer({
  typeDefs: [rootQuery, Query],
  resolvers,
});

(async function startServer() {
  const { url } = await server.listen(8080);
  console.log(`Server is listening at ${url}`);
})();
