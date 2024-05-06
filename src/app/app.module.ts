import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';
import { MuralComponent } from './mural/mural.component';
import { HomeComponent } from './home/home.component';
import { FotosComponent } from './mural/fotos/fotos.component';
import { MuralService } from './mural/mural.service';
import { HttpClientModule } from '@angular/common/http';
import { FotosDetalhesComponent } from './fotos-detalhes/fotos-detalhes.component';
import { ComentariosComponent } from './fotos-detalhes/comentarios/comentarios.component';
import { IncComentariosComponent } from './fotos-detalhes/inc-comentarios/inc-comentarios.component';
import { FormsModule } from '@angular/forms';
import { ConUsuarioComponent } from './con-usuario/con-usuario.component';
import { UsuarioService } from './con-usuario/con-usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CadUsuarioComponent,
    MuralComponent,
    HomeComponent,
    FotosComponent,
    FotosDetalhesComponent,
    ComentariosComponent,
    IncComentariosComponent,
    ConUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MuralService,
    UsuarioService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
