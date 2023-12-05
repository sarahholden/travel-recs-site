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
exports.id = "pages/guides";
exports.ids = ["pages/guides"];
exports.modules = {

/***/ "./components/Guide.tsx":
/*!******************************!*\
  !*** ./components/Guide.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Guide)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Guide({ guide  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: guide.name\n    }, void 0, false, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guide.tsx\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0d1aWRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsUUFBUSxDQUFDQSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxLQUFLLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEMsTUFBTSw2RUFDSEMsQ0FBRztrQkFDREQsS0FBSyxDQUFDRSxJQUFJOzs7Ozs7QUFJakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvR3VpZGUudHN4P2M2MmMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3VpZGUoeyBndWlkZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtndWlkZS5uYW1lfVxuXG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiR3VpZGUiLCJndWlkZSIsImRpdiIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Guide.tsx\n");

/***/ }),

/***/ "./components/Guides.tsx":
/*!*******************************!*\
  !*** ./components/Guides.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Guides)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Guide */ \"./components/Guide.tsx\");\n\n\n\n\nconst ALL_GUIDES_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`\n  query ALL_GUIDES_QUERY {\n    allGuides {\n      id\n      name\n      location_info\n      status\n      destinations {\n        name\n        hover_description\n        photo {\n          image {\n            publicUrlTransformed\n          }\n        }\n      }\n    }\n  }\n`;\nfunction Guides() {\n    const { data , error , loading  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(ALL_GUIDES_QUERY);\n    const guides = data === null || data === void 0 ? void 0 : data.allGuides;\n    console.log(guides, error, loading);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guides.tsx\",\n        lineNumber: 30,\n        columnNumber: 23\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: error.message\n    }, void 0, false, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guides.tsx\",\n        lineNumber: 31,\n        columnNumber: 21\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"There was an error loading this page.\"\n    }, void 0, false, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guides.tsx\",\n        lineNumber: 32,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: guides.map((guide)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Guide__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                guide: guide\n            }, guide.id, false, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guides.tsx\",\n                lineNumber: 36,\n                columnNumber: 28\n            }, this)\n        )\n    }, void 0, false, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/Guides.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0d1aWRlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1o7QUFDRjtBQUUzQixLQUFLLENBQUNHLGdCQUFnQixHQUFHRixvREFBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQjdCO0FBR2UsUUFBUSxDQUFDRyxNQUFNLEdBQUcsQ0FBQztJQUNoQyxLQUFLLENBQUMsQ0FBQ0MsQ0FBQUEsSUFBSSxHQUFFQyxLQUFLLEdBQUVDLE9BQU8sR0FBQyxHQUFHUCx3REFBUSxDQUFDRyxnQkFBZ0I7SUFDeEQsS0FBSyxDQUFDSyxNQUFNLEdBQUdILElBQUksYUFBSkEsSUFBSSxjQUFKQSxJQUFJLENBQUpBLENBQWUsR0FBZkEsSUFBSSxDQUFFSSxTQUFTO0lBQzlCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsTUFBTSxFQUFFRixLQUFLLEVBQUVDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLEVBQUUsRUFBRUEsT0FBTyxFQUFFLE1BQU0sNkVBQUVLLENBQUM7a0JBQUMsQ0FBVTs7Ozs7O0lBQ2pDLEVBQUUsRUFBRU4sS0FBSyxFQUFFLE1BQU0sNkVBQUVNLENBQUM7a0JBQUVOLEtBQUssQ0FBQ08sT0FBTzs7Ozs7O0lBQ25DLEVBQUUsR0FBR1IsSUFBSSxFQUFFLE1BQU0sNkVBQUVPLENBQUM7a0JBQUMsQ0FBcUM7Ozs7OztJQUUxRCxNQUFNLDZFQUNIRSxDQUFHO2tCQUNETixNQUFNLENBQUNPLEdBQUcsRUFBQ0MsS0FBSywrRUFBS2QsOENBQUs7Z0JBQWdCYyxLQUFLLEVBQUVBLEtBQUs7ZUFBdEJBLEtBQUssQ0FBQ0MsRUFBRTs7Ozs7Ozs7Ozs7QUFHL0MsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvR3VpZGVzLnRzeD9iY2RjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IEd1aWRlIGZyb20gXCIuL0d1aWRlXCI7XG5cbmNvbnN0IEFMTF9HVUlERVNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IEFMTF9HVUlERVNfUVVFUlkge1xuICAgIGFsbEd1aWRlcyB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgbG9jYXRpb25faW5mb1xuICAgICAgc3RhdHVzXG4gICAgICBkZXN0aW5hdGlvbnMge1xuICAgICAgICBuYW1lXG4gICAgICAgIGhvdmVyX2Rlc2NyaXB0aW9uXG4gICAgICAgIHBob3RvIHtcbiAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHdWlkZXMoKSB7XG4gIGNvbnN0IHtkYXRhLCBlcnJvciwgbG9hZGluZ30gPSB1c2VRdWVyeShBTExfR1VJREVTX1FVRVJZKTtcbiAgY29uc3QgZ3VpZGVzID0gZGF0YT8uYWxsR3VpZGVzO1xuICBjb25zb2xlLmxvZyhndWlkZXMsIGVycm9yLCBsb2FkaW5nKTtcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxuICBpZiAoZXJyb3IpIHJldHVybiA8cD57ZXJyb3IubWVzc2FnZX08L3A+XG4gIGlmICghZGF0YSkgcmV0dXJuIDxwPlRoZXJlIHdhcyBhbiBlcnJvciBsb2FkaW5nIHRoaXMgcGFnZS48L3A+XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7Z3VpZGVzLm1hcChndWlkZSA9PiA8R3VpZGUga2V5PXtndWlkZS5pZH0gZ3VpZGU9e2d1aWRlfS8+KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4iXSwibmFtZXMiOlsidXNlUXVlcnkiLCJncWwiLCJHdWlkZSIsIkFMTF9HVUlERVNfUVVFUlkiLCJHdWlkZXMiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwiZ3VpZGVzIiwiYWxsR3VpZGVzIiwiY29uc29sZSIsImxvZyIsInAiLCJtZXNzYWdlIiwiZGl2IiwibWFwIiwiZ3VpZGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Guides.tsx\n");

/***/ }),

/***/ "./pages/guides.tsx":
/*!**************************!*\
  !*** ./pages/guides.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ guidesPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Guides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Guides */ \"./components/Guides.tsx\");\n\n\nfunction guidesPage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Guides__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/pages/guides.tsx\",\n            lineNumber: 5,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/pages/guides.tsx\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ndWlkZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlDO0FBRTFCLFFBQVEsQ0FBQ0MsVUFBVSxHQUFHLENBQUM7SUFDcEMsTUFBTSw2RUFBRUMsQ0FBRzs4RkFDUkYsMERBQU07Ozs7Ozs7Ozs7QUFFWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZ3VpZGVzLnRzeD85MjRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHdWlkZXMgZnJvbSAnLi4vY29tcG9uZW50cy9HdWlkZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGd1aWRlc1BhZ2UoKSB7XG4gIHJldHVybiA8ZGl2PlxuICAgIDxHdWlkZXMvPlxuICA8L2Rpdj5cbn0iXSwibmFtZXMiOlsiR3VpZGVzIiwiZ3VpZGVzUGFnZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/guides.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/guides.tsx"));
module.exports = __webpack_exports__;

})();