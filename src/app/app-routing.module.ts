import { StructureComponent } from './view/rule-management/structure/structure.component';
import { LayoutComponent } from './view/layout/layout.component';
import { HomeComponent } from './view/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './view/nav/nav.component';
import { StructuresComponent } from './view/rule-management/structures/structures.component';

const routes: Routes = [
  { path: 'nav', component: NavComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'structures', component: StructuresComponent},
  { path: 'structure/:structureId', component: StructureComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
