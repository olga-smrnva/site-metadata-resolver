import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		appRoutingModule
	],
	declarations: [
		AppComponent,
		HomeComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule { }