"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Businesses.tsx":
/*!***********************************!*\
  !*** ./components/Businesses.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Businesses; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_supabase_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/supabase.client */ \"(app-pages-browser)/./lib/supabase.client.ts\");\n/* harmony import */ var _Business__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Business */ \"(app-pages-browser)/./components/Business.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Businesses() {\n    _s();\n    const [businesses, setBisness] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const getData = async ()=>{\n        let { data: business, error } = await _lib_supabase_client__WEBPACK_IMPORTED_MODULE_2__.supabaseForClientComponent.from(\"business\").select(\"*\");\n        setBisness(business);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: businesses === null || businesses === void 0 ? void 0 : businesses.map((business, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Business__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                data: business\n            }, index, false, {\n                fileName: \"/home/mmardi/code/Supabase-Next.js/components/Businesses.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/home/mmardi/code/Supabase-Next.js/components/Businesses.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Businesses, \"+tunipiiR2tw60j0aMs3dgiHvjM=\");\n_c = Businesses;\nvar _c;\n$RefreshReg$(_c, \"Businesses\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQnVzaW5lc3Nlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEM7QUFDdUI7QUFDakM7QUFVbkIsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsWUFBWUMsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBb0I7SUFDN0QsTUFBTU0sVUFBVTtRQUNkLElBQUksRUFBRUMsTUFBTUMsUUFBUSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNUiw0RUFBMEJBLENBQzdEUyxJQUFJLENBQUMsWUFDTEMsTUFBTSxDQUFDO1FBQ1ZOLFdBQVdHO0lBQ2I7SUFFQVQsZ0RBQVNBLENBQUMsS0FBTztJQUVqQixxQkFDRSw4REFBQ2E7UUFBSUMsV0FBVTtrQkFDWlQsdUJBQUFBLGlDQUFBQSxXQUFZVSxHQUFHLENBQUMsQ0FBQ04sVUFBVU8sc0JBQzFCLDhEQUFDYixpREFBUUE7Z0JBQUNLLE1BQU1DO2VBQTJCTzs7Ozs7Ozs7OztBQUluRDtHQWxCd0JaO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQnVzaW5lc3Nlcy50c3g/NzFmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdXBhYmFzZUZvckNsaWVudENvbXBvbmVudCB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZS5jbGllbnRcIjtcbmltcG9ydCBCdXNpbmVzcyBmcm9tIFwiLi9CdXNpbmVzc1wiO1xuXG50eXBlIEJ1c2luZXNzID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHVzZXJfaWQ6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXNpbmVzc2VzKCkge1xuICBjb25zdCBbYnVzaW5lc3Nlcywgc2V0QmlzbmVzc10gPSB1c2VTdGF0ZTxCdXNpbmVzc1tdIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHsgZGF0YTogYnVzaW5lc3MsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUZvckNsaWVudENvbXBvbmVudFxuICAgICAgLmZyb20oXCJidXNpbmVzc1wiKVxuICAgICAgLnNlbGVjdChcIipcIik7XG4gICAgc2V0QmlzbmVzcyhidXNpbmVzcyk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHt9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICB7YnVzaW5lc3Nlcz8ubWFwKChidXNpbmVzcywgaW5kZXgpID0+IChcbiAgICAgICAgPEJ1c2luZXNzIGRhdGE9e2J1c2luZXNzIGFzIEJ1c2luZXNzfSBrZXk9e2luZGV4fSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdXBhYmFzZUZvckNsaWVudENvbXBvbmVudCIsIkJ1c2luZXNzIiwiQnVzaW5lc3NlcyIsImJ1c2luZXNzZXMiLCJzZXRCaXNuZXNzIiwiZ2V0RGF0YSIsImRhdGEiLCJidXNpbmVzcyIsImVycm9yIiwiZnJvbSIsInNlbGVjdCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Businesses.tsx\n"));

/***/ })

});