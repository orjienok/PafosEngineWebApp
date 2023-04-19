import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/NavigationBar/NavigationBar.component';
import {PlatformModule} from '@angular/cdk/platform'
import { ContentContainerComponent } from './components/ContentContainer/ContentContainer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ContentContainerComponent
  ],
  imports: [
    BrowserModule,
    PlatformModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
