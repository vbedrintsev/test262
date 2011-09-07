// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The value of the internal [[Prototype]] property of the RegExp constructor is the Function prototype object
 *
 * @id: S15.10.5_A2_T1;
 * @section: 15.10.5;
 * @description: Checking Function.prototype.isPrototypeOf(RegExp);
 */

 //CHECK#1
if (Function.prototype.isPrototypeOf(RegExp) !== true) {
	$ERROR('#1: Function.prototype.isPrototypeOf(RegExp) === true');
}

