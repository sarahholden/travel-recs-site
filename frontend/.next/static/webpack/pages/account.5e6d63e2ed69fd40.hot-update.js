"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/account",{

/***/ "./components/ErrorMessage.tsx":
/*!*************************************!*\
  !*** ./components/ErrorMessage.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 2rem;\\n  background: white;\\n  margin: 2rem 0;\\n  border: 1px solid rgba(0, 0, 0, 0.05);\\n  border-left: 5px solid red;\\n  p {\\n    margin: 0;\\n    font-weight: 100;\\n  }\\n  strong {\\n    margin-right: 1rem;\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\nvar ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c = ErrorStyles;\nvar DisplayError = function(param) {\n    var error = param.error;\n    if (!error || !error.message) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ErrorStyles, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            \"data-test\": \"graphql-error\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: \"Shoot!\"\n                }, void 0, false, {\n                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/ErrorMessage.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, _this),\n                error.message.replace('GraphQL error: ', '')\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/ErrorMessage.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/ErrorMessage.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = DisplayError;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DisplayError);\nvar _c, _c1;\n$RefreshReg$(_c, \"ErrorStyles\");\n$RefreshReg$(_c1, \"DisplayError\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQU0rQixDQWEvQjs7Ozs7Ozs7QUFuQnNDO0FBQ2I7QUFLekIsR0FBSyxDQUFDRSxXQUFXLEdBQUdGLDZEQUFVO0tBQXhCRSxXQUFXO0FBbUJqQixHQUFLLENBQUNFLFlBQVksR0FBRyxRQUFRLFFBQTBCLENBQUM7UUFBaENDLEtBQUssU0FBTEEsS0FBSztJQUMzQixFQUFFLEdBQUdBLEtBQUssS0FBS0EsS0FBSyxDQUFDQyxPQUFPLEVBQUUsTUFBTSxDQUFDLElBQUk7SUFFekMsTUFBTSw2RUFDSEosV0FBVzs4RkFDVEssQ0FBQztZQUFDQyxDQUFTLFlBQUMsQ0FBZTs7NEZBQ3pCQyxDQUFNOzhCQUFDLENBQU07Ozs7OztnQkFDYkosS0FBSyxDQUFDQyxPQUFPLENBQUNJLE9BQU8sQ0FBQyxDQUFpQixrQkFBRSxDQUFFOzs7Ozs7Ozs7Ozs7QUFJcEQsQ0FBQztNQVhLTixZQUFZO0FBYWxCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UudHN4PzM1ODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBBcG9sbG9FcnJvciB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRNdXRhdGlvblJlc3VsdCwgVXNlckF1dGhlbnRpY2F0aW9uV2l0aFBhc3N3b3JkRmFpbHVyZSB9IGZyb20gJy4uL3R5cGVzL2dlbmVyYXRlZC1xdWVyaWVzJztcblxuY29uc3QgRXJyb3JTdHlsZXMgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAycmVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiAycmVtIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgfVxuICBzdHJvbmcge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgfVxuYDtcblxudHlwZSBEaXNwbGF5RXJyb3JQcm9wcyA9IHtcbiAgZXJyb3I6IEFwb2xsb0Vycm9yIHwgVXNlckF1dGhlbnRpY2F0aW9uV2l0aFBhc3N3b3JkRmFpbHVyZSB8IFJlc2V0UGFzc3dvcmRNdXRhdGlvblJlc3VsdFxufVxuXG5jb25zdCBEaXNwbGF5RXJyb3IgPSAoeyBlcnJvciB9OiBEaXNwbGF5RXJyb3JQcm9wcykgPT4ge1xuICBpZiAoIWVycm9yIHx8ICFlcnJvci5tZXNzYWdlKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxFcnJvclN0eWxlcz5cbiAgICAgIDxwIGRhdGEtdGVzdD1cImdyYXBocWwtZXJyb3JcIj5cbiAgICAgICAgPHN0cm9uZz5TaG9vdCE8L3N0cm9uZz5cbiAgICAgICAge2Vycm9yLm1lc3NhZ2UucmVwbGFjZSgnR3JhcGhRTCBlcnJvcjogJywgJycpfVxuICAgICAgPC9wPlxuICAgIDwvRXJyb3JTdHlsZXM+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5RXJyb3I7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiUmVhY3QiLCJFcnJvclN0eWxlcyIsImRpdiIsIkRpc3BsYXlFcnJvciIsImVycm9yIiwibWVzc2FnZSIsInAiLCJkYXRhLXRlc3QiLCJzdHJvbmciLCJyZXBsYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ErrorMessage.tsx\n");

/***/ })

});