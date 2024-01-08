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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Businesses; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_supabase_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/supabase.client */ \"(app-pages-browser)/./lib/supabase.client.ts\");\n/* harmony import */ var _Business__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Business */ \"(app-pages-browser)/./components/Business.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Businesses() {\n    _s();\n    const [businesses, setBisness] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isLoading, updateIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const getData = async ()=>{\n        let { data: business, error } = await _lib_supabase_client__WEBPACK_IMPORTED_MODULE_2__.supabaseForClientComponent.from(\"business\").select(\"*\");\n        setBisness(business);\n        updateIsLoading(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[80%]\",\n        children: !isLoading ? businesses === null || businesses === void 0 ? void 0 : businesses.map((business, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Business__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                data: business\n            }, index, false, {\n                fileName: \"/home/mmardi/code/Supabase-Next.js/components/Businesses.tsx\",\n                lineNumber: 32,\n                columnNumber: 11\n            }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"loading...\"\n        }, void 0, false, {\n            fileName: \"/home/mmardi/code/Supabase-Next.js/components/Businesses.tsx\",\n            lineNumber: 35,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/mmardi/code/Supabase-Next.js/components/Businesses.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Businesses, \"EYE0lNFgv66ZKxfmB8L/0YP7/fI=\");\n_c = Businesses;\nvar _c;\n$RefreshReg$(_c, \"Businesses\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQnVzaW5lc3Nlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEM7QUFDdUI7QUFDakM7QUFVbkIsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsWUFBWUMsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBb0I7SUFDN0QsTUFBTSxDQUFDTSxXQUFXQyxnQkFBZ0IsR0FBR1AsK0NBQVFBLENBQUM7SUFDOUMsTUFBTVEsVUFBVTtRQUNkLElBQUksRUFBRUMsTUFBTUMsUUFBUSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNViw0RUFBMEJBLENBQzdEVyxJQUFJLENBQUMsWUFDTEMsTUFBTSxDQUFDO1FBQ1ZSLFdBQVdLO1FBQ1hILGdCQUFnQjtJQUNsQjtJQUVBUixnREFBU0EsQ0FBQztRQUNSUztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVO2tCQUNaLENBQUNULFlBQ0FGLHVCQUFBQSxpQ0FBQUEsV0FBWVksR0FBRyxDQUFDLENBQUNOLFVBQVVPLHNCQUN6Qiw4REFBQ2YsaURBQVFBO2dCQUFDTyxNQUFNQztlQUFlTzs7OztzQ0FHakMsOERBQUNDO3NCQUFFOzs7Ozs7Ozs7OztBQUlYO0dBMUJ3QmY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdXNpbmVzc2VzLnRzeD83MWZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN1cGFiYXNlRm9yQ2xpZW50Q29tcG9uZW50IH0gZnJvbSBcIkAvbGliL3N1cGFiYXNlLmNsaWVudFwiO1xuaW1wb3J0IEJ1c2luZXNzIGZyb20gXCIuL0J1c2luZXNzXCI7XG5cbmV4cG9ydCB0eXBlIEJ1c2luZXNzID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHVzZXJfaWQ6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgY3JlYXRlZF9hdDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnVzaW5lc3NlcygpIHtcbiAgY29uc3QgW2J1c2luZXNzZXMsIHNldEJpc25lc3NdID0gdXNlU3RhdGU8QnVzaW5lc3NbXSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaXNMb2FkaW5nLCB1cGRhdGVJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHsgZGF0YTogYnVzaW5lc3MsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUZvckNsaWVudENvbXBvbmVudFxuICAgICAgLmZyb20oXCJidXNpbmVzc1wiKVxuICAgICAgLnNlbGVjdChcIipcIik7XG4gICAgc2V0QmlzbmVzcyhidXNpbmVzcyk7XG4gICAgdXBkYXRlSXNMb2FkaW5nKGZhbHNlKVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0RGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzgwJV1cIj5cbiAgICAgIHshaXNMb2FkaW5nID8gKFxuICAgICAgICBidXNpbmVzc2VzPy5tYXAoKGJ1c2luZXNzLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxCdXNpbmVzcyBkYXRhPXtidXNpbmVzc30ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgKSlcbiAgICAgICkgOiAoXG4gICAgICAgIDxwPmxvYWRpbmcuLi48L3A+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3VwYWJhc2VGb3JDbGllbnRDb21wb25lbnQiLCJCdXNpbmVzcyIsIkJ1c2luZXNzZXMiLCJidXNpbmVzc2VzIiwic2V0QmlzbmVzcyIsImlzTG9hZGluZyIsInVwZGF0ZUlzTG9hZGluZyIsImdldERhdGEiLCJkYXRhIiwiYnVzaW5lc3MiLCJlcnJvciIsImZyb20iLCJzZWxlY3QiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpbmRleCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Businesses.tsx\n"));

/***/ })

});