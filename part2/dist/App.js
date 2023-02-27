"use strict";
System.register("m", [], function (exports_1, context_1) {
    "use strict";
    var hi;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("hi", hi = '你好');
        }
    };
});
System.register("app", ["m"], function (exports_2, context_2) {
    "use strict";
    var a, b, c, m_js_1, box1;
    var __moduleName = context_2 && context_2.id;
    function fn(a, b) {
        return a + b;
    }
    function f2() {
        alert(this);
    }
    return {
        setters: [
            function (m_js_1_1) {
                m_js_1 = m_js_1_1;
            }
        ],
        execute: function () {
            console.log('hello ts');
            a = 10;
            b = 1;
            c = 12;
            console.log(m_js_1.hi);
            box1 = document.getElementById('box1');
            box1 === null || box1 === void 0 ? void 0 : box1.addEventListener('click', function () {
                alert('hello');
            });
        }
    };
});
let abc = 10;
var xixi = '嘻嘻';
let aczx = 123;
