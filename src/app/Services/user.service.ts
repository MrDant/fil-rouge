import { Injectable } from "@angular/core";
import {BehaviorSubject, NEVER, Observable} from "rxjs";
import {catchError, map, mapTo, switchMap, tap} from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { User } from "../Models/user";
import {NotifierService} from "angular-notifier";
import {NotifierType} from "../_core/utils/utils";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient, private router: Router, private notifer: NotifierService) {
    if (this.isConnected()) {
      this.getUserInformation().subscribe();
    }
  }

  private connected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    !!localStorage.getItem("token")
  );

  public currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  login(form: { email: string; password: string }): Observable<boolean> {
    return this.http.post<{ token: string }>("/auth/login", form).pipe(
      tap((e) => {
        localStorage.setItem("token", e.token);
        this.connected.next(true);
      }),
      switchMap(() => this.getUserInformation()),
      mapTo(true),
      catchError(error => {
        this.notifer.notify(NotifierType.ERROR, error.error.message || "Une erreur est survenue");
        return NEVER;
      })
    );
  }

  logout(): void {
    this.notifer.notify(NotifierType.INFO, "Vous êtes déconnecté");
    localStorage.clear();
    this.connected.next(false);
    this.router.navigate(["/login"]);
  }

  getUserInformation(): Observable<User> {
    return this.http
      .get<User>("/auth/me")
      .pipe(tap(this.fetchCurentUser.bind(this)),
        catchError(error => {
        this.notifer.notify(NotifierType.ERROR, error.error.message || "Une erreur est survenue");
        return NEVER;
      }));
  }

  isConnected(): boolean {
    return this.connected.getValue();
  }

  register(user): Observable<any> {
    if (
      user.confirmEmail !== user.email ||
      user.password !== user.confirmPassword
    ) {
      throw new Error("Mauvais email");
    }
    return this.http.post("/auth/register", user).pipe(
      tap(() => this.notifer.notify(NotifierType.SUCCESS, "Inscription réussi, veuillez vous connecter"),
      catchError(error => {
        this.notifer.notify(NotifierType.ERROR, error.error.message || "Une erreur est survenue");
        return NEVER;
      }))
    );
  }

  update(user: User): Observable<User> {
    return this.http
      .put<User>("/auth/user/" + user.id, user)
      .pipe(tap(this.fetchCurentUser.bind(this),
        tap(() => this.notifer.notify(NotifierType.SUCCESS, "Action réussi"),
        catchError(error => {
          this.notifer.notify(NotifierType.ERROR, error.error.message || "Une erreur est survenue");
          return NEVER;
        }))
      ));
  }

  changePassword(form: {
    currentPassword: string;
    newPassword: string;
  }): Observable<boolean> {
    return this.http.post<boolean>("/auth/change-password", form).pipe(
      tap(() => this.notifer.notify(NotifierType.SUCCESS, "Mot de passe changé"),
        catchError(error => {
          this.notifer.notify(NotifierType.ERROR, error.error.message || "Une erreur est survenue");
          return NEVER;
        }))
    );
  }

  fetchCurentUser(user: User): void {
    this.currentUser.next(user);
  }

  list(): Observable<User[]> {
    return this.http.get<User[]>("/auth/users");
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>("/auth/user/" + id).pipe(
      tap(() => this.notifer.notify(NotifierType.SUCCESS, "Utilisateur supprimé"),
        catchError(error => {
          this.notifer.notify(NotifierType.ERROR, error.error.message || "Une erreur est survenue");
          return NEVER;
        }))
    );
  }

  get(id: number): Observable<User> {
    return this.http.get<User>("/auth/user/" + id).pipe(
      catchError(error => {
        this.notifer.notify(NotifierType.ERROR, error.error.message || "Une erreur est survenue");
        return NEVER;
      })
    );
  }
}
