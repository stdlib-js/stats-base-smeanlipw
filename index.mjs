// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.2-esm/index.mjs";import{ndarray as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-sapxsumpw@v0.2.2-esm/index.mjs";function n(s,e,n,d){return s<=0?NaN:1===s||0===n?e[d]:t(e[d]+t(r(s-1,-e[d],e,n,d+n)/s))}function d(s,t,r){return n(s,t,r,e(s,r))}s(d,"ndarray",n);export{d as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
