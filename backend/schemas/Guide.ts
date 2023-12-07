import { list } from '@keystone-next/keystone/schema';
import { text, relationship, select } from '@keystone-next/fields';
import { cloudinaryImage } from '@keystone-next/cloudinary';

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'travelbuddy',
};

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
    image: cloudinaryImage({
      cloudinary,
      label: 'Location Image',
    }),
    altText: text(),
    destinations: relationship({ ref: 'Destination.guide', many: true }),
  },
});
