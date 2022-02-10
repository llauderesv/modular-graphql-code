import { gql } from 'apollo-server';

export const typeDef = gql`
  extend type Query {
    book(title: String): Book
  }

  type Book {
    title: String
    author: Author
  }
`;

export const resolvers = {
  Book: {
    author: () => ({ id: 1, firstName: 'Vincent', lastName: 'Llauderes' }),
  },
};
