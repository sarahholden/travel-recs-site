import { destinations } from './data';

export async function insertSeedData(ks: any) {
  // Keystone API changed, so we need to check for both versions to get keystone
  const keystone = ks.keystone || ks;
  const adapter = keystone.adapters?.MongooseAdapter || keystone.adapter;

  console.log(`🌱 Inserting Seed Data: ${destinations.length} destinations`);
  const { mongoose } = adapter;
  for (const destination of destinations) {
    console.log(`  🛍️ Adding Product: ${destination.name}`);
    const { _id } = await mongoose
      .model('DestinationImage')
      .create({ image: destination.photo, altText: destination.description });
    destination.photo = _id;
    await mongoose.model('Product').create(destination);
  }
  console.log(`✅ Seed Data Inserted: ${destinations.length} destinations`);
  console.log('👋 Please start the process with `yarn dev` or `npm run dev`');
  process.exit();
}
