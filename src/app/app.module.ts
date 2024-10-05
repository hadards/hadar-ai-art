import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { StartPageMobileComponent } from './start-page-mobile/start-page-mobile.component';

@NgModule({
  declarations: [	
    AppComponent,
    StartPageComponent,
    StartPageMobileComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
