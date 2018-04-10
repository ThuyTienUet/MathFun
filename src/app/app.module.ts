import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from 'app/routing/app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

// chương 1
import { CountQuestionDetailComponent } from './luyentap/chuong1-phamvi10/count-question-detail.component';
import { CalQuestionDetailComponent } from './luyentap/chuong1-phamvi10/cal-question-detail.component';
import { MinMaxQuestionDetailComponent } from './luyentap/chuong1-phamvi10/min-max-10';

//chương 2
import { SoSanh20Component } from './luyentap/chuong2-phamvi20/sosanh-20.component';
import { Sub20Question } from './luyentap/chuong2-phamvi20/sub-20-question.component';
import { Sum20Question } from './luyentap/chuong2-phamvi20/sum-20-question.component';
import { MinMax20QuestionComponent } from './luyentap/chuong2-phamvi20/min-max-20-question.component';
import { SoLienTruocSau20Component } from './luyentap/chuong2-phamvi20/lientruoc-sau-20.component';

//chương 3
import { SoSanh100Component } from './luyentap/chuong3-phamvi100/sosanh-100.component';
import { Sub100Question } from './luyentap/chuong3-phamvi100/cal-sub-100.component';
import { Sum100Question } from './luyentap/chuong3-phamvi100/cal-sum-100.component';
import { MinMax100QuestionComponent } from './luyentap/chuong3-phamvi100/min-max-100.component';
import { SoLienTruocSau100Component } from './luyentap/chuong3-phamvi100/lientruoc-sau-100.component';

import { luyentapComponent } from "app/luyentap/luyentap.component";
import { KiemTraComponent } from './kiemtra/kiemtra.component';
import { giaitriComponent } from './giaitri/giaitri.component';

import { De1Component } from './kiemtra/de1.component';
import { De2Component } from './kiemtra/de2.component';
import { De3Component } from './kiemtra/de3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountQuestionDetailComponent,
    CalQuestionDetailComponent,
    MinMaxQuestionDetailComponent,
    SoSanh20Component,
    Sub20Question,
    Sum20Question,
    MinMax20QuestionComponent,
    SoLienTruocSau20Component,
    SoSanh100Component,
    Sub100Question,
    Sum100Question,
    MinMax100QuestionComponent,
    SoLienTruocSau100Component,

    luyentapComponent,
    KiemTraComponent,
    giaitriComponent,
    
    De1Component,
    De2Component,
    De3Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
