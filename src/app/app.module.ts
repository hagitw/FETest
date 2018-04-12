import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PictureComponent } from './picture/picture.component';
import { HttpModule } from "@angular/http";
import {AppService} from './app.service';
import { CommonModule } from "@angular/common"


const appRoutes :Routes = [
  { path: 'Home', component: HomeComponent },
 { path: 'Picture', component: PictureComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PictureComponent
  ],
  imports: [CommonModule,
    BrowserModule,RouterModule.forRoot(appRoutes),HttpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
