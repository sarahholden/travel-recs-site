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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignIn; }\n/* harmony export */ });\n/* harmony import */ var _Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.ts\");\n/* harmony import */ var _types_generated_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/generated-queries */ \"./types/generated-queries.ts\");\n/* harmony import */ var _styles_FormStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/FormStyles */ \"./components/styles/FormStyles.ts\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SignIn() {\n    _s();\n    var ref5 = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n        email: '',\n        password: ''\n    }), inputs = ref5.inputs, handleChange = ref5.handleChange, resetForm = ref5.resetForm;\n    var ref1 = _slicedToArray((0,_types_generated_queries__WEBPACK_IMPORTED_MODULE_4__.useSignInMutation)(), 2), signInMutation = ref1[0], ref2 = ref1[1], data = ref2.data, loading = ref2.loading;\n    function handleSubmit(e) {\n        return _handleSubmit.apply(this, arguments);\n    }\n    function _handleSubmit() {\n        _handleSubmit = _asyncToGenerator(_Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var ref, ref3, ref4, res;\n            return _Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        e.preventDefault();\n                        if (!(!inputs.email || !inputs.password)) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 4:\n                        _ctx.next = 6;\n                        return signInMutation({\n                            variables: {\n                                email: inputs.email,\n                                password: inputs.password\n                            },\n                            refetchQueries: [\n                                (0,_types_generated_queries__WEBPACK_IMPORTED_MODULE_4__.refetchUserQuery)()\n                            ]\n                        });\n                    case 6:\n                        res = _ctx.sent;\n                        resetForm();\n                        if ((res === null || res === void 0 ? void 0 : (ref = res.data) === null || ref === void 0 ? void 0 : (ref3 = ref.authenticateUserWithPassword) === null || ref3 === void 0 ? void 0 : ref3.__typename) === 'UserAuthenticationWithPasswordSuccess' && ((ref4 = res.data.authenticateUserWithPassword.item) === null || ref4 === void 0 ? void 0 : ref4.id)) {\n                            next_router__WEBPACK_IMPORTED_MODULE_2___default().push({\n                                pathname: \"/account\"\n                            });\n                        }\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleSubmit.apply(this, arguments);\n    }\n    var error = (data === null || data === void 0 ? void 0 : data.authenticateUserWithPassword.__typename) === 'UserAuthenticationWithPasswordFailure' && data.authenticateUserWithPassword;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"Sign In\"\n            }, void 0, false, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_FormStyles__WEBPACK_IMPORTED_MODULE_5__.Form, {\n                method: \"POST\",\n                onSubmit: handleSubmit,\n                children: [\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        error: error\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 19\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"fieldset\", {\n                        disabled: loading,\n                        \"aria-busy\": loading,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                        htmlFor: \"email\",\n                                        children: \"Email Address\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                        type: \"email\",\n                                        id: \"email\",\n                                        name: \"email\",\n                                        placeholder: \"Enter Your Email\",\n                                        value: inputs.email,\n                                        onChange: handleChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                        htmlFor: \"password\",\n                                        children: \"Password\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                        type: \"password\",\n                                        id: \"password\",\n                                        name: \"password\",\n                                        placeholder: \"Enter Your password\",\n                                        value: inputs.password,\n                                        onChange: handleChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    children: \"Sign In\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                            href: \"signup\",\n                                            children: \"Sign Up\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                            href: \"/passwordreset\",\n                                            children: \"Reset Password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(SignIn, \"PA0WuJHCNnZ5L9SosgL33kCKoiM=\", false, function() {\n    return [\n        _lib_useForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _types_generated_queries__WEBPACK_IMPORTED_MODULE_4__.useSignInMutation\n    ];\n});\n_c = SignIn;\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUs7d0NBQUNDLE9BQU8sRUFBQyxDQUFPO2tEQUFDLENBRXZCOzs7Ozs7Z0hBQ0NDLENBQUs7d0NBQ0pDLElBQUksRUFBQyxDQUFPO3dDQUNaZCxFQUFFLEVBQUMsQ0FBTzt3Q0FDVmUsSUFBSSxFQUFDLENBQU87d0NBQ1pDLFdBQVcsRUFBQyxDQUFrQjt3Q0FDOUJDLEtBQUssRUFBRWhDLE1BQU0sQ0FBQ0YsS0FBSzt3Q0FDbkJtQyxRQUFRLEVBQUVoQyxZQUFZOzs7Ozs7Ozs7Ozs7d0dBRXpCd0IsQ0FBRzs7Z0hBQ0RDLENBQUs7d0NBQUNDLE9BQU8sRUFBQyxDQUFVO2tEQUFDLENBRTFCOzs7Ozs7Z0hBQ0NDLENBQUs7d0NBQ0pDLElBQUksRUFBQyxDQUFVO3dDQUNmZCxFQUFFLEVBQUMsQ0FBVTt3Q0FDYmUsSUFBSSxFQUFDLENBQVU7d0NBQ2ZDLFdBQVcsRUFBQyxDQUFxQjt3Q0FDakNDLEtBQUssRUFBRWhDLE1BQU0sQ0FBQ0QsUUFBUTt3Q0FDdEJrQyxRQUFRLEVBQUVoQyxZQUFZOzs7Ozs7Ozs7Ozs7d0dBRXpCd0IsQ0FBRztzSEFDRFMsQ0FBTTtvQ0FBQ0wsSUFBSSxFQUFDLENBQVE7OENBQUMsQ0FBTzs7Ozs7Ozs7Ozs7d0dBRTlCSixDQUFHOztnSEFDRFUsQ0FBQzs4SEFDQ3ZDLGtEQUFJOzRDQUFDd0MsSUFBSSxFQUFDLENBQVE7c0RBQUMsQ0FBTzs7Ozs7Ozs7Ozs7Z0hBRTVCRCxDQUFDOzhIQUNDdkMsa0RBQUk7NENBQUN3QyxJQUFJLEVBQUMsQ0FBZ0I7c0RBQUMsQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU94RCxDQUFDO0dBL0V1QnZDLE1BQU07O1FBQ2NOLG9EQUFPO1FBS1BFLHVFQUFpQjs7O0tBTnJDSSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lnbkluLnRzeD8yNzViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgdXNlRm9ybSBmcm9tIFwiLi4vbGliL3VzZUZvcm1cIjtcbmltcG9ydCB7IHJlZmV0Y2hVc2VyUXVlcnksIHVzZVNpZ25Jbk11dGF0aW9uIH0gZnJvbSBcIi4uL3R5cGVzL2dlbmVyYXRlZC1xdWVyaWVzXCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcIi4vc3R5bGVzL0Zvcm1TdHlsZXNcIjtcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSBcIi4vRXJyb3JNZXNzYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JbigpIHtcbiAgY29uc3Qge2lucHV0cywgaGFuZGxlQ2hhbmdlLCByZXNldEZvcm19ID0gdXNlRm9ybSh7XG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgfSk7XG5cbiAgY29uc3QgW3NpZ25Jbk11dGF0aW9uLCB7ZGF0YSwgbG9hZGluZ31dID0gdXNlU2lnbkluTXV0YXRpb24oKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlOiBSZWFjdC5Gb3JtRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBUT0RPIC0gYWRkIGVycm9ycyB0byBmb3JtIGZpZWxkc1xuICAgIGlmICghaW5wdXRzLmVtYWlsIHx8ICFpbnB1dHMucGFzc3dvcmQpIHJldHVybjtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNpZ25Jbk11dGF0aW9uKHtcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBlbWFpbDogaW5wdXRzLmVtYWlsLFxuICAgICAgICBwYXNzd29yZDogaW5wdXRzLnBhc3N3b3JkXG4gICAgICB9LFxuICAgICAgcmVmZXRjaFF1ZXJpZXM6IFtyZWZldGNoVXNlclF1ZXJ5KCldLFxuICAgIH0pXG4gICAgcmVzZXRGb3JtKClcblxuICAgIGlmIChyZXM/LmRhdGE/LmF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmQ/Ll9fdHlwZW5hbWUgPT09ICdVc2VyQXV0aGVudGljYXRpb25XaXRoUGFzc3dvcmRTdWNjZXNzJyAmJiByZXMuZGF0YS5hdXRoZW50aWNhdGVVc2VyV2l0aFBhc3N3b3JkLml0ZW0/LmlkKSB7XG4gICAgICBSb3V0ZXIucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiBgL2FjY291bnRgLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBlcnJvciA9XG4gIGRhdGE/LmF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmQuX190eXBlbmFtZSA9PT0gJ1VzZXJBdXRoZW50aWNhdGlvbldpdGhQYXNzd29yZEZhaWx1cmUnICYmXG4gIGRhdGEuYXV0aGVudGljYXRlVXNlcldpdGhQYXNzd29yZDtcbiAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMj5TaWduIEluPC9oMj5cbiAgICAgIDxGb3JtIG1ldGhvZD1cIlBPU1RcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAge2Vycm9yICYmIDxEaXNwbGF5RXJyb3IgZXJyb3I9e2Vycm9yfSAvPn1cbiAgICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXtsb2FkaW5nfSBhcmlhLWJ1c3k9e2xvYWRpbmd9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+XG4gICAgICAgICAgICAgIEVtYWlsIEFkZHJlc3NcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgRW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmVtYWlsfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgIFBhc3N3b3JkXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2lnbiBJbjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cInNpZ251cFwiPlNpZ24gVXA8L0xpbms+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wYXNzd29yZHJlc2V0XCI+UmVzZXQgUGFzc3dvcmQ8L0xpbms+PC9wPlxuICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9maWVsZHNldD5cbiAgICAgIDwvRm9ybT5cbiAgICA8Lz5cbiAgKVxufSJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJ1c2VGb3JtIiwicmVmZXRjaFVzZXJRdWVyeSIsInVzZVNpZ25Jbk11dGF0aW9uIiwiRm9ybSIsIkRpc3BsYXlFcnJvciIsIkxpbmsiLCJTaWduSW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwicmVzZXRGb3JtIiwic2lnbkluTXV0YXRpb24iLCJkYXRhIiwibG9hZGluZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJyZXMiLCJwcmV2ZW50RGVmYXVsdCIsInZhcmlhYmxlcyIsInJlZmV0Y2hRdWVyaWVzIiwiYXV0aGVudGljYXRlVXNlcldpdGhQYXNzd29yZCIsIl9fdHlwZW5hbWUiLCJpdGVtIiwiaWQiLCJwdXNoIiwicGF0aG5hbWUiLCJlcnJvciIsImgyIiwibWV0aG9kIiwib25TdWJtaXQiLCJmaWVsZHNldCIsImRpc2FibGVkIiwiYXJpYS1idXN5IiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImJ1dHRvbiIsInAiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SignIn.tsx\n");

/***/ })

});