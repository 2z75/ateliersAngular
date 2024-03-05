import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  router: Router = inject(Router);

  studentSearched: string = '';

  goToStudentPage(): void {
    this.router.navigate(['/wcs', this.studentSearched])
  }
}
