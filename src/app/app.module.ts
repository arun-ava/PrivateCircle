import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DescriptionsComponent } from './views/descriptions/descriptions.component';
import { tableReducer } from './reducers/table.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    DescriptionsComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CdkTableModule,
    MatTableModule,
    MatListModule,
    MatTabsModule,
    MatIconModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    StoreModule.forRoot({
      lists: listReducer,
      table: tableReducer,
    }, {}),
    EffectsModule.forRoot([
      ListEffects,
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
