"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Guides.tsx":
/*!*******************************!*\
  !*** ./components/Guides.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Guides)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ALL_GUIDES_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`\n  query ALL_GUIDES_QUERY {\n    allGuides {\n      id\n      name\n      location_info\n      status\n      destinations {\n        name\n        hover_description\n        photo {\n          image {\n            publicUrlTransformed\n          }\n        }\n      }\n    }\n  }\n`;\nfunction Guides() {\n    const { data , error , loading  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(ALL_GUIDES_QUERY);\n    console.log(data, error, loading);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guides.tsx\",\n        lineNumber: 28,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Guides!\"\n    }, void 0, false, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guides.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0d1aWRlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUM7QUFDWjtBQUU3QixLQUFLLENBQUNFLGdCQUFnQixHQUFHRCxvREFBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQjdCO0FBR2UsUUFBUSxDQUFDRSxNQUFNLEdBQUcsQ0FBQztJQUNoQyxLQUFLLENBQUMsQ0FBQ0MsQ0FBQUEsSUFBSSxHQUFFQyxLQUFLLEdBQUVDLE9BQU8sR0FBQyxHQUFHTix3REFBUSxDQUFDRSxnQkFBZ0I7SUFDeERLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsRUFBRSxFQUFFQSxPQUFPLEVBQUUsTUFBTSw2RUFBRUcsQ0FBQztrQkFBQyxDQUFVOzs7Ozs7SUFDakMsTUFBTSw2RUFDSEMsQ0FBRztrQkFBQyxDQUVMOzs7Ozs7QUFFSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HdWlkZXMudHN4P2JjZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5cbmNvbnN0IEFMTF9HVUlERVNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IEFMTF9HVUlERVNfUVVFUlkge1xuICAgIGFsbEd1aWRlcyB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgbG9jYXRpb25faW5mb1xuICAgICAgc3RhdHVzXG4gICAgICBkZXN0aW5hdGlvbnMge1xuICAgICAgICBuYW1lXG4gICAgICAgIGhvdmVyX2Rlc2NyaXB0aW9uXG4gICAgICAgIHBob3RvIHtcbiAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHdWlkZXMoKSB7XG4gIGNvbnN0IHtkYXRhLCBlcnJvciwgbG9hZGluZ30gPSB1c2VRdWVyeShBTExfR1VJREVTX1FVRVJZKTtcbiAgY29uc29sZS5sb2coZGF0YSwgZXJyb3IsIGxvYWRpbmcpO1xuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIEd1aWRlcyFcbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsImdxbCIsIkFMTF9HVUlERVNfUVVFUlkiLCJHdWlkZXMiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwiY29uc29sZSIsImxvZyIsInAiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Guides.tsx\n");

/***/ }),

/***/ "./pages/guides.tsx":
/*!**************************!*\
  !*** ./pages/guides.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ guidesPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Guides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Guides */ \"./components/Guides.tsx\");\n\n\nfunction guidesPage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Guides__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/pages/guides.tsx\",\n            lineNumber: 5,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/pages/guides.tsx\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ndWlkZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlDO0FBRTFCLFFBQVEsQ0FBQ0MsVUFBVSxHQUFHLENBQUM7SUFDcEMsTUFBTSw2RUFBRUMsQ0FBRzs4RkFDUkYsMERBQU07Ozs7Ozs7Ozs7QUFFWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZ3VpZGVzLnRzeD85MjRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHdWlkZXMgZnJvbSAnLi4vY29tcG9uZW50cy9HdWlkZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGd1aWRlc1BhZ2UoKSB7XG4gIHJldHVybiA8ZGl2PlxuICAgIDxHdWlkZXMvPlxuICA8L2Rpdj5cbn0iXSwibmFtZXMiOlsiR3VpZGVzIiwiZ3VpZGVzUGFnZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/guides.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _guides__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _guides__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guides */ \"./pages/guides.tsx\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9ndWlkZXMnIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("graphql-tag");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();