import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ProjetoARoutingModule } from '../_projetoA/_projetoA-routing.module';
import { ProjetoAComponent } from '../_projetoA/_projetoA.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ProjetoARoutingModule],
  declarations: [ProjetoAComponent],
  bootstrap: [ProjetoAComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjetoAModule {}
