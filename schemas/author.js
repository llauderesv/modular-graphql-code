import { gql } from 'apollo-server';

export const typeDef = gql`
  extend type Query {
    author(id: Int!): Author
  }

  type Author {
    id: Int!
    firstName: String
    lastName: String
    books: [Book]
  }
`;

export const resolvers = {
  Query: {
    author: () => ({ id: 1, firstName: 'Vincent', lastName: 'Llauderes' }),
  },
  Author: {
    books: () => [{ title: 'Introduction to GraphQL' }],
  },
};
