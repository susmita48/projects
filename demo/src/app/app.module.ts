import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { LoginDemoComponent } from './login-demo/login-demo.component';
@NgModule({
exports: [
MatButtonModule,
MatInputModule,

],
imports: [ 
BrowserModule,
FormsModule
],
providers: [],
declarations:[AppComponent, LoginDemoComponent],
bootstrap: [AppComponent]})

export class AppModule {}