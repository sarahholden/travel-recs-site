/* eslint-disable */
import { KeystoneContext } from '@keystone-next/types';
import { FavoritesItem } from '../schemas/FavoritesItem';

import { FavoritesItemCreateInput } from '../.keystone/schema-types';
import { Session } from '../types';

async function addToFavorites(
  _root: unknown,
  { guideId }: { guideId: string },
  context: KeystoneContext
): Promise<FavoritesItemCreateInput> {
  // 1. Query the current user to see if they're signed in
  const sesh = context.session as Session;

  if (!sesh?.itemId) {
    throw new Error('You must be logged in to do this!');
  }

  // 2. Query the current user's favorites
  const allFavoritesItems = await context.lists.FavoritesItem.findMany({
    where: { user: { id: sesh.itemId }, guide: { id: guideId } },
  });

  const [existingFavoriteItem] = allFavoritesItems;

  if (existingFavoriteItem) {
    console.log('Removing From Favorites List');
    return await context.lists.FavoritesItem.deleteOne({
      id: existingFavoriteItem.id,
    });
  }

  return await context.lists.FavoritesItem.createOne({
    data: {
      guide: { connect: { id: guideId } },
      user: { connect: { id: sesh.itemId } },
    },
  });
}

export default addToFavorites;
