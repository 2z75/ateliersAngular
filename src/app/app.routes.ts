import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    {
        path: 'wcs/:nameStudent', 
        component: StudentComponent
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
