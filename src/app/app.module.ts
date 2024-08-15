import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideViewComponent } from './components/side-view/side-view.component';
import { MainModelComponent } from './components/main-model/main-model.component';
import { HomeModelComponent } from './components/home-model/home-model.component';

@NgModule({
  declarations: [
    AppComponent,
    SideViewComponent,
    MainModelComponent,
    HomeModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
