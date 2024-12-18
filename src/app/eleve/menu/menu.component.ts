import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  implements OnInit {
  menuDuJour: any[] = [];
  menuSemaine: any[] = [];
  showMenuSemaine: boolean = false;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.getMenuDuJour();
  }

  getMenuDuJour(): void {
    const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
    this.menuService.afficherMenusParDate(today).subscribe(
      (data) => {
        this.menuDuJour = data;
        if (!this.menuDuJour || this.menuDuJour.length === 0) {
          this.getMenuSemaine();
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération du menu du jour:', error);
        this.getMenuSemaine();
      }
    );
  }

  getMenuSemaine(): void {
    this.menuService.afficherMenus().subscribe(
      (data) => {
        this.menuSemaine = data;
        this.showMenuSemaine = true;
      },
      (error) => {
        console.error('Erreur lors de la récupération du menu de la semaine:', error);
      }
    );
  }

  toggleMenuSemaine(): void {
    this.showMenuSemaine = !this.showMenuSemaine;
  }

  formatDate(date: string): string {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}