import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { WebService } from 'src/app/services/web.service';

export const IsAdminGuard: CanActivateFn = async (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot) => {

  const webService = inject(WebService)
    /* await true; */
  return false;
};

/* export function isAdmin(): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    setTimeout(() => {
      console.log('isAdmin: Resolving as true');
      resolve(true);
    }, 2000);
  });
} */