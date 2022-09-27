import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DefaultRoutingModule } from './_default-routing.module';
import { DefaultComponent } from './_default.component';

@NgModule({
  imports: [BrowserModule, FormsModule, DefaultRoutingModule],
  declarations: [DefaultComponent],
  bootstrap: [DefaultComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DefaultModule {}
