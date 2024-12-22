import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  if( token && username){
    return true;
  }
  else{
    window.location.href = '/login';
    return false;
  }
};
