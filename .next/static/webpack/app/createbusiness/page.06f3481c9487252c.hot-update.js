"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/createbusiness/page",{

/***/ "(app-pages-browser)/./app/createbusiness/page.tsx":
/*!*************************************!*\
  !*** ./app/createbusiness/page.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_supabase_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/supabase.client */ \"(app-pages-browser)/./lib/supabase.client.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction page() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [formError, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    async function createBusiness(e) {\n        e.preventDefault();\n        const { data: { user }, error } = await _lib_supabase_client__WEBPACK_IMPORTED_MODULE_1__.supabaseForClientComponent.auth.getUser();\n        if (error) router.push(\"/\");\n        const data = await _lib_supabase_client__WEBPACK_IMPORTED_MODULE_1__.supabaseForClientComponent.from(\"business\").insert([\n            {\n                name: name,\n                user_id: user === null || user === void 0 ? void 0 : user.id\n            }\n        ]).select();\n        if (error) setError(data.error);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: createBusiness,\n            className: \"w-[300px] flex flex-col items-center gap-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl\",\n                    children: \"Create a new business\"\n                }, void 0, false, {\n                    fileName: \"/home/mmardi/code/Supabase-Next.js/app/createbusiness/page.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: (e)=>setName(e.target.value),\n                    type: \"text\",\n                    className: \"w-full bg-transparent outline-none border border-gray-500 h-[50px] rounded-lg\"\n                }, void 0, false, {\n                    fileName: \"/home/mmardi/code/Supabase-Next.js/app/createbusiness/page.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-full bg-green-700 h-[50px] rounded-lg\",\n                    children: \"Create\"\n                }, void 0, false, {\n                    fileName: \"/home/mmardi/code/Supabase-Next.js/app/createbusiness/page.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-red-500\",\n                    children: \"here is the error\"\n                }, void 0, false, {\n                    fileName: \"/home/mmardi/code/Supabase-Next.js/app/createbusiness/page.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mmardi/code/Supabase-Next.js/app/createbusiness/page.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/mmardi/code/Supabase-Next.js/app/createbusiness/page.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"qvLQ+jcD7FLgjicnTO2y1lJiYhs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jcmVhdGVidXNpbmVzcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDbUU7QUFDaEI7QUFDUDtBQUk1QyxTQUFTSTs7SUFDUCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUM7SUFDakMsTUFBTUssU0FBU0osMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ssV0FBV0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN2QyxlQUFlUSxlQUFlQyxDQUE2QjtRQUN6REEsRUFBRUMsY0FBYztRQUNoQixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1mLDRFQUEwQkEsQ0FBQ2dCLElBQUksQ0FBQ0MsT0FBTztRQUMvRSxJQUFJRixPQUNGUixPQUFPVyxJQUFJLENBQUM7UUFDZCxNQUFNTCxPQUFPLE1BQU1iLDRFQUEwQkEsQ0FDMUNtQixJQUFJLENBQUMsWUFDTEMsTUFBTSxDQUFDO1lBQUM7Z0JBQUVmLE1BQU1BO2dCQUFNZ0IsT0FBTyxFQUFDUCxpQkFBQUEsMkJBQUFBLEtBQU1RLEVBQUU7WUFBQztTQUFFLEVBQ3pDQyxNQUFNO1FBQ1QsSUFBR1IsT0FDRE4sU0FBU0ksS0FBS0UsS0FBSztJQUN2QjtJQUNBLHFCQUNFLDhEQUFDUztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUNDQyxVQUFVakI7WUFDVmUsV0FBVTs7OEJBRVYsOERBQUNHO29CQUFHSCxXQUFVOzhCQUFXOzs7Ozs7OEJBQ3pCLDhEQUFDSTtvQkFDQ0MsVUFBVSxDQUFDbkIsSUFBTUwsUUFBUUssRUFBRW9CLE1BQU0sQ0FBQ0MsS0FBSztvQkFDdkNDLE1BQUs7b0JBQ0xSLFdBQVU7Ozs7Ozs4QkFFWiw4REFBQ1M7b0JBQU9ULFdBQVU7OEJBQTBDOzs7Ozs7OEJBRzVELDhEQUFDVTtvQkFBRVYsV0FBVTs4QkFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJcEM7R0FuQ1NyQjs7UUFFUUQsc0RBQVNBOzs7QUFtQzFCLCtEQUFlQyxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jcmVhdGVidXNpbmVzcy9wYWdlLnRzeD8wOTAyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgc3VwYWJhc2VGb3JDbGllbnRDb21wb25lbnQgfSBmcm9tIFwiQC9saWIvc3VwYWJhc2UuY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgRm9ybUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG5cblxuZnVuY3Rpb24gcGFnZSgpIHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbZm9ybUVycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcbiAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQnVzaW5lc3MoZTogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlRm9yQ2xpZW50Q29tcG9uZW50LmF1dGguZ2V0VXNlcigpO1xuICAgIGlmIChlcnJvcilcbiAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHN1cGFiYXNlRm9yQ2xpZW50Q29tcG9uZW50XG4gICAgICAuZnJvbShcImJ1c2luZXNzXCIpXG4gICAgICAuaW5zZXJ0KFt7IG5hbWU6IG5hbWUsIHVzZXJfaWQ6dXNlcj8uaWQgfV0pXG4gICAgICAuc2VsZWN0KCk7XG4gICAgaWYoZXJyb3IpXG4gICAgICBzZXRFcnJvcihkYXRhLmVycm9yKVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxmb3JtXG4gICAgICAgIG9uU3VibWl0PXtjcmVhdGVCdXNpbmVzc31cbiAgICAgICAgY2xhc3NOYW1lPVwidy1bMzAwcHhdIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC01XCJcbiAgICAgID5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+Q3JlYXRlIGEgbmV3IGJ1c2luZXNzPC9oMT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXRyYW5zcGFyZW50IG91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLWdyYXktNTAwIGgtWzUwcHhdIHJvdW5kZWQtbGdcIlxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmVlbi03MDAgaC1bNTBweF0gcm91bmRlZC1sZ1wiPlxuICAgICAgICAgIENyZWF0ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+aGVyZSBpcyB0aGUgZXJyb3I8L3A+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2U7XG4iXSwibmFtZXMiOlsic3VwYWJhc2VGb3JDbGllbnRDb21wb25lbnQiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwicGFnZSIsIm5hbWUiLCJzZXROYW1lIiwicm91dGVyIiwiZm9ybUVycm9yIiwic2V0RXJyb3IiLCJjcmVhdGVCdXNpbmVzcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJ1c2VyIiwiZXJyb3IiLCJhdXRoIiwiZ2V0VXNlciIsInB1c2giLCJmcm9tIiwiaW5zZXJ0IiwidXNlcl9pZCIsImlkIiwic2VsZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaDEiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwiYnV0dG9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/createbusiness/page.tsx\n"));

/***/ })

});