import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '@app/services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService,
                private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(e => {
            if (e.status === 401) {
                // auto logout if 401 response returned from api
                this.authService.logout();
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                    this.router.navigateByUrl(this.router.url);
                });
            }

            const error = e.error.message || e.statusText;
            return throwError(error);
        }));
    }
}
