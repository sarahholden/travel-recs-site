"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Guide.tsx":
/*!******************************!*\
  !*** ./components/Guide.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Guide; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Guide(param) {\n    var guide = param.guide;\n    var ref, ref1;\n    var _altText;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/guide/\".concat(guide.id),\n                    children: guide.name\n                }, void 0, false, {\n                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guide.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guide.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            guide.location_info && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: guide.location_info\n            }, void 0, false, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guide.tsx\",\n                lineNumber: 12,\n                columnNumber: 31\n            }, this),\n            ((ref = guide.image) === null || ref === void 0 ? void 0 : ref.publicUrlTransformed) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: guide.image.publicUrlTransformed,\n                alt: (_altText = guide.altText) !== null && _altText !== void 0 ? _altText : \"\"\n            }, void 0, false, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guide.tsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this),\n            (guide === null || guide === void 0 ? void 0 : (ref1 = guide.image) === null || ref1 === void 0 ? void 0 : ref1.publicUrlTransformed) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: guide.image.publicUrlTransformed,\n                alt: \"asdf\"\n            }, void 0, false, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guide.tsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guide.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n};\n_c = Guide;\nvar _c;\n$RefreshReg$(_c, \"Guide\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0d1aWRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEI7QUFLYixRQUFRLENBQUNDLEtBQUssQ0FBQyxLQUFxQixFQUFFLENBQUM7UUFBdEJDLEtBQUssR0FBUCxLQUFxQixDQUFuQkEsS0FBSztRQU85QkEsR0FBVyxFQUtYQSxJQUFZO1FBSnNDQSxRQUFhO0lBUHBFLE1BQU0sNkVBQ0hDLENBQUc7O3dGQUNEQyxDQUFFO3NHQUNBSixrREFBSTtvQkFBQ0ssSUFBSSxFQUFHLENBQU8sU0FBVyxPQUFUSCxLQUFLLENBQUNJLEVBQUU7OEJBQUtKLEtBQUssQ0FBQ0ssSUFBSTs7Ozs7Ozs7Ozs7WUFFOUNMLEtBQUssQ0FBQ00sYUFBYSxnRkFBS0MsQ0FBQzswQkFBRVAsS0FBSyxDQUFDTSxhQUFhOzs7Ozs7Y0FDOUNOLEdBQVcsR0FBWEEsS0FBSyxDQUFDUSxLQUFLLGNBQVhSLEdBQVcsY0FBWEEsSUFBSSxDQUFKQSxDQUFpQyxHQUFqQ0EsR0FBVyxDQUFFUyxvQkFBb0IsaUZBQy9CQyxDQUFHO2dCQUFDQyxHQUFHLEVBQUVYLEtBQUssQ0FBQ1EsS0FBSyxDQUFDQyxvQkFBb0I7Z0JBQUVHLEdBQUcsR0FBRVosUUFBYSxHQUFiQSxLQUFLLENBQUNhLE9BQU8sY0FBYmIsUUFBYSxjQUFiQSxRQUFhLEdBQUksQ0FBRTs7Ozs7O2FBSXJFQSxLQUFLLGFBQUxBLEtBQUssY0FBTEEsSUFBSSxDQUFKQSxDQUFZLElBQVpBLElBQVksR0FBWkEsS0FBSyxDQUFFUSxLQUFLLGNBQVpSLElBQVksY0FBWkEsSUFBSSxDQUFKQSxDQUFZLEdBQVpBLElBQVksQ0FBRVMsb0JBQW9CLGlGQUNoQ0MsQ0FBRztnQkFBQ0MsR0FBRyxFQUFFWCxLQUFLLENBQUNRLEtBQUssQ0FBQ0Msb0JBQW9CO2dCQUFFRyxHQUFHLEVBQUMsQ0FBTTs7Ozs7Ozs7Ozs7O0FBSTlELENBQUM7S0FqQnVCYixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR3VpZGUudHN4P2M2MmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgR3VpZGUgYXMgZ3VpZGVUeXBlIH0gZnJvbSBcIi4uL3R5cGVzL2dlbmVyYXRlZC1xdWVyaWVzXCI7XG5cbnR5cGUgR3VpZGVQcm9wcyA9IHsgZ3VpZGU6IGd1aWRlVHlwZSB9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHdWlkZSh7IGd1aWRlIH06IEd1aWRlUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPlxuICAgICAgICA8TGluayBocmVmPXtgL2d1aWRlLyR7Z3VpZGUuaWR9YH0+e2d1aWRlLm5hbWV9PC9MaW5rPlxuICAgICAgPC9oMj5cbiAgICAgIHtndWlkZS5sb2NhdGlvbl9pbmZvICYmIDxwPntndWlkZS5sb2NhdGlvbl9pbmZvfTwvcD59XG4gICAgICB7Z3VpZGUuaW1hZ2U/LnB1YmxpY1VybFRyYW5zZm9ybWVkICYmIChcbiAgICAgICAgPGltZyBzcmM9e2d1aWRlLmltYWdlLnB1YmxpY1VybFRyYW5zZm9ybWVkfSBhbHQ9e2d1aWRlLmFsdFRleHQgPz8gXCJcIn0gLz5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBUT0RPOiBXaGF0IGlzIHRoZSBjbGVhbmVzdCB3YXkgdG8gd3JpdGUgdGhpcz8gICovfVxuICAgICAge2d1aWRlPy5pbWFnZT8ucHVibGljVXJsVHJhbnNmb3JtZWQgJiYgKFxuICAgICAgICA8aW1nIHNyYz17Z3VpZGUuaW1hZ2UucHVibGljVXJsVHJhbnNmb3JtZWR9IGFsdD1cImFzZGZcIiAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwiR3VpZGUiLCJndWlkZSIsImRpdiIsImgyIiwiaHJlZiIsImlkIiwibmFtZSIsImxvY2F0aW9uX2luZm8iLCJwIiwiaW1hZ2UiLCJwdWJsaWNVcmxUcmFuc2Zvcm1lZCIsImltZyIsInNyYyIsImFsdCIsImFsdFRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Guide.tsx\n");

/***/ })

});