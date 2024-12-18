import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.scss']
})
export class CreateMenuComponent {
  menuForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  typemenuOptions = ['Apporter', 'Reserver'];
  joursOptions = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];


  constructor(private fb: FormBuilder,
    private menuService: MenuService) {
    this.menuForm = this.fb.group({
      typemenu: ['', Validators.required],
      platentree: ['', Validators.required],
      platprincipale: ['', Validators.required],
      dessert: ['', Validators.required],
      nomjour: ['', Validators.required],
      datedeb: ['', Validators.required],
      datefin: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.menuForm.valid) {
      this.menuService.ajouterMenu(this.menuForm.value).subscribe({
        next: (response: any) => {
          this.successMessage = response;
          this.errorMessage = null;
          this.menuForm.reset();
          this.menuForm.markAsPristine(); 
          this.menuForm.markAsUntouched();
        },
        error: (error) => {
          this.successMessage = null;
          this.errorMessage = 'Erreur lors de l\'ajout du menu.';
        }
      });
    }
  }
}
