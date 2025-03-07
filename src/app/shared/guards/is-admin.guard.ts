import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

export const isAdminGuard: CanActivateFn = async (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot) => {
    console.log('isAdminGuard: Checking if user is admin...');
  const is = await isAdmin();

  console.log('isAdminGuard: User is admin:', is);
  return is;
};

export function isAdmin(): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    setTimeout(() => {
      console.log('isAdmin: Resolving as true');
      resolve(true);
    }, 2000);
  });
}