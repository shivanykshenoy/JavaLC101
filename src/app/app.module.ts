import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IntroComponent } from './intro/intro.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { IntellijTipsComponent } from './intellij-tips/intellij-tips.component';
import { Lesson4Component } from './lesson4/lesson4.component';
import { Lesson5Component } from './lesson5/lesson5.component';
import { Lesson6Component } from './lesson6/lesson6.component';
import { Lesson7Component } from './lesson7/lesson7.component';
import { Lesson8Component } from './lesson8/lesson8.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    Lesson2Component,
    Lesson3Component,
    IntellijTipsComponent,
    Lesson4Component,
    Lesson5Component,
    Lesson6Component,
    Lesson7Component,
    Lesson8Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
