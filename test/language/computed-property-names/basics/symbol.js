// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.5
description: >
    computed property names can be a symbol
includes: [compareArray.js]
---*/

function ID(x) {
  return x;
}

var sym1 = Symbol();
var sym2 = Symbol();
var object = {
  a: 'A',
  [sym1]: 'B',
  c: 'C',
  [ID(sym2)]: 'D',
};
assert.sameValue(object.a, 'A', "The value of `object.a` is `'A'`. Defined in `object` as `a: 'A'`");
assert.sameValue(object[sym1], 'B', "The value of `object[sym1]` is `'B'`. Defined in `object` as `[sym1]: 'B'`");
assert.sameValue(object.c, 'C', "The value of `object.c` is `'C'`. Defined in `object` as `c: 'C'`");
assert.sameValue(object[sym2], 'D', "The value of `object[sym2]` is `'D'`. Defined in `object` as `[ID(sym2)]: 'D'`");
assert(
  compareArray(Object.keys(object), ['a', 'c']),
  "`compareArray(Object.keys(object), ['a', 'c'])` returns `true`"
);

// compareArray expects arguments to be sorted,
// which will cause an array containing symbols to
// throw an exception when toString() is called.
//
// Since there is no guarantee of order:
//
//    - Assert only that the symbol is present
//    - Assert that the length is correct
//
var symbols = Object.getOwnPropertySymbols(object);

assert(
  symbols.indexOf(sym1) !== -1,
  "The result of `symbols.indexOf(sym1) !== -1` is `true`, after executing `var symbols = Object.getOwnPropertySymbols(object);`"
);
assert(
  symbols.indexOf(sym2) !== -1,
  "The result of `symbols.indexOf(sym2) !== -1` is `true`, after executing `var symbols = Object.getOwnPropertySymbols(object);`"
);
assert.sameValue(symbols.length, 2, "The value of `symbols.length` is `2`, after executing `var symbols = Object.getOwnPropertySymbols(object);`");
