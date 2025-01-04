import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActualiesService {

  private apiUrl = 'http://localhost:8099/actualite'; // Remplace par l'URL de ton API Spring Boot

  constructor(private http: HttpClient) { }

  // Méthode pour créer une actualité avec des fichiers
  createActualite(actualite: any, video: File | null, fichier: File | null): Observable<any> {
    const formData = new FormData();
    
    // Ajouter l'objet actualite (données JSON)
    formData.append('actualite', JSON.stringify(actualite));
    
    // Ajouter les fichiers si présents
    if (video) {
      formData.append('video', video, video.name);
    }
    if (fichier) {
      formData.append('fichier', fichier, fichier.name);
    }

    // Envoyer la requête POST avec 'form-data'
    return this.http.post<any>(this.apiUrl, formData);
  }
}
