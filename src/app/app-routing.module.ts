import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IntroComponent} from './intro/intro.component';
import {Lesson2Component} from './lesson2/lesson2.component';
import {Lesson3Component} from './lesson3/lesson3.component';
import {IntellijTipsComponent} from './intellij-tips/intellij-tips.component';
import {Lesson4Component} from './lesson4/lesson4.component';


const routes: Routes = [
  {path: 'lesson2', component: Lesson2Component},
  {path: 'JavaLC101/lesson2', component: Lesson2Component},
  {path: 'lesson3', component: Lesson3Component},
  {path: 'JavaLC101/lesson3', component: Lesson3Component},
  {path: 'lesson4', component: Lesson4Component},
  {path: 'JavaLC101/lesson4', component: Lesson4Component},
  {path: 'intellij', component: IntellijTipsComponent},
  {path: 'JavaLC101/intellij', component: IntellijTipsComponent},
  {path: 'JavaLC101', component: IntroComponent},
  {path: '', component: IntroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
