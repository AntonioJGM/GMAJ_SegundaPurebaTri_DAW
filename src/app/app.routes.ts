import { Routes } from '@angular/router';
import { NewComponent } from './pages/new-component/new-component';
import { HomeComponent } from './pages/home-component/home-component';

export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch:'full'},
    {path:'new', component: NewComponent},
    {path: 'home', component: HomeComponent},
    {path:'**', redirectTo: 'home'},
];
