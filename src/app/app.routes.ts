import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { SearchComponent } from './search/search.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

export const routes: Routes = [
    {
        path: 'wcs/:nameStudent', 
        component: StudentComponent,
        children: [
            {
                path: 'edit',
                component: EditStudentComponent
            }
        ]
    },
    {
        path: '',
        component: SearchComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
