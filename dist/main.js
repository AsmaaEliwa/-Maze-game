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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/map */ \"./src/scripts/map.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const main = document.getElementById(\"main\");\n  new _scripts_example__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n  const canvas = document.getElementById(\"mapCanvas\");\n  new _scripts_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvas);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXdDO0FBQ1I7QUFDaENFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE1BQU0sQ0FBQztFQUM1QyxJQUFJTCx3REFBTyxDQUFDSSxJQUFJLENBQUM7RUFDakIsTUFBTUUsTUFBTSxHQUFHSixRQUFRLENBQUNHLGNBQWMsQ0FBQyxXQUFXLENBQUM7RUFDbkQsSUFBSUosb0RBQUcsQ0FBRUssTUFBTSxDQUFDO0FBSXBCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy1tYXplLWdhbWUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2V4YW1wbGVcIjtcbmltcG9ydCBNYXAgZnJvbSBcIi4vc2NyaXB0cy9tYXBcIjtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIG5ldyBFeGFtcGxlKG1haW4pO1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwQ2FudmFzXCIpO1xuICAgIG5ldyBNYXAgKGNhbnZhcyk7XG4gIFxuICAgXG4gICAgXG59KTtcblxuIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJNYXAiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWluIiwiZ2V0RWxlbWVudEJ5SWQiLCJjYW52YXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ \"./src/scripts/timer.js\");\n\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.pausebutton = this.pausebutton.bind(this);\n    this.mutebutton = this.mutebutton.bind(this);\n    this.play = this.play.bind(this);\n    this.pausebutton();\n    this.mutebutton();\n    this.restartbutton();\n    this.play();\n    this.side();\n    const hOne = document.getElementById(\"gameName\");\n    hOne.addEventListener('click', this.hideSide);\n  }\n  side() {\n    const side = document.getElementsByClassName('side')[0];\n    const header = document.createElement('h2');\n    header.textContent = 'hello';\n    const instructions = document.createElement('p');\n    instructions.textContent = 'your goal is to navigate through the maze and reach the goal, uncovering secret passages, and evading cunning obstacles. Be prepared to encounter devious traps, and intelligent adversaries who will stop at nothing to hinder your progress. Use your wit and strategy to outsmart them and find your way to the goal.';\n    side.appendChild(header);\n    side.appendChild(instructions);\n  }\n  play() {\n    window.addEventListener('load', () => {\n      const buttonContainer = this.ele;\n      const button = document.createElement('button');\n      button.classList.add('play');\n      button.addEventListener('click', () => {\n        const time = document.getElementById('time');\n        time.classList.add('time1');\n        const timer = new _timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        timer.startTimer();\n      });\n      button.addEventListener('click', this.onMusic);\n      buttonContainer.appendChild(button);\n      button.addEventListener('click', () => {\n        const side = document.getElementsByClassName('side')[0];\n        // debugger\n        side.classList.add('hidden');\n      });\n    });\n  }\n  onMusic() {\n    const gameMusic = document.getElementById('gameMusic');\n    gameMusic.play();\n  }\n  offMusic() {\n    const gameMusic = document.getElementById('gameMusic');\n    gameMusic.pause();\n  }\n  hideSide() {\n    const side = document.getElementsByClassName('side')[0];\n    // const container=this.side\n    const header = document.createElement('h2');\n    header.textContent = 'Hello, World!';\n    header.classList.add('header');\n    // container.appendChild(header);\n    side.classList.toggle('hidden');\n  }\n  pausebutton() {\n    window.addEventListener('load', () => {\n      const buttonContainer = this.ele;\n      const button = document.createElement('button');\n      button.classList.add('pause-button');\n      button.addEventListener('click', () => {\n        alert('Button clicked!');\n      });\n      buttonContainer.appendChild(button);\n    });\n  }\n  mutebutton() {\n    window.addEventListener('load', () => {\n      const buttonContainer = this.ele;\n      const button = document.createElement('button');\n      button.classList.add('mute-button');\n      button.addEventListener('click', this.offMusic);\n      buttonContainer.appendChild(button);\n    });\n  }\n  restartbutton() {\n    window.addEventListener('load', () => {\n      const buttonContainer = this.ele;\n\n      // Create a button element\n      const button = document.createElement('button');\n      button.classList.add('restart-button');\n\n      // Add event listener to the button\n      button.addEventListener('click', () => {\n        // Action to perform when the button is clicked\n        alert('restarted!');\n      });\n\n      // Append the button to the container\n      buttonContainer.appendChild(button);\n    });\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O01BQ2xDLE1BQU1TLGVBQWUsR0FBRyxJQUFJLENBQUNuQixHQUFHO01BQ2hDLE1BQU1vQixNQUFNLEdBQUdaLFFBQVEsQ0FBQ00sYUFBYSxDQUFDLFFBQVEsQ0FBQztNQUMvQ00sTUFBTSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7TUFDbkNGLE1BQU0sQ0FBQ1YsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ2tCLFFBQVEsQ0FBQztNQUMvQ1QsZUFBZSxDQUFDRixXQUFXLENBQUNHLE1BQU0sQ0FBQztJQUNyQyxDQUFDLENBQUM7RUFFTjtFQUNBZixhQUFhQSxDQUFBLEVBQUU7SUFDYmEsTUFBTSxDQUFDUixnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsTUFBTTtNQUNsQyxNQUFNUyxlQUFlLEdBQUcsSUFBSSxDQUFDbkIsR0FBRzs7TUFHaEM7TUFDQSxNQUFNb0IsTUFBTSxHQUFHWixRQUFRLENBQUNNLGFBQWEsQ0FBQyxRQUFRLENBQUM7TUFDL0NNLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7O01BRXRDO01BQ0FGLE1BQU0sQ0FBQ1YsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07UUFDckM7UUFDQXFCLEtBQUssQ0FBQyxZQUFZLENBQUM7TUFDckIsQ0FBQyxDQUFDOztNQUVGO01BQ0FaLGVBQWUsQ0FBQ0YsV0FBVyxDQUFDRyxNQUFNLENBQUM7SUFDckMsQ0FBQyxDQUFDO0VBRU47QUFHQTtBQUVBLCtEQUFldEIsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovLy1tYXplLWdhbWUvLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzP2ZjZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRpbWVyIGZyb20gJy4vdGltZXInXG5cbmNsYXNzIEV4YW1wbGUge1xuICAgIGNvbnN0cnVjdG9yKGVsZSkge1xuICAgICAgICB0aGlzLmVsZSA9IGVsZTtcbiAgICAgICAgdGhpcy5wYXVzZWJ1dHRvbiA9IHRoaXMucGF1c2VidXR0b24uYmluZCh0aGlzKTsgXG4gICAgICAgIHRoaXMubXV0ZWJ1dHRvbiA9IHRoaXMubXV0ZWJ1dHRvbi5iaW5kKHRoaXMpOyBcbiAgICAgICAgdGhpcy5wbGF5ID0gdGhpcy5wbGF5LmJpbmQodGhpcyk7IFxuICAgICAgICB0aGlzLnBhdXNlYnV0dG9uKCk7XG4gICAgICAgIHRoaXMubXV0ZWJ1dHRvbigpO1xuICAgICAgICB0aGlzLnJlc3RhcnRidXR0b24oKTtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgIHRoaXMuc2lkZSgpXG4gICAgICAgIGNvbnN0IGhPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVOYW1lXCIpO1xuICAgICAgICBoT25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0aGlzLmhpZGVTaWRlKTtcbiAgICB9XG5zaWRlKCl7XG4gY29uc3Qgc2lkZT0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2lkZScpWzBdO1xuIGNvbnN0IGhlYWRlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuIGhlYWRlci50ZXh0Q29udGVudD0naGVsbG8nO1xuIGNvbnN0IGluc3RydWN0aW9ucz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiBpbnN0cnVjdGlvbnMudGV4dENvbnRlbnQ9J3lvdXIgZ29hbCBpcyB0byBuYXZpZ2F0ZSB0aHJvdWdoIHRoZSBtYXplIGFuZCByZWFjaCB0aGUgZ29hbCwgdW5jb3ZlcmluZyBzZWNyZXQgcGFzc2FnZXMsIGFuZCBldmFkaW5nIGN1bm5pbmcgb2JzdGFjbGVzLiBCZSBwcmVwYXJlZCB0byBlbmNvdW50ZXIgZGV2aW91cyB0cmFwcywgYW5kIGludGVsbGlnZW50IGFkdmVyc2FyaWVzIHdobyB3aWxsIHN0b3AgYXQgbm90aGluZyB0byBoaW5kZXIgeW91ciBwcm9ncmVzcy4gVXNlIHlvdXIgd2l0IGFuZCBzdHJhdGVneSB0byBvdXRzbWFydCB0aGVtIGFuZCBmaW5kIHlvdXIgd2F5IHRvIHRoZSBnb2FsLic7XG4gc2lkZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuIHNpZGUuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb25zKTtcblxufVxuXG4gICAgcGxheSgpe1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7IFxuICAgICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IHRoaXMuZWxlXG4gICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BsYXknKTtcbiAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+e1xuICAgICAgICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZScpO1xuICAgICAgICAgICAgdGltZS5jbGFzc0xpc3QuYWRkKCd0aW1lMScpXG4gICAgICAgICAgICBjb25zdCB0aW1lciA9IG5ldyBUaW1lcigpO1xuICAgICAgICAgICAgdGltZXIuc3RhcnRUaW1lcigpOyBcbiAgICAgICAgICB9KVxuICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdGhpcy5vbk11c2ljKVxuICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT57XG4gICAgICAgICAgICBjb25zdCBzaWRlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NpZGUnKVswXTtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAgIHNpZGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJykgO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgXG4gICAgfVxuXG4gICAgb25NdXNpYygpe1xuICAgICAgY29uc3QgZ2FtZU11c2ljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVNdXNpYycpO1xuICAgICAgZ2FtZU11c2ljLnBsYXkoKTtcbiAgICB9XG4gICAgb2ZmTXVzaWMoKXtcbiAgICAgIGNvbnN0IGdhbWVNdXNpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lTXVzaWMnKTtcbiAgICAgIGdhbWVNdXNpYy5wYXVzZSgpO1xuICAgIH1cbiAgICAgIGhpZGVTaWRlKCl7XG4gICAgICAgIGNvbnN0IHNpZGU9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NpZGUnKVswXTtcbiAgICAgICAgLy8gY29uc3QgY29udGFpbmVyPXRoaXMuc2lkZVxuICAgICAgIGNvbnN0IGhlYWRlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0hlbGxvLCBXb3JsZCEnO1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgICAgLy8gY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIHNpZGUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICB9XG5wYXVzZWJ1dHRvbigpe1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSB0aGlzLmVsZVxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BhdXNlLWJ1dHRvbicpO1xuXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBhbGVydCgnQnV0dG9uIGNsaWNrZWQhJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgfSk7XG5cbn1cbm11dGVidXR0b24oKXtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSB0aGlzLmVsZVxuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnbXV0ZS1idXR0b24nKTtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub2ZmTXVzaWMpXG4gICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICB9KTtcblxufVxucmVzdGFydGJ1dHRvbigpe1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IHRoaXMuZWxlXG5cbiAgICBcbiAgICAgIC8vIENyZWF0ZSBhIGJ1dHRvbiBlbGVtZW50XG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZXN0YXJ0LWJ1dHRvbicpO1xuICAgIFxuICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBidXR0b25cbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gQWN0aW9uIHRvIHBlcmZvcm0gd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWRcbiAgICAgICAgYWxlcnQoJ3Jlc3RhcnRlZCEnKTtcbiAgICAgIH0pO1xuICAgIFxuICAgICAgLy8gQXBwZW5kIHRoZSBidXR0b24gdG8gdGhlIGNvbnRhaW5lclxuICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgfSk7XG5cbn1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7XG5cblxuIl0sIm5hbWVzIjpbIlRpbWVyIiwiRXhhbXBsZSIsImNvbnN0cnVjdG9yIiwiZWxlIiwicGF1c2VidXR0b24iLCJiaW5kIiwibXV0ZWJ1dHRvbiIsInBsYXkiLCJyZXN0YXJ0YnV0dG9uIiwic2lkZSIsImhPbmUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZGVTaWRlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImhlYWRlciIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImluc3RydWN0aW9ucyIsImFwcGVuZENoaWxkIiwid2luZG93IiwiYnV0dG9uQ29udGFpbmVyIiwiYnV0dG9uIiwiY2xhc3NMaXN0IiwiYWRkIiwidGltZSIsInRpbWVyIiwic3RhcnRUaW1lciIsIm9uTXVzaWMiLCJnYW1lTXVzaWMiLCJvZmZNdXNpYyIsInBhdXNlIiwidG9nZ2xlIiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/scripts/map.js":
/*!****************************!*\
  !*** ./src/scripts/map.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Map {\n  constructor(canvas) {\n    this.canvas = canvas;\n    this.createMap = this.createMap.bind(this);\n    this.moveElement = this.moveElement.bind(this);\n    this.img = new Image();\n    this.img.src = '1.webp';\n    this.img.onload = this.handleImageLoad.bind(this);\n    this.imageX = 240;\n    this.imageY = 2;\n    this.createMap();\n    document.addEventListener('keydown', this.moveElement);\n  }\n  handleImageLoad() {\n    this.createMap();\n  }\n  createMap() {\n    const mapcontainer = this.canvas;\n    //1 => wall //0=> path// 2=>target //3 =>start point 4=>enemy\n    let map = [[1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 1], [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1], [1, 0, 1, 1, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 1], [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1], [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1], [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1], [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];\n    const ctx = this.canvas.getContext('2d');\n    const cellSize = 40;\n    for (let i = 0; i < 15; i++) {\n      for (let j = 0; j < 15; j++) {\n        const cellValue = map[i][j];\n        const x = j * cellSize;\n        const y = i * cellSize;\n        if (cellValue === 0) {\n          ctx.fillStyle = 'white';\n        } else if (cellValue === 1) {\n          ctx.fillStyle = '#ABEED7';\n        } else if (cellValue === 3) {\n          ctx.drawImage(this.img, this.imageX, this.imageY, cellSize, cellSize);\n        } else if (cellValue === 2) {\n          const img = new Image();\n          img.src = 'ice-cream.jpeg';\n          img.onload = function () {\n            ctx.drawImage(img, x, y, cellSize, cellSize);\n          };\n          // debugger\n        } else {\n          const img = new Image();\n          img.src = 'oldman.jpeg';\n          img.classList.add('oldman');\n          img.onload = function () {\n            ctx.drawImage(img, x, y, cellSize, cellSize);\n          };\n        }\n        ctx.fillRect(x, y, cellSize, cellSize);\n      }\n    }\n  }\n  moveElement(event) {\n    event.preventDefault();\n    const ctx = this.canvas.getContext('2d');\n    const speed = 10;\n    if (event.key === 'ArrowLeft') {\n      this.imageX -= speed;\n    } else if (event.key === 'ArrowRight') {\n      this.imageX += speed;\n    } else if (event.key === 'ArrowUp') {\n      this.imageY -= speed;\n    } else if (event.key === 'ArrowDown') {\n      this.imageY += speed;\n    }\n    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    ctx.drawImage(this.img, this.imageX, this.imageY, 40, 40);\n    this.createMap();\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tYXAuanMiLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU1BLEdBQUcsQ0FBQztFQUNSQyxXQUFXQSxDQUFDQyxNQUFNLEVBQUU7SUFDbEIsSUFBSSxDQUFDQSxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDQyxTQUFTLEdBQUcsSUFBSSxDQUFDQSxTQUFTLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDMUMsSUFBSSxDQUFDQyxXQUFXLEdBQUcsSUFBSSxDQUFDQSxXQUFXLENBQUNELElBQUksQ0FBQyxJQUFJLENBQUM7SUFDOUMsSUFBSSxDQUFDRSxHQUFHLEdBQUcsSUFBSUMsS0FBSyxDQUFDLENBQUM7SUFDdEIsSUFBSSxDQUFDRCxHQUFHLENBQUNFLEdBQUcsR0FBRyxRQUFRO0lBQ3ZCLElBQUksQ0FBQ0YsR0FBRyxDQUFDRyxNQUFNLEdBQUcsSUFBSSxDQUFDQyxlQUFlLENBQUNOLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDakQsSUFBSSxDQUFDTyxNQUFNLEdBQUcsR0FBRztJQUNqQixJQUFJLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ2YsSUFBSSxDQUFDVCxTQUFTLENBQUMsQ0FBQztJQUNoQlUsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDVCxXQUFXLENBQUM7RUFFeEQ7RUFHQUssZUFBZUEsQ0FBQSxFQUFHO0lBQ2hCLElBQUksQ0FBQ1AsU0FBUyxDQUFDLENBQUM7RUFDbEI7RUFDQUEsU0FBU0EsQ0FBQSxFQUFHO0lBQ1YsTUFBTVksWUFBWSxHQUFHLElBQUksQ0FBQ2IsTUFBTTtJQUNoQztJQUNBLElBQUljLEdBQUcsR0FBRyxDQUNSLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDN0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUM3QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQzdDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDN0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUM3QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQzdDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDN0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUM3QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQzdDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDN0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUM3QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQzdDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDN0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUM3QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBRTlDO0lBQ0QsTUFBTUMsR0FBRyxHQUFHLElBQUksQ0FBQ2YsTUFBTSxDQUFDZ0IsVUFBVSxDQUFDLElBQUksQ0FBQztJQUN4QyxNQUFNQyxRQUFRLEdBQUcsRUFBRTtJQUNuQixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxFQUFFLEVBQUVBLENBQUMsRUFBRSxFQUFFO01BQzNCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7UUFDM0IsTUFBTUMsU0FBUyxHQUFHTixHQUFHLENBQUNJLENBQUMsQ0FBQyxDQUFDQyxDQUFDLENBQUM7UUFFM0IsTUFBTUUsQ0FBQyxHQUFHRixDQUFDLEdBQUdGLFFBQVE7UUFDdEIsTUFBTUssQ0FBQyxHQUFHSixDQUFDLEdBQUdELFFBQVE7UUFFdEIsSUFBSUcsU0FBUyxLQUFLLENBQUMsRUFBRTtVQUNuQkwsR0FBRyxDQUFDUSxTQUFTLEdBQUcsT0FBTztRQUV6QixDQUFDLE1BQU0sSUFBSUgsU0FBUyxLQUFLLENBQUMsRUFBRTtVQUMxQkwsR0FBRyxDQUFDUSxTQUFTLEdBQUcsU0FBUztRQUMzQixDQUFDLE1BQU0sSUFBSUgsU0FBUyxLQUFLLENBQUMsRUFBRTtVQUMxQkwsR0FBRyxDQUFDUyxTQUFTLENBQUMsSUFBSSxDQUFDcEIsR0FBRyxFQUFFLElBQUksQ0FBQ0ssTUFBTSxFQUFFLElBQUksQ0FBQ0MsTUFBTSxFQUFFTyxRQUFRLEVBQUVBLFFBQVEsQ0FBQztRQUV2RSxDQUFDLE1BQU0sSUFBSUcsU0FBUyxLQUFLLENBQUMsRUFBRTtVQUUxQixNQUFNaEIsR0FBRyxHQUFHLElBQUlDLEtBQUssQ0FBQyxDQUFDO1VBQ3ZCRCxHQUFHLENBQUNFLEdBQUcsR0FBRyxnQkFBZ0I7VUFDMUJGLEdBQUcsQ0FBQ0csTUFBTSxHQUFHLFlBQVk7WUFDdkJRLEdBQUcsQ0FBQ1MsU0FBUyxDQUFDcEIsR0FBRyxFQUFFaUIsQ0FBQyxFQUFFQyxDQUFDLEVBQUVMLFFBQVEsRUFBRUEsUUFBUSxDQUFDO1VBQzlDLENBQUM7VUFDRDtRQUNGLENBQUMsTUFBTTtVQUVMLE1BQU1iLEdBQUcsR0FBRyxJQUFJQyxLQUFLLENBQUMsQ0FBQztVQUN2QkQsR0FBRyxDQUFDRSxHQUFHLEdBQUcsYUFBYTtVQUN2QkYsR0FBRyxDQUFDcUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO1VBQzNCdEIsR0FBRyxDQUFDRyxNQUFNLEdBQUcsWUFBWTtZQUN2QlEsR0FBRyxDQUFDUyxTQUFTLENBQUNwQixHQUFHLEVBQUVpQixDQUFDLEVBQUVDLENBQUMsRUFBRUwsUUFBUSxFQUFFQSxRQUFRLENBQUM7VUFDOUMsQ0FBQztRQUNIO1FBQ0FGLEdBQUcsQ0FBQ1ksUUFBUSxDQUFDTixDQUFDLEVBQUVDLENBQUMsRUFBRUwsUUFBUSxFQUFFQSxRQUFRLENBQUM7TUFFeEM7SUFDRjtFQUNGO0VBR0FkLFdBQVdBLENBQUN5QixLQUFLLEVBQUU7SUFDakJBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDdEIsTUFBTWQsR0FBRyxHQUFHLElBQUksQ0FBQ2YsTUFBTSxDQUFDZ0IsVUFBVSxDQUFDLElBQUksQ0FBQztJQUN4QyxNQUFNYyxLQUFLLEdBQUcsRUFBRTtJQUVoQixJQUFJRixLQUFLLENBQUNHLEdBQUcsS0FBSyxXQUFXLEVBQUU7TUFDN0IsSUFBSSxDQUFDdEIsTUFBTSxJQUFJcUIsS0FBSztJQUN0QixDQUFDLE1BQU0sSUFBSUYsS0FBSyxDQUFDRyxHQUFHLEtBQUssWUFBWSxFQUFFO01BQ3JDLElBQUksQ0FBQ3RCLE1BQU0sSUFBSXFCLEtBQUs7SUFDdEIsQ0FBQyxNQUFNLElBQUlGLEtBQUssQ0FBQ0csR0FBRyxLQUFLLFNBQVMsRUFBRTtNQUNsQyxJQUFJLENBQUNyQixNQUFNLElBQUlvQixLQUFLO0lBQ3RCLENBQUMsTUFBTSxJQUFJRixLQUFLLENBQUNHLEdBQUcsS0FBSyxXQUFXLEVBQUU7TUFDcEMsSUFBSSxDQUFDckIsTUFBTSxJQUFJb0IsS0FBSztJQUN0QjtJQUVBZixHQUFHLENBQUNpQixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUNoQyxNQUFNLENBQUNpQyxLQUFLLEVBQUUsSUFBSSxDQUFDakMsTUFBTSxDQUFDa0MsTUFBTSxDQUFDO0lBQzFEbkIsR0FBRyxDQUFDUyxTQUFTLENBQUMsSUFBSSxDQUFDcEIsR0FBRyxFQUFFLElBQUksQ0FBQ0ssTUFBTSxFQUFFLElBQUksQ0FBQ0MsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDekQsSUFBSSxDQUFDVCxTQUFTLENBQUMsQ0FBQztFQUNsQjtBQUNGO0FBR0EsK0RBQWVILEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8tbWF6ZS1nYW1lLy4vc3JjL3NjcmlwdHMvbWFwLmpzP2Y1NmQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBNYXAge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmNyZWF0ZU1hcCA9IHRoaXMuY3JlYXRlTWFwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3ZlRWxlbWVudCA9IHRoaXMubW92ZUVsZW1lbnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaW1nLnNyYyA9ICcxLndlYnAnO1xuICAgIHRoaXMuaW1nLm9ubG9hZCA9IHRoaXMuaGFuZGxlSW1hZ2VMb2FkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5pbWFnZVggPSAyNDA7XG4gICAgdGhpcy5pbWFnZVkgPSAyO1xuICAgIHRoaXMuY3JlYXRlTWFwKCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMubW92ZUVsZW1lbnQpO1xuXG4gIH1cblxuXG4gIGhhbmRsZUltYWdlTG9hZCgpIHtcbiAgICB0aGlzLmNyZWF0ZU1hcCgpO1xuICB9XG4gIGNyZWF0ZU1hcCgpIHtcbiAgICBjb25zdCBtYXBjb250YWluZXIgPSB0aGlzLmNhbnZhc1xuICAgIC8vMSA9PiB3YWxsIC8vMD0+IHBhdGgvLyAyPT50YXJnZXQgLy8zID0+c3RhcnQgcG9pbnQgND0+ZW5lbXlcbiAgICBsZXQgbWFwID0gW1xuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDMsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDAsIDAsIDAsIDAsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDIsIDFdLFxuICAgICAgWzEsIDAsIDEsIDEsIDAsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDFdLFxuICAgICAgWzEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDQsIDAsIDAsIDAsIDAsIDFdLFxuICAgICAgWzEsIDAsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDFdLFxuICAgICAgWzEsIDAsIDAsIDAsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDFdLFxuICAgICAgWzEsIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDFdLFxuICAgICAgWzEsIDAsIDAsIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDFdLFxuICAgICAgWzEsIDAsIDEsIDEsIDEsIDAsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDFdLFxuICAgICAgWzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDAsIDFdLFxuICAgICAgWzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDFdLFxuICAgICAgWzEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDFdLFxuICAgICAgWzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdXG5cbiAgICBdO1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29uc3QgY2VsbFNpemUgPSA0MDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE1OyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTU7IGorKykge1xuICAgICAgICBjb25zdCBjZWxsVmFsdWUgPSBtYXBbaV1bal07XG5cbiAgICAgICAgY29uc3QgeCA9IGogKiBjZWxsU2l6ZTtcbiAgICAgICAgY29uc3QgeSA9IGkgKiBjZWxsU2l6ZTtcblxuICAgICAgICBpZiAoY2VsbFZhbHVlID09PSAwKSB7XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjZWxsVmFsdWUgPT09IDEpIHtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNBQkVFRDcnO1xuICAgICAgICB9IGVsc2UgaWYgKGNlbGxWYWx1ZSA9PT0gMykge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsIHRoaXMuaW1hZ2VYLCB0aGlzLmltYWdlWSwgY2VsbFNpemUsIGNlbGxTaXplKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNlbGxWYWx1ZSA9PT0gMikge1xuXG4gICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgaW1nLnNyYyA9ICdpY2UtY3JlYW0uanBlZydcbiAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIHgsIHksIGNlbGxTaXplLCBjZWxsU2l6ZSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgaW1nLnNyYyA9ICdvbGRtYW4uanBlZydcbiAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgnb2xkbWFuJylcbiAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIHgsIHksIGNlbGxTaXplLCBjZWxsU2l6ZSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjdHguZmlsbFJlY3QoeCwgeSwgY2VsbFNpemUsIGNlbGxTaXplKTtcblxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuXG4gIG1vdmVFbGVtZW50KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnN0IHNwZWVkID0gMTA7XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgdGhpcy5pbWFnZVggLT0gc3BlZWQ7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgdGhpcy5pbWFnZVggKz0gc3BlZWQ7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgdGhpcy5pbWFnZVkgLT0gc3BlZWQ7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICB0aGlzLmltYWdlWSArPSBzcGVlZDtcbiAgICB9XG5cbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsIHRoaXMuaW1hZ2VYLCB0aGlzLmltYWdlWSwgNDAsIDQwKTtcbiAgICB0aGlzLmNyZWF0ZU1hcCgpO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTWFwO1xuXG5cbiJdLCJuYW1lcyI6WyJNYXAiLCJjb25zdHJ1Y3RvciIsImNhbnZhcyIsImNyZWF0ZU1hcCIsImJpbmQiLCJtb3ZlRWxlbWVudCIsImltZyIsIkltYWdlIiwic3JjIiwib25sb2FkIiwiaGFuZGxlSW1hZ2VMb2FkIiwiaW1hZ2VYIiwiaW1hZ2VZIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFwY29udGFpbmVyIiwibWFwIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNlbGxTaXplIiwiaSIsImoiLCJjZWxsVmFsdWUiLCJ4IiwieSIsImZpbGxTdHlsZSIsImRyYXdJbWFnZSIsImNsYXNzTGlzdCIsImFkZCIsImZpbGxSZWN0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNwZWVkIiwia2V5IiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/map.js\n");

/***/ }),

/***/ "./src/scripts/timer.js":
/*!******************************!*\
  !*** ./src/scripts/timer.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Timer {\n  constructor() {\n    this.remainingSeconds = 60;\n    this.timerElement = document.getElementById('time');\n    this.timerId = null;\n  }\n  startTimer() {\n    this.timerId = setInterval(() => {\n      this.remainingSeconds--;\n      this.timerElement.textContent = `Timer: ${this.remainingSeconds} seconds`;\n      if (this.remainingSeconds === 0) {\n        this.stopTimer();\n        alert('Time is up!');\n      }\n    }, 1000);\n  }\n  stopTimer() {\n    clearInterval(this.timerId);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90aW1lci5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsS0FBSyxDQUFDO0VBQ1JDLFdBQVdBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUcsRUFBRTtJQUMxQixJQUFJLENBQUNDLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsTUFBTSxDQUFDO0lBQ25ELElBQUksQ0FBQ0MsT0FBTyxHQUFHLElBQUk7RUFDckI7RUFFQUMsVUFBVUEsQ0FBQSxFQUFHO0lBQ1gsSUFBSSxDQUFDRCxPQUFPLEdBQUdFLFdBQVcsQ0FBQyxNQUFNO01BQy9CLElBQUksQ0FBQ04sZ0JBQWdCLEVBQUU7TUFDdkIsSUFBSSxDQUFDQyxZQUFZLENBQUNNLFdBQVcsR0FBSSxVQUFTLElBQUksQ0FBQ1AsZ0JBQWlCLFVBQVM7TUFFekUsSUFBSSxJQUFJLENBQUNBLGdCQUFnQixLQUFLLENBQUMsRUFBRTtRQUMvQixJQUFJLENBQUNRLFNBQVMsQ0FBQyxDQUFDO1FBQ2hCQyxLQUFLLENBQUMsYUFBYSxDQUFDO01BQ3RCO0lBQ0YsQ0FBQyxFQUFFLElBQUksQ0FBQztFQUNWO0VBRUFELFNBQVNBLENBQUEsRUFBRztJQUNWRSxhQUFhLENBQUMsSUFBSSxDQUFDTixPQUFPLENBQUM7RUFDN0I7QUFDRjtBQUVGLCtEQUFlTixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLW1hemUtZ2FtZS8uL3NyYy9zY3JpcHRzL3RpbWVyLmpzPzE1YTciXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGltZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5yZW1haW5pbmdTZWNvbmRzID0gNjA7XG4gICAgICB0aGlzLnRpbWVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lJyk7XG4gICAgICB0aGlzLnRpbWVySWQgPSBudWxsO1xuICAgIH1cbiAgXG4gICAgc3RhcnRUaW1lcigpIHtcbiAgICAgIHRoaXMudGltZXJJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5yZW1haW5pbmdTZWNvbmRzLS07XG4gICAgICAgIHRoaXMudGltZXJFbGVtZW50LnRleHRDb250ZW50ID0gYFRpbWVyOiAke3RoaXMucmVtYWluaW5nU2Vjb25kc30gc2Vjb25kc2A7XG4gIFxuICAgICAgICBpZiAodGhpcy5yZW1haW5pbmdTZWNvbmRzID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5zdG9wVGltZXIoKTtcbiAgICAgICAgICBhbGVydCgnVGltZSBpcyB1cCEnKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICBcbiAgICBzdG9wVGltZXIoKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XG4gICAgfVxuICB9XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVyO1xuXG5cblxuIl0sIm5hbWVzIjpbIlRpbWVyIiwiY29uc3RydWN0b3IiLCJyZW1haW5pbmdTZWNvbmRzIiwidGltZXJFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRpbWVySWQiLCJzdGFydFRpbWVyIiwic2V0SW50ZXJ2YWwiLCJ0ZXh0Q29udGVudCIsInN0b3BUaW1lciIsImFsZXJ0IiwiY2xlYXJJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/timer.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8tbWF6ZS1nYW1lLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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