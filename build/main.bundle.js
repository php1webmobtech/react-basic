/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Created by shraddha on 22/7/17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _lib = __webpack_require__(1);

var q = void 0,
    w = void 0,
    e = void 0,
    r = void 0,
    t = void 0,
    y = void 0;

//Here we are using ES6's array destructuring feature to assign the returned values to variables.
//Here we are ignoring 2 and 4 array indexes

//alert(y);


var _multi_value = (0, _lib.multi_value)();

var _multi_value2 = _slicedToArray(_multi_value, 6);

q = _multi_value2[0];
w = _multi_value2[1];
e = _multi_value2[2];
r = _multi_value2[3];
y = _multi_value2[5];
var array = [1, 4, 5, 6];

var add = _lib.sum.apply(undefined, array);
alert(add);

//setTimeout(()=>{ alert("Hello"); }, 3000);
/*let printMessage = (message)=>{ alert(message); }

 printMessage('Hello World');*/

/*let detail = {
 "name":"test",
 "message":"testing"
 };


 let{name}=detail;
 alert(name);*/

//ES6 Array Example
/*var array = [1, 3, 5, 7, 9];

 //'i' references to the values of the array indexes
 for(var i of array)
 {
 //   console.log(i); //1, 3, 5, 7, 9
 alert(i);
 }*/

//Return Multiple value
/*function multi_value()
 {
 return [1, 6, 7, 4, 8, 0]; //here we are storing variables in an array and returning the array
 }

 var q, w, e, r, t, y;

 //Here we are using ES6's array destructuring feature to assign the returned values to variables.
 //Here we are ignoring 2 and 4 array indexes
 [q, w, e, r, , y] = multi_value();

 alert(y);//y is 0
 alert(e);//y is 0*/

/*function sum(a, b,c)
 {
 alert(a+b+c);
 }

 var array = [1,4,5,6];

 sum(...array);*/

/*//args variable is an array holding the passed function arguments
 function function_one(...args)
 {
 alert(args);
 alert(args.length);
 }

 function_one(1, 4);
 function_one(1, 4, 7);
 function_one(1, 4, 7, 0);


 function function_two(a, b, ...args)
 {
 alert(args);
 alert(args.length);
 }

 //"args" holds only 7 and 9
 function_two(1, 5, 7, 9);*/

/*var a = [1, 2, 3];
 alert(a.includes(2)); // true
 alert(a.includes(4)); // false*/

/*var sum = (x, y) => x + y;

 console.log(sum(2, 900)); //902*/

/*function sum(p, q)
 {
 console.log(p() + q()); //87
 }

 sum(a => 20 + 10, b => 1 + 56); */

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.multi_value = multi_value;
exports.sum = sum;
/**
 * Created by shraddha on 22/7/17.
 */

function multi_value() {
    return [1, 6, 7, 4, 8, 0]; //here we are storing variables in an array and returning the array
}

function sum(a, b, c) {
    alert(a + b + c);
}

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map