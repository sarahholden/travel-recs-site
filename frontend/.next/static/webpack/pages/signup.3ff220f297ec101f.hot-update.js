"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./components/SignIn.tsx":
/*!*******************************!*\
  !*** ./components/SignIn.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignUp; }\n/* harmony export */ });\n/* harmony import */ var _Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.ts\");\n/* harmony import */ var _types_generated_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/generated-queries */ \"./types/generated-queries.ts\");\n/* harmony import */ var _styles_FormStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/FormStyles */ \"./components/styles/FormStyles.ts\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SignIn */ \"./components/SignIn.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SignUp() {\n    _s();\n    var ref = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        email: '',\n        password: '',\n        name: ''\n    }), inputs = ref.inputs, handleChange = ref.handleChange, resetForm = ref.resetForm;\n    var ref1 = _slicedToArray((0,_types_generated_queries__WEBPACK_IMPORTED_MODULE_3__.useSignUpMutation)(), 2), signUpMutation = ref1[0], ref2 = ref1[1], data = ref2.data, loading = ref2.loading, error = ref2.error;\n    function handleSubmit(e) {\n        return _handleSubmit.apply(this, arguments);\n    }\n    function _handleSubmit() {\n        _handleSubmit = _asyncToGenerator(_Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var res;\n            return _Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        if (!(!inputs.email || !inputs.password || !inputs.name)) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 3:\n                        _ctx.next = 5;\n                        return signUpMutation({\n                            variables: {\n                                email: inputs.email,\n                                password: inputs.password,\n                                name: inputs.name\n                            },\n                            refetchQueries: [\n                                (0,_types_generated_queries__WEBPACK_IMPORTED_MODULE_3__.refetchUserQuery)()\n                            ]\n                        });\n                    case 5:\n                        res = _ctx.sent;\n                        resetForm();\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleSubmit.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                error: error\n            }, void 0, false, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                lineNumber: 37,\n                columnNumber: 15\n            }, this),\n            (data === null || data === void 0 ? void 0 : data.createUser) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: \"Sign In to your account\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this),\n                    \"Signed up with \",\n                    data.createUser.email,\n                    \". Sign in to go to your account.\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SignIn__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: \"Sign Up for an account\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_FormStyles__WEBPACK_IMPORTED_MODULE_4__.Form, {\n                        method: \"POST\",\n                        onSubmit: handleSubmit,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"fieldset\", {\n                            disabled: loading,\n                            \"aria-busy\": loading,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                            htmlFor: \"email\",\n                                            children: \"Email Address\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            id: \"email\",\n                                            name: \"email\",\n                                            placeholder: \"Enter Your Email\",\n                                            value: inputs.email,\n                                            autoComplete: \"email\",\n                                            required: true,\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                            htmlFor: \"name\",\n                                            children: \"Name\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            id: \"name\",\n                                            name: \"name\",\n                                            placeholder: \"Enter Your Name\",\n                                            autoComplete: \"name\",\n                                            value: inputs.name,\n                                            required: true,\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                            htmlFor: \"password\",\n                                            children: \"Password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                            type: \"password\",\n                                            id: \"password\",\n                                            name: \"password\",\n                                            placeholder: \"Enter Your password\",\n                                            autoComplete: \"password\",\n                                            value: inputs.password,\n                                            required: true,\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        children: \"Sign In\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                                href: \"signup\",\n                                                children: \"Sign Up\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                                lineNumber: 99,\n                                                columnNumber: 15\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                                href: \"/passwordreset\",\n                                                children: \"Reset Password\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                                lineNumber: 102,\n                                                columnNumber: 15\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                            lineNumber: 101,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SignIn.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true);\n};\n_s(SignUp, \"w0YCXjYF5i6egmU2UfhtkQI7jbQ=\", false, function() {\n    return [\n        _lib_useForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _types_generated_queries__WEBPACK_IMPORTED_MODULE_3__.useSignUpMutation\n    ];\n});\n_c = SignUp;\nvar _c;\n$RefreshReg$(_c, \"SignUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHVzZUZvcm0gZnJvbSBcIi4uL2xpYi91c2VGb3JtXCI7XG5pbXBvcnQgeyByZWZldGNoVXNlclF1ZXJ5LCB1c2VTaWduVXBNdXRhdGlvbiB9IGZyb20gXCIuLi90eXBlcy9nZW5lcmF0ZWQtcXVlcmllc1wiO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCIuL3N0eWxlcy9Gb3JtU3R5bGVzXCI7XG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gXCIuL0Vycm9yTWVzc2FnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFNpZ25JbiBmcm9tIFwiLi9TaWduSW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnblVwKCkge1xuICBjb25zdCB7aW5wdXRzLCBoYW5kbGVDaGFuZ2UsIHJlc2V0Rm9ybX0gPSB1c2VGb3JtKHtcbiAgICBlbWFpbDogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICAgIG5hbWU6ICcnLFxuICB9KTtcblxuICBjb25zdCBbc2lnblVwTXV0YXRpb24sIHtkYXRhLCBsb2FkaW5nLCBlcnJvcn1dID0gdXNlU2lnblVwTXV0YXRpb24oKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlOiBSZWFjdC5Gb3JtRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBUT0RPIC0gYWRkIGVycm9ycyB0byBmb3JtIGZpZWxkc1xuICAgIGlmICghaW5wdXRzLmVtYWlsIHx8ICFpbnB1dHMucGFzc3dvcmQgfHwgIWlucHV0cy5uYW1lKSByZXR1cm47XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBzaWduVXBNdXRhdGlvbih7XG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgZW1haWw6IGlucHV0cy5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IGlucHV0cy5wYXNzd29yZCxcbiAgICAgICAgbmFtZTogaW5wdXRzLm5hbWVcbiAgICAgIH0sXG4gICAgICByZWZldGNoUXVlcmllczogW3JlZmV0Y2hVc2VyUXVlcnkoKV0sXG4gICAgfSlcbiAgICByZXNldEZvcm0oKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIHtlcnJvciAmJiA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvcn0gLz59XG5cblxuICAgICAge2RhdGE/LmNyZWF0ZVVzZXIgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyPlNpZ24gSW4gdG8geW91ciBhY2NvdW50PC9oMj5cbiAgICAgICAgICBTaWduZWQgdXAgd2l0aCB7ZGF0YS5jcmVhdGVVc2VyLmVtYWlsfS4gU2lnbiBpbiB0byBnbyB0byB5b3VyIGFjY291bnQuXG4gICAgICAgICAgPFNpZ25Jbi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8aDI+U2lnbiBVcCBmb3IgYW4gYWNjb3VudDwvaDI+XG4gICAgICAgICAgPEZvcm0gbWV0aG9kPVwiUE9TVFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuXG4gICAgICAgICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e2xvYWRpbmd9IGFyaWEtYnVzeT17bG9hZGluZ30+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgRW1haWwgQWRkcmVzc1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBFbWFpbFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgICAgTmFtZVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBOYW1lXCJcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5uYW1lfVxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICAgIFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNpZ24gSW48L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJzaWdudXBcIj5TaWduIFVwPC9MaW5rPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGFzc3dvcmRyZXNldFwiPlJlc2V0IFBhc3N3b3JkPC9MaW5rPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8Lz5cbiAgICAgIClcbiAgICB9XG5cbiAgICA8Lz5cbiAgKVxufVxuXG4iXSwibmFtZXMiOlsidXNlRm9ybSIsInJlZmV0Y2hVc2VyUXVlcnkiLCJ1c2VTaWduVXBNdXRhdGlvbiIsIkZvcm0iLCJEaXNwbGF5RXJyb3IiLCJMaW5rIiwiU2lnbkluIiwiU2lnblVwIiwiZW1haWwiLCJwYXNzd29yZCIsIm5hbWUiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJyZXNldEZvcm0iLCJzaWduVXBNdXRhdGlvbiIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJlIiwicmVzIiwicHJldmVudERlZmF1bHQiLCJ2YXJpYWJsZXMiLCJyZWZldGNoUXVlcmllcyIsImNyZWF0ZVVzZXIiLCJkaXYiLCJoMiIsIm1ldGhvZCIsIm9uU3VibWl0IiwiZmllbGRzZXQiLCJkaXNhYmxlZCIsImFyaWEtYnVzeSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsImF1dG9Db21wbGV0ZSIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJidXR0b24iLCJwIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SignIn.tsx\n");

/***/ })

});