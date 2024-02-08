import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';
import { SubjectsComponent } from './subjects/subjects.component';
import { SelectionComponent } from './selection/selection.component';
import { AptitudeComponent } from './aptitude/aptitude.component';
import { ResultComponent } from './result/result.component';
import { AptitudequestionComponent } from './aptitudequestion/aptitudequestion.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionComponent,
    HeaderComponent,
    ChangeBgDirective,
    SubjectsComponent,
    SelectionComponent,
    AptitudeComponent,
    ResultComponent,
    AptitudequestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
