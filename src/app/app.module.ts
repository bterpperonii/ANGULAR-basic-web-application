import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './view/nav/nav.component';
import { StructuresComponent } from './view/rule-management/structures/structures.component';
import { LayoutComponent } from './view/layout/layout.component';
import { HomeComponent } from './view/home/home.component';
import { ReleasesComponent } from './view/rule-management/releases/releases.component';
import { TitleComponent } from './view/simple-components/title/title.component';
import { StructureComponent } from './view/rule-management/structure/structure.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StructuresComponent,
    LayoutComponent,
    HomeComponent,
    ReleasesComponent,
    TitleComponent,
    StructureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
