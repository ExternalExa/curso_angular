import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//ROUTES
import { APP_ROUTING } from './app.routes';


//SERVICES
import { HeroesService } from './sevices/heroes.service'

//COMPONENTS CUSTOMS
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { SingleComponent } from './components/single/single.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    HeroesComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
