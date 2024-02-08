import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SelectionComponent } from './selection/selection.component';
import { AptitudeComponent } from './aptitude/aptitude.component';
import { ResultComponent } from './result/result.component';
import { AptitudequestionComponent } from './aptitudequestion/aptitudequestion.component';

const routes: Routes = [
  {path: '',redirectTo:'welcome',pathMatch:"full"},
  {path: 'welcome',component:WelcomeComponent},
  {path: 'question',component:QuestionComponent},
  {path:'subjects',component:SubjectsComponent},
  {path:'selection',component:SelectionComponent},
  {path:'aptitude',component:AptitudeComponent},
  {path:'result',component:ResultComponent},
  {path:'aptitudequestion',component:AptitudequestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
