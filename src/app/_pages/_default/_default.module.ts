import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { DefaultRoutingModule } from './_default-routing.module';
import { TermsComponent } from './terms/terms.component';
import { HomeComponent } from './home/home.component';
import { PromotionsComponent } from './promotions/promotions.component';

@NgModule({
  imports: [DefaultRoutingModule],
  declarations: [TermsComponent, HomeComponent, PromotionsComponent],
  bootstrap: [TermsComponent, HomeComponent, PromotionsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DefaultModule {}
