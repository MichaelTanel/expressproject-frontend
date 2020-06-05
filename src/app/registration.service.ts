import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  register(email: string, pass: string, confirmPass: string) {
    let body = {
      email: email,
      pass: pass,
      confirmPass: confirmPass
    };
    
    console.log('environment.backend', environment.backend);
    return this.http.put(environment.backend + '/register', body);
  } 
}
