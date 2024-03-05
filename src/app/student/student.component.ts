import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {

  route: ActivatedRoute = inject(ActivatedRoute);

  studentName: string = '';

    ngOnInit() {
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.studentName = params.get('nameStudent') || '';
      });
    }


}
