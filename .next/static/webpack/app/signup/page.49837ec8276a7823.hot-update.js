"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signup/page",{

/***/ "(app-pages-browser)/./app/signup/page.tsx":
/*!*****************************!*\
  !*** ./app/signup/page.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction page() {\n    var _errors_email, _errors_password;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();\n    const { register, handleSubmit, formState } = form;\n    const { errors } = formState;\n    const onSubmit = (data)=>{\n        console.log(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center gap-4 w-[300px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"font-bold text-3xl\",\n                    children: \"Sign Up\"\n                }, void 0, false, {\n                    fileName: \"/home/mmardi/code/Supabase-Next.js/app/signup/page.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"flex flex-col gap-5 w-full\",\n                    onSubmit: handleSubmit(onSubmit),\n                    noValidate: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"email\",\n                                    type: \"email\",\n                                    placeholder: \"Email\",\n                                    className: \"h-[50px] outline-none bg-transparent w-full border-gray-500 border-2 rounded-lg px-8\",\n                                    ...register(\"email\", {\n                                        required: \"this field is required\",\n                                        pattern: {\n                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,\n                                            message: \"invalid email address\"\n                                        }\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/home/mmardi/code/Supabase-Next.js/app/signup/page.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"absolute text-sm  text-[#ff2c2c]\",\n                                    children: (_errors_email = errors.email) === null || _errors_email === void 0 ? void 0 : _errors_email.message\n                                }, void 0, false, {\n                                    fileName: \"/home/mmardi/code/Supabase-Next.js/app/signup/page.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/mmardi/code/Supabase-Next.js/app/signup/page.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    id: \"password\",\n                                    placeholder: \"Password\",\n                                    className: \"h-[50px] w-full outline-none bg-transparent border-gray-500 border-2 rounded-lg px-8\",\n                                    ...register(\"password\", {\n                                        required: \"this field is required\",\n                                        minLength: {\n                                            value: 8,\n                                            message: \"atleast 8 characters\"\n                                        }\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/home/mmardi/code/Supabase-Next.js/app/signup/page.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"absolute text-sm text-[#ff2c2c]\",\n                                    children: (_errors_password = errors.password) === null || _errors_password === void 0 ? void 0 : _errors_password.message\n                                }, void 0, false, {\n                                    fileName: \"/home/mmardi/code/Supabase-Next.js/app/signup/page.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/mmardi/code/Supabase-Next.js/app/signup/page.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"h-[50px] bg-blue-500 rounded-lg\",\n                            children: \"Sign Up\"\n                        }, void 0, false, {\n                            fileName: \"/home/mmardi/code/Supabase-Next.js/app/signup/page.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mmardi/code/Supabase-Next.js/app/signup/page.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm text-[#ff2c2c]\",\n                    children: error\n                }, void 0, false, {\n                    fileName: \"/home/mmardi/code/Supabase-Next.js/app/signup/page.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm font-light\",\n                    children: [\n                        \"Already have an account??\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/signin\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-bold\",\n                                children: \"Sign In\"\n                            }, void 0, false, {\n                                fileName: \"/home/mmardi/code/Supabase-Next.js/app/signup/page.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/mmardi/code/Supabase-Next.js/app/signup/page.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mmardi/code/Supabase-Next.js/app/signup/page.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mmardi/code/Supabase-Next.js/app/signup/page.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/mmardi/code/Supabase-Next.js/app/signup/page.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"FHCdHRcnFDHMhggdh1GTGOAeKvc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9zaWdudXAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDNkI7QUFDSDtBQUVrQjtBQUNGO0FBTzNCLFNBQVNJO1FBaUNUQyxlQWtCQUE7O0lBbERiLE1BQU1DLFNBQVNKLDBEQUFTQTtJQUN4QixNQUFNSyxPQUFPSix3REFBT0E7SUFDcEIsTUFBTSxFQUFFSyxRQUFRLEVBQUVDLFlBQVksRUFBRUMsU0FBUyxFQUFFLEdBQUdIO0lBQzlDLE1BQU0sRUFBRUYsTUFBTSxFQUFFLEdBQUdLO0lBQ25CLE1BQU1DLFdBQVcsQ0FBQ0M7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDZDtJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQXFCOzs7Ozs7OEJBQ25DLDhEQUFDVDtvQkFDQ1MsV0FBVTtvQkFDVkwsVUFBVUYsYUFBYUU7b0JBQ3ZCTyxVQUFVOztzQ0FFViw4REFBQ0g7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRztvQ0FDQ0MsSUFBRztvQ0FDSEMsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWk4sV0FBVTtvQ0FDVCxHQUFHUixTQUFTLFNBQVM7d0NBQ3BCZSxVQUFVO3dDQUNWQyxTQUFTOzRDQUNQQyxPQUFPOzRDQUNQQyxTQUFTO3dDQUNYO29DQUNGLEVBQUU7Ozs7Ozs4Q0FFSiw4REFBQ0M7b0NBQUVYLFdBQVU7K0NBQ1ZYLGdCQUFBQSxPQUFPdUIsS0FBSyxjQUFadkIsb0NBQUFBLGNBQWNxQixPQUFPOzs7Ozs7Ozs7Ozs7c0NBRzFCLDhEQUFDWDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNHO29DQUNDRSxNQUFLO29DQUNMRCxJQUFHO29DQUNIRSxhQUFZO29DQUNaTixXQUFVO29DQUNULEdBQUdSLFNBQVMsWUFBWTt3Q0FDdkJlLFVBQVU7d0NBQ1ZNLFdBQVc7NENBQ1RKLE9BQU87NENBQ1BDLFNBQVM7d0NBQ1g7b0NBQ0YsRUFBRTs7Ozs7OzhDQUVKLDhEQUFDQztvQ0FBRVgsV0FBVTsrQ0FDVlgsbUJBQUFBLE9BQU95QixRQUFRLGNBQWZ6Qix1Q0FBQUEsaUJBQWlCcUIsT0FBTzs7Ozs7Ozs7Ozs7O3NDQUc3Qiw4REFBQ0s7NEJBQU9WLE1BQUs7NEJBQVNMLFdBQVU7c0NBQWtDOzs7Ozs7Ozs7Ozs7OEJBSXBFLDhEQUFDVztvQkFBRVgsV0FBVTs4QkFBMEJnQjs7Ozs7OzhCQUN2Qyw4REFBQ0w7b0JBQUVYLFdBQVU7O3dCQUFxQjt3QkFDTjtzQ0FDMUIsOERBQUNoQixrREFBSUE7NEJBQUNpQyxNQUFNO3NDQUNWLDRFQUFDQztnQ0FBS2xCLFdBQVU7MENBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNeEM7R0FwRXdCWjs7UUFDUEYsc0RBQVNBO1FBQ1hDLG9EQUFPQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvc2lnbnVwL3BhZ2UudHN4PzcyNzkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdXBhYmFzZUZvckNsaWVudENvbXBvbmVudCB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZS5jbGllbnRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5cbnR5cGUgRm9ybXZhbHVlcyA9IHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2UoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBmb3JtID0gdXNlRm9ybTxGb3JtdmFsdWVzPigpO1xuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGZvcm1TdGF0ZSB9ID0gZm9ybTtcbiAgY29uc3QgeyBlcnJvcnMgfSA9IGZvcm1TdGF0ZTtcbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YTogRm9ybXZhbHVlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTQgdy1bMzAwcHhdXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0zeGxcIj5TaWduIFVwPC9oMT5cbiAgICAgICAgPGZvcm1cbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC01IHctZnVsbFwiXG4gICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9XG4gICAgICAgICAgbm9WYWxpZGF0ZVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtWzUwcHhdIG91dGxpbmUtbm9uZSBiZy10cmFuc3BhcmVudCB3LWZ1bGwgYm9yZGVyLWdyYXktNTAwIGJvcmRlci0yIHJvdW5kZWQtbGcgcHgtOFwiXG4gICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcImVtYWlsXCIsIHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJ0aGlzIGZpZWxkIGlzIHJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLH0kL2ksXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcImludmFsaWQgZW1haWwgYWRkcmVzc1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFic29sdXRlIHRleHQtc20gIHRleHQtWyNmZjJjMmNdXCI+XG4gICAgICAgICAgICAgIHtlcnJvcnMuZW1haWw/Lm1lc3NhZ2V9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtWzUwcHhdIHctZnVsbCBvdXRsaW5lLW5vbmUgYmctdHJhbnNwYXJlbnQgYm9yZGVyLWdyYXktNTAwIGJvcmRlci0yIHJvdW5kZWQtbGcgcHgtOFwiXG4gICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcInBhc3N3b3JkXCIsIHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJ0aGlzIGZpZWxkIGlzIHJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgbWluTGVuZ3RoOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogOCxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiYXRsZWFzdCA4IGNoYXJhY3RlcnNcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0ZXh0LXNtIHRleHQtWyNmZjJjMmNdXCI+XG4gICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmQ/Lm1lc3NhZ2V9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiaC1bNTBweF0gYmctYmx1ZS01MDAgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1bI2ZmMmMyY11cIj57ZXJyb3J9PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbGlnaHRcIj5cbiAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8/e1wiIFwifVxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3NpZ25pblwifT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlNpZ24gSW48L3NwYW4+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VGb3JtIiwicGFnZSIsImVycm9ycyIsInJvdXRlciIsImZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImZvcm1TdGF0ZSIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm5vVmFsaWRhdGUiLCJpbnB1dCIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJwYXR0ZXJuIiwidmFsdWUiLCJtZXNzYWdlIiwicCIsImVtYWlsIiwibWluTGVuZ3RoIiwicGFzc3dvcmQiLCJidXR0b24iLCJlcnJvciIsImhyZWYiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/signup/page.tsx\n"));

/***/ })

});