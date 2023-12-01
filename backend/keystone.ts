import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { User } from './schemas/User';
import { Guide } from './schemas/Guide';
import { DestinationImage } from './schemas/DestinationImage';
import { Destination } from './schemas/Destination';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/travel-buddy';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 30,
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // Add roles in here
  },
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
      // Add data seeding here
    },
    lists: createSchema({
      // schema items go in here
      User,
      Guide,
      DestinationImage,
      Destination,
    }),
    ui: {
      // Change for roles
      isAccessAllowed: ({ session }) =>
        // console.log(session);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        !!session?.data,
    },
    // Add session values here
    session: withItemData(statelessSessions(sessionConfig), {
      User: 'id name email',
    }),
  })
);
