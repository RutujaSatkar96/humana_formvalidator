import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const reqHeader = request.clone({
      setHeaders: {'Authorization': 'Token 43b7f25f3438a121ac72f4e0888ba53df4da7a55'}});

    return next.handle(reqHeader);

  //   request = request.clone({
  //     setHeaders: {
  //       Authorization: `Bearer ${this.auth.getToken()}`
  //     }
  //   });
  //   return next.handle(request);
  // }
}
}