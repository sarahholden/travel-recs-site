"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/passwordreset",{

/***/ "./components/PasswordReset.tsx":
/*!**************************************!*\
  !*** ./components/PasswordReset.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PasswordReset; }\n/* harmony export */ });\n/* harmony import */ var _Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.ts\");\n/* harmony import */ var _types_generated_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/generated-queries */ \"./types/generated-queries.ts\");\n/* harmony import */ var _styles_FormStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/FormStyles */ \"./components/styles/FormStyles.ts\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SignIn */ \"./components/SignIn.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction PasswordReset() {\n    _s();\n    var ref = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        email: ''\n    }), inputs = ref.inputs, handleChange = ref.handleChange, resetForm = ref.resetForm;\n    var ref1 = _slicedToArray((0,_types_generated_queries__WEBPACK_IMPORTED_MODULE_3__.useSignUpMutation)(), 2), signUpMutation = ref1[0], ref2 = ref1[1], data = ref2.data, loading = ref2.loading, error = ref2.error;\n    function handleSubmit(e) {\n        return _handleSubmit.apply(this, arguments);\n    }\n    function _handleSubmit() {\n        _handleSubmit = _asyncToGenerator(_Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var res;\n            return _Users_sarahholden_Desktop_desktop_items_travel_recs_travel_recs_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        if (!(!inputs.email || !inputs.password || !inputs.name)) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 3:\n                        _ctx.next = 5;\n                        return signUpMutation({\n                            variables: {\n                                email: inputs.email\n                            },\n                            refetchQueries: [\n                                (0,_types_generated_queries__WEBPACK_IMPORTED_MODULE_3__.refetchUserQuery)()\n                            ]\n                        });\n                    case 5:\n                        res = _ctx.sent;\n                        resetForm();\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleSubmit.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                error: error\n            }, void 0, false, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/PasswordReset.tsx\",\n                lineNumber: 33,\n                columnNumber: 15\n            }, this),\n            (data === null || data === void 0 ? void 0 : data.createUser) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: \"Sign In to your account\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/PasswordReset.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this),\n                    \"Signed up with \",\n                    data.createUser.email,\n                    \". Sign in to go to your account.\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SignIn__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/PasswordReset.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/PasswordReset.tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: \"Reset Your Password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/PasswordReset.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_FormStyles__WEBPACK_IMPORTED_MODULE_4__.Form, {\n                        method: \"POST\",\n                        onSubmit: handleSubmit,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"fieldset\", {\n                            disabled: loading,\n                            \"aria-busy\": loading,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                            htmlFor: \"email\",\n                                            children: \"Email Address\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/PasswordReset.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            id: \"email\",\n                                            name: \"email\",\n                                            placeholder: \"Enter Your Email\",\n                                            value: inputs.email,\n                                            autoComplete: \"email\",\n                                            required: true,\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/PasswordReset.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/PasswordReset.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        children: \"Reset Password\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/PasswordReset.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/PasswordReset.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                                href: \"signup\",\n                                                children: \"Sign Up\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/PasswordReset.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/PasswordReset.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                                href: \"/signin\",\n                                                children: \"Sign In\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/PasswordReset.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/PasswordReset.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/PasswordReset.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/PasswordReset.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/PasswordReset.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true);\n};\n_s(PasswordReset, \"w0YCXjYF5i6egmU2UfhtkQI7jbQ=\", false, function() {\n    return [\n        _lib_useForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _types_generated_queries__WEBPACK_IMPORTED_MODULE_3__.useSignUpMutation\n    ];\n});\n_c = PasswordReset;\nvar _c;\n$RefreshReg$(_c, \"PasswordReset\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bhc3N3b3JkUmVzZXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ29DO0FBQzRDO0FBQ3RDO0FBQ0Q7QUFDYjtBQUNDOztBQUVkLFFBQVEsQ0FBQ08sYUFBYSxHQUFHLENBQUM7O0lBQ3ZDLEdBQUssQ0FBcUNQLEdBRXhDLEdBRndDQSx3REFBTyxDQUFDLENBQUM7UUFDakRRLEtBQUssRUFBRSxDQUFFO0lBQ1gsQ0FBQyxHQUZNQyxNQUFNLEdBQTZCVCxHQUV4QyxDQUZLUyxNQUFNLEVBQUVDLFlBQVksR0FBZVYsR0FFeEMsQ0FGYVUsWUFBWSxFQUFFQyxTQUFTLEdBQUlYLEdBRXhDLENBRjJCVyxTQUFTO0lBSXRDLEdBQUssQ0FBNENULElBQW1CLGtCQUFuQkEsMkVBQWlCLFFBQTNEVSxjQUFjLEdBQTRCVixJQUFtQixZQUFuQkEsSUFBbUIsS0FBNUNXLElBQUksUUFBSkEsSUFBSSxFQUFFQyxPQUFPLFFBQVBBLE9BQU8sRUFBRUMsS0FBSyxRQUFMQSxLQUFLO2FBRTdCQyxZQUFZLENBQUNDLENBQWtCO2VBQS9CRCxhQUFZOzthQUFaQSxhQUFZO1FBQVpBLGFBQVksME1BQTNCLFFBQVEsU0FBb0JDLENBQWtCLEVBQUUsQ0FBQztnQkFNekNDLEdBQUc7Ozs7d0JBTFRELENBQUMsQ0FBQ0UsY0FBYyxFQUFFLENBQUM7K0JBR2RWLE1BQU0sQ0FBQ0QsS0FBSyxLQUFLQyxNQUFNLENBQUNXLFFBQVEsS0FBS1gsTUFBTSxDQUFDWSxJQUFJOzs7Ozs7OytCQUVuQ1QsY0FBYyxDQUFDLENBQUM7NEJBQ2hDVSxTQUFTLEVBQUUsQ0FBQztnQ0FDVmQsS0FBSyxFQUFFQyxNQUFNLENBQUNELEtBQUs7NEJBQ3JCLENBQUM7NEJBQ0RlLGNBQWMsRUFBRSxDQUFDdEI7Z0NBQUFBLDBFQUFnQjs0QkFBRSxDQUFDO3dCQUN0QyxDQUFDOzt3QkFMS2lCLEdBQUcsWUFyQmIsQ0EwQk07d0JBQ0ZQLFNBQVM7Ozs7OztRQUNYLENBQUM7ZUFiY0ssYUFBWTs7SUFlM0IsTUFBTTs7WUFFSEQsS0FBSyxnRkFBS1gscURBQVk7Z0JBQUNXLEtBQUssRUFBRUEsS0FBSzs7Ozs7O2FBR2pDRixJQUFJLGFBQUpBLElBQUksY0FBSkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsSUFBSSxDQUFFVyxVQUFVLGdGQUNkQyxDQUFHOztnR0FDREMsQ0FBRTtrQ0FBQyxDQUF1Qjs7Ozs7O29CQUFLLENBQ2pCO29CQUFDYixJQUFJLENBQUNXLFVBQVUsQ0FBQ2hCLEtBQUs7b0JBQUMsQ0FDdEM7Z0dBQUNGLCtDQUFNOzs7Ozs7Ozs7Ozs7Z0dBSU5vQixDQUFFO2tDQUFDLENBQW1COzs7Ozs7Z0dBQ3RCdkIsb0RBQUk7d0JBQUN3QixNQUFNLEVBQUMsQ0FBTTt3QkFBQ0MsUUFBUSxFQUFFWixZQUFZOzhHQUV2Q2EsQ0FBUTs0QkFBQ0MsUUFBUSxFQUFFaEIsT0FBTzs0QkFBRWlCLENBQVMsWUFBRWpCLE9BQU87OzRHQUM1Q1csQ0FBRzs7b0hBQ0RPLENBQUs7NENBQUNDLE9BQU8sRUFBQyxDQUFPO3NEQUFDLENBRXZCOzs7Ozs7b0hBQ0NDLENBQUs7NENBQ0pDLElBQUksRUFBQyxDQUFPOzRDQUNaQyxFQUFFLEVBQUMsQ0FBTzs0Q0FDVmYsSUFBSSxFQUFDLENBQU87NENBQ1pnQixXQUFXLEVBQUMsQ0FBa0I7NENBQzlCQyxLQUFLLEVBQUU3QixNQUFNLENBQUNELEtBQUs7NENBQ25CK0IsWUFBWSxFQUFDLENBQU87NENBQ3BCQyxRQUFROzRDQUNSQyxRQUFRLEVBQUUvQixZQUFZOzs7Ozs7Ozs7Ozs7NEdBRTNCZSxDQUFHOzBIQUNEaUIsQ0FBTTt3Q0FBQ1AsSUFBSSxFQUFDLENBQVE7a0RBQUMsQ0FBYzs7Ozs7Ozs7Ozs7NEdBRXJDVixDQUFHOztvSEFDRGtCLENBQUM7a0lBQ0N0QyxrREFBSTtnREFBQ3VDLElBQUksRUFBQyxDQUFROzBEQUFDLENBQU87Ozs7Ozs7Ozs7O29IQUU1QkQsQ0FBQztrSUFDQ3RDLGtEQUFJO2dEQUFDdUMsSUFBSSxFQUFDLENBQVM7MERBQUMsQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZNUMsQ0FBQztHQXpFdUJyQyxhQUFhOztRQUNPUCxvREFBTztRQUlBRSx1RUFBaUI7OztLQUw1Q0ssYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bhc3N3b3JkUmVzZXQudHN4P2RiNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB1c2VGb3JtIGZyb20gXCIuLi9saWIvdXNlRm9ybVwiO1xuaW1wb3J0IHsgcmVmZXRjaFVzZXJRdWVyeSwgdXNlU2lnblVwTXV0YXRpb24gfSBmcm9tIFwiLi4vdHlwZXMvZ2VuZXJhdGVkLXF1ZXJpZXNcIjtcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiLi9zdHlsZXMvRm9ybVN0eWxlc1wiO1xuaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tIFwiLi9FcnJvck1lc3NhZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBTaWduSW4gZnJvbSBcIi4vU2lnbkluXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhc3N3b3JkUmVzZXQoKSB7XG4gIGNvbnN0IHtpbnB1dHMsIGhhbmRsZUNoYW5nZSwgcmVzZXRGb3JtfSA9IHVzZUZvcm0oe1xuICAgIGVtYWlsOiAnJyxcbiAgfSk7XG5cbiAgY29uc3QgW3NpZ25VcE11dGF0aW9uLCB7ZGF0YSwgbG9hZGluZywgZXJyb3J9XSA9IHVzZVNpZ25VcE11dGF0aW9uKClcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZTogUmVhY3QuRm9ybUV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gVE9ETyAtIGFkZCBlcnJvcnMgdG8gZm9ybSBmaWVsZHNcbiAgICBpZiAoIWlucHV0cy5lbWFpbCB8fCAhaW5wdXRzLnBhc3N3b3JkIHx8ICFpbnB1dHMubmFtZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgc2lnblVwTXV0YXRpb24oe1xuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGVtYWlsOiBpbnB1dHMuZW1haWwsXG4gICAgICB9LFxuICAgICAgcmVmZXRjaFF1ZXJpZXM6IFtyZWZldGNoVXNlclF1ZXJ5KCldLFxuICAgIH0pXG4gICAgcmVzZXRGb3JtKClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICB7ZXJyb3IgJiYgPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+fVxuXG5cbiAgICAgIHtkYXRhPy5jcmVhdGVVc2VyID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMj5TaWduIEluIHRvIHlvdXIgYWNjb3VudDwvaDI+XG4gICAgICAgICAgU2lnbmVkIHVwIHdpdGgge2RhdGEuY3JlYXRlVXNlci5lbWFpbH0uIFNpZ24gaW4gdG8gZ28gdG8geW91ciBhY2NvdW50LlxuICAgICAgICAgIDxTaWduSW4vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGgyPlJlc2V0IFlvdXIgUGFzc3dvcmQ8L2gyPlxuICAgICAgICAgIDxGb3JtIG1ldGhvZD1cIlBPU1RcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cblxuICAgICAgICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXtsb2FkaW5nfSBhcmlhLWJ1c3k9e2xvYWRpbmd9PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5cbiAgICAgICAgICAgICAgICAgIEVtYWlsIEFkZHJlc3NcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgRW1haWxcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5lbWFpbH1cbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlJlc2V0IFBhc3N3b3JkPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJzaWdudXBcIj5TaWduIFVwPC9MaW5rPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbmluXCI+U2lnbiBJbjwvTGluaz5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2ZpZWxkc2V0PiBcbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvPlxuICAgICAgKVxuICAgIH1cblxuICAgIDwvPlxuICApXG59XG5cbiJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwicmVmZXRjaFVzZXJRdWVyeSIsInVzZVNpZ25VcE11dGF0aW9uIiwiRm9ybSIsIkRpc3BsYXlFcnJvciIsIkxpbmsiLCJTaWduSW4iLCJQYXNzd29yZFJlc2V0IiwiZW1haWwiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJyZXNldEZvcm0iLCJzaWduVXBNdXRhdGlvbiIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJlIiwicmVzIiwicHJldmVudERlZmF1bHQiLCJwYXNzd29yZCIsIm5hbWUiLCJ2YXJpYWJsZXMiLCJyZWZldGNoUXVlcmllcyIsImNyZWF0ZVVzZXIiLCJkaXYiLCJoMiIsIm1ldGhvZCIsIm9uU3VibWl0IiwiZmllbGRzZXQiLCJkaXNhYmxlZCIsImFyaWEtYnVzeSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsImF1dG9Db21wbGV0ZSIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJidXR0b24iLCJwIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PasswordReset.tsx\n");

/***/ })

});