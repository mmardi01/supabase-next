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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_supabase_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/supabase.client */ \"(app-pages-browser)/./lib/supabase.client.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction page() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const createBusiness = async (e)=>{\n        e.preventDefault();\n        const { data, error } = await _lib_supabase_client__WEBPACK_IMPORTED_MODULE_1__.supabaseForClientComponent.auth.getUser();\n        console.log(user);\n    // const { data, error } = await supabaseForClientComponent\n    //   .from(\"business\")\n    //   .insert([{ name: name, user: \"otherValue\" }])\n    //   .select();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: createBusiness,\n            className: \"w-[300px] flex flex-col items-center gap-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl\",\n                    children: \"Create a new business\"\n                }, void 0, false, {\n                    fileName: \"/home/mmardi/code/Supabase-Next.js/app/createbusiness/page.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: (e)=>setName(e.target.value),\n                    type: \"text\",\n                    className: \"w-full bg-transparent outline-none border border-gray-500 h-[50px] rounded-lg\"\n                }, void 0, false, {\n                    fileName: \"/home/mmardi/code/Supabase-Next.js/app/createbusiness/page.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-full bg-green-700 h-[50px] rounded-lg\",\n                    children: \"Create\"\n                }, void 0, false, {\n                    fileName: \"/home/mmardi/code/Supabase-Next.js/app/createbusiness/page.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mmardi/code/Supabase-Next.js/app/createbusiness/page.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/mmardi/code/Supabase-Next.js/app/createbusiness/page.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"gFPpQ6rgfiGkmgRsh4q2nIO1W+Q=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jcmVhdGVidXNpbmVzcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21FO0FBQ2hCO0FBSW5ELFNBQVNHOztJQUNQLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNSSxpQkFBaUIsT0FBT0M7UUFDNUJBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTSxFQUFDQyxJQUFJLEVBQUVDLEtBQUssRUFBQyxHQUFHLE1BQU1WLDRFQUEwQkEsQ0FBQ1csSUFBSSxDQUFDQyxPQUFPO1FBQ25FQyxRQUFRQyxHQUFHLENBQUNDO0lBQ1osMkRBQTJEO0lBQzNELHNCQUFzQjtJQUN0QixrREFBa0Q7SUFDbEQsZUFBZTtJQUNqQjtJQUNBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUNDQyxVQUFVYjtZQUNWVyxXQUFVOzs4QkFFViw4REFBQ0c7b0JBQUdILFdBQVU7OEJBQVc7Ozs7Ozs4QkFDekIsOERBQUNJO29CQUNDQyxVQUFVLENBQUNmLElBQU1GLFFBQVFFLEVBQUVnQixNQUFNLENBQUNDLEtBQUs7b0JBQ3ZDQyxNQUFLO29CQUNMUixXQUFVOzs7Ozs7OEJBRVosOERBQUNTO29CQUFPVCxXQUFVOzhCQUEwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEU7R0E3QlNkO0FBK0JULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jcmVhdGVidXNpbmVzcy9wYWdlLnRzeD8wOTAyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgc3VwYWJhc2VGb3JDbGllbnRDb21wb25lbnQgfSBmcm9tIFwiQC9saWIvc3VwYWJhc2UuY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgRm9ybUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5cblxuZnVuY3Rpb24gcGFnZSgpIHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGNyZWF0ZUJ1c2luZXNzID0gYXN5bmMgKGU6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSBhd2FpdCBzdXBhYmFzZUZvckNsaWVudENvbXBvbmVudC5hdXRoLmdldFVzZXIoKTtcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICAvLyBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUZvckNsaWVudENvbXBvbmVudFxuICAgIC8vICAgLmZyb20oXCJidXNpbmVzc1wiKVxuICAgIC8vICAgLmluc2VydChbeyBuYW1lOiBuYW1lLCB1c2VyOiBcIm90aGVyVmFsdWVcIiB9XSlcbiAgICAvLyAgIC5zZWxlY3QoKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGZvcm1cbiAgICAgICAgb25TdWJtaXQ9e2NyZWF0ZUJ1c2luZXNzfVxuICAgICAgICBjbGFzc05hbWU9XCJ3LVszMDBweF0gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTVcIlxuICAgICAgPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5DcmVhdGUgYSBuZXcgYnVzaW5lc3M8L2gxPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdHJhbnNwYXJlbnQgb3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItZ3JheS01MDAgaC1bNTBweF0gcm91bmRlZC1sZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyZWVuLTcwMCBoLVs1MHB4XSByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgQ3JlYXRlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlO1xuIl0sIm5hbWVzIjpbInN1cGFiYXNlRm9yQ2xpZW50Q29tcG9uZW50IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJuYW1lIiwic2V0TmFtZSIsImNyZWF0ZUJ1c2luZXNzIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsImVycm9yIiwiYXV0aCIsImdldFVzZXIiLCJjb25zb2xlIiwibG9nIiwidXNlciIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImgxIiwiaW5wdXQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/createbusiness/page.tsx\n"));

/***/ })

});