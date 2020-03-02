import {
  Directive,
  OnInit,
  PLATFORM_ID,
  Inject,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[browserExclude]'
})
export class BrowserExcludeDirective implements OnInit {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
