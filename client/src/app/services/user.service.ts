import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // get("/api/user")
  public getUsers() {
    return this.http.get<any>('/api/user')
    .pipe(map(data => {
        return data;
        }));
  }
}
