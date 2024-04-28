import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {DefaultResponseType} from "../../../types/default-response.type";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) {
  }
  sendEmail(email: string): Observable<DefaultResponseType> {
    return this.http.post<DefaultResponseType>(environment.apiHost + 'email', {
      email: email,
    })
  }
}
