import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SSRExcludeModule } from 'ngx-ssr-exclude';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    SSRExcludeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
