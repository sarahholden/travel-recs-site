import { checkbox } from '@keystone-next/fields';

export const permissionFields = {
  canManageGuides: checkbox({
    defaultValue: false,
    label: 'User can Update and delete any guide',
  }),
  canSeeOtherUsers: checkbox({
    defaultValue: false,
    label: 'User can query other users',
  }),
  canManageUsers: checkbox({
    defaultValue: false,
    label: 'User can Edit other users',
  }),
  canManageRoles: checkbox({
    defaultValue: false,
    label: 'User can CRUD roles',
  }),

  canManageFavorites: checkbox({
    defaultValue: false,
    label: 'User can see and manage favorites',
  }),
};

export type Permission = keyof typeof permissionFields;

export const permissionsList: Permission[] = Object.keys(
  permissionFields
) as Permission[];
