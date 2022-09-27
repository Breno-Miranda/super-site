import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BlogComponent } from '../_projetoA/blog/blog.component';
import { HomeComponent } from '../_projetoA/home/home.component';
import { SalesComponent } from '../_projetoA/sales/sales.component';
import { ProjetoARoutingModule } from '../_projetoA/_projetoA-routing.module';

@NgModule({
  imports: [ProjetoARoutingModule],
  declarations: [HomeComponent, SalesComponent, BlogComponent],
  bootstrap: [HomeComponent, SalesComponent, BlogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjetoApagesModule {}
