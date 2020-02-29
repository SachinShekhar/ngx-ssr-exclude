import {
  Directive,
  OnInit,
  PLATFORM_ID,
  Inject,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Directive({
  selector: '[ssrExclude]'
})
export class SSRExcludeDirective implements OnInit {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
