import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { HomeSliderComponent } from './component/home-slider/home-slider.component';
import { FooterComponent } from './component/footer/footer.component';

import { WhatWeDoComponent } from './component/what-we-do/what-we-do.component';
import { ContactComponent } from './component/contact/contact.component';
import { ShowComponent } from './component/show/show.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule, MatIcon, MatToolbar, MatChip, MatChipList } from '@angular/material';

import { AboutComponent } from './component/about/about.component';
import { PopupComponent } from './component/popup/popup.component';
import { TypeFormComponent } from './component/type-form/type-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeSliderComponent,
    FooterComponent,
    WhatWeDoComponent,
    ContactComponent,
    routingComponents,
    ShowComponent,
    AboutComponent,
    PopupComponent,
    MatIcon,
    MatToolbar,
    TypeFormComponent,
    MatChipList,
    MatChip
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  /*exports:[
    MatChipList
  ],*/
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[PopupComponent,TypeFormComponent]
})
export class AppModule { }