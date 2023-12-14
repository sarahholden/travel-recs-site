import { graphQLSchemaExtension } from '@keystone-next/keystone/schema';
import addToFavorites from './addToFavorites';

// make a fake graphql tagged template literal
const graphql = String.raw;

export const extendGraphQlSchema = graphQLSchemaExtension({
  typeDefs: graphql`
    type Mutation {
      addToFavorites(guideId: ID): FavoritesItem
    }
  `,
  resolvers: {
    Mutation: {
      addToFavorites,
    },
  },
});
