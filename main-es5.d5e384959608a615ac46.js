function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(e,t,n){e.exports=n("zUnb")},zUnb:function(e,t,n){"use strict";n.r(t);var r,s,i,o=n("EM62"),a=n("e4iD"),c=n("2kYt"),l=((i=function(){function e(t,n,r){_classCallCheck(this,e),this.viewContainer=t,this.templateRef=n,this.platformId=r}return _createClass(e,[{key:"ngOnInit",value:function(){Object(c.e)(this.platformId)?this.viewContainer.clear():this.viewContainer.createEmbeddedView(this.templateRef)}}]),e}()).\u0275fac=function(e){return new(e||i)(o.Bb(o.G),o.Bb(o.D),o.Bb(o.v))},i.\u0275dir=o.wb({type:i,selectors:[["","ssrExclude",""]]}),i),b=((s=function(){function e(t,n,r){_classCallCheck(this,e),this.viewContainer=t,this.templateRef=n,this.platformId=r}return _createClass(e,[{key:"ngOnInit",value:function(){Object(c.d)(this.platformId)?this.viewContainer.clear():this.viewContainer.createEmbeddedView(this.templateRef)}}]),e}()).\u0275fac=function(e){return new(e||s)(o.Bb(o.G),o.Bb(o.D),o.Bb(o.v))},s.\u0275dir=o.wb({type:s,selectors:[["","browserExclude",""]]}),s),d=((r=function e(){_classCallCheck(this,e)}).\u0275mod=o.zb({type:r}),r.\u0275inj=o.yb({factory:function(e){return new(e||r)},imports:[[c.a]]}),r),h=n("Meci");function u(e,t){1&e&&(o.Eb(0,"mat-card"),o.Eb(1,"mat-card-title"),o.Rb(2," Rendered on Server "),o.Db(),o.Eb(3,"mat-card-subtitle"),o.Rb(4," This component is rendered on the server.. "),o.Db(),o.Eb(5,"mat-card-content"),o.Rb(6," This component will be displayed to the users even before Angular runtime is bootstrapped in the browser. This component uses *browserExclude directive. "),o.Db(),o.Db())}function p(e,t){1&e&&(o.Eb(0,"mat-card"),o.Eb(1,"mat-card-title"),o.Rb(2," Rendered in Browser "),o.Db(),o.Eb(3,"mat-card-subtitle"),o.Rb(4," This component is rendered in the browser by Angular runtime.. "),o.Db(),o.Eb(5,"mat-card-content"),o.Rb(6," This component will be displayed to the users after Angular runtime gets bootstrapped in the browser. The server doesn't process it. This component uses *ssrExclude directive. "),o.Db(),o.Db())}var m,f,g=((m=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||m)},m.\u0275cmp=o.vb({type:m,selectors:[["app-root"]],decls:22,vars:0,consts:[[1,"shields"],["href","https://github.com/SachinShekhar/ngx-ssr-exclude/actions?query=workflow%3ABuild"],["src","https://github.com/SachinShekhar/ngx-ssr-exclude/workflows/Build/badge.svg","alt","Build"],["href","https://github.com/SachinShekhar/ngx-ssr-exclude"],["alt","GitHub last commit","src","https://img.shields.io/github/last-commit/SachinShekhar/ngx-ssr-exclude?logo=github"],["href","https://www.npmjs.com/package/ngx-ssr-exclude"],["alt","npm (tag)","src","https://img.shields.io/npm/v/ngx-ssr-exclude/latest?logo=npm"],["alt","npm bundle size","src","https://img.shields.io/bundlephobia/minzip/ngx-ssr-exclude?label=npm%20-%20minzipped&logo=npm"],["href","https://github.com/SachinShekhar/ngx-ssr-exclude/blob/master/LICENSE"],["alt","NPM License","src","https://img.shields.io/npm/l/ngx-ssr-exclude"],[4,"browserExclude"],[4,"ssrExclude"],["src","./assets/chrome-throttle-speed.png"]],template:function(e,t){1&e&&(o.Eb(0,"h1"),o.Rb(1,"SSR Exclude"),o.Db(),o.Eb(2,"div",0),o.Eb(3,"a",1),o.Cb(4,"img",2),o.Db(),o.Eb(5,"a",3),o.Cb(6,"img",4),o.Db(),o.Eb(7,"a",5),o.Cb(8,"img",6),o.Db(),o.Eb(9,"a",5),o.Cb(10,"img",7),o.Db(),o.Eb(11,"a",8),o.Cb(12,"img",9),o.Db(),o.Db(),o.Qb(13,u,7,0,"mat-card",10),o.Qb(14,p,7,0,"mat-card",11),o.Eb(15,"p"),o.Eb(16,"strong"),o.Rb(17,"The above card case study:"),o.Db(),o.Rb(18," First server rendered version of the card component is displayed. And, when Angular runtime gets bootstrapped in the browser, it is replaced with browser rendered version. If you can't perceive the difference (because this demo is very small against your fast internet), disable the cache and throttle the speed to 2G or Slow 3G using your browser's dev tools.\n"),o.Db(),o.Cb(19,"img",12),o.Eb(20,"p"),o.Rb(21,"You can also try performance profiling."),o.Db())},directives:[b,l,h.a,h.e,h.d,h.b],styles:["h1[_ngcontent-%COMP%]{margin-bottom:5px}.shields[_ngcontent-%COMP%]{margin-bottom:20px}.shields[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{margin-right:5px}p[_ngcontent-%COMP%]{font-size:larger}mat-card[_ngcontent-%COMP%]{max-width:400px;margin-left:10px;margin-bottom:20px}"]}),m),w=n("5lCh"),v=((f=function e(){_classCallCheck(this,e)}).\u0275mod=o.zb({type:f,bootstrap:[g]}),f.\u0275inj=o.yb({factory:function(e){return new(e||f)},providers:[],imports:[[a.a.withServerTransition({appId:"serverApp"}),d,w.b,h.c]]}),f);Object(o.K)(),document.addEventListener("DOMContentLoaded",(function(){a.c().bootstrapModule(v).catch((function(e){return console.error(e)}))}))},zn8P:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="zn8P"}},[[0,0,5]]]);
//# sourceMappingURL=main-es5.d5e384959608a615ac46.js.map