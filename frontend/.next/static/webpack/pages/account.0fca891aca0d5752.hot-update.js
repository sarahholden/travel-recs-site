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

/***/ "./pages/account.tsx":
/*!***************************!*\
  !*** ./pages/account.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AccountPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/User */ \"./hooks/User.ts\");\n\n\n\nvar _s = $RefreshSig$();\nfunction AccountPage() {\n    _s();\n    var user = (0,_hooks_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    if (!user) {\n        void next_router__WEBPACK_IMPORTED_MODULE_1___default().push({\n            pathname: '/signin'\n        });\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Name: \",\n                    user.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/pages/account.tsx\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Email: \",\n                    user.email\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/pages/account.tsx\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/pages/account.tsx\",\n        lineNumber: 11,\n        columnNumber: 10\n    }, this);\n};\n_s(AccountPage, \"BPnln+wUpxLjLAxQmw7xYz9C+QI=\", false, function() {\n    return [\n        _hooks_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = AccountPage;\nvar _c;\n$RefreshReg$(_c, \"AccountPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hY2NvdW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdDO0FBQ0c7O0FBRXBCLFFBQVEsQ0FBQ0UsV0FBVyxHQUFHLENBQUM7O0lBQ3JDLEdBQUssQ0FBQ0MsSUFBSSxHQUFHRix1REFBTztJQUNwQixFQUFFLEdBQUdFLElBQUksRUFBRSxDQUFDO1FBQ1YsSUFBSSxDQUFDSCx1REFBVyxDQUFDLENBQUNLO1lBQUFBLFFBQVEsRUFBRSxDQUFTO1FBQUEsQ0FBQztRQUN0QyxNQUFNLENBQUMsSUFBSTtJQUNiLENBQUM7SUFFRCxNQUFNLDZFQUFFQyxDQUFHOzt3RkFDUkMsQ0FBQzs7b0JBQUMsQ0FBTTtvQkFBQ0osSUFBSSxDQUFDSyxJQUFJOzs7Ozs7O3dGQUNsQkQsQ0FBQzs7b0JBQUMsQ0FBTztvQkFBQ0osSUFBSSxDQUFDTSxLQUFLOzs7Ozs7Ozs7Ozs7O0FBRXpCLENBQUM7R0FYdUJQLFdBQVc7O1FBQ3BCRCxtREFBTzs7O0tBREVDLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWNjb3VudC50c3g/OWE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHVzZVVzZXIgZnJvbSBcIi4uL2hvb2tzL1VzZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2NvdW50UGFnZSgpIHtcbiAgY29uc3QgdXNlciA9IHVzZVVzZXIoKTtcbiAgaWYgKCF1c2VyKSB7XG4gICAgdm9pZCBSb3V0ZXIucHVzaCh7cGF0aG5hbWU6ICcvc2lnbmluJ30pXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gPGRpdj5cbiAgICA8cD5OYW1lOiB7dXNlci5uYW1lfTwvcD5cbiAgICA8cD5FbWFpbDoge3VzZXIuZW1haWx9PC9wPlxuICA8L2Rpdj5cbn1cblxuIl0sIm5hbWVzIjpbIlJvdXRlciIsInVzZVVzZXIiLCJBY2NvdW50UGFnZSIsInVzZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJkaXYiLCJwIiwibmFtZSIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/account.tsx\n");

/***/ })

});