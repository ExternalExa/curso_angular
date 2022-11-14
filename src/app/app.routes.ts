import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { SingleComponent } from './components/single/single.component';

const APP_ROUTES:Routes = [
    {path: 'home', component: BodyComponent},
    {path: 'about-us', component: AboutComponent},
    {path: 'heroes', component: HeroesComponent },
    {path: 'heroe/:id', component: SingleComponent},
    {path: '**', pathMatch:'full', redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
