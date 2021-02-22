import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PhilosophyComponent } from './components/philosophy/philosophy.component';
import { WorkManagementComponent } from './components/work-management/work-management.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';

const router: Routes = [
  {path: 'philosophy', component: PhilosophyComponent},
  {path: 'WorkManagement', component: WorkManagementComponent},
  {path: 'Technologies', component: TechnologiesComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PhilosophyComponent,
    WorkManagementComponent,
    TechnologiesComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(router),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
