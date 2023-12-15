import { checkbox } from '@keystone-next/fields';

export const permissionFields = {
  canManageGuides: checkbox({
    defaultValue: false,
    label: 'User can Update and delete any product',
  }),
  canManageDestinations: checkbox({
    defaultValue: false,
    label: 'User can Update and delete any destination',
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
  canManageOrders: checkbox({
    defaultValue: false,
    label: 'User can see and manage saved items',
  }),
};

export type Permission = keyof typeof permissionFields;

export const permissionsList: Permission[] = Object.keys(
  permissionFields
) as Permission[];
