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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Reset; }\n/* harmony export */ });\n/* harmony import */ var _Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.ts\");\n/* harmony import */ var _types_generated_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/generated-queries */ \"./types/generated-queries.ts\");\n/* harmony import */ var _styles_FormStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/FormStyles */ \"./components/styles/FormStyles.ts\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.tsx\");\n/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SignIn */ \"./components/SignIn.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Reset(param) {\n    var token = param.token;\n    _s();\n    var ref = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        email: '',\n        password: ''\n    }), inputs = ref.inputs, handleChange = ref.handleChange, resetForm = ref.resetForm;\n    var ref1 = _slicedToArray((0,_types_generated_queries__WEBPACK_IMPORTED_MODULE_3__.useResetPasswordMutation)(), 2), signUpMutation = ref1[0], ref2 = ref1[1], data = ref2.data, loading = ref2.loading;\n    function handleSubmit(e) {\n        return _handleSubmit.apply(this, arguments);\n    }\n    function _handleSubmit() {\n        _handleSubmit = _asyncToGenerator(_Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var res;\n            return _Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        if (!(!inputs.email || !inputs.password)) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 3:\n                        _ctx.next = 5;\n                        return signUpMutation({\n                            variables: {\n                                email: inputs.email,\n                                password: inputs.password,\n                                token: token\n                            }\n                        });\n                    case 5:\n                        res = _ctx.sent;\n                        resetForm();\n                        console.log(res === null || res === void 0 ? void 0 : res.data);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleSubmit.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                error: error\n            }, void 0, false, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                lineNumber: 36,\n                columnNumber: 17\n            }, this),\n            token,\n            (data === null || data === void 0 ? void 0 : data.createUser) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: \"Sign In to your account\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: \"Success! Sign into your account.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SignIn__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: \"Reset Your Password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_FormStyles__WEBPACK_IMPORTED_MODULE_4__.Form, {\n                        method: \"POST\",\n                        onSubmit: handleSubmit,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"fieldset\", {\n                            disabled: loading,\n                            \"aria-busy\": loading,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                            htmlFor: \"email\",\n                                            children: \"Email Address\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            id: \"email\",\n                                            name: \"email\",\n                                            placeholder: \"Enter Your Email\",\n                                            value: inputs.email,\n                                            autoComplete: \"email\",\n                                            required: true,\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                            htmlFor: \"password\",\n                                            children: \"Password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                            type: \"password\",\n                                            id: \"password\",\n                                            name: \"password\",\n                                            placeholder: \"Enter Your password\",\n                                            autoComplete: \"password\",\n                                            value: inputs.password,\n                                            required: true,\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        children: \"Reset Password\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true);\n};\n_s(Reset, \"V0xAuxqPg5mfyw49ILo7eb+JnFg=\", false, function() {\n    return [\n        _lib_useForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _types_generated_queries__WEBPACK_IMPORTED_MODULE_3__.useResetPasswordMutation\n    ];\n});\n_c = Reset;\nvar _c;\n$RefreshReg$(_c, \"Reset\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUs7NENBQUNDLE9BQU8sRUFBQyxDQUFVO3NEQUFDLENBRTFCOzs7Ozs7b0hBQ0NDLENBQUs7NENBQ0pDLElBQUksRUFBQyxDQUFVOzRDQUNmQyxFQUFFLEVBQUMsQ0FBVTs0Q0FDYkMsSUFBSSxFQUFDLENBQVU7NENBQ2ZDLFdBQVcsRUFBQyxDQUFxQjs0Q0FDakNFLFlBQVksRUFBQyxDQUFVOzRDQUN2QkQsS0FBSyxFQUFFOUIsTUFBTSxDQUFDRCxRQUFROzRDQUN0QmlDLFFBQVE7NENBQ1JDLFFBQVEsRUFBRWhDLFlBQVk7Ozs7Ozs7Ozs7Ozs0R0FFekJjLENBQUc7MEhBQ0RtQixDQUFNO3dDQUFDUixJQUFJLEVBQUMsQ0FBUTtrREFBQyxDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVwRCxDQUFDO0dBbkZ1QjlCLEtBQUs7O1FBQ2VMLG9EQUFPO1FBS1BDLDhFQUF3Qjs7O0tBTjVDSSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVzZXQudHN4PzNhZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZUZvcm0gZnJvbSBcIi4uL2xpYi91c2VGb3JtXCI7XG5pbXBvcnQgeyByZWZldGNoVXNlclF1ZXJ5LCB1c2VSZXNldFBhc3N3b3JkTXV0YXRpb24gfSBmcm9tIFwiLi4vdHlwZXMvZ2VuZXJhdGVkLXF1ZXJpZXNcIjtcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiLi9zdHlsZXMvRm9ybVN0eWxlc1wiO1xuaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tIFwiLi9FcnJvck1lc3NhZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBTaWduSW4gZnJvbSBcIi4vU2lnbkluXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc2V0KHt0b2tlbn06IHt0b2tlbjogc3RyaW5nfSkge1xuICBjb25zdCB7aW5wdXRzLCBoYW5kbGVDaGFuZ2UsIHJlc2V0Rm9ybX0gPSB1c2VGb3JtKHtcbiAgICBlbWFpbDogJycsXG4gICAgcGFzc3dvcmQ6ICcnXG4gIH0pO1xuXG4gIGNvbnN0IFtzaWduVXBNdXRhdGlvbiwge2RhdGEsIGxvYWRpbmd9XSA9IHVzZVJlc2V0UGFzc3dvcmRNdXRhdGlvbigpXG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGU6IFJlYWN0LkZvcm1FdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIFRPRE8gLSBhZGQgZXJyb3JzIHRvIGZvcm0gZmllbGRzXG4gICAgaWYgKCFpbnB1dHMuZW1haWwgfHwgIWlucHV0cy5wYXNzd29yZCApIHJldHVybjtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNpZ25VcE11dGF0aW9uKHtcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBlbWFpbDogaW5wdXRzLmVtYWlsLFxuICAgICAgICBwYXNzd29yZDogaW5wdXRzLnBhc3N3b3JkLFxuICAgICAgICB0b2tlblxuICAgICAgfVxuICAgIH0pXG4gICAgcmVzZXRGb3JtKClcblxuICAgIGNvbnNvbGUubG9nKHJlcz8uZGF0YSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7ZXJyb3IgJiYgPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+fVxuICAgICAge3Rva2VufVxuXG5cbiAgICAgIHtkYXRhPy5jcmVhdGVVc2VyID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMj5TaWduIEluIHRvIHlvdXIgYWNjb3VudDwvaDI+XG4gICAgICAgICAgPHA+U3VjY2VzcyEgU2lnbiBpbnRvIHlvdXIgYWNjb3VudC48L3A+XG4gICAgICAgICAgPFNpZ25Jbi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8aDI+UmVzZXQgWW91ciBQYXNzd29yZDwvaDI+XG4gICAgICAgICAgPEZvcm0gbWV0aG9kPVwiUE9TVFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuXG4gICAgICAgICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e2xvYWRpbmd9IGFyaWEtYnVzeT17bG9hZGluZ30+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgRW1haWwgQWRkcmVzc1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBFbWFpbFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICAgIFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+UmVzZXQgUGFzc3dvcmQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgPC8+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlRm9ybSIsInVzZVJlc2V0UGFzc3dvcmRNdXRhdGlvbiIsIkZvcm0iLCJEaXNwbGF5RXJyb3IiLCJTaWduSW4iLCJSZXNldCIsInRva2VuIiwiZW1haWwiLCJwYXNzd29yZCIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsInJlc2V0Rm9ybSIsInNpZ25VcE11dGF0aW9uIiwiZGF0YSIsImxvYWRpbmciLCJoYW5kbGVTdWJtaXQiLCJlIiwicmVzIiwicHJldmVudERlZmF1bHQiLCJ2YXJpYWJsZXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJjcmVhdGVVc2VyIiwiZGl2IiwiaDIiLCJwIiwibWV0aG9kIiwib25TdWJtaXQiLCJmaWVsZHNldCIsImRpc2FibGVkIiwiYXJpYS1idXN5IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsImF1dG9Db21wbGV0ZSIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Reset.tsx\n");

/***/ })

});