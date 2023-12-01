import { list } from '@keystone-next/keystone/schema';
import { text, relationship, select } from '@keystone-next/fields';

export const Guide = list({
  fields: {
    name: text({ isRequired: true }),
    location_info: text(),
    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Available', value: 'AVAILABLE' },
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' },
      },
    }),
    destinations: relationship({ ref: 'Destination.guide', many: true }),
  },
});
