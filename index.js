import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './schemas';

const server = new ApolloServer({ typeDefs, resolvers });

(async function startServer() {
  const { url } = await server.listen(8080);
  console.log(`Server is listening at ${url}`);
})();
