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

/***/ "./components/Guide.tsx":
/*!******************************!*\
  !*** ./components/Guide.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Guide; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _types_generated_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/generated-queries */ \"./types/generated-queries.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  .image-wrap {\\n    display: block;\\n    width: 100%;\\n    padding-bottom: 60%;\\n    height: 0;\\n    overflow: hidden;\\n    position: relative;\\n    border-radius: 3rem 3rem 0.4rem 0.4rem;\\n    img {\\n      object-fit: cover;\\n      object-position: center center;\\n      position: absolute;\\n      top: 0;\\n      left: 0;\\n      width: 100%;\\n      height: 100%;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nvar _s = $RefreshSig$();\nvar GuideStyles = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].article(_templateObject());\n_c = GuideStyles;\nfunction Guide(param) {\n    var guide = param.guide;\n    var clickHandler = function clickHandler() {\n        addToFavoritesMutation();\n    };\n    var ref;\n    _s();\n    var ref1 = _slicedToArray((0,_types_generated_queries__WEBPACK_IMPORTED_MODULE_2__.useAddToFavoritesMutation)({\n        variables: {\n            guideId: guide.id\n        }\n    }), 2), addToFavoritesMutation = ref1[0], ref2 = ref1[1], data = ref2.data, error = ref2.error, loading = ref2.loading;\n    var _altText;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GuideStyles, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"image-wrap\",\n                children: ((ref = guide.image) === null || ref === void 0 ? void 0 : ref.publicUrlTransformed) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/guide/\".concat(guide.id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: guide.image.publicUrlTransformed,\n                            alt: (_altText = guide.altText) !== null && _altText !== void 0 ? _altText : \"Image of \".concat(guide.name)\n                        }, void 0, false, {\n                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guide.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guide.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guide.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guide.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/guide/\".concat(guide.id),\n                    children: guide.name\n                }, void 0, false, {\n                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guide.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guide.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: clickHandler,\n                children: \"Add To Favorites\"\n            }, void 0, false, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guide.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            guide.location_info && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: guide.location_info\n            }, void 0, false, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guide.tsx\",\n                lineNumber: 61,\n                columnNumber: 31\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guide.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n};\n_s(Guide, \"ZEGBGtiKfjI2gng5EgJQz+LrUho=\", false, function() {\n    return [\n        _types_generated_queries__WEBPACK_IMPORTED_MODULE_2__.useAddToFavoritesMutation\n    ];\n});\n_c1 = Guide;\nvar _c, _c1;\n$RefreshReg$(_c, \"GuideStyles\");\n$RefreshReg$(_c1, \"Guide\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0d1aWRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQVNtQyxDQW1CbkM7Ozs7Ozs7O0FBNUI0QjtBQUlPO0FBQ0c7O0FBSXRDLEdBQUssQ0FBQ0csV0FBVyxHQUFHRCxpRUFBYztLQUE1QkMsV0FBVztBQXFCRixRQUFRLENBQUNFLEtBQUssQ0FBQyxLQUFxQixFQUFFLENBQUM7UUFBdEJDLEtBQUssR0FBUCxLQUFxQixDQUFuQkEsS0FBSztRQVExQkMsWUFBWSxHQUFyQixRQUFRLENBQUNBLFlBQVksR0FBRyxDQUFDO1FBQ3ZCQyxzQkFBc0IsRUFBRSxDQUFDO0lBQzNCLENBQUM7UUFLTUYsR0FBVzs7SUFkbEIsR0FBSyxDQUNITCxJQUlFLGtCQUpGQSxtRkFBeUIsQ0FBQyxDQUFDO1FBQ3pCUSxTQUFTLEVBQUUsQ0FBQztZQUNWQyxPQUFPLEVBQUVKLEtBQUssQ0FBQ0ssRUFBRTtRQUNuQixDQUFDO0lBQ0gsQ0FBQyxPQUxJSCxzQkFBc0IsR0FDM0JQLElBSUUsWUFKRkEsSUFJRSxLQUw2QlcsSUFBSSxRQUFKQSxJQUFJLEVBQUVDLEtBQUssUUFBTEEsS0FBSyxFQUFFQyxPQUFPLFFBQVBBLE9BQU87UUFtQmxDUixRQUFhO0lBUmhDLE1BQU0sNkVBQ0hILFdBQVc7O3dGQUNUWSxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBWTs0QkFDeEJWLEdBQVcsR0FBWEEsS0FBSyxDQUFDVyxLQUFLLGNBQVhYLEdBQVcsY0FBWEEsSUFBSSxDQUFKQSxDQUFpQyxHQUFqQ0EsR0FBVyxDQUFFWSxvQkFBb0IsaUZBQy9CbEIsa0RBQUk7b0JBQUNtQixJQUFJLEVBQUcsQ0FBTyxTQUFXLE9BQVRiLEtBQUssQ0FBQ0ssRUFBRTswR0FDM0JTLENBQUM7OEdBQ0NDLENBQUc7NEJBQ0ZDLEdBQUcsRUFBRWhCLEtBQUssQ0FBQ1csS0FBSyxDQUFDQyxvQkFBb0I7NEJBQ3JDSyxHQUFHLEdBQUVqQixRQUFhLEdBQWJBLEtBQUssQ0FBQ2tCLE9BQU8sY0FBYmxCLFFBQWEsY0FBYkEsUUFBYSxHQUFLLENBQVMsV0FBYSxPQUFYQSxLQUFLLENBQUNtQixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBTXJEQyxDQUFFO3NHQUNBMUIsa0RBQUk7b0JBQUNtQixJQUFJLEVBQUcsQ0FBTyxTQUFXLE9BQVRiLEtBQUssQ0FBQ0ssRUFBRTs4QkFBS0wsS0FBSyxDQUFDbUIsSUFBSTs7Ozs7Ozs7Ozs7d0ZBRTlDRSxDQUFNO2dCQUFDQyxPQUFPLEVBQUVyQixZQUFZOzBCQUFFLENBQWdCOzs7Ozs7WUFDOUNELEtBQUssQ0FBQ3VCLGFBQWEsZ0ZBQUtDLENBQUM7MEJBQUV4QixLQUFLLENBQUN1QixhQUFhOzs7Ozs7Ozs7Ozs7QUFHckQsQ0FBQztHQWpDdUJ4QixLQUFLOztRQUV6QkosK0VBQXlCOzs7TUFGTEksS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0d1aWRlLnRzeD9jNjJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7XG4gIEd1aWRlIGFzIGd1aWRlVHlwZSxcbiAgdXNlQWRkVG9GYXZvcml0ZXNNdXRhdGlvbixcbn0gZnJvbSBcIi4uL3R5cGVzL2dlbmVyYXRlZC1xdWVyaWVzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG50eXBlIEd1aWRlUHJvcHMgPSB7IGd1aWRlOiBndWlkZVR5cGUgfTtcblxuY29uc3QgR3VpZGVTdHlsZXMgPSBzdHlsZWQuYXJ0aWNsZWBcbiAgLmltYWdlLXdyYXAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiA2MCU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDNyZW0gM3JlbSAwLjRyZW0gMC40cmVtO1xuICAgIGltZyB7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEd1aWRlKHsgZ3VpZGUgfTogR3VpZGVQcm9wcykge1xuICBjb25zdCBbYWRkVG9GYXZvcml0ZXNNdXRhdGlvbiwgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9XSA9XG4gICAgdXNlQWRkVG9GYXZvcml0ZXNNdXRhdGlvbih7XG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgZ3VpZGVJZDogZ3VpZGUuaWQsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICBhZGRUb0Zhdm9yaXRlc011dGF0aW9uKCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxHdWlkZVN0eWxlcz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utd3JhcFwiPlxuICAgICAgICB7Z3VpZGUuaW1hZ2U/LnB1YmxpY1VybFRyYW5zZm9ybWVkICYmIChcbiAgICAgICAgICA8TGluayBocmVmPXtgL2d1aWRlLyR7Z3VpZGUuaWR9YH0+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17Z3VpZGUuaW1hZ2UucHVibGljVXJsVHJhbnNmb3JtZWR9XG4gICAgICAgICAgICAgICAgYWx0PXtndWlkZS5hbHRUZXh0ID8/IGBJbWFnZSBvZiAke2d1aWRlLm5hbWV9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMj5cbiAgICAgICAgPExpbmsgaHJlZj17YC9ndWlkZS8ke2d1aWRlLmlkfWB9PntndWlkZS5uYW1lfTwvTGluaz5cbiAgICAgIDwvaDI+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn0+QWRkIFRvIEZhdm9yaXRlczwvYnV0dG9uPlxuICAgICAge2d1aWRlLmxvY2F0aW9uX2luZm8gJiYgPHA+e2d1aWRlLmxvY2F0aW9uX2luZm99PC9wPn1cbiAgICA8L0d1aWRlU3R5bGVzPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VBZGRUb0Zhdm9yaXRlc011dGF0aW9uIiwic3R5bGVkIiwiR3VpZGVTdHlsZXMiLCJhcnRpY2xlIiwiR3VpZGUiLCJndWlkZSIsImNsaWNrSGFuZGxlciIsImFkZFRvRmF2b3JpdGVzTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJndWlkZUlkIiwiaWQiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1hZ2UiLCJwdWJsaWNVcmxUcmFuc2Zvcm1lZCIsImhyZWYiLCJhIiwiaW1nIiwic3JjIiwiYWx0IiwiYWx0VGV4dCIsIm5hbWUiLCJoMiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJsb2NhdGlvbl9pbmZvIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Guide.tsx\n");

/***/ })

});