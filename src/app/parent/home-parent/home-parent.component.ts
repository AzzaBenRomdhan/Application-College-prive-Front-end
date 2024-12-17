import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { SelectionEleveComponent } from '../selection-eleve/selection-eleve.component';

@Component({
  selector: 'app-home-parent',
  templateUrl: './home-parent.component.html',
  styleUrls: ['./home-parent.component.scss']
})
export class HomeParentComponent implements OnInit {
  routerActive: string = "activelink";
  userId: any;

  parentMenuItems = [
    { name: 'Actualités', icon: 'fas fa-newspaper', route: '/actualites' },
    { name: 'Notes et Moyennes', icon: 'fas fa-chart-bar',action: () => this.openStudentSelectionDialog()}, // Pas de redirection ici
    { name: 'Discipline', icon: 'fas fa-user-check', route: '/discipline' },
    { name: 'Emploi du Temps', icon: 'fas fa-calendar-alt', route: '/emploi-du-temps' },
    { name: 'Calendrier Examen', icon: 'fas fa-calendar-day', route: '/calendrier-examen' },
    { name: 'Paiement', icon: 'fas fa-wallet', route: '/payment' }
  ];

  constructor(
    private router: Router,
    private userService: UserService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    const email = localStorage.getItem('email');
    if (email) {
      this.userService.userbyemail(email).subscribe({
        next: (user) => {
          this.userId = user.id;
        },
        error: (err) => {
          console.error('Erreur lors de la récupération de l\'utilisateur :', err);
        }
      });
    }
  }

  navigateTo(route: string) {
      this.router.navigate([route]);
  }
  handleMenuClick(item:any): void{
    if(item.action){
      item.action();
    } else if (item.route) {
      this.navigateTo(item.rout)
    }
  }

  openStudentSelectionDialog(): void {
    const dialogRef = this.dialog.open(SelectionEleveComponent, {
      width: '400px',
    });

  }
}
