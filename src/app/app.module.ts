import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidacionComponent } from './validacion/validacion.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { NbThemeModule } from '@nebular/theme';
import { FooterComponent } from './footer/footer.component';
import { QuejaComponent } from './queja/queja.component';
import { FormQuejaComponent } from './form-queja/form-queja.component';
import { UltimasQuejasComponent } from './ultimas-quejas/ultimas-quejas.component';
import { VerQuejasComponent } from './ver-quejas/ver-quejas.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { BuscarTemasComponent } from './buscar-temas/buscar-temas.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({

  declarations: [
    AppComponent,
    ValidacionComponent,
    CrearUsuarioComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    QuejaComponent,
    FormQuejaComponent,
    UltimasQuejasComponent,
    VerQuejasComponent,
    BuscarTemasComponent,
    ContactoComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot(),
    NgxPaginationModule
  ],

  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
