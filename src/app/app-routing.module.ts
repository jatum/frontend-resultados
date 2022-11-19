import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CandidatoComponent } from './candidato/candidato.component';
import { MesaComponent } from './mesa/mesa.component';
import { PartidoComponent } from './partido/partido.component';
import { ResultadosComponent } from './resultados/resultados.component';

const routes: Routes = [
  { path: '', component: MesaComponent },
  { path: 'mesa', component: MesaComponent },
  { path: 'partido', component: PartidoComponent} ,
  { path: 'candidato', component: CandidatoComponent },
  { path: 'resultado', component: ResultadosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
