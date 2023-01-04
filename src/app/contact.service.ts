
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { firstValueFrom, lastValueFrom } from "rxjs";
import { Registration } from "./models";

const URL = 'http://localhost:8080/api/registration'
// const URL = 'https://day34-am-server.herokuapp.com/api/registration'

@Injectable()
export class ContactService {
    constructor(private http: HttpClient) { }

    newRegistration(registration: Registration) {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
        
        // this.http.post<Response>(URL, registration, { headers })
        return firstValueFrom(
            this.http.post<any>(URL, registration, { headers })
            // .pipe() 
        )

    }

    getContactListItems(): Promise<Registration[]> {
        // const params = new HttpParams()
        //     .set("email", email)
    
        return firstValueFrom(
          this.http.get<Registration[]>(`http://localhost:8080/api/users`))
      }

    removeFavFromFavorites(registration: Registration) {
    const email = registration.email
    const params = new HttpParams()
        .set("email", email)
        
    return lastValueFrom(this.http.delete(`http://localhost:8080/api/deleteuser`, {params: params}))
    }
}