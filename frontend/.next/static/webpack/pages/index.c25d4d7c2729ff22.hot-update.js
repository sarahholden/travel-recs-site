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

/***/ "./components/Guides.tsx":
/*!*******************************!*\
  !*** ./components/Guides.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Guides; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Guide */ \"./components/Guide.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  grid-gap: 3rem;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\nvar GuideGrid = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c = GuideGrid;\nfunction Guides(param) {\n    var guides = param.guides;\n    var _this = this;\n    console.log(guides);\n    return(// TODO: Fix this error\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GuideGrid, {\n        children: guides ? guides.map(function(guide) {\n            return guide && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Guide__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                guide: guide\n            }, guide === null || guide === void 0 ? void 0 : guide.id, false, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guides.tsx\",\n                lineNumber: 22,\n                columnNumber: 40\n            }, _this);\n        }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"There are no guides\"\n        }, void 0, false, {\n            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guides.tsx\",\n            lineNumber: 24,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guides.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this));\n};\n_c1 = Guides;\nvar _c, _c1;\n$RefreshReg$(_c, \"GuideGrid\");\n$RefreshReg$(_c1, \"Guides\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0d1aWRlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFLNkIsQ0FJN0I7Ozs7Ozs7O0FBVDJCO0FBRVc7QUFHdEMsR0FBSyxDQUFDRSxTQUFTLEdBQUdELDZEQUFVO0tBQXRCQyxTQUFTO0FBTUEsUUFBUSxDQUFDRSxNQUFNLENBQUMsS0FJOUIsRUFBRSxDQUFDO1FBSEZDLE1BQU0sR0FEdUIsS0FJOUIsQ0FIQ0EsTUFBTTs7SUFJTkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLE1BQU0sQ0FDSixFQUF1QjtnRkFDdEJILFNBQVM7a0JBQ1BHLE1BQU0sR0FDTEEsTUFBTSxDQUFDRyxHQUFHLENBQUMsUUFBUSxDQUFQQyxLQUFLO1lBQUtBLE1BQU0sQ0FBTkEsS0FBSyxnRkFBS1QsOENBQUs7Z0JBQWlCUyxLQUFLLEVBQUVBLEtBQUs7ZUFBdkJBLEtBQUssYUFBTEEsS0FBSyxjQUFMQSxJQUFJLENBQUpBLENBQVMsR0FBVEEsS0FBSyxDQUFFQyxFQUFFOzs7Ozt5RkFFbkRQLENBQUc7c0JBQUMsQ0FBbUI7Ozs7Ozs7Ozs7O0FBSWhDLENBQUM7TUFoQnVCQyxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR3VpZGVzLnRzeD9iY2RjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHdWlkZSBmcm9tIFwiLi9HdWlkZVwiO1xuaW1wb3J0IHsgdXNlQWxsR3VpZGVzUXVlcnlRdWVyeSB9IGZyb20gXCIuLi90eXBlcy9nZW5lcmF0ZWQtcXVlcmllc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IEd1aWRlIGFzIEd1aWRlVHlwZSB9IGZyb20gXCIuLi90eXBlcy9nZW5lcmF0ZWQtcXVlcmllc1wiO1xuXG5jb25zdCBHdWlkZUdyaWQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICBncmlkLWdhcDogM3JlbTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEd1aWRlcyh7XG4gIGd1aWRlcyxcbn06IHtcbiAgZ3VpZGVzOiBHdWlkZVR5cGVbXSB8IG51bGwgfCB1bmRlZmluZWQ7XG59KSB7XG4gIGNvbnNvbGUubG9nKGd1aWRlcyk7XG4gIHJldHVybiAoXG4gICAgLy8gVE9ETzogRml4IHRoaXMgZXJyb3JcbiAgICA8R3VpZGVHcmlkPlxuICAgICAge2d1aWRlcyA/IChcbiAgICAgICAgZ3VpZGVzLm1hcCgoZ3VpZGUpID0+IGd1aWRlICYmIDxHdWlkZSBrZXk9e2d1aWRlPy5pZH0gZ3VpZGU9e2d1aWRlfSAvPilcbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXY+VGhlcmUgYXJlIG5vIGd1aWRlczwvZGl2PlxuICAgICAgKX1cbiAgICA8L0d1aWRlR3JpZD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJHdWlkZSIsInN0eWxlZCIsIkd1aWRlR3JpZCIsImRpdiIsIkd1aWRlcyIsImd1aWRlcyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJndWlkZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Guides.tsx\n");

/***/ })

});