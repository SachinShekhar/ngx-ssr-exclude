# SSR Exclude

[![Build](https://github.com/SachinShekhar/ngx-ssr-exclude/workflows/Build/badge.svg)](https://github.com/SachinShekhar/ngx-ssr-exclude/actions?query=workflow%3ABuild) [![GitHub last commit](https://img.shields.io/github/last-commit/SachinShekhar/ngx-ssr-exclude?logo=github)](https://github.com/SachinShekhar/ngx-ssr-exclude) [![npm latest version](https://img.shields.io/npm/v/ngx-ssr-exclude/latest?logo=npm)](https://www.npmjs.com/package/ngx-ssr-exclude) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/ngx-ssr-exclude?label=npm%20-%20minzipped&logo=npm)](https://www.npmjs.com/package/ngx-ssr-exclude) [![npm license](https://img.shields.io/npm/l/ngx-ssr-exclude)](https://github.com/SachinShekhar/ngx-ssr-exclude/blob/master/LICENSE)

`ngx-ssr-exclude` library provides structural directives to exclude elements/ components from Angular Server-side Rendering (SSR) as well as browser rendering. It allows you to push smaller html pages to the users resulting in faster load times, less data/battery consumption and happy users. It can also save precious and costly compute time of the server. It works with both dynamic SSR (any engine viz. Express, ASP.NET Core etc) as well as pre-rendering.

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

## Directives

| Directives       | Usage                                                 |
| ---------------- | ----------------------------------------------------- |
| \*ssrExclude     | Exclude element/ component from server-side rendering |
| \*browserExclude | Exclude element/ component from browser rendering     |

## Usage

You can add `*ssrExclude` directive to any element/ component which you don't want rendered on the server. Similarly, you can add `*browserExclude` directive to any element/ component which you don't want rendered in the browser. e.g.

```html
<p *ssrExclude>This paragraph won't be rendered on the server.</p>
```

You can also apply these directives on `<ng-container>` or `<div>` to exclude group of elements/ components (`<ng-container>` is more preferrable because it doesn't add extra style to the page).

### Use Case

When none of these directives are available on an element or component, both server and browser runtimes render them. Let's say, you have a heavy component `<my-heavy-component>` which heavily depends on browser APIs or local javascript runtime. It's useless to let it be processed by the server. So, you can create a light version of the component `<my-light-component>` which contains maybe plain HTML without any behaviour. You can let server render `<my-light-component>` in the generated HTML file. And, when Angular runtime gets bootstrapped in the browser, you can replace it with `<my-heavy-component>` using these two lines of code:

```html
<my-heavy-component *ssrExclude></my-heavy-component>
<my-light-component *browserExclude></my-light-component>
```

(`*browserExclude` is important here to prevent rendering of duplicate content on the page)
