import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';
import { MuralComponent } from './mural/mural.component';
import { FotosDetalhesComponent } from './fotos-detalhes/fotos-detalhes.component';
import { ComentariosComponent } from './fotos-detalhes/comentarios/comentarios.component';
import { IncComentariosComponent } from './fotos-detalhes/inc-comentarios/inc-comentarios.component';
import { ConUsuarioComponent } from './con-usuario/con-usuario.component';



const routes: Routes = [
  {path: 'home',component: HomeComponent },
  {path: 'cad-usuario',component: CadUsuarioComponent },  
  {path: 'con-usuario',component: ConUsuarioComponent },  
  {path: 'mural',component: MuralComponent },  
  {path: 'mural/:id',component: FotosDetalhesComponent/*,
    children: [
      {path: '',redirectTo: 'comentarios', pathMatch: 'full' },
      {path: 'comentarios',component: ComentariosComponent },
      {path: 'inc-comentarios',component: IncComentariosComponent }
    ]*/}, 
  //{path: 'comentarios/:id',component: ComentariosComponent},   
  {path: '',redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
