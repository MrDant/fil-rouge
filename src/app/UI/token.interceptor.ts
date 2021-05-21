import { Injectable, Injector } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { environment } from "../../environments/environment";
import { catchError } from "rxjs/operators";
import { UserService } from "../Services/user.service";
import { faWarnIfIconSpecMissing } from "@fortawesome/angular-fontawesome/shared/errors/warn-if-icon-spec-missing";

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
        "Access-Control-Allow-Origin": "*",
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
