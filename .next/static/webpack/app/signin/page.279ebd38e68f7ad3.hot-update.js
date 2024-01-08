"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signin/page",{

/***/ "(app-pages-browser)/./app/signin/page.tsx":
/*!*****************************!*\
  !*** ./app/signin/page.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_supabase_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/supabase.client */ \"(app-pages-browser)/./lib/supabase.client.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction page() {\n    var _errors_email, _errors_password;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();\n    const { register, handleSubmit, formState } = form;\n    const { errors } = formState;\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const onSubmit = async (data)=>{\n        const res = await _lib_supabase_client__WEBPACK_IMPORTED_MODULE_4__.supabaseForClientComponent.auth.signInWithPassword({\n            email: data.email,\n            password: data.password\n        });\n        if (res.data) router.push(\"/\");\n        if (res.error) setError(res.error.message);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center gap-4 w-[300px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"font-bold text-3xl\",\n                    children: \"Sign In\"\n                }, void 0, false, {\n                    fileName: \"/home/mmardi/code/Supabase-Next.js/app/signin/page.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"flex flex-col gap-5 w-full\",\n                    onSubmit: ()=>handleSubmit(onSubmit),\n                    noValidate: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    placeholder: \"Email\",\n                                    className: \"h-[50px] outline-none bg-transparent w-full border-gray-500 border-2 rounded-lg px-8\",\n                                    ...register(\"email\", {\n                                        required: \"this field is required\",\n                                        pattern: {\n                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,\n                                            message: \"invalid email address\"\n                                        }\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/home/mmardi/code/Supabase-Next.js/app/signin/page.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"absolute text-sm text-[#ff2c2c]\",\n                                    children: (_errors_email = errors.email) === null || _errors_email === void 0 ? void 0 : _errors_email.message\n                                }, void 0, false, {\n                                    fileName: \"/home/mmardi/code/Supabase-Next.js/app/signin/page.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/mmardi/code/Supabase-Next.js/app/signin/page.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    placeholder: \"Password\",\n                                    className: \"h-[50px] w-full outline-none bg-transparent border-gray-500 border-2 rounded-lg px-8\",\n                                    ...register(\"password\", {\n                                        required: \"this field is required\",\n                                        minLength: {\n                                            value: 8,\n                                            message: \"atleast 8 characters\"\n                                        }\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/home/mmardi/code/Supabase-Next.js/app/signin/page.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"absolute text-sm text-[#ff2c2c]\",\n                                    children: (_errors_password = errors.password) === null || _errors_password === void 0 ? void 0 : _errors_password.message\n                                }, void 0, false, {\n                                    fileName: \"/home/mmardi/code/Supabase-Next.js/app/signin/page.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/mmardi/code/Supabase-Next.js/app/signin/page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"h-[50px] bg-blue-500 rounded-lg\",\n                            children: \"Sign Up\"\n                        }, void 0, false, {\n                            fileName: \"/home/mmardi/code/Supabase-Next.js/app/signin/page.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mmardi/code/Supabase-Next.js/app/signin/page.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm text-[#ff2c2c]\",\n                    children: error\n                }, void 0, false, {\n                    fileName: \"/home/mmardi/code/Supabase-Next.js/app/signin/page.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm font-light\",\n                    children: [\n                        \"Don’t have account?\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/signup\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-bold\",\n                                children: \"Create an account\"\n                            }, void 0, false, {\n                                fileName: \"/home/mmardi/code/Supabase-Next.js/app/signin/page.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/mmardi/code/Supabase-Next.js/app/signin/page.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mmardi/code/Supabase-Next.js/app/signin/page.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mmardi/code/Supabase-Next.js/app/signin/page.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/mmardi/code/Supabase-Next.js/app/signin/page.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"TW0svV+cwads4Uo6uQBuTQt2yko=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9zaWduaW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ1g7QUFDYTtBQUNFO0FBQ3VCO0FBT3BELFNBQVNNO1FBc0NUQyxlQWlCQUE7O0lBdERiLE1BQU1DLFNBQVNKLDBEQUFTQTtJQUN4QixNQUFNSyxPQUFPTix3REFBT0E7SUFDcEIsTUFBTSxFQUFFTyxRQUFRLEVBQUVDLFlBQVksRUFBRUMsU0FBUyxFQUFFLEdBQUdIO0lBQzlDLE1BQU0sRUFBRUYsTUFBTSxFQUFFLEdBQUdLO0lBQ25CLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNYyxXQUFXLE9BQU9DO1FBQ3RCLE1BQU1DLE1BQU0sTUFBTVosNEVBQTBCQSxDQUFDYSxJQUFJLENBQUNDLGtCQUFrQixDQUFDO1lBQ25FQyxPQUFPSixLQUFLSSxLQUFLO1lBQ2pCQyxVQUFVTCxLQUFLSyxRQUFRO1FBQ3pCO1FBQ0EsSUFBSUosSUFBSUQsSUFBSSxFQUFFUixPQUFPYyxJQUFJLENBQUM7UUFDMUIsSUFBSUwsSUFBSUosS0FBSyxFQUFFQyxTQUFTRyxJQUFJSixLQUFLLENBQUNVLE9BQU87SUFDM0M7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUFxQjs7Ozs7OzhCQUNuQyw4REFBQ2hCO29CQUNDZ0IsV0FBVTtvQkFDVlYsVUFBVSxJQUFNSixhQUFhSTtvQkFDN0JZLFVBQVU7O3NDQUVWLDhEQUFDSDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNHO29DQUNDQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaTCxXQUFVO29DQUNULEdBQUdmLFNBQVMsU0FBUzt3Q0FDcEJxQixVQUFVO3dDQUNWQyxTQUFTOzRDQUNQQyxPQUFPOzRDQUNQVixTQUFTO3dDQUNYO29DQUNGLEVBQUU7Ozs7Ozs4Q0FFSiw4REFBQ1c7b0NBQUVULFdBQVU7K0NBQ1ZsQixnQkFBQUEsT0FBT2EsS0FBSyxjQUFaYixvQ0FBQUEsY0FBY2dCLE9BQU87Ozs7Ozs7Ozs7OztzQ0FHMUIsOERBQUNDOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0c7b0NBQ0NDLE1BQUs7b0NBQ0xDLGFBQVk7b0NBQ1pMLFdBQVU7b0NBQ1QsR0FBR2YsU0FBUyxZQUFZO3dDQUN2QnFCLFVBQVU7d0NBQ1ZJLFdBQVc7NENBQ1RGLE9BQU87NENBQ1BWLFNBQVM7d0NBQ1g7b0NBQ0YsRUFBRTs7Ozs7OzhDQUVKLDhEQUFDVztvQ0FBRVQsV0FBVTsrQ0FDVmxCLG1CQUFBQSxPQUFPYyxRQUFRLGNBQWZkLHVDQUFBQSxpQkFBaUJnQixPQUFPOzs7Ozs7Ozs7Ozs7c0NBRzdCLDhEQUFDYTs0QkFBT1AsTUFBSzs0QkFBU0osV0FBVTtzQ0FBa0M7Ozs7Ozs7Ozs7Ozs4QkFJcEUsOERBQUNTO29CQUFFVCxXQUFVOzhCQUEwQlo7Ozs7Ozs4QkFDdkMsOERBQUNxQjtvQkFBRVQsV0FBVTs7d0JBQXFCO3dCQUNaO3NDQUNwQiw4REFBQ3ZCLGtEQUFJQTs0QkFBQ21DLE1BQU07c0NBQ1YsNEVBQUNDO2dDQUFLYixXQUFVOzBDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhDO0dBeEV3Qm5COztRQUNQRixzREFBU0E7UUFDWEQsb0RBQU9BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9zaWduaW4vcGFnZS50c3g/NzJjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHN1cGFiYXNlRm9yQ2xpZW50Q29tcG9uZW50IH0gZnJvbSBcIkAvbGliL3N1cGFiYXNlLmNsaWVudFwiO1xuXG50eXBlIEZvcm12YWx1ZXMgPSB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZm9ybSA9IHVzZUZvcm08Rm9ybXZhbHVlcz4oKTtcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBmb3JtU3RhdGUgfSA9IGZvcm07XG4gIGNvbnN0IHsgZXJyb3JzIH0gPSBmb3JtU3RhdGU7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGE6IEZvcm12YWx1ZXMpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBzdXBhYmFzZUZvckNsaWVudENvbXBvbmVudC5hdXRoLnNpZ25JbldpdGhQYXNzd29yZCh7XG4gICAgICBlbWFpbDogZGF0YS5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkLFxuICAgIH0pO1xuICAgIGlmIChyZXMuZGF0YSkgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgIGlmIChyZXMuZXJyb3IpIHNldEVycm9yKHJlcy5lcnJvci5tZXNzYWdlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC00IHctWzMwMHB4XVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtM3hsXCI+U2lnbiBJbjwvaDE+XG4gICAgICAgIDxmb3JtXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNSB3LWZ1bGxcIlxuICAgICAgICAgIG9uU3VibWl0PXsoKSA9PiBoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxuICAgICAgICAgIG5vVmFsaWRhdGVcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtWzUwcHhdIG91dGxpbmUtbm9uZSBiZy10cmFuc3BhcmVudCB3LWZ1bGwgYm9yZGVyLWdyYXktNTAwIGJvcmRlci0yIHJvdW5kZWQtbGcgcHgtOFwiXG4gICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcImVtYWlsXCIsIHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJ0aGlzIGZpZWxkIGlzIHJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLH0kL2ksXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcImludmFsaWQgZW1haWwgYWRkcmVzc1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFic29sdXRlIHRleHQtc20gdGV4dC1bI2ZmMmMyY11cIj5cbiAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbD8ubWVzc2FnZX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLVs1MHB4XSB3LWZ1bGwgb3V0bGluZS1ub25lIGJnLXRyYW5zcGFyZW50IGJvcmRlci1ncmF5LTUwMCBib3JkZXItMiByb3VuZGVkLWxnIHB4LThcIlxuICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJwYXNzd29yZFwiLCB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwidGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgIG1pbkxlbmd0aDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IDgsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcImF0bGVhc3QgOCBjaGFyYWN0ZXJzXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdGV4dC1zbSB0ZXh0LVsjZmYyYzJjXVwiPlxuICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkPy5tZXNzYWdlfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImgtWzUwcHhdIGJnLWJsdWUtNTAwIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtWyNmZjJjMmNdXCI+e2Vycm9yfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWxpZ2h0XCI+XG4gICAgICAgICAgRG9u4oCZdCBoYXZlIGFjY291bnQ/e1wiIFwifVxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3NpZ251cFwifT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkNyZWF0ZSBhbiBhY2NvdW50PC9zcGFuPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJ1c2VGb3JtIiwidXNlUm91dGVyIiwic3VwYWJhc2VGb3JDbGllbnRDb21wb25lbnQiLCJwYWdlIiwiZXJyb3JzIiwicm91dGVyIiwiZm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsIm9uU3VibWl0IiwiZGF0YSIsInJlcyIsImF1dGgiLCJzaWduSW5XaXRoUGFzc3dvcmQiLCJlbWFpbCIsInBhc3N3b3JkIiwicHVzaCIsIm1lc3NhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm5vVmFsaWRhdGUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwicGF0dGVybiIsInZhbHVlIiwicCIsIm1pbkxlbmd0aCIsImJ1dHRvbiIsImhyZWYiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/signin/page.tsx\n"));

/***/ })

});