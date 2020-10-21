import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { RentacarV3SharedModule } from 'app/shared/shared.module';
import { RentacarV3CoreModule } from 'app/core/core.module';
import { RentacarV3AppRoutingModule } from './app-routing.module';
import { RentacarV3HomeModule } from './home/home.module';
import { RentacarV3EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    RentacarV3SharedModule,
    RentacarV3CoreModule,
    RentacarV3HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    RentacarV3EntityModule,
    RentacarV3AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class RentacarV3AppModule {}
