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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Reset; }\n/* harmony export */ });\n/* harmony import */ var _Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.ts\");\n/* harmony import */ var _types_generated_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/generated-queries */ \"./types/generated-queries.ts\");\n/* harmony import */ var _styles_FormStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/FormStyles */ \"./components/styles/FormStyles.ts\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.tsx\");\n/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SignIn */ \"./components/SignIn.tsx\");\n/* harmony import */ var _PasswordResetRequest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PasswordResetRequest */ \"./components/PasswordResetRequest.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Reset(param) {\n    var token = param.token;\n    var ref;\n    _s();\n    var ref1 = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        email: '',\n        password: ''\n    }), inputs = ref1.inputs, handleChange = ref1.handleChange, resetForm = ref1.resetForm;\n    var ref2 = _slicedToArray((0,_types_generated_queries__WEBPACK_IMPORTED_MODULE_3__.useResetPasswordMutation)(), 2), signUpMutation = ref2[0], ref3 = ref2[1], data = ref3.data, loading = ref3.loading;\n    function handleSubmit(e) {\n        return _handleSubmit.apply(this, arguments);\n    }\n    function _handleSubmit() {\n        _handleSubmit = _asyncToGenerator(_Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var res;\n            return _Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        if (!(!inputs.email || !inputs.password)) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 3:\n                        _ctx.next = 5;\n                        return signUpMutation({\n                            variables: {\n                                email: inputs.email,\n                                password: inputs.password,\n                                token: token\n                            }\n                        });\n                    case 5:\n                        res = _ctx.sent;\n                        resetForm();\n                        console.log(res === null || res === void 0 ? void 0 : res.data);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleSubmit.apply(this, arguments);\n    }\n    var error = (data === null || data === void 0 ? void 0 : (ref = data.redeemUserPasswordResetToken) === null || ref === void 0 ? void 0 : ref.code) ? data === null || data === void 0 ? void 0 : data.redeemUserPasswordResetToken : null;\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    error: error\n                }, void 0, false, {\n                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_PasswordResetRequest__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: (data === null || data === void 0 ? void 0 : data.redeemUserPasswordResetToken) === null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                    children: \"Sign In to your account\"\n                }, void 0, false, {\n                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: \"Success! Sign into your account.\"\n                }, void 0, false, {\n                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SignIn__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n            lineNumber: 49,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                    children: \"Reset Your Password\"\n                }, void 0, false, {\n                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_FormStyles__WEBPACK_IMPORTED_MODULE_4__.Form, {\n                    method: \"POST\",\n                    onSubmit: handleSubmit,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"fieldset\", {\n                        disabled: loading,\n                        \"aria-busy\": loading,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                        htmlFor: \"email\",\n                                        children: \"Email Address\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                        type: \"email\",\n                                        id: \"email\",\n                                        name: \"email\",\n                                        placeholder: \"Enter Your Email\",\n                                        value: inputs.email,\n                                        autoComplete: \"email\",\n                                        required: true,\n                                        onChange: handleChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                        htmlFor: \"password\",\n                                        children: \"Password\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                        type: \"password\",\n                                        id: \"password\",\n                                        name: \"password\",\n                                        placeholder: \"Enter Your password\",\n                                        autoComplete: \"password\",\n                                        value: inputs.password,\n                                        required: true,\n                                        onChange: handleChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    children: \"Reset Password\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Reset.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false);\n};\n_s(Reset, \"V0xAuxqPg5mfyw49ILo7eb+JnFg=\", false, function() {\n    return [\n        _lib_useForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _types_generated_queries__WEBPACK_IMPORTED_MODULE_3__.useResetPasswordMutation\n    ];\n});\n_c = Reset;\nvar _c;\n$RefreshReg$(_c, \"Reset\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLEVBQUVqQixPQUFPO3dCQUFFa0IsQ0FBUyxZQUFFbEIsT0FBTzs7d0dBQzVDVyxDQUFHOztnSEFDRFEsQ0FBSzt3Q0FBQ0MsT0FBTyxFQUFDLENBQU87a0RBQUMsQ0FFdkI7Ozs7OztnSEFDQ0MsQ0FBSzt3Q0FDSkMsSUFBSSxFQUFDLENBQU87d0NBQ1pDLEVBQUUsRUFBQyxDQUFPO3dDQUNWQyxJQUFJLEVBQUMsQ0FBTzt3Q0FDWkMsV0FBVyxFQUFDLENBQWtCO3dDQUM5QkMsS0FBSyxFQUFFOUIsTUFBTSxDQUFDRixLQUFLO3dDQUNuQmlDLFlBQVksRUFBQyxDQUFPO3dDQUNwQkMsUUFBUTt3Q0FDUkMsUUFBUSxFQUFFaEMsWUFBWTs7Ozs7Ozs7Ozs7O3dHQUV6QmMsQ0FBRzs7Z0hBQ0RRLENBQUs7d0NBQUNDLE9BQU8sRUFBQyxDQUFVO2tEQUFDLENBRTFCOzs7Ozs7Z0hBQ0NDLENBQUs7d0NBQ0pDLElBQUksRUFBQyxDQUFVO3dDQUNmQyxFQUFFLEVBQUMsQ0FBVTt3Q0FDYkMsSUFBSSxFQUFDLENBQVU7d0NBQ2ZDLFdBQVcsRUFBQyxDQUFxQjt3Q0FDakNFLFlBQVksRUFBQyxDQUFVO3dDQUN2QkQsS0FBSyxFQUFFOUIsTUFBTSxDQUFDRCxRQUFRO3dDQUN0QmlDLFFBQVE7d0NBQ1JDLFFBQVEsRUFBRWhDLFlBQVk7Ozs7Ozs7Ozs7Ozt3R0FFekJjLENBQUc7c0hBQ0RtQixDQUFNO29DQUFDUixJQUFJLEVBQUMsQ0FBUTs4Q0FBQyxDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXBELENBQUM7R0ExRnVCL0IsS0FBSzs7UUFDZU4sb0RBQU87UUFLUEMsOEVBQXdCOzs7S0FONUNLLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXNldC50c3g/M2FmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlRm9ybSBmcm9tIFwiLi4vbGliL3VzZUZvcm1cIjtcbmltcG9ydCB7IHJlZmV0Y2hVc2VyUXVlcnksIHVzZVJlc2V0UGFzc3dvcmRNdXRhdGlvbiB9IGZyb20gXCIuLi90eXBlcy9nZW5lcmF0ZWQtcXVlcmllc1wiO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCIuL3N0eWxlcy9Gb3JtU3R5bGVzXCI7XG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gXCIuL0Vycm9yTWVzc2FnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFNpZ25JbiBmcm9tIFwiLi9TaWduSW5cIjtcbmltcG9ydCBQYXNzd29yZFJlc2V0UmVxdWVzdCBmcm9tIFwiLi9QYXNzd29yZFJlc2V0UmVxdWVzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXNldCh7dG9rZW59OiB7dG9rZW46IHN0cmluZ30pIHtcbiAgY29uc3Qge2lucHV0cywgaGFuZGxlQ2hhbmdlLCByZXNldEZvcm19ID0gdXNlRm9ybSh7XG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJ1xuICB9KTtcblxuICBjb25zdCBbc2lnblVwTXV0YXRpb24sIHtkYXRhLCBsb2FkaW5nfV0gPSB1c2VSZXNldFBhc3N3b3JkTXV0YXRpb24oKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlOiBSZWFjdC5Gb3JtRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBUT0RPIC0gYWRkIGVycm9ycyB0byBmb3JtIGZpZWxkc1xuICAgIGlmICghaW5wdXRzLmVtYWlsIHx8ICFpbnB1dHMucGFzc3dvcmQgKSByZXR1cm47XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBzaWduVXBNdXRhdGlvbih7XG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgZW1haWw6IGlucHV0cy5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IGlucHV0cy5wYXNzd29yZCxcbiAgICAgICAgdG9rZW5cbiAgICAgIH1cbiAgICB9KVxuICAgIHJlc2V0Rm9ybSgpXG5cbiAgICBjb25zb2xlLmxvZyhyZXM/LmRhdGEpO1xuICB9XG5cbiAgY29uc3QgZXJyb3IgPSBkYXRhPy5yZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuPy5jb2RlID8gZGF0YT8ucmVkZWVtVXNlclBhc3N3b3JkUmVzZXRUb2tlbiA6IG51bGw7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxEaXNwbGF5RXJyb3IgZXJyb3I9e2Vycm9yfSAvPlxuICAgICAgICA8UGFzc3dvcmRSZXNldFJlcXVlc3QgLz5cbiAgICAgIDwvPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtkYXRhPy5yZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuID09PSBudWxsID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMj5TaWduIEluIHRvIHlvdXIgYWNjb3VudDwvaDI+XG4gICAgICAgICAgPHA+U3VjY2VzcyEgU2lnbiBpbnRvIHlvdXIgYWNjb3VudC48L3A+XG4gICAgICAgICAgPFNpZ25Jbi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8aDI+UmVzZXQgWW91ciBQYXNzd29yZDwvaDI+XG4gICAgICAgICAgPEZvcm0gbWV0aG9kPVwiUE9TVFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuXG4gICAgICAgICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e2xvYWRpbmd9IGFyaWEtYnVzeT17bG9hZGluZ30+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgRW1haWwgQWRkcmVzc1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBFbWFpbFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICAgIFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+UmVzZXQgUGFzc3dvcmQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgPC8+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlRm9ybSIsInVzZVJlc2V0UGFzc3dvcmRNdXRhdGlvbiIsIkZvcm0iLCJEaXNwbGF5RXJyb3IiLCJTaWduSW4iLCJQYXNzd29yZFJlc2V0UmVxdWVzdCIsIlJlc2V0IiwidG9rZW4iLCJkYXRhIiwiZW1haWwiLCJwYXNzd29yZCIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsInJlc2V0Rm9ybSIsInNpZ25VcE11dGF0aW9uIiwibG9hZGluZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJyZXMiLCJwcmV2ZW50RGVmYXVsdCIsInZhcmlhYmxlcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInJlZGVlbVVzZXJQYXNzd29yZFJlc2V0VG9rZW4iLCJjb2RlIiwiZGl2IiwiaDIiLCJwIiwibWV0aG9kIiwib25TdWJtaXQiLCJmaWVsZHNldCIsImRpc2FibGVkIiwiYXJpYS1idXN5IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsImF1dG9Db21wbGV0ZSIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Reset.tsx\n");

/***/ })

});