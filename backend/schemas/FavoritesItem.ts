import { list } from '@keystone-next/keystone/schema';
import { relationship } from '@keystone-next/fields';
import { isSignedIn, rules } from '../access';

export const FavoritesItem = list({
  access: {
    create: isSignedIn,
    read: rules.canManageFavorites,
    update: rules.canManageFavorites,
    delete: rules.canManageFavorites,
  },
  ui: {
    listView: {
      initialColumns: ['guide', 'user'],
    },
  },
  fields: {
    guide: relationship({ ref: 'Guide' }),
    user: relationship({ ref: 'User.favorites' }),
  },
});
