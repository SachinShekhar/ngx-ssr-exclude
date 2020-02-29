import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SSRExcludeDirective } from './ssr-exclude.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SSRExcludeDirective],
  exports: [SSRExcludeDirective]
})
export class SSRExcludeModule {}
