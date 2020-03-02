import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SSRExcludeDirective } from './ssr-exclude.directive';
import { BrowserExcludeDirective } from './browser-exclude.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SSRExcludeDirective, BrowserExcludeDirective],
  exports: [SSRExcludeDirective, BrowserExcludeDirective]
})
export class SSRExcludeModule {}
