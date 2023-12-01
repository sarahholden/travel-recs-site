import { list } from '@keystone-next/keystone/schema';
import { text, relationship } from '@keystone-next/fields';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import 'dotenv/config';

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'travelbuddy',
};

export const DestinationImage = list({
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: 'Source',
    }),
    altText: text(),
    destination: relationship({ ref: 'Destination.photo' }),
  },
  ui: {
    listView: {
      initialColumns: ['image', 'altText'],
    },
  },
});
