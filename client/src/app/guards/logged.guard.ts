

import { CanActivateChildFn } from '@angular/router';

export const loggedGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
