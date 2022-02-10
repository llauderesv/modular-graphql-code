import { gql } from 'apollo-server';
import merge from 'lodash.merge';
import { typeDef as Author, resolvers as authorResolvers } from './author';
import { typeDef as Book, resolvers as bookResolvers } from './book';

const Query = gql`
  type Query {
    _empty: String
  }
`;

export const typeDefs = [Query, Author, Book];

export const resolvers = merge(authorResolvers, bookResolvers);
