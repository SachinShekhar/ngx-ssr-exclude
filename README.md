# SSR Exclude

[![Build](https://github.com/SachinShekhar/ngx-ssr-exclude/workflows/Build/badge.svg)](https://github.com/SachinShekhar/ngx-ssr-exclude/actions?query=workflow%3ABuild) [![GitHub last commit](https://img.shields.io/github/last-commit/SachinShekhar/ngx-ssr-exclude?logo=github)](https://github.com/SachinShekhar/ngx-ssr-exclude) [![npm latest version](https://img.shields.io/npm/v/ngx-ssr-exclude/latest?logo=npm)](https://www.npmjs.com/package/ngx-ssr-exclude) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/ngx-ssr-exclude?label=npm%20-%20minzipped&logo=npm)](https://www.npmjs.com/package/ngx-ssr-exclude) [![npm license](https://img.shields.io/npm/l/ngx-ssr-exclude)](https://github.com/SachinShekhar/ngx-ssr-exclude/blob/master/LICENSE)

`ngx-ssr-exclude` library provides a structural directive to exclude certain elements/ components from Angular Server-side Rendering (SSR) which allows you to push smaller html pages to the users resulting in faster load times and happy users. It can also save precious and costly compute time of the server. It works with both dynamic SSR (any engine viz. Express, ASP.NET Core etc) as well as pre-rendering.

[Demo](https://sachinshekhar.github.io/ngx-ssr-exclude)

## Installation

```
npm install --save ngx-ssr-exclude
```

Import `SSRExcludeModule` in any module which requires the directive.

```typescript
import { NgModule } from '@angular/core';
import { SSRExcludeModule } from 'ngx-ssr-exclude';

....
....

@NgModule({
  imports: [SSRExcludeModule]
})
export class YourModule {}
```

## Usage

You can add `ssrExclude` directive to any element/ component which you don't want to be rendered on the server. e.g.

```html
<p *ssrExclude>This paragraph won't be rendered on the server.</p>
```

(Don't forget to prefix with `*` as this is a structural directive)

```html
<ng-container *ssrExclude>
  <p>
    These group of elements/ components won't be rendered unless Angular runtime
    is bootstrapped in the browser.
  </p>
  <your-component></your-component>
  <component-provided-by-third-party-library><component-provided-by-third-party-library>
  <button (click)="onButtonClick()">Server doesn't care about me.</button>
</ng-container>
```

(You can also exclude group of elements/ components using `<div>`, but `<ng-container>` is more preferrable as it doesn't add extra styles to the page)
