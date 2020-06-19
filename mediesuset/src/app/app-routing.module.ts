import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ForsideComponent } from './forside/forside.component';
import { NyhederComponent } from './nyheder/nyheder.component';
import { LineupComponent } from './lineup/lineup.component';
import { ProgramComponent } from './program/program.component';
import { ArtistComponent } from './artist/artist.component';
import { KoebBilletComponent } from './koeb-billet/koeb-billet.component';
import { KasseComponent } from './kasse/kasse.component';
import { CampsComponent } from './camps/camps.component';
import { CampComponent } from './camp/camp.component';
import { LoginComponent } from './login/login.component';
import { MitProgramComponent } from './mit-program/mit-program.component';
import { InfoComponent } from './info/info.component';
import { NyhedComponent } from './nyhed/nyhed.component';


const routes: Routes = [
{ path: '', redirectTo: 'forside', pathMatch: 'full' },
{ path: 'forside', component: ForsideComponent,data: {animation: 'isLeft'}, pathMatch: 'full' },
{ path: 'nyheder', component: NyhederComponent, data: {animation: 'isRight'} },
{ path: 'lineup', component: LineupComponent,  pathMatch: 'full', data: {animation: 'isLeft'} },
{ path: 'login', component: LoginComponent, pathMatch: 'full', data: {animation: 'isLeft'} },
{ path: 'artist/:id', component: ArtistComponent, pathMatch: 'full', data: {animation: 'isRight'} },
{ path: 'koebbillet', component: KoebBilletComponent, pathMatch: 'full', data: {animation: 'isRight'} },
{ path: 'kasse/:id', component: KasseComponent, pathMatch: 'full', data: {animation: 'isLeft'} },
{ path: 'camps', component: CampsComponent, pathMatch: 'full', data: {animation: 'isRight'} },
{ path: 'camp/:id', component: CampComponent, pathMatch: 'full', data: {animation: 'isLeft'} },
{ path: 'mit_program', component: MitProgramComponent, pathMatch: 'full', data: {animation: 'isRight'} },
{ path: 'program', component: ProgramComponent, pathMatch: 'full', data: {animation: 'isLeft'} },
{ path: 'info', component: InfoComponent, pathMatch: 'full', data: {animation: 'isRight'} },
{ path: 'nyhed/:id', component: NyhedComponent, pathMatch: 'full', data: {animation: 'isLeft'} }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
