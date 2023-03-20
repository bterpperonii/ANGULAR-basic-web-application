import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './view/nav/nav.component';
import { StructuresComponent } from './view/structures/structures.component';

const routes: Routes = [
  { path: 'nav', component: NavComponent },
  { path: 'structures', component: StructuresComponent},
  { path: '', redirectTo: 'nav', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
