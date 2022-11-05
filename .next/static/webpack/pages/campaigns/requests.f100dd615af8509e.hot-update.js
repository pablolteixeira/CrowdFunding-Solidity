"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/requests",{

/***/ "./components/requestrow.js":
/*!**********************************!*\
  !*** ./components/requestrow.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\n\n\n\n\n\n\nvar RequestRow = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(RequestRow, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(RequestRow);\n    function RequestRow() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, RequestRow);\n        return _super.apply(this, arguments);\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(RequestRow, [\n        {\n            key: \"render\",\n            value: function render() {\n                var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Table.Row, Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Table.Cell;\n                var _props = this.props, id = _props.id, request = _props.request, approversCount = _props.approversCount;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                            children: id\n                        }, void 0, false, {\n                            fileName: \"/home/pablo/Desktop/Campaign/components/requestrow.js\",\n                            lineNumber: 14,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                            children: request.description\n                        }, void 0, false, {\n                            fileName: \"/home/pablo/Desktop/Campaign/components/requestrow.js\",\n                            lineNumber: 15,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                            children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].utils.fromWei(request.value, \"ether\")\n                        }, void 0, false, {\n                            fileName: \"/home/pablo/Desktop/Campaign/components/requestrow.js\",\n                            lineNumber: 16,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                            children: request.recipient\n                        }, void 0, false, {\n                            fileName: \"/home/pablo/Desktop/Campaign/components/requestrow.js\",\n                            lineNumber: 17,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                            children: [\n                                request.approvalCount,\n                                \"/\",\n                                approversCount\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/pablo/Desktop/Campaign/components/requestrow.js\",\n                            lineNumber: 18,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                color: \"green\",\n                                basic: true,\n                                children: \"Approve\"\n                            }, void 0, false, {\n                                fileName: \"/home/pablo/Desktop/Campaign/components/requestrow.js\",\n                                lineNumber: 20,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/pablo/Desktop/Campaign/components/requestrow.js\",\n                            lineNumber: 19,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/pablo/Desktop/Campaign/components/requestrow.js\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ]);\n    return RequestRow;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestRow);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlcXVlc3Ryb3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFBeUM7QUFDQztBQUNOO0FBRXBDLGNBQWdCLGlCQXNCYjs7OEVBdEJHSSxVQUFVOytGQUFWQSxVQUFVO2FBQVZBLFVBQVU7Z0dBQVZBLFVBQVU7OztrRkFBVkEsVUFBVTs7WUFHWkMsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUc7Z0JBQ0wsSUFBUUMsR0FBRyxHQUFXSix3REFBWCxFQUFFSyxJQUFJLEdBQUtMLHlEQUFMO2dCQUNqQixJQUF3QyxNQUFVLEdBQVYsSUFBSSxDQUFDTSxLQUFLLEVBQTFDQyxFQUFFLEdBQThCLE1BQVUsQ0FBMUNBLEVBQUUsRUFBRUMsT0FBTyxHQUFxQixNQUFVLENBQXRDQSxPQUFPLEVBQUVDLGNBQWMsR0FBSyxNQUFVLENBQTdCQSxjQUFjO2dCQUVuQyxxQkFDSSw4REFBQ0wsR0FBRzs7c0NBQ0EsOERBQUNDLElBQUk7c0NBQUVFLEVBQUU7Ozs7O2dDQUFRO3NDQUNqQiw4REFBQ0YsSUFBSTtzQ0FBRUcsT0FBTyxDQUFDRSxXQUFXOzs7OztnQ0FBUTtzQ0FDbEMsOERBQUNMLElBQUk7c0NBQUVKLG9FQUFrQixDQUFDTyxPQUFPLENBQUNLLEtBQUssRUFBRSxPQUFPLENBQUM7Ozs7O2dDQUFRO3NDQUN6RCw4REFBQ1IsSUFBSTtzQ0FBRUcsT0FBTyxDQUFDTSxTQUFTOzs7OztnQ0FBUTtzQ0FDaEMsOERBQUNULElBQUk7O2dDQUFFRyxPQUFPLENBQUNPLGFBQWE7Z0NBQUMsR0FBQztnQ0FBQ04sY0FBYzs7Ozs7O2dDQUFRO3NDQUNyRCw4REFBQ0osSUFBSTtzQ0FDRCw0RUFBQ1csTUFBTTtnQ0FBQ0MsS0FBSyxFQUFDLE9BQU87Z0NBQUNDLEtBQUs7MENBQUMsU0FBTzs7Ozs7b0NBQVM7Ozs7O2dDQUN6Qzs7Ozs7O3dCQUNMLENBQ1I7WUFDTixDQUFDOzs7V0FuQkNoQixVQUFVO0NBb0JmLENBcEJ3QkgsNENBQVMsQ0FvQmpDO0FBRUQsK0RBQWVHLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3JlcXVlc3Ryb3cuanM/ODU4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcblxuY2xhc3MgUmVxdWVzdFJvdyBleHRlbmRzIENvbXBvbmVudCB7XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBSb3csIENlbGwgfSA9IFRhYmxlO1xuICAgICAgICBjb25zdCB7IGlkLCByZXF1ZXN0LCBhcHByb3ZlcnNDb3VudCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q2VsbD57aWR9PC9DZWxsPlxuICAgICAgICAgICAgICAgIDxDZWxsPntyZXF1ZXN0LmRlc2NyaXB0aW9ufTwvQ2VsbD5cbiAgICAgICAgICAgICAgICA8Q2VsbD57d2ViMy51dGlscy5mcm9tV2VpKHJlcXVlc3QudmFsdWUsIFwiZXRoZXJcIil9PC9DZWxsPlxuICAgICAgICAgICAgICAgIDxDZWxsPntyZXF1ZXN0LnJlY2lwaWVudH08L0NlbGw+XG4gICAgICAgICAgICAgICAgPENlbGw+e3JlcXVlc3QuYXBwcm92YWxDb3VudH0ve2FwcHJvdmVyc0NvdW50fTwvQ2VsbD5cbiAgICAgICAgICAgICAgICA8Q2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImdyZWVuXCIgYmFzaWM+QXBwcm92ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQ2VsbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFJvdzsiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIndlYjMiLCJSZXF1ZXN0Um93IiwicmVuZGVyIiwiUm93IiwiQ2VsbCIsInByb3BzIiwiaWQiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50IiwiYXBwcm92YWxDb3VudCIsIkJ1dHRvbiIsImNvbG9yIiwiYmFzaWMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/requestrow.js\n"));

/***/ })

});