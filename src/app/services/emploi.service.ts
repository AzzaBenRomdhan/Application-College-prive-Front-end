import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmploiService {

  constructor(private http:HttpClient) { }
  
   // Méthode pour créer un emploi du temps
   creerEmploi(emploiData: any, email: string, salle: string, matiere: string, classe: string): Observable<any> {
    const params = new HttpParams()
      .set('email', email)
      .set('salle', salle)
      .set('matiere', matiere)
      .set('classe', classe);

    return this.http.post(`${environment.BASE_URL}/emploi/creeremploi`, emploiData, { params });
  }
}
