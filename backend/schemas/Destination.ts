import { list } from '@keystone-next/keystone/schema';
import { text, relationship } from '@keystone-next/fields';
import { isSignedIn, rules } from '../access';

export const Destination = list({
  access: {
    create: isSignedIn,
    read: rules.canReadGuides,
    update: rules.canManageGuides,
    delete: rules.canManageGuides,
  },
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    hover_description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    website: text(),
    address: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    guide: relationship({
      ref: 'Guide.destinations',
    }),
    photo: relationship({
      ref: 'DestinationImage.destination',
      many: true,
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
  },
});
