import { permissionsList } from './schemas/fields';
import { ListAccessArgs } from './types';

// At its simplest, the access control returns a yes or no value depending on the user's session
export function isSignedIn({ session }: ListAccessArgs): boolean {
  return !!session;
}

// Permissions check if someone meets a criteria - true or false
// These are generated from the permissionsList fields, and then spread
// into permissions below.
const generatedPermissions = Object.fromEntries(
  permissionsList.map((permission) => [
    permission,
    function ({ session }: ListAccessArgs) {
      return !!session?.data.role?.[permission];
    },
  ])
);

export const permissions = {
  ...generatedPermissions,
};

// Rule based permissions
// Rules can return a boolean - yes or no - or a filter which limits which guides they can CRUD
export const rules = {
  canManageGuides({ session }: ListAccessArgs) {
    if (permissions.canManageGuides({ session })) {
      return true;
    }
    return { user: { id: session.itemId } };
  },
};
