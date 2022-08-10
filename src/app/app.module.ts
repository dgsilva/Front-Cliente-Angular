import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ConsultaClientesComponent } from './consulta-clientes/consulta-clientes.component';
//importando as classes para uso da biblioteca de formularios do angular
import{FormsModule, ReactiveFormsModule}from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CadastroClientesComponent,
    ConsultaClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//Registrando biblioteca para formulário
    ReactiveFormsModule //Registrando biblioteca para formularios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
