import merge from 'lodash.merge';
import { typeDef as Author, resolvers as authorResolvers } from './author';
import { typeDef as Book, resolvers as bookResolvers } from './book';

export const Query = [Author, Book];

export const resolvers = merge(authorResolvers, bookResolvers);
