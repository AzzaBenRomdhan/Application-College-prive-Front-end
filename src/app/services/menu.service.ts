import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) {}

  ajouterMenu(menu: any): Observable<string> {
    return this.http.post<string>(`${environment.BASE_URL}/menu/creer`, menu, { responseType: 'text' as 'json' }).pipe(
      catchError((error) => {
        console.error('Erreur lors de l\'ajout du menu :', error);
        return throwError('Une erreur s\'est produite lors de l\'ajout du menu.');
      })
    );
  }

  afficherMenus(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.BASE_URL}/menu/afficher`);
  }

  afficherMenusParDate(date: string): Observable<any[]> {
    const params = new HttpParams().set('date', date); // Convertir la date au format string

    return this.http.get<any[]>(`${environment.BASE_URL}/menu/afficherbydate`, { params });
  }
  updateMenu(id: number, updatedMenu: any): Observable<any> {
    return this.http.put(`${environment.BASE_URL}/menu/update/${id}`, updatedMenu, {responseType: 'texte' as 'json'});
  }

}
