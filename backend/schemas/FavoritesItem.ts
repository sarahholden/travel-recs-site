import { list } from '@keystone-next/keystone/schema';
import { text, relationship, select } from '@keystone-next/fields';

export const FavoritesItem = list({
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
