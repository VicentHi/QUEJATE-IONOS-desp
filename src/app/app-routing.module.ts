import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { ValidacionComponent } from './validacion/validacion.component';

import { VerQuejasComponent } from './ver-quejas/ver-quejas.component';
import { FormQuejaComponent } from './form-queja/form-queja.component';

import { ContactoComponent } from './contacto/contacto.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crear-usuario', component: CrearUsuarioComponent },
  { path: 'validacion', component: ValidacionComponent },
  { path: 'form-queja', component: FormQuejaComponent },
  { path: 'ver-quejas', component: VerQuejasComponent },
  { path: 'contacto' , component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
