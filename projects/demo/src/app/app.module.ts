import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SSRExcludeModule } from 'ngx-ssr-exclude';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    SSRExcludeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
