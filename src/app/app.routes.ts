import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TasklistComponent } from './components/task/tasklist/tasklist.component';

export const routes: Routes = [
    {path:'home', component:TasklistComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}];
