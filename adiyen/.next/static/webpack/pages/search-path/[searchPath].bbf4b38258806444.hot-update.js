"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search-path/[searchPath]",{

/***/ "./pages/search-path/[searchPath].js":
/*!*******************************************!*\
  !*** ./pages/search-path/[searchPath].js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_ashas_OneDrive_Desktop_1000_Iyengars_adiyen_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ashas_OneDrive_Desktop_1000_Iyengars_adiyen_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ashas_OneDrive_Desktop_1000_Iyengars_adiyen_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _components_users_users_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/users/users-grid */ \"./components/users/users-grid.js\");\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar fetcher = function() {\n    var _ref = _asyncToGenerator(C_Users_ashas_OneDrive_Desktop_1000_Iyengars_adiyen_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url) {\n        var res, data;\n        return C_Users_ashas_OneDrive_Desktop_1000_Iyengars_adiyen_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    console.log('Search In fetcher');\n                    _ctx.next = 3;\n                    return fetch(url);\n                case 3:\n                    res = _ctx.sent;\n                    _ctx.next = 6;\n                    return res.json();\n                case 6:\n                    data = _ctx.sent;\n                    console.log('In fetcher City Name', data);\n                    if (!(res.status !== 200)) {\n                        _ctx.next = 10;\n                        break;\n                    }\n                    throw new Error(data.message);\n                case 10:\n                    return _ctx.abrupt(\"return\", data);\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function fetcher(url) {\n        return _ref.apply(this, arguments);\n    };\n}();\nfunction SearchAll() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var searchPath = router.query.searchPath;\n    var members = [];\n    console.log('Query router Aiyaa', router.query);\n    console.log('User Detail, Part 2', searchPath);\n    if (searchPath === null) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: \"Please send city request with correct credentials\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ashas\\\\OneDrive\\\\Desktop\\\\1000+Iyengars\\\\adiyen\\\\pages\\\\search-path\\\\[searchPath].js\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, this));\n    }\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n        return searchPath && \"/api/commonSearch/\".concat(searchPath);\n    }, fetcher), data = ref.data, error = ref.error;\n    // if (error) {\n    //     return (\n    //         <div><h1>Something went wrong .... Please try again</h1></div>\n    //     )\n    // }\n    // if (!data) {\n    //     return (\n    //         <div>Why so impossible?</div>\n    //     )\n    // }\n    // console.log('Kolaveri Data1 ', data)\n    // members = data\n    // console.log('Members asearchlpha ', members)\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Common Search\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ashas\\\\OneDrive\\\\Desktop\\\\1000+Iyengars\\\\adiyen\\\\pages\\\\search-path\\\\[searchPath].js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this),\n            members && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_users_users_grid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                items: members.membersData\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ashas\\\\OneDrive\\\\Desktop\\\\1000+Iyengars\\\\adiyen\\\\pages\\\\search-path\\\\[searchPath].js\",\n                lineNumber: 56,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ashas\\\\OneDrive\\\\Desktop\\\\1000+Iyengars\\\\adiyen\\\\pages\\\\search-path\\\\[searchPath].js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, this));\n}\n_s(SearchAll, \"mZuyhWoEayG5q+fyCgnn11lj9Sg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = SearchAll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchAll);\nvar _c;\n$RefreshReg$(_c, \"SearchAll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2gtcGF0aC9bc2VhcmNoUGF0aF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUM7QUFDZjtBQUNpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RCxHQUFLLENBQUNHLE9BQU87Z01BQUcsUUFBUSxTQUFGQyxHQUFHLEVBQUssQ0FBQztZQUVyQkMsR0FBRyxFQUNIQyxJQUFJOzs7O29CQUZWQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFtQjs7MkJBQ2JDLEtBQUssQ0FBQ0wsR0FBRzs7b0JBQXJCQyxHQUFHOzsyQkFDVUEsR0FBRyxDQUFDSyxJQUFJOztvQkFBckJKLElBQUk7b0JBQ1ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQXNCLHVCQUFFRixJQUFJOzBCQUNwQ0QsR0FBRyxDQUFDTSxNQUFNLEtBQUssR0FBRzs7OztvQkFDbEIsS0FBSyxDQUFDLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDTixJQUFJLENBQUNPLE9BQU87O2lEQUd6QlAsSUFBSTs7Ozs7O0lBQ2YsQ0FBQztvQkFWS0gsT0FBTyxDQUFTQyxHQUFHOzs7O1NBWWhCVSxTQUFTLEdBQUcsQ0FBQzs7SUFDbEIsR0FBSyxDQUFDQyxNQUFNLEdBQUdmLHNEQUFTO0lBQ3hCLEdBQUssQ0FBQ2dCLFVBQVUsR0FBR0QsTUFBTSxDQUFDRSxLQUFLLENBQUNELFVBQVU7SUFDMUMsR0FBRyxDQUFDRSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBRWhCWCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFvQixxQkFBRU8sTUFBTSxDQUFDRSxLQUFLO0lBQzlDVixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFxQixzQkFBRVEsVUFBVTtJQUM3QyxFQUFFLEVBQUVBLFVBQVUsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUN0QixNQUFNLDZFQUNERyxDQUFHO3NCQUFDLENBQWlEOzs7Ozs7SUFFOUQsQ0FBQztJQUVELEdBQUssQ0FBaUJsQixHQUdyQixHQUhxQkEsK0NBQU0sQ0FDeEIsUUFBUTtRQUFIZSxNQUFNLENBQU5BLFVBQVUsSUFBSyxDQUFrQixvQkFBYSxPQUFYQSxVQUFVO09BQ2xEYixPQUFPLEdBRkpHLElBQUksR0FBV0wsR0FHckIsQ0FITUssSUFBSSxFQUFFYyxLQUFLLEdBQUluQixHQUdyQixDQUhZbUIsS0FBSztJQUtsQixFQUFlO0lBQ2YsRUFBZTtJQUNmLEVBQXlFO0lBQ3pFLEVBQVE7SUFDUixFQUFJO0lBRUosRUFBZTtJQUNmLEVBQWU7SUFDZixFQUF3QztJQUN4QyxFQUFRO0lBQ1IsRUFBSTtJQUVKLEVBQXVDO0lBQ3ZDLEVBQWlCO0lBRWpCLEVBQStDO0lBRS9DLE1BQU0sNkVBQ0RELENBQUc7O3dGQUNDRSxDQUFFOzBCQUFDLENBQWE7Ozs7OztZQUNoQkgsT0FBTyxnRkFDSGhCLG9FQUFTO2dCQUFDb0IsS0FBSyxFQUFFSixPQUFPLENBQUNLLFdBQVc7Ozs7Ozs7Ozs7OztBQUlyRCxDQUFDO0dBM0NRVCxTQUFTOztRQUNDZCxrREFBUztRQVlGQywyQ0FBTTs7O0tBYnZCYSxTQUFTO0FBNkNsQiwrREFBZUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZWFyY2gtcGF0aC9bc2VhcmNoUGF0aF0uanM/ODZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5pbXBvcnQgVXNlcnNHcmlkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMtZ3JpZCdcclxuXHJcbmNvbnN0IGZldGNoZXIgPSBhc3luYyh1cmwpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdTZWFyY2ggSW4gZmV0Y2hlcicpXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgY29uc29sZS5sb2coJ0luIGZldGNoZXIgQ2l0eSBOYW1lJywgZGF0YSlcclxuICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNlYXJjaEFsbCAoKXtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBzZWFyY2hQYXRoID0gcm91dGVyLnF1ZXJ5LnNlYXJjaFBhdGhcclxuICAgIHZhciBtZW1iZXJzID0gW11cclxuXHJcbiAgICBjb25zb2xlLmxvZygnUXVlcnkgcm91dGVyIEFpeWFhJywgcm91dGVyLnF1ZXJ5KVxyXG4gICAgY29uc29sZS5sb2coJ1VzZXIgRGV0YWlsLCBQYXJ0IDInLCBzZWFyY2hQYXRoKVxyXG4gICAgaWYgKHNlYXJjaFBhdGggPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlBsZWFzZSBzZW5kIGNpdHkgcmVxdWVzdCB3aXRoIGNvcnJlY3QgY3JlZGVudGlhbHM8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUihcclxuICAgICAgICAoKT0+IHNlYXJjaFBhdGggJiYgYC9hcGkvY29tbW9uU2VhcmNoLyR7c2VhcmNoUGF0aH1gLFxyXG4gICAgICAgIGZldGNoZXJcclxuICAgIClcclxuXHJcbiAgICAvLyBpZiAoZXJyb3IpIHtcclxuICAgIC8vICAgICByZXR1cm4gKFxyXG4gICAgLy8gICAgICAgICA8ZGl2PjxoMT5Tb21ldGhpbmcgd2VudCB3cm9uZyAuLi4uIFBsZWFzZSB0cnkgYWdhaW48L2gxPjwvZGl2PlxyXG4gICAgLy8gICAgIClcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZiAoIWRhdGEpIHtcclxuICAgIC8vICAgICByZXR1cm4gKFxyXG4gICAgLy8gICAgICAgICA8ZGl2PldoeSBzbyBpbXBvc3NpYmxlPzwvZGl2PlxyXG4gICAgLy8gICAgIClcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygnS29sYXZlcmkgRGF0YTEgJywgZGF0YSlcclxuICAgIC8vIG1lbWJlcnMgPSBkYXRhXHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coJ01lbWJlcnMgYXNlYXJjaGxwaGEgJywgbWVtYmVycylcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5Db21tb24gU2VhcmNoPC9oMT5cclxuICAgICAgICAgICAge21lbWJlcnMgJiYgXHJcbiAgICAgICAgICAgICAgICA8VXNlcnNHcmlkIGl0ZW1zPXttZW1iZXJzLm1lbWJlcnNEYXRhfSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEFsbCJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTV1IiLCJVc2Vyc0dyaWQiLCJmZXRjaGVyIiwidXJsIiwicmVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsImpzb24iLCJzdGF0dXMiLCJFcnJvciIsIm1lc3NhZ2UiLCJTZWFyY2hBbGwiLCJyb3V0ZXIiLCJzZWFyY2hQYXRoIiwicXVlcnkiLCJtZW1iZXJzIiwiZGl2IiwiZXJyb3IiLCJoMSIsIml0ZW1zIiwibWVtYmVyc0RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/search-path/[searchPath].js\n");

/***/ })

});