import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './service/user-service.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import {ChartsModule} from "ng2-charts";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkTableModule} from "@angular/cdk/table";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PieChartComponent,
  ],
  imports: [

    ChartsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MatTableModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
