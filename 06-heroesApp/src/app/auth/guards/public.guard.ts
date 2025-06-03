import { Injectable } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, tap, type Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PublicGuard {
  constructor(private authService: AuthService, private router: Router) {}

  private checkAuthStatus(): boolean | Observable<boolean> {
    return this.authService.checkAuth().pipe(
      tap((isAuth) => {
        if (isAuth) {
          this.authService.login();
          this.router.navigate(['heroes/list']);
        }
      }),
      map((isAuth) => !isAuth)
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
