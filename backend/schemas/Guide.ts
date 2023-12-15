import { list } from '@keystone-next/keystone/schema';
import { text, relationship, select } from '@keystone-next/fields';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import { isSignedIn, rules } from '../access';

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'travelbuddy',
};

export const Guide = list({
  access: {
    create: isSignedIn,
    read: isSignedIn,
    update: rules.canManageGuides,
    delete: rules.canManageGuides,
  },
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
    image: cloudinaryImage({
      cloudinary,
      label: 'Location Image',
    }),
    altText: text(),
    destinations: relationship({ ref: 'Destination.guide', many: true }),
    user: relationship({
      ref: 'User.guides',
      defaultValue: ({ context }) => ({
        connect: { id: context.session?.itemId },
      }),
    }),
  },
});
