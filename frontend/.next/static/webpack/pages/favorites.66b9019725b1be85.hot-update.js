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

/***/ "./components/Favorites.tsx":
/*!**********************************!*\
  !*** ./components/Favorites.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Favorites; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/User */ \"./hooks/User.ts\");\n/* harmony import */ var _types_generated_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/generated-queries */ \"./types/generated-queries.ts\");\n/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SignIn */ \"./components/SignIn.tsx\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Favorites() {\n    var _this = this;\n    _s();\n    var user = (0,_hooks_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    if (!user) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignIn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Favorites.tsx\",\n        lineNumber: 8,\n        columnNumber: 21\n    }, this);\n    var id = user.id;\n    var ref1 = (0,_types_generated_queries__WEBPACK_IMPORTED_MODULE_3__.useGetFavoritesQuery)({\n        variables: {\n            userId: id\n        }\n    }), data = ref1.data, error = ref1.error, loading = ref1.loading;\n    console.log(data, error, loading);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading Spinner\"\n    }, void 0, false, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Favorites.tsx\",\n        lineNumber: 15,\n        columnNumber: 23\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"There was a problem loading this page.\"\n    }, void 0, false, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Favorites.tsx\",\n        lineNumber: 16,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"My Saved Guides\"\n            }, void 0, false, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Favorites.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            (data === null || data === void 0 ? void 0 : data.allFavoritesItems) ? data.allFavoritesItems.map(function(favorite) {\n                {\n                    var ref;\n                    (favorite === null || favorite === void 0 ? void 0 : favorite.guide) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"Test\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: (ref = favorite.guide) === null || ref === void 0 ? void 0 : ref.name\n                            }, void 0, false, {\n                                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Favorites.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, favorite.id, true, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Favorites.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 15\n                    }, _this);\n                }\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"You have no saved guides. Explore all guides\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/guides\",\n                        children: \"here\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Favorites.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this),\n                    \" to plan your next trip.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Favorites.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Favorites, \"Wve6RwvghjhhyLGLqzbANl3D61o=\", false, function() {\n    return [\n        _hooks_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _types_generated_queries__WEBPACK_IMPORTED_MODULE_3__.useGetFavoritesQuery\n    ];\n});\n_c = Favorites;\nvar _c;\n$RefreshReg$(_c, \"Favorites\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zhdm9yaXRlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ087QUFDOEI7QUFDcEM7O0FBRWQsUUFBUSxDQUFDSSxTQUFTLEdBQUcsQ0FBQzs7O0lBQ25DLEdBQUssQ0FBQ0MsSUFBSSxHQUFHSix1REFBTztJQUNwQixFQUFFLEdBQUdJLElBQUksRUFBRSxNQUFNLDZFQUFFRiwrQ0FBTTs7Ozs7SUFDekIsR0FBSyxDQUFHRyxFQUFFLEdBQUtELElBQUksQ0FBWEMsRUFBRTtJQUVWLEdBQUssQ0FBNEJKLElBRS9CLEdBRitCQSw4RUFBb0IsQ0FBQyxDQUFDO1FBQ3JESyxTQUFTLEVBQUUsQ0FBQztZQUFDQyxNQUFNLEVBQUVGLEVBQUU7UUFBQyxDQUFDO0lBQzNCLENBQUMsR0FGT0csSUFBSSxHQUFxQlAsSUFFL0IsQ0FGTU8sSUFBSSxFQUFFQyxLQUFLLEdBQWNSLElBRS9CLENBRllRLEtBQUssRUFBRUMsT0FBTyxHQUFLVCxJQUUvQixDQUZtQlMsT0FBTztJQUc1QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUksRUFBRUMsS0FBSyxFQUFFQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxFQUFFLEVBQUVBLE9BQU8sRUFBRSxNQUFNLDZFQUFFRyxDQUFHO2tCQUFDLENBQWU7Ozs7OztJQUN4QyxFQUFFLEVBQUVKLEtBQUssRUFBRSxNQUFNLDZFQUFFSSxDQUFHO2tCQUFDLENBQXNDOzs7Ozs7SUFFN0QsTUFBTTs7d0ZBRURDLENBQUU7MEJBQUMsQ0FBZTs7Ozs7O2FBQ2xCTixJQUFJLGFBQUpBLElBQUksY0FBSkEsSUFBSSxDQUFKQSxDQUF1QixHQUF2QkEsSUFBSSxDQUFFTyxpQkFBaUIsSUFDdEJQLElBQUksQ0FBQ08saUJBQWlCLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLFFBQVEsRUFBSyxDQUFDO2dCQUN4QyxDQUFDO3dCQUlVQSxHQUFjO3FCQUh2QkEsUUFBUSxhQUFSQSxRQUFRLGNBQVJBLElBQUksQ0FBSkEsQ0FBZSxHQUFmQSxRQUFRLENBQUVDLEtBQUssaUZBQ1pMLENBQUc7OzRCQUFtQixDQUVyQjt3R0FBQ00sQ0FBRTsyQ0FBRUYsR0FBYyxHQUFkQSxRQUFRLENBQUNDLEtBQUssY0FBZEQsR0FBYyxjQUFkQSxJQUFJLENBQUpBLENBQW9CLEdBQXBCQSxHQUFjLENBQUVHLElBQUk7Ozs7Ozs7dUJBRmpCSCxRQUFRLENBQUNaLEVBQUU7Ozs7NkJBSXRCLENBQUM7Z0JBQ0osQ0FBQztZQUNILENBQUMsZ0ZBRUFRLENBQUc7O29CQUFDLENBQ3lDO29CQUFDLENBQUc7Z0dBQy9DZCxrREFBSTt3QkFBQ3NCLElBQUksRUFBQyxDQUFTO2tDQUFDLENBQUk7Ozs7OztvQkFBTyxDQUNsQzs7Ozs7Ozs7O0FBSVIsQ0FBQztHQWxDdUJsQixTQUFTOztRQUNsQkgsbURBQU87UUFJYUMsMEVBQW9COzs7S0FML0JFLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GYXZvcml0ZXMudHN4P2MzYjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHVzZVVzZXIgZnJvbSBcIi4uL2hvb2tzL1VzZXJcIjtcbmltcG9ydCB7IHVzZUdldEZhdm9yaXRlc1F1ZXJ5IH0gZnJvbSBcIi4uL3R5cGVzL2dlbmVyYXRlZC1xdWVyaWVzXCI7XG5pbXBvcnQgU2lnbkluIGZyb20gXCIuL1NpZ25JblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGYXZvcml0ZXMoKSB7XG4gIGNvbnN0IHVzZXIgPSB1c2VVc2VyKCk7XG4gIGlmICghdXNlcikgcmV0dXJuIDxTaWduSW4gLz47XG4gIGNvbnN0IHsgaWQgfSA9IHVzZXI7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlR2V0RmF2b3JpdGVzUXVlcnkoe1xuICAgIHZhcmlhYmxlczogeyB1c2VySWQ6IGlkIH0sXG4gIH0pO1xuICBjb25zb2xlLmxvZyhkYXRhLCBlcnJvciwgbG9hZGluZyk7XG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nIFNwaW5uZXI8L2Rpdj47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+VGhlcmUgd2FzIGEgcHJvYmxlbSBsb2FkaW5nIHRoaXMgcGFnZS48L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgyPk15IFNhdmVkIEd1aWRlczwvaDI+XG4gICAgICB7ZGF0YT8uYWxsRmF2b3JpdGVzSXRlbXMgPyAoXG4gICAgICAgIGRhdGEuYWxsRmF2b3JpdGVzSXRlbXMubWFwKChmYXZvcml0ZSkgPT4ge1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZhdm9yaXRlPy5ndWlkZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtmYXZvcml0ZS5pZH0+XG4gICAgICAgICAgICAgICAgVGVzdFxuICAgICAgICAgICAgICAgIDxoMz57ZmF2b3JpdGUuZ3VpZGU/Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgWW91IGhhdmUgbm8gc2F2ZWQgZ3VpZGVzLiBFeHBsb3JlIGFsbCBndWlkZXN7XCIgXCJ9XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9ndWlkZXNcIj5oZXJlPC9MaW5rPiB0byBwbGFuIHlvdXIgbmV4dCB0cmlwLlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVVzZXIiLCJ1c2VHZXRGYXZvcml0ZXNRdWVyeSIsIlNpZ25JbiIsIkZhdm9yaXRlcyIsInVzZXIiLCJpZCIsInZhcmlhYmxlcyIsInVzZXJJZCIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaDIiLCJhbGxGYXZvcml0ZXNJdGVtcyIsIm1hcCIsImZhdm9yaXRlIiwiZ3VpZGUiLCJoMyIsIm5hbWUiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Favorites.tsx\n");

/***/ })

});