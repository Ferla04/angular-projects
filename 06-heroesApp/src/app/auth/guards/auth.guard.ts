import { Injectable } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { tap, type Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  private checkAuthStatus(): boolean | Observable<boolean> {
    return this.authService.checkAuth().pipe(
      tap((isAuth) => console.log('AuthGuard', { isAuth })),
      tap((isAuth) => {
        if (!isAuth) {
          this.authService.logout();
          this.router.navigate(['auth/login']);
        }
      })
    );
  }

  public canMatch: CanMatchFn = (route, segments) => {
    // console.log('canMatch', { route, segments });
    return this.checkAuthStatus();
  };

  public canActivate: CanActivateFn = (route, state) => {
    // console.log('canActivate', { route, state });
    return this.checkAuthStatus();
  };
}
