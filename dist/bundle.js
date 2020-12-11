/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Game.ts":
/*!*********************!*
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => /* binding */ Game
/* harmony export */ });
class Game {
    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    constructor(canvasID) {
        // Create the app and start the update loop
        let canvas = document.getElementById(canvasID);
        let app = new pc.Application(canvas, {});
        // Set the canvas to fill the window and automatically change resolution to be the same as the canvas size
        app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
        app.setCanvasResolution(pc.RESOLUTION_AUTO);
        window.addEventListener("resize", function () {
            app.resizeCanvas(canvas.width, canvas.height);
        });
        // Load a texture
        let url = "assets/textures/circle.png";
        app.assets.loadFromUrl(url, "texture", function (err, asset) {
            app.start();
            // Camera
            let camera = new pc.Entity("camera");
            camera.addComponent("camera" /* camera */, {
                fov: 75,
                nearClip: 0.1,
                farClip: 500,
                clearColor: new pc.Color(0, 0, 0),
                frustumCulling: false
            });
            camera.setEulerAngles(-10, 0, 0);
            camera.setPosition(0, 3, 5);
            app.root.addChild(camera);
            // Floor
            let mat = new pc.StandardMaterial();
            mat.diffuse.set(0, 0, 0);
            mat.emissive.set(0.75, 1, 1);
            mat.useLighting = false;
            mat.update();
            let floor = new pc.Entity();
            floor.addComponent("model" /* model */, {
                type: "plane" /* plane */,
                material: mat,
                castShadows: false,
                receiveShadows: false,
            });
            floor.setLocalScale(4, 1, 4);
            app.root.addChild(floor);
            // Circle
            mat = new pc.StandardMaterial();
            mat.blendType = pc.BLEND_NORMAL;
            mat.diffuse.set(0, 0, 0);
            mat.emissive.fromString("#99cccc");
            mat.opacityMap = asset.resource;
            mat.useLighting = false;
            mat.update();
            let circle = new pc.Entity();
            circle.addComponent("model" /* model */, {
                type: "plane" /* plane */,
                material: mat,
                castShadows: false,
                receiveShadows: false,
            });
            circle.setPosition(0, 0.015, 0);
            circle.setLocalScale(0.75, 1, 0.75);
            app.root.addChild(circle);
        });
    }
    /**
     * (RO) pc.Application
     */
    static get app() { return Game._app; }
}
window.addEventListener("DOMContentLoaded", () => {
    new Game("renderCanvas");
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/Game.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map