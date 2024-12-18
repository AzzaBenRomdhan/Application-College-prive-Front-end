import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmploiService {

  constructor(private http:HttpClient) { }
  
   creerEmploi(emploiData: any, email: string, salle: string, matiere: string, classe: string): Observable<any> {
    const params = new HttpParams()
      .set('email', email)
      .set('salle', salle)
      .set('matiere', matiere)
      .set('classe', classe);

    return this.http.post(`${environment.BASE_URL}/emploi/creeremploi`, emploiData, { params,  responseType: 'text'   });
  }

    creerCalendrier(
      calendrier: any, 
      email: string, 
      salles: string, 
      matiere: string, 
      classe: string,
      typecalendrier: string)
      : Observable<any> {
      const params = new HttpParams()
        .set('email', email)
        .set('salles', salles)
        .set('matiere', matiere)
        .set('classe', classe)
        .set('typecalendrier', typecalendrier);
  
      return this.http.post(`${environment.BASE_URL}/calendrier/creer`, calendrier, { params,  responseType: 'text'   });
    }
}
