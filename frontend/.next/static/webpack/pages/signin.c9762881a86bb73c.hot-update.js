"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./components/SignIn.tsx":
/*!*******************************!*\
  !*** ./components/SignIn.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignIn; }\n/* harmony export */ });\n/* harmony import */ var _Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.ts\");\n/* harmony import */ var _types_generated_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/generated-queries */ \"./types/generated-queries.ts\");\n/* harmony import */ var _styles_FormStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/FormStyles */ \"./components/styles/FormStyles.ts\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SignIn() {\n    _s();\n    var ref5 = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n        email: '',\n        password: ''\n    }), inputs = ref5.inputs, handleChange = ref5.handleChange, resetForm = ref5.resetForm;\n    var ref1 = _slicedToArray((0,_types_generated_queries__WEBPACK_IMPORTED_MODULE_4__.useSignInMutation)(), 2), signInMutation = ref1[0], ref2 = ref1[1], data = ref2.data, loading = ref2.loading;\n    function handleSubmit(e) {\n        return _handleSubmit.apply(this, arguments);\n    }\n    function _handleSubmit() {\n        _handleSubmit = _asyncToGenerator(_Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var ref, ref3, ref4, res;\n            return _Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        e.preventDefault();\n                        _ctx.next = 4;\n                        return signInMutation({\n                            variables: {\n                                email: inputs.email,\n                                password: inputs.password\n                            },\n                            refetchQueries: [\n                                (0,_types_generated_queries__WEBPACK_IMPORTED_MODULE_4__.refetchUserQuery)()\n                            ]\n                        });\n                    case 4:\n                        res = _ctx.sent;\n                        resetForm();\n                        if ((res === null || res === void 0 ? void 0 : (ref = res.data) === null || ref === void 0 ? void 0 : (ref3 = ref.authenticateUserWithPassword) === null || ref3 === void 0 ? void 0 : ref3.__typename) === 'UserAuthenticationWithPasswordSuccess' && ((ref4 = res.data.authenticateUserWithPassword.item) === null || ref4 === void 0 ? void 0 : ref4.id)) {\n                            next_router__WEBPACK_IMPORTED_MODULE_2___default().push({\n                                pathname: \"/account\"\n                            });\n                        }\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleSubmit.apply(this, arguments);\n    }\n    var error = (data === null || data === void 0 ? void 0 : data.authenticateUserWithPassword.__typename) === 'UserAuthenticationWithPasswordFailure' && data.authenticateUserWithPassword;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_FormStyles__WEBPACK_IMPORTED_MODULE_5__.Form, {\n        method: \"POST\",\n        onSubmit: handleSubmit,\n        children: [\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                error: error\n            }, void 0, false, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                lineNumber: 39,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"fieldset\", {\n                disabled: loading,\n                \"aria-busy\": loading,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                children: \"Email Address\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"email\",\n                                name: \"email\",\n                                placeholder: \"Enter Your Email\",\n                                value: inputs.email,\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                id: \"password\",\n                                name: \"password\",\n                                placeholder: \"Enter Your password\",\n                                value: inputs.password,\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n};\n_s(SignIn, \"PA0WuJHCNnZ5L9SosgL33kCKoiM=\", false, function() {\n    return [\n        _lib_useForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _types_generated_queries__WEBPACK_IMPORTED_MODULE_4__.useSignInMutation\n    ];\n});\n_c = SignIn;\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQU87Z0NBQ1ZjLElBQUksRUFBQyxDQUFPO2dDQUNaQyxXQUFXLEVBQUMsQ0FBa0I7Z0NBQzlCQyxLQUFLLEVBQUUvQixNQUFNLENBQUNGLEtBQUs7Z0NBQ25Ca0MsUUFBUSxFQUFFL0IsWUFBWTs7Ozs7Ozs7Ozs7O2dHQUV6QnVCLENBQUc7O3dHQUNEQyxDQUFLO2dDQUFDQyxPQUFPLEVBQUMsQ0FBVTswQ0FBQyxDQUUxQjs7Ozs7O3dHQUNDQyxDQUFLO2dDQUNKQyxJQUFJLEVBQUMsQ0FBVTtnQ0FDZmIsRUFBRSxFQUFDLENBQVU7Z0NBQ2JjLElBQUksRUFBQyxDQUFVO2dDQUNmQyxXQUFXLEVBQUMsQ0FBcUI7Z0NBQ2pDQyxLQUFLLEVBQUUvQixNQUFNLENBQUNELFFBQVE7Z0NBQ3RCaUMsUUFBUSxFQUFFL0IsWUFBWTs7Ozs7Ozs7Ozs7O2dHQUV6QnVCLENBQUc7OEdBQ0RTLENBQU07NEJBQUNMLElBQUksRUFBQyxDQUFRO3NDQUFDLENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3ZDLENBQUM7R0FoRXVCL0IsTUFBTTs7UUFDY0wsb0RBQU87UUFLUEUsdUVBQWlCOzs7S0FOckNHLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduSW4udHN4PzI3NWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB1c2VGb3JtIGZyb20gXCIuLi9saWIvdXNlRm9ybVwiO1xuaW1wb3J0IHsgcmVmZXRjaFVzZXJRdWVyeSwgdXNlU2lnbkluTXV0YXRpb24gfSBmcm9tIFwiLi4vdHlwZXMvZ2VuZXJhdGVkLXF1ZXJpZXNcIjtcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiLi9zdHlsZXMvRm9ybVN0eWxlc1wiO1xuaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tIFwiLi9FcnJvck1lc3NhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluKCkge1xuICBjb25zdCB7aW5wdXRzLCBoYW5kbGVDaGFuZ2UsIHJlc2V0Rm9ybX0gPSB1c2VGb3JtKHtcbiAgICBlbWFpbDogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICB9KTtcblxuICBjb25zdCBbc2lnbkluTXV0YXRpb24sIHtkYXRhLCBsb2FkaW5nfV0gPSB1c2VTaWduSW5NdXRhdGlvbigpXG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGU6IFJlYWN0LkZvcm1FdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBzaWduSW5NdXRhdGlvbih7XG4gICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICBlbWFpbDogaW5wdXRzLmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IGlucHV0cy5wYXNzd29yZFxuICAgIH0sXG4gICAgcmVmZXRjaFF1ZXJpZXM6IFtyZWZldGNoVXNlclF1ZXJ5KCldLFxuICAgIH0pXG4gICAgcmVzZXRGb3JtKClcblxuICAgIGlmIChyZXM/LmRhdGE/LmF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmQ/Ll9fdHlwZW5hbWUgPT09ICdVc2VyQXV0aGVudGljYXRpb25XaXRoUGFzc3dvcmRTdWNjZXNzJyAmJiByZXMuZGF0YS5hdXRoZW50aWNhdGVVc2VyV2l0aFBhc3N3b3JkLml0ZW0/LmlkKSB7XG4gICAgICBSb3V0ZXIucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiBgL2FjY291bnRgLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBlcnJvciA9XG4gIGRhdGE/LmF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmQuX190eXBlbmFtZSA9PT0gJ1VzZXJBdXRoZW50aWNhdGlvbldpdGhQYXNzd29yZEZhaWx1cmUnICYmXG4gIGRhdGEuYXV0aGVudGljYXRlVXNlcldpdGhQYXNzd29yZDtcbiAgXG4gIHJldHVybiAoXG4gICAgPEZvcm0gbWV0aG9kPVwiUE9TVFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAge2Vycm9yICYmIDxEaXNwbGF5RXJyb3IgZXJyb3I9e2Vycm9yfSAvPn1cbiAgICAgIDxmaWVsZHNldCBkaXNhYmxlZD17bG9hZGluZ30gYXJpYS1idXN5PXtsb2FkaW5nfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+XG4gICAgICAgICAgICBFbWFpbCBBZGRyZXNzXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgRW1haWxcIlxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5lbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgIFBhc3N3b3JkXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucGFzc3dvcmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIEluPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L0Zvcm0+XG4gIClcbn0iXSwibmFtZXMiOlsiUm91dGVyIiwidXNlRm9ybSIsInJlZmV0Y2hVc2VyUXVlcnkiLCJ1c2VTaWduSW5NdXRhdGlvbiIsIkZvcm0iLCJEaXNwbGF5RXJyb3IiLCJTaWduSW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwicmVzZXRGb3JtIiwic2lnbkluTXV0YXRpb24iLCJkYXRhIiwibG9hZGluZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJyZXMiLCJwcmV2ZW50RGVmYXVsdCIsInZhcmlhYmxlcyIsInJlZmV0Y2hRdWVyaWVzIiwiYXV0aGVudGljYXRlVXNlcldpdGhQYXNzd29yZCIsIl9fdHlwZW5hbWUiLCJpdGVtIiwiaWQiLCJwdXNoIiwicGF0aG5hbWUiLCJlcnJvciIsIm1ldGhvZCIsIm9uU3VibWl0IiwiZmllbGRzZXQiLCJkaXNhYmxlZCIsImFyaWEtYnVzeSIsImRpdiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SignIn.tsx\n");

/***/ })

});