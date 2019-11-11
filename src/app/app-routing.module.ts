import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { NotFoundComponent } from '../app/components/not-found/not-found.component';

const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch:'full'},
  { path:'home', component: HomeComponent},
  { path:'**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
