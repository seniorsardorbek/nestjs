import { SetMetadata } from '@nestjs/common';

export const REQUIRED_ROLES = 'requiredRoles';
export const SetRoles = (...roles: string[]) => {
  return SetMetadata(REQUIRED_ROLES, roles);
};
