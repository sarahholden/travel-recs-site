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
exports.id = "pages/guide/[id]";
exports.ids = ["pages/guide/[id]"];
exports.modules = {

/***/ "./components/SingleGuide.tsx":
/*!************************************!*\
  !*** ./components/SingleGuide.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_GUIDE_QUERY\": () => (/* binding */ GET_GUIDE_QUERY),\n/* harmony export */   \"default\": () => (/* binding */ SingleGuide)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst GuideStyles = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`\n  background-color: yellow;\n`;\nconst GET_GUIDE_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`\n  query GET_GUIDE_QUERY($id: ID!) {\n    Guide(where: { id: $id }) {\n      id\n      name\n      location_info\n      status\n      image {\n        publicUrlTransformed\n      }\n      altText\n      destinations {\n        id\n        name\n        hover_description\n        photo {\n          id\n          image {\n            publicUrlTransformed\n          }\n        }\n      }\n    }\n  }\n`;\nfunction SingleGuide({ id  }) {\n    var ref, ref1;\n    // const { data, loading, error } = useGetGuideQuery({\n    //   variables: { id },\n    // });\n    const { data , loading , error  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(GET_GUIDE_QUERY, {\n        variables: {\n            id\n        }\n    });\n    if (!data) return null;\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Error loading page\"\n    }, void 0, false, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SingleGuide.tsx\",\n        lineNumber: 49,\n        columnNumber: 21\n    }, this);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SingleGuide.tsx\",\n        lineNumber: 50,\n        columnNumber: 23\n    }, this);\n    const { Guide  } = data;\n    var _altText;\n    return Guide ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GuideStyles, {\n        \"data-testid\": \"singleGuide\",\n        children: [\n            Guide.name,\n            Guide.location_info,\n            (ref = Guide.destinations) === null || ref === void 0 ? void 0 : ref.map((destination)=>destination.name\n            ),\n            ((ref1 = Guide.image) === null || ref1 === void 0 ? void 0 : ref1.publicUrlTransformed) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: Guide.image.publicUrlTransformed,\n                alt: (_altText = Guide.altText) !== null && _altText !== void 0 ? _altText : `Image of ${Guide.name}`\n            }, void 0, false, {\n                fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SingleGuide.tsx\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/components/SingleGuide.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this) : null;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpbmdsZUd1aWRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzQztBQUVUO0FBQ1k7QUFFekMsS0FBSyxDQUFDRyxXQUFXLEdBQUdILDhEQUFVLENBQUM7O0FBRS9CO0FBRU8sS0FBSyxDQUFDSyxlQUFlLEdBQUdKLG9EQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCbkM7QUFFZSxRQUFRLENBQUNLLFdBQVcsQ0FBQyxDQUFDLENBQUNDLEVBQUUsRUFBaUIsQ0FBQyxFQUFFLENBQUM7UUFzQnREQyxHQUFrQixFQUNsQkEsSUFBVztJQXRCaEIsRUFBc0Q7SUFDdEQsRUFBdUI7SUFDdkIsRUFBTTtJQUVOLEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksR0FBRUMsT0FBTyxHQUFFQyxLQUFLLEVBQUMsQ0FBQyxHQUFHVCx3REFBUSxDQUFDRyxlQUFlLEVBQUUsQ0FBQztRQUMxRE8sU0FBUyxFQUFFLENBQUM7WUFDVkwsRUFBRTtRQUNKLENBQUM7SUFDSCxDQUFDO0lBRUQsRUFBRSxHQUFHRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7SUFFdEIsRUFBRSxFQUFFRSxLQUFLLEVBQUUsTUFBTSw2RUFBRVAsQ0FBRztrQkFBQyxDQUFrQjs7Ozs7O0lBQ3pDLEVBQUUsRUFBRU0sT0FBTyxFQUFFLE1BQU0sNkVBQUVOLENBQUc7a0JBQUMsQ0FBVTs7Ozs7O0lBRW5DLEtBQUssQ0FBQyxDQUFDLENBQUNJLEtBQUssRUFBQyxDQUFDLEdBQUdDLElBQUk7UUFVVEQsUUFBYTtJQVIxQixNQUFNLENBQUNBLEtBQUssK0VBQ1RMLFdBQVc7UUFBQ1UsQ0FBVyxjQUFDLENBQWE7O1lBQ25DTCxLQUFLLENBQUNNLElBQUk7WUFDVk4sS0FBSyxDQUFDTyxhQUFhO2FBQ25CUCxHQUFrQixHQUFsQkEsS0FBSyxDQUFDUSxZQUFZLGNBQWxCUixHQUFrQixjQUFsQkEsSUFBSSxDQUFKQSxDQUF1QixHQUF2QkEsR0FBa0IsQ0FBRVMsR0FBRyxFQUFFQyxXQUFXLEdBQUtBLFdBQVcsQ0FBQ0osSUFBSTs7Y0FDekROLElBQVcsR0FBWEEsS0FBSyxDQUFDVyxLQUFLLGNBQVhYLElBQVcsY0FBWEEsSUFBSSxDQUFKQSxDQUFpQyxHQUFqQ0EsSUFBVyxDQUFFWSxvQkFBb0IsaUZBQy9CQyxDQUFHO2dCQUNGQyxHQUFHLEVBQUVkLEtBQUssQ0FBQ1csS0FBSyxDQUFDQyxvQkFBb0I7Z0JBQ3JDRyxHQUFHLEdBQUVmLFFBQWEsR0FBYkEsS0FBSyxDQUFDZ0IsT0FBTyxjQUFiaEIsUUFBYSxjQUFiQSxRQUFhLElBQUssU0FBUyxFQUFFQSxLQUFLLENBQUNNLElBQUk7Ozs7Ozs7Ozs7O2VBSWhELElBQUk7QUFDVixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaW5nbGVHdWlkZS50c3g/MjgxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlR2V0R3VpZGVRdWVyeSB9IGZyb20gXCIuLi90eXBlcy9nZW5lcmF0ZWQtcXVlcmllc1wiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmNvbnN0IEd1aWRlU3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuYDtcblxuZXhwb3J0IGNvbnN0IEdFVF9HVUlERV9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgR0VUX0dVSURFX1FVRVJZKCRpZDogSUQhKSB7XG4gICAgR3VpZGUod2hlcmU6IHsgaWQ6ICRpZCB9KSB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgbG9jYXRpb25faW5mb1xuICAgICAgc3RhdHVzXG4gICAgICBpbWFnZSB7XG4gICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXG4gICAgICB9XG4gICAgICBhbHRUZXh0XG4gICAgICBkZXN0aW5hdGlvbnMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGhvdmVyX2Rlc2NyaXB0aW9uXG4gICAgICAgIHBob3RvIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5nbGVHdWlkZSh7IGlkIH06IHsgaWQ6IHN0cmluZyB9KSB7XG4gIC8vIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZUdldEd1aWRlUXVlcnkoe1xuICAvLyAgIHZhcmlhYmxlczogeyBpZCB9LFxuICAvLyB9KTtcblxuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShHRVRfR1VJREVfUVVFUlksIHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkLFxuICAgIH0sXG4gIH0pO1xuXG4gIGlmICghZGF0YSkgcmV0dXJuIG51bGw7XG5cbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5FcnJvciBsb2FkaW5nIHBhZ2U8L2Rpdj47XG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXG4gIGNvbnN0IHsgR3VpZGUgfSA9IGRhdGE7XG5cbiAgcmV0dXJuIEd1aWRlID8gKFxuICAgIDxHdWlkZVN0eWxlcyBkYXRhLXRlc3RpZD1cInNpbmdsZUd1aWRlXCI+XG4gICAgICB7R3VpZGUubmFtZX1cbiAgICAgIHtHdWlkZS5sb2NhdGlvbl9pbmZvfVxuICAgICAge0d1aWRlLmRlc3RpbmF0aW9ucz8ubWFwKChkZXN0aW5hdGlvbikgPT4gZGVzdGluYXRpb24ubmFtZSl9XG4gICAgICB7R3VpZGUuaW1hZ2U/LnB1YmxpY1VybFRyYW5zZm9ybWVkICYmIChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17R3VpZGUuaW1hZ2UucHVibGljVXJsVHJhbnNmb3JtZWR9XG4gICAgICAgICAgYWx0PXtHdWlkZS5hbHRUZXh0ID8/IGBJbWFnZSBvZiAke0d1aWRlLm5hbWV9YH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9HdWlkZVN0eWxlcz5cbiAgKSA6IG51bGw7XG59XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiZ3FsIiwidXNlUXVlcnkiLCJHdWlkZVN0eWxlcyIsImRpdiIsIkdFVF9HVUlERV9RVUVSWSIsIlNpbmdsZUd1aWRlIiwiaWQiLCJHdWlkZSIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJ2YXJpYWJsZXMiLCJkYXRhLXRlc3RpZCIsIm5hbWUiLCJsb2NhdGlvbl9pbmZvIiwiZGVzdGluYXRpb25zIiwibWFwIiwiZGVzdGluYXRpb24iLCJpbWFnZSIsInB1YmxpY1VybFRyYW5zZm9ybWVkIiwiaW1nIiwic3JjIiwiYWx0IiwiYWx0VGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SingleGuide.tsx\n");

/***/ }),

/***/ "./pages/guide/[id].tsx":
/*!******************************!*\
  !*** ./pages/guide/[id].tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SingleGuide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/SingleGuide */ \"./components/SingleGuide.tsx\");\n\n\nfunction SingleGuidePage({ query  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SingleGuide__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        id: query.id\n    }, void 0, false, {\n        fileName: \"/Users/sarahholden/Desktop/desktop_items/travel_recs/travel-recs/frontend/pages/guide/[id].tsx\",\n        lineNumber: 12,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleGuidePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ndWlkZS9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNzRDtTQVM3Q0MsZUFBZSxDQUFDLENBQUNDLENBQUFBLEtBQUssRUFBc0IsQ0FBQyxFQUFFLENBQUM7SUFDdkQsTUFBTSw2RUFBRUYsK0RBQVc7UUFBQ0csRUFBRSxFQUFFRCxLQUFLLENBQUNDLEVBQUU7Ozs7OztBQUNsQyxDQUFDO0FBRUQsaUVBQWVGLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ndWlkZS9baWRdLnRzeD81MDljIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFNpbmdsZUd1aWRlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NpbmdsZUd1aWRlXCI7XG5cbnR5cGUgc2luZ2xlR3VpZGVQYWdlUHJvcHMgPSB7XG4gIHF1ZXJ5OiB7XG4gICAgaWQ6IHN0cmluZztcbiAgfTtcbn07XG5cblxuZnVuY3Rpb24gU2luZ2xlR3VpZGVQYWdlKHtxdWVyeX06IHNpbmdsZUd1aWRlUGFnZVByb3BzKSB7XG4gIHJldHVybiA8U2luZ2xlR3VpZGUgaWQ9e3F1ZXJ5LmlkfSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlR3VpZGVQYWdlIl0sIm5hbWVzIjpbIlNpbmdsZUd1aWRlIiwiU2luZ2xlR3VpZGVQYWdlIiwicXVlcnkiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/guide/[id].tsx\n");

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

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/guide/[id].tsx"));
module.exports = __webpack_exports__;

})();