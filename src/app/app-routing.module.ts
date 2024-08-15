import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModelComponent } from './components/home-model/home-model.component';
import { MainModelComponent } from './components/main-model/main-model.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  { path: 'home', component: HomeModelComponent },
  { path: 'main', component: MainModelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
