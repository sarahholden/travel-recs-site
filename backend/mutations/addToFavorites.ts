import { KeystoneContext } from '@keystone-next/types';

async function addToFavorites(
  root: any,
  { productId }: { productId: string },
  context: KeystoneContext
) {
  console.log('Adding to favorites!');
  // Query the current user to see if they're signed in
  // Query the current user's favorites
  // See if the current item is in their cart
  // If it is remove it
  // If it isn't, create a new FavoritesItem
}

export default addToFavorites;
