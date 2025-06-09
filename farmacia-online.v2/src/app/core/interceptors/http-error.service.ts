// src/app/core/interceptors/http-error.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

export const httpErrorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const messageService = inject(MessageService);
  const router = inject(Router)

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let message = 'Ocurrió un error inesperado';

      if (error.error.description) {
        message = error.error.description;
      }else{
        message = error.error.error;
      }

      switch(error.status){
        case 409:
          messageService.add({
            severity: 'info',
            summary: 'Info',
            detail: message
          });
          break;
        case 401:
          router.navigate(['/login']);
          messageService.add({
            severity: 'error',
            summary: 'Session',
            detail: message
          });
          break;
        default:
          messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: message
          });
          break;
      }

      return throwError(() => error);
    })
  );
};
