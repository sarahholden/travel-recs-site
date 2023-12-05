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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Guides; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  query ALL_GUIDES_QUERY {\\n    allGuides {\\n      id\\n      name\\n      location_info\\n      status\\n      destinations {\\n        name\\n        hover_description\\n        photo {\\n          image {\\n            publicUrlTransformed\\n          }\\n        }\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\nvar _s = $RefreshSig$();\nvar ALL_GUIDES_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_templateObject());\nfunction Guides() {\n    _s();\n    var ref = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(ALL_GUIDES_QUERY), _data = ref.data, data = _data === void 0 ? guides : _data, error = ref.error, loading = ref.loading;\n    console.log(data, error, loading);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guides.tsx\",\n        lineNumber: 28,\n        columnNumber: 23\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: error.message\n    }, void 0, false, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guides.tsx\",\n        lineNumber: 29,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data\n    }, void 0, false, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guides.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n};\n_s(Guides, \"GZyz+ax/Run+ruy4DfpBMz90bRg=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery\n    ];\n});\n_c = Guides;\nvar _c;\n$RefreshReg$(_c, \"Guides\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0d1aWRlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFHNkIsQ0FrQjdCOzs7Ozs7OztBQXJCeUM7QUFDWjs7QUFFN0IsR0FBSyxDQUFDRSxnQkFBZ0IsR0FBR0QsdURBQUc7QUFxQmIsUUFBUSxDQUFDRSxNQUFNLEdBQUcsQ0FBQzs7SUFDaEMsR0FBSyxDQUFtQ0gsR0FBMEIsR0FBMUJBLHdEQUFRLENBQUNFLGdCQUFnQixXQUF6QkYsR0FBMEIsQ0FBM0RJLElBQUksRUFBSkEsSUFBSSxzQkFBR0MsTUFBTSxVQUFFQyxLQUFLLEdBQWFOLEdBQTBCLENBQTVDTSxLQUFLLEVBQUVDLE9BQU8sR0FBSVAsR0FBMEIsQ0FBckNPLE9BQU87SUFDcENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxJQUFJLEVBQUVFLEtBQUssRUFBRUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsRUFBRSxFQUFFQSxPQUFPLEVBQUUsTUFBTSw2RUFBRUcsQ0FBQztrQkFBQyxDQUFVOzs7Ozs7SUFDakMsRUFBRSxFQUFFSixLQUFLLEVBQUUsTUFBTSw2RUFBRUksQ0FBQztrQkFBRUosS0FBSyxDQUFDSyxPQUFPOzs7Ozs7SUFDbkMsTUFBTSw2RUFDSEMsQ0FBRztrQkFDRFIsSUFBSTs7Ozs7O0FBR1gsQ0FBQztHQVZ1QkQsTUFBTTs7UUFDWUgsb0RBQVE7OztLQUQxQkcsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0d1aWRlcy50c3g/YmNkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcblxuY29uc3QgQUxMX0dVSURFU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgQUxMX0dVSURFU19RVUVSWSB7XG4gICAgYWxsR3VpZGVzIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBsb2NhdGlvbl9pbmZvXG4gICAgICBzdGF0dXNcbiAgICAgIGRlc3RpbmF0aW9ucyB7XG4gICAgICAgIG5hbWVcbiAgICAgICAgaG92ZXJfZGVzY3JpcHRpb25cbiAgICAgICAgcGhvdG8ge1xuICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEd1aWRlcygpIHtcbiAgY29uc3Qge2RhdGEgPSBndWlkZXMsIGVycm9yLCBsb2FkaW5nfSA9IHVzZVF1ZXJ5KEFMTF9HVUlERVNfUVVFUlkpO1xuICBjb25zb2xlLmxvZyhkYXRhLCBlcnJvciwgbG9hZGluZyk7XG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD5cbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPlxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7ZGF0YX1cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsImdxbCIsIkFMTF9HVUlERVNfUVVFUlkiLCJHdWlkZXMiLCJkYXRhIiwiZ3VpZGVzIiwiZXJyb3IiLCJsb2FkaW5nIiwiY29uc29sZSIsImxvZyIsInAiLCJtZXNzYWdlIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Guides.tsx\n");

/***/ })

});