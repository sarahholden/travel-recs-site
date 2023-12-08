"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/reset",{

/***/ "./components/Reset.tsx":
/*!******************************!*\
  !*** ./components/Reset.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Reset; }\n/* harmony export */ });\n/* harmony import */ var _Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.ts\");\n/* harmony import */ var _types_generated_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/generated-queries */ \"./types/generated-queries.ts\");\n/* harmony import */ var _styles_FormStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/FormStyles */ \"./components/styles/FormStyles.ts\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.tsx\");\n/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SignIn */ \"./components/SignIn.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Reset(param) {\n    var token = param.token;\n    _s();\n    var ref = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        email: '',\n        password: ''\n    }), inputs = ref.inputs, handleChange = ref.handleChange, resetForm = ref.resetForm;\n    var ref1 = _slicedToArray((0,_types_generated_queries__WEBPACK_IMPORTED_MODULE_3__.useResetPasswordMutation)(), 2), signUpMutation = ref1[0], ref2 = ref1[1], data = ref2.data, loading = ref2.loading, error = ref2.error;\n    function handleSubmit(e) {\n        return _handleSubmit.apply(this, arguments);\n    }\n    function _handleSubmit() {\n        _handleSubmit = _asyncToGenerator(_Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var res;\n            return _Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        if (!(!inputs.email || !inputs.password || !token)) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 3:\n                        _ctx.next = 5;\n                        return signUpMutation({\n                            variables: {\n                                email: inputs.email,\n                                password: inputs.password,\n                                token: token\n                            }\n                        });\n                    case 5:\n                        res = _ctx.sent;\n                        resetForm();\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleSubmit.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                error: error\n            }, void 0, false, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                lineNumber: 34,\n                columnNumber: 17\n            }, this),\n            token,\n            (data === null || data === void 0 ? void 0 : data.createUser) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: \"Sign In to your account\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: \"Success! Sign into your account.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SignIn__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: \"Reset Your Password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_FormStyles__WEBPACK_IMPORTED_MODULE_4__.Form, {\n                        method: \"POST\",\n                        onSubmit: handleSubmit,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"fieldset\", {\n                            disabled: loading,\n                            \"aria-busy\": loading,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                            htmlFor: \"email\",\n                                            children: \"Email Address\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            id: \"email\",\n                                            name: \"email\",\n                                            placeholder: \"Enter Your Email\",\n                                            value: inputs.email,\n                                            autoComplete: \"email\",\n                                            required: true,\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                            htmlFor: \"password\",\n                                            children: \"Password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                            type: \"password\",\n                                            id: \"password\",\n                                            name: \"password\",\n                                            placeholder: \"Enter Your password\",\n                                            autoComplete: \"password\",\n                                            value: inputs.password,\n                                            required: true,\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        children: \"Reset Password\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true);\n};\n_s(Reset, \"VvngMUWI4zlxnrEASNjcO1WPt/A=\", false, function() {\n    return [\n        _lib_useForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _types_generated_queries__WEBPACK_IMPORTED_MODULE_3__.useResetPasswordMutation\n    ];\n});\n_c = Reset;\nvar _c;\n$RefreshReg$(_c, \"Reset\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTs0Q0FDZkMsRUFBRSxFQUFDLENBQVU7NENBQ2JDLElBQUksRUFBQyxDQUFVOzRDQUNmQyxXQUFXLEVBQUMsQ0FBcUI7NENBQ2pDRSxZQUFZLEVBQUMsQ0FBVTs0Q0FDdkJELEtBQUssRUFBRTVCLE1BQU0sQ0FBQ0QsUUFBUTs0Q0FDdEIrQixRQUFROzRDQUNSQyxRQUFRLEVBQUU5QixZQUFZOzs7Ozs7Ozs7Ozs7NEdBRXpCWSxDQUFHOzBIQUNEbUIsQ0FBTTt3Q0FBQ1IsSUFBSSxFQUFDLENBQVE7a0RBQUMsQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVcEQsQ0FBQztHQWpGdUI1QixLQUFLOztRQUNlTCxvREFBTztRQUtBQyw4RUFBd0I7OztLQU5uREksS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Jlc2V0LnRzeD8zYWYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VGb3JtIGZyb20gXCIuLi9saWIvdXNlRm9ybVwiO1xuaW1wb3J0IHsgcmVmZXRjaFVzZXJRdWVyeSwgdXNlUmVzZXRQYXNzd29yZE11dGF0aW9uIH0gZnJvbSBcIi4uL3R5cGVzL2dlbmVyYXRlZC1xdWVyaWVzXCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcIi4vc3R5bGVzL0Zvcm1TdHlsZXNcIjtcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSBcIi4vRXJyb3JNZXNzYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgU2lnbkluIGZyb20gXCIuL1NpZ25JblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXNldCh7dG9rZW59OiB7dG9rZW46IHN0cmluZ30pIHtcbiAgY29uc3Qge2lucHV0cywgaGFuZGxlQ2hhbmdlLCByZXNldEZvcm19ID0gdXNlRm9ybSh7XG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgfSk7XG5cbiAgY29uc3QgW3NpZ25VcE11dGF0aW9uLCB7ZGF0YSwgbG9hZGluZywgZXJyb3J9XSA9IHVzZVJlc2V0UGFzc3dvcmRNdXRhdGlvbigpXG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGU6IFJlYWN0LkZvcm1FdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIFRPRE8gLSBhZGQgZXJyb3JzIHRvIGZvcm0gZmllbGRzXG4gICAgaWYgKCFpbnB1dHMuZW1haWwgfHwgIWlucHV0cy5wYXNzd29yZCB8fCAhdG9rZW4pIHJldHVybjtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNpZ25VcE11dGF0aW9uKHtcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBlbWFpbDogaW5wdXRzLmVtYWlsLFxuICAgICAgICBwYXNzd29yZDogaW5wdXRzLnBhc3N3b3JkLFxuICAgICAgICB0b2tlblxuICAgICAgfVxuICAgIH0pXG4gICAgcmVzZXRGb3JtKClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtlcnJvciAmJiA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvcn0gLz59XG4gICAgICB7dG9rZW59XG5cblxuICAgICAge2RhdGE/LmNyZWF0ZVVzZXIgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyPlNpZ24gSW4gdG8geW91ciBhY2NvdW50PC9oMj5cbiAgICAgICAgICA8cD5TdWNjZXNzISBTaWduIGludG8geW91ciBhY2NvdW50LjwvcD5cbiAgICAgICAgICA8U2lnbkluLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxoMj5SZXNldCBZb3VyIFBhc3N3b3JkPC9oMj5cbiAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJQT1NUXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG5cbiAgICAgICAgICAgIDxmaWVsZHNldCBkaXNhYmxlZD17bG9hZGluZ30gYXJpYS1idXN5PXtsb2FkaW5nfT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+XG4gICAgICAgICAgICAgICAgICBFbWFpbCBBZGRyZXNzXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIEVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZW1haWx9XG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5SZXNldCBQYXNzd29yZDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8Lz5cbiAgICAgIClcbiAgICB9XG5cbiAgICA8Lz5cbiAgKVxufSJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwidXNlUmVzZXRQYXNzd29yZE11dGF0aW9uIiwiRm9ybSIsIkRpc3BsYXlFcnJvciIsIlNpZ25JbiIsIlJlc2V0IiwidG9rZW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwicmVzZXRGb3JtIiwic2lnblVwTXV0YXRpb24iLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwiaGFuZGxlU3VibWl0IiwiZSIsInJlcyIsInByZXZlbnREZWZhdWx0IiwidmFyaWFibGVzIiwiY3JlYXRlVXNlciIsImRpdiIsImgyIiwicCIsIm1ldGhvZCIsIm9uU3VibWl0IiwiZmllbGRzZXQiLCJkaXNhYmxlZCIsImFyaWEtYnVzeSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwibmFtZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJhdXRvQ29tcGxldGUiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Reset.tsx\n");

/***/ })

});