import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { User } from './schemas/User';
import { Guide } from './schemas/Guide';
import { Role } from './schemas/Role';
import { DestinationImage } from './schemas/DestinationImage';
import { Destination } from './schemas/Destination';
import { FavoritesItem } from './schemas/FavoritesItem';
import { sendPasswordResetEmail } from './lib/mail';
import { extendGraphQlSchema } from './mutations';
import { permissionsList } from './schemas/fields';

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
  passwordResetLink: {
    async sendToken(args) {
      console.log(args);
      await sendPasswordResetEmail(args.token, args.identity);
    },
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
      FavoritesItem,
      Role,
    }),
    extendGraphqlSchema: extendGraphQlSchema,
    ui: {
      // Change for roles
      isAccessAllowed: ({ session }) =>
        // console.log(session);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        !!session?.data,
    },
    // Add session values here
    session: withItemData(statelessSessions(sessionConfig), {
      User: `id name email {  ${permissionsList.join(' ')} }`,
    }),
  })
);
