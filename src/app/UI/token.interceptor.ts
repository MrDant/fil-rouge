import { Injectable, Injector } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { environment } from "../../environments/environment";
import { catchError } from "rxjs/operators";
import { UserService } from "../Services/user.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      url: environment.apiUrl + request.url,
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "TestHeader": "je suis un test",
      },
    });
    return next.handle(request).pipe(
      catchError((error) => {
        if (error.status === 401) {
          this.injector.get<UserService>(UserService).logout();
        }
        return throwError(error);
      })
    );
  }
}
