import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjetoApagesModule } from '../../_pages/_projetoA/_projetoA.module';
import { ProjetoAComponent } from '../_projetoA/_projetoA.component';

const routes: Routes = [
  {
    path: 'projetoA',
    component: ProjetoAComponent,
    loadChildren: () => ProjetoApagesModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ProjetoARoutingModule {}
