"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/favorites",{

/***/ "./components/Guides.tsx":
/*!*******************************!*\
  !*** ./components/Guides.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Guides; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Guide */ \"./components/Guide.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  grid-gap: 3rem;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\nvar GuideGrid = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c = GuideGrid;\nfunction Guides(param) {\n    var guides = param.guides;\n    var _this = this;\n    return(// TODO: Fix this error\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GuideGrid, {\n        children: guides ? guides.map(function(guide) {\n            return guide && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Guide__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                guide: guide\n            }, guide === null || guide === void 0 ? void 0 : guide.id, false, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guides.tsx\",\n                lineNumber: 18,\n                columnNumber: 40\n            }, _this);\n        }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"There are no guides\"\n        }, void 0, false, {\n            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guides.tsx\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guides.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this));\n};\n_c1 = Guides;\nvar _c, _c1;\n$RefreshReg$(_c, \"GuideGrid\");\n$RefreshReg$(_c1, \"Guides\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0d1aWRlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFJNkIsQ0FJN0I7Ozs7Ozs7O0FBUjJCO0FBQ1c7QUFHdEMsR0FBSyxDQUFDRSxTQUFTLEdBQUdELDZEQUFVO0tBQXRCQyxTQUFTO0FBUUEsUUFBUSxDQUFDRSxNQUFNLENBQUMsS0FBb0MsRUFBRSxDQUFDO1FBQXJDQyxNQUFNLEdBQVIsS0FBb0MsQ0FBbENBLE1BQU07O0lBQ3JDLE1BQU0sQ0FDSixFQUF1QjtnRkFDdEJILFNBQVM7a0JBQ1BHLE1BQU0sR0FDTEEsTUFBTSxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxLQUFLO1lBQUtBLE1BQU0sQ0FBTkEsS0FBSyxnRkFBS1AsOENBQUs7Z0JBQWlCTyxLQUFLLEVBQUVBLEtBQUs7ZUFBdkJBLEtBQUssYUFBTEEsS0FBSyxjQUFMQSxJQUFJLENBQUpBLENBQVMsR0FBVEEsS0FBSyxDQUFFQyxFQUFFOzs7Ozt5RkFFbkRMLENBQUc7c0JBQUMsQ0FBbUI7Ozs7Ozs7Ozs7O0FBSWhDLENBQUM7TUFYdUJDLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HdWlkZXMudHN4P2JjZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEd1aWRlIGZyb20gXCIuL0d1aWRlXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgR3VpZGUgYXMgR3VpZGVRdWVyeVR5cGUgfSBmcm9tIFwiLi4vdHlwZXMvZ2VuZXJhdGVkLXF1ZXJpZXNcIjtcblxuY29uc3QgR3VpZGVHcmlkID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgZ3JpZC1nYXA6IDNyZW07XG5gO1xuXG50eXBlIEd1aWRlVHlwZSA9IEd1aWRlUXVlcnlUeXBlIHwgbnVsbCB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3VpZGVzKHsgZ3VpZGVzIH06IHsgZ3VpZGVzPzogR3VpZGVUeXBlW10gfSkge1xuICByZXR1cm4gKFxuICAgIC8vIFRPRE86IEZpeCB0aGlzIGVycm9yXG4gICAgPEd1aWRlR3JpZD5cbiAgICAgIHtndWlkZXMgPyAoXG4gICAgICAgIGd1aWRlcy5tYXAoKGd1aWRlKSA9PiBndWlkZSAmJiA8R3VpZGUga2V5PXtndWlkZT8uaWR9IGd1aWRlPXtndWlkZX0gLz4pXG4gICAgICApIDogKFxuICAgICAgICA8ZGl2PlRoZXJlIGFyZSBubyBndWlkZXM8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9HdWlkZUdyaWQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiR3VpZGUiLCJzdHlsZWQiLCJHdWlkZUdyaWQiLCJkaXYiLCJHdWlkZXMiLCJndWlkZXMiLCJtYXAiLCJndWlkZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Guides.tsx\n");

/***/ })

});