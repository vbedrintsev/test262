// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-5-b-15
description: >
    Object.defineProperties - 'enumerable' property of 'descObj' is
    own accessor property that overrides an inherited accessor
    property (8.10.5 step 3.a)
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};
        var proto = {};
        var accessed = false;
        Object.defineProperty(proto, "enumerable", {
            get: function () {
                return true;
            }
        });

        var Con = function () { };
        Con.prototype = proto;
        var descObj = new Con();

        Object.defineProperty(descObj, "enumerable", {
            get: function () {
                return false;
            }
        });

        Object.defineProperties(obj, {
            prop: descObj
        });
        for (var property in obj) {
            if (property === "prop") {
                accessed = true;
            }
        }
        return !accessed;
    }
runTestCase(testcase);
