# Modular GraphQL schema code

An example of Modularize GraphQL schema structure based on this  [blog post](https://www.apollographql.com/blog/backend/schema-design/modularizing-your-graphql-schema-code/).


GraphQL typeDefs and resolver should be collocated in one file.

Example from `author.js`

```
export const typeDef = `
  # We extend the type Query so that we can use #them in to individual js file.
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
    author: () => {...},
  },
  Author: {
    books: () => [...],
  },
};

```

In your `schemas/index.js` you could do consolidate all the resolvers and typeDefs in your schema.


```
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
```

Credits to [Dhaivat Pandya](https://twitter.com/dhaivatsays)



