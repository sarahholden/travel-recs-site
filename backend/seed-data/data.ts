function timestamp() {
  // sometime in the last 30 days
  const stampy =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

export const destinations = [
  {
    name: 'Tavola',
    description: 'soo nice',
    photo: {
      id: '5dfbed262849d7961377c2c0',
      filename: 'hondo.jpg',
      originalFilename: 'hondo.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'sick-fits-keystone/5dfbed262849d7961377c2c0',
        version: 1576791335,
        signature: '9f7d5115788b7677307a39214f9684dd827ea5f9',
        width: 750,
        height: 457,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 27871,
        type: 'upload',
        etag: 'e1fdf84d5126b6ca2e1c8ef9532be5a5',
        placeholder: false,
        url:
          'http://res.cloudinary.com/wesbos/image/upload/v1576791335/sick-fits-keystone/5dfbed262849d7961377c2c0.jpg',
        secure_url:
          'https://res.cloudinary.com/wesbos/image/upload/v1576791335/sick-fits-keystone/5dfbed262849d7961377c2c0.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: null,
    // updatedBy: null,
    // updatedAt_utc: '2020-12-19T21:35:35.739Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-12-19T21:35:35.739Z',
    // createdAt_offset: '+00:00',
  },
];
