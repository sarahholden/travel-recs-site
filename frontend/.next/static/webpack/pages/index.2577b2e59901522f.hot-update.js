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

/***/ "./pages/guides.tsx":
/*!**************************!*\
  !*** ./pages/guides.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ guidesPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Guides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Guides */ \"./components/Guides.tsx\");\n/* harmony import */ var _types_generated_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/generated-queries */ \"./types/generated-queries.ts\");\n\n\n\nvar _s = $RefreshSig$();\nfunction guidesPage() {\n    _s();\n    var ref = (0,_types_generated_queries__WEBPACK_IMPORTED_MODULE_2__.useAllGuidesQueryQuery)(), data = ref.data, error = ref.error, loading = ref.loading;\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/pages/guides.tsx\",\n        lineNumber: 6,\n        columnNumber: 23\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: error.message\n    }, void 0, false, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/pages/guides.tsx\",\n        lineNumber: 7,\n        columnNumber: 21\n    }, this);\n    if (!data) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Guides__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            guides: data.allGuides\n        }, void 0, false, {\n            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/pages/guides.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/pages/guides.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n};\n_s(guidesPage, \"h4419N+4baNnVZgOLa9S47cINYk=\", false, function() {\n    return [\n        _types_generated_queries__WEBPACK_IMPORTED_MODULE_2__.useAllGuidesQueryQuery\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ndWlkZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5QztBQUMwQjs7QUFFcEQsUUFBUSxDQUFDRSxVQUFVLEdBQUcsQ0FBQzs7SUFDcEMsR0FBSyxDQUE0QkQsR0FBd0IsR0FBeEJBLGdGQUFzQixJQUEvQ0UsSUFBSSxHQUFxQkYsR0FBd0IsQ0FBakRFLElBQUksRUFBRUMsS0FBSyxHQUFjSCxHQUF3QixDQUEzQ0csS0FBSyxFQUFFQyxPQUFPLEdBQUtKLEdBQXdCLENBQXBDSSxPQUFPO0lBQzVCLEVBQUUsRUFBRUEsT0FBTyxFQUFFLE1BQU0sNkVBQUVDLENBQUM7a0JBQUMsQ0FBVTs7Ozs7O0lBQ2pDLEVBQUUsRUFBRUYsS0FBSyxFQUFFLE1BQU0sNkVBQUVFLENBQUM7a0JBQUVGLEtBQUssQ0FBQ0csT0FBTzs7Ozs7O0lBQ25DLEVBQUUsR0FBR0osSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO0lBRXRCLE1BQU0sNkVBQ0hLLENBQUc7OEZBQ0RSLDBEQUFNO1lBQUNTLE1BQU0sRUFBRU4sSUFBSSxDQUFDTyxTQUFTOzs7Ozs7Ozs7OztBQUdwQyxDQUFDO0dBWHVCUixVQUFVOztRQUNDRCw0RUFBc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ3VpZGVzLnRzeD85MjRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHdWlkZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvR3VpZGVzXCI7XG5pbXBvcnQgeyB1c2VBbGxHdWlkZXNRdWVyeVF1ZXJ5IH0gZnJvbSBcIi4uL3R5cGVzL2dlbmVyYXRlZC1xdWVyaWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGd1aWRlc1BhZ2UoKSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZUFsbEd1aWRlc1F1ZXJ5UXVlcnkoKTtcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPjtcbiAgaWYgKCFkYXRhKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8R3VpZGVzIGd1aWRlcz17ZGF0YS5hbGxHdWlkZXN9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiR3VpZGVzIiwidXNlQWxsR3VpZGVzUXVlcnlRdWVyeSIsImd1aWRlc1BhZ2UiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwicCIsIm1lc3NhZ2UiLCJkaXYiLCJndWlkZXMiLCJhbGxHdWlkZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/guides.tsx\n");

/***/ })

});