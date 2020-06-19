import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
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
import { FooterComponent } from './footer/footer.component';
import { NyhedComponent } from './nyhed/nyhed.component';
import { DatePipePipe } from './date-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ForsideComponent,
    NyhederComponent,
    LineupComponent,
    ProgramComponent,
    ArtistComponent,
    KoebBilletComponent,
    KasseComponent,
    CampsComponent,
    CampComponent,
    LoginComponent,
    MitProgramComponent,
    InfoComponent,
    FooterComponent,
    NyhedComponent,
    DatePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
