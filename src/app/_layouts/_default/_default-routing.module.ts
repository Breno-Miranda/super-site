import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultModule } from '../../_pages/_default/_default.module';
import { DefaultComponent } from './_default.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    loadChildren: () => DefaultModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DefaultRoutingModule {}
