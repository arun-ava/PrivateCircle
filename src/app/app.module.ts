import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ListEffects } from './effects/list.effects';
import { listReducer } from './reducers/list.reducer';
import { ListsComponent } from './views/lists/lists.component';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CdkTableModule,
    MatTableModule,
    HttpClientModule,
    StoreModule.forRoot({
      lists: listReducer
    }, {}),
    EffectsModule.forRoot([
      ListEffects,
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
