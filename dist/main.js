/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/main */ \"./src/scripts/main.js\");\n/* harmony import */ var _scripts_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/map */ \"./src/scripts/map.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const main = document.getElementById(\"main\");\n  new _scripts_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n  const canvas = document.getElementById(\"mapCanvas\");\n  // debugger\n  new _scripts_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvas);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQW9DO0FBQ0w7QUFDL0JFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE1BQU0sQ0FBQztFQUM1QyxJQUFJTCxxREFBTyxDQUFDSSxJQUFJLENBQUM7RUFFakIsTUFBTUUsTUFBTSxHQUFHSixRQUFRLENBQUNHLGNBQWMsQ0FBQyxXQUFXLENBQUM7RUFDbkQ7RUFDQSxJQUFJSixvREFBRyxDQUFFSyxNQUFNLENBQUM7QUFDcEIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLU1hemUtZ2FtZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvbWFpblwiXG5pbXBvcnQgTWFwIGZyb20gXCIuL3NjcmlwdHMvbWFwXCJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIG5ldyBFeGFtcGxlKG1haW4pXG5cbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcENhbnZhc1wiKTtcbiAgICAvLyBkZWJ1Z2dlclxuICAgIG5ldyBNYXAgKGNhbnZhcylcbn0pIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJNYXAiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWluIiwiZ2V0RWxlbWVudEJ5SWQiLCJjYW52YXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    // this.pausebutton = this.pausebutton.bind(this); \n    // this.pausebutton()\n  }\n\n  pausebutton() {\n    window.addEventListener('load', () => {\n      const buttonContainer = this.ele;\n\n      // Create a button element\n      const button = document.createElement('button');\n      button.classList.add('button');\n\n      // Add event listener to the button\n      button.addEventListener('click', () => {\n        // Action to perform when the button is clicked\n        alert('Button clicked!');\n      });\n\n      // Append the button to the container\n      buttonContainer.appendChild(button);\n    });\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tYWluLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPLENBQUM7RUFDVkMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2IsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZDtJQUNBO0VBQ0o7O0VBQ0pDLFdBQVdBLENBQUEsRUFBRTtJQUNUQyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxNQUFNO01BQ2xDLE1BQU1DLGVBQWUsR0FBRyxJQUFJLENBQUNKLEdBQUc7O01BR2hDO01BQ0EsTUFBTUssTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7TUFDL0NGLE1BQU0sQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDOztNQUU5QjtNQUNBSixNQUFNLENBQUNGLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ3JDO1FBQ0FPLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztNQUMxQixDQUFDLENBQUM7O01BRUY7TUFDQU4sZUFBZSxDQUFDTyxXQUFXLENBQUNOLE1BQU0sQ0FBQztJQUNyQyxDQUFDLENBQUM7RUFFUjtBQUVBO0FBRUEsK0RBQWVQLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8tTWF6ZS1nYW1lLy4vc3JjL3NjcmlwdHMvbWFpbi5qcz8yOTYzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEV4YW1wbGUge1xuICAgIGNvbnN0cnVjdG9yKGVsZSkge1xuICAgICAgICB0aGlzLmVsZSA9IGVsZTtcbiAgICAgICAgLy8gdGhpcy5wYXVzZWJ1dHRvbiA9IHRoaXMucGF1c2VidXR0b24uYmluZCh0aGlzKTsgXG4gICAgICAgIC8vIHRoaXMucGF1c2VidXR0b24oKVxuICAgIH1cbnBhdXNlYnV0dG9uKCl7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IHRoaXMuZWxlXG5cbiAgICAgIFxuICAgICAgICAvLyBDcmVhdGUgYSBidXR0b24gZWxlbWVudFxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgICAgXG4gICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgYnV0dG9uXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAvLyBBY3Rpb24gdG8gcGVyZm9ybSB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZFxuICAgICAgICAgIGFsZXJ0KCdCdXR0b24gY2xpY2tlZCEnKTtcbiAgICAgICAgfSk7XG4gICAgICBcbiAgICAgICAgLy8gQXBwZW5kIHRoZSBidXR0b24gdG8gdGhlIGNvbnRhaW5lclxuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgIH0pO1xuXG59XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZTsiXSwibmFtZXMiOlsiRXhhbXBsZSIsImNvbnN0cnVjdG9yIiwiZWxlIiwicGF1c2VidXR0b24iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiYnV0dG9uQ29udGFpbmVyIiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYWxlcnQiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/main.js\n");

/***/ }),

/***/ "./src/scripts/map.js":
/*!****************************!*\
  !*** ./src/scripts/map.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Map {\n  constructor(canvas) {\n    this.canvas = canvas;\n    this.createMap = this.createMap.bind(this);\n    this.createMap();\n  }\n  createMap() {\n    window.addEventListener('load', () => {\n      const ctx = this.canvas.getContext('2d');\n\n      // Calculate the center position of the window\n      // const centerX = window.innerWidth / 2;\n      // const centerY = window.innerHeight / 2;\n\n      // Set the desired size of the rectangle\n      const rectWidth = 600;\n      const rectHeight = 600;\n\n      // Calculate the top-left coordinates of the rectangle to center it\n      // const rectX = centerX - rectWidth / 2;\n      // const rectY = centerY - rectHeight / 2;\n\n      // Draw the centered rectangle on the canvas\n      ctx.fillStyle = 'green';\n      ctx.fillRect(0, 0, 800, 800);\n    });\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tYXAuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLEdBQUcsQ0FBQztFQUNOQyxXQUFXQSxDQUFDQyxNQUFNLEVBQUU7SUFDaEIsSUFBSSxDQUFDQSxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDQyxTQUFTLEdBQUcsSUFBSSxDQUFDQSxTQUFTLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDMUMsSUFBSSxDQUFDRCxTQUFTLENBQUMsQ0FBQztFQUVwQjtFQUVBQSxTQUFTQSxDQUFBLEVBQUc7SUFFUkUsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsTUFBTTtNQUVsQyxNQUFNQyxHQUFHLEdBQUcsSUFBSSxDQUFDTCxNQUFNLENBQUNNLFVBQVUsQ0FBQyxJQUFJLENBQUM7O01BRXhDO01BQ0E7TUFDQTs7TUFFQTtNQUNBLE1BQU1DLFNBQVMsR0FBRyxHQUFHO01BQ3JCLE1BQU1DLFVBQVUsR0FBRyxHQUFHOztNQUV0QjtNQUNBO01BQ0E7O01BRUE7TUFDQUgsR0FBRyxDQUFDSSxTQUFTLEdBQUcsT0FBTztNQUN2QkosR0FBRyxDQUFDSyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ2hDLENBQUMsQ0FBQztFQUtOO0FBQ0o7QUFJQSwrREFBZVosR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovLy1NYXplLWdhbWUvLi9zcmMvc2NyaXB0cy9tYXAuanM/ZjU2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNYXAge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jcmVhdGVNYXAgPSB0aGlzLmNyZWF0ZU1hcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZU1hcCgpO1xuXG4gICAgfVxuXG4gICAgY3JlYXRlTWFwKCkge1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGNlbnRlciBwb3NpdGlvbiBvZiB0aGUgd2luZG93XG4gICAgICAgICAgICAvLyBjb25zdCBjZW50ZXJYID0gd2luZG93LmlubmVyV2lkdGggLyAyO1xuICAgICAgICAgICAgLy8gY29uc3QgY2VudGVyWSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XG5cbiAgICAgICAgICAgIC8vIFNldCB0aGUgZGVzaXJlZCBzaXplIG9mIHRoZSByZWN0YW5nbGVcbiAgICAgICAgICAgIGNvbnN0IHJlY3RXaWR0aCA9IDYwMDtcbiAgICAgICAgICAgIGNvbnN0IHJlY3RIZWlnaHQgPSA2MDA7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgdG9wLWxlZnQgY29vcmRpbmF0ZXMgb2YgdGhlIHJlY3RhbmdsZSB0byBjZW50ZXIgaXRcbiAgICAgICAgICAgIC8vIGNvbnN0IHJlY3RYID0gY2VudGVyWCAtIHJlY3RXaWR0aCAvIDI7XG4gICAgICAgICAgICAvLyBjb25zdCByZWN0WSA9IGNlbnRlclkgLSByZWN0SGVpZ2h0IC8gMjtcblxuICAgICAgICAgICAgLy8gRHJhdyB0aGUgY2VudGVyZWQgcmVjdGFuZ2xlIG9uIHRoZSBjYW52YXNcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIDgwMCwgODAwKTtcbiAgICAgICAgfSk7XG5cblxuXG5cbiAgICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBNYXA7XG4iXSwibmFtZXMiOlsiTWFwIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJjcmVhdGVNYXAiLCJiaW5kIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImN0eCIsImdldENvbnRleHQiLCJyZWN0V2lkdGgiLCJyZWN0SGVpZ2h0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/map.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8tTWF6ZS1nYW1lLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;