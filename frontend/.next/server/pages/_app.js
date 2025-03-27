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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CustomNavbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Navbar */ \"react-bootstrap/Navbar\");\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Nav */ \"react-bootstrap/Nav\");\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ \"react-bootstrap/Container\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ \"react-bootstrap/Button\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction CustomNavbar() {\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default()), {\n        bg: \"dark\",\n        variant: \"dark\",\n        expand: \"lg\",\n        sticky: \"top\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default()), {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default().Brand), {\n                    href: \"/\",\n                    children: \"PriceScraper\"\n                }, void 0, false, {\n                    fileName: \"/app/frontend/components/Navbar.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default().Toggle), {\n                    \"aria-controls\": \"basic-navbar-nav\"\n                }, void 0, false, {\n                    fileName: \"/app/frontend/components/Navbar.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default().Collapse), {\n                    id: \"basic-navbar-nav\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"me-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default().Link), {\n                                    href: \"/products\",\n                                    children: \"Produtos\"\n                                }, void 0, false, {\n                                    fileName: \"/app/frontend/components/Navbar.js\",\n                                    lineNumber: 14,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default().Link), {\n                                    href: \"/trends\",\n                                    children: \"Tend\\xeancias\"\n                                }, void 0, false, {\n                                    fileName: \"/app/frontend/components/Navbar.js\",\n                                    lineNumber: 15,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/app/frontend/components/Navbar.js\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            children: session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default().Link), {\n                                        children: [\n                                            \"Bem-vindo, \",\n                                            session.user.name\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/app/frontend/components/Navbar.js\",\n                                        lineNumber: 20,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        variant: \"outline-light\",\n                                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signOut)(),\n                                        children: \"Sair\"\n                                    }, void 0, false, {\n                                        fileName: \"/app/frontend/components/Navbar.js\",\n                                        lineNumber: 21,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                variant: \"outline-light\",\n                                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signIn)(\"google\"),\n                                children: \"Entrar\"\n                            }, void 0, false, {\n                                fileName: \"/app/frontend/components/Navbar.js\",\n                                lineNumber: 24,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/app/frontend/components/Navbar.js\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/app/frontend/components/Navbar.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/app/frontend/components/Navbar.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/app/frontend/components/Navbar.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRTtBQUFBO0FBQUE7QUFBQTtBQUNIO0FBRS9DLFNBQVNPO0lBQ3RCLE1BQU0sRUFBRUMsTUFBTUMsT0FBTyxFQUFFLEdBQUdMLDJEQUFVQTtJQUVwQyxxQkFDRSw4REFBQ0osK0RBQU1BO1FBQUNVLElBQUc7UUFBT0MsU0FBUTtRQUFPQyxRQUFPO1FBQUtDLFFBQU87a0JBQ2xELDRFQUFDWCxrRUFBU0E7OzhCQUNSLDhEQUFDRixxRUFBWTtvQkFBQ2UsTUFBSzs4QkFBSTs7Ozs7OzhCQUN2Qiw4REFBQ2Ysc0VBQWE7b0JBQUNpQixpQkFBYzs7Ozs7OzhCQUM3Qiw4REFBQ2pCLHdFQUFlO29CQUFDbUIsSUFBRzs7c0NBQ2xCLDhEQUFDbEIsNERBQUdBOzRCQUFDbUIsV0FBVTs7OENBQ2IsOERBQUNuQixpRUFBUTtvQ0FBQ2MsTUFBSzs4Q0FBWTs7Ozs7OzhDQUMzQiw4REFBQ2QsaUVBQVE7b0NBQUNjLE1BQUs7OENBQVU7Ozs7Ozs7Ozs7OztzQ0FFM0IsOERBQUNkLDREQUFHQTtzQ0FDRFEsd0JBQ0M7O2tEQUNFLDhEQUFDUixpRUFBUTs7NENBQUM7NENBQVlRLFFBQVFhLElBQUksQ0FBQ0MsSUFBSTs7Ozs7OztrREFDdkMsOERBQUNwQiwrREFBTUE7d0NBQUNRLFNBQVE7d0NBQWdCYSxTQUFTLElBQU1sQix3REFBT0E7a0RBQUk7Ozs7Ozs7NkRBRzVELDhEQUFDSCwrREFBTUE7Z0NBQUNRLFNBQVE7Z0NBQWdCYSxTQUFTLElBQU1uQix1REFBTUEsQ0FBQzswQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8vRSIsInNvdXJjZXMiOlsid2VicGFjazovL3ByaWNlLXNjb3V0LWZyb250ZW5kLy4vY29tcG9uZW50cy9OYXZiYXIuanM/ZmJjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXZiYXIsIE5hdiwgQ29udGFpbmVyLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbkluLCBzaWduT3V0IH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tTmF2YmFyKCkge1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcblxuICByZXR1cm4gKFxuICAgIDxOYXZiYXIgYmc9XCJkYXJrXCIgdmFyaWFudD1cImRhcmtcIiBleHBhbmQ9XCJsZ1wiIHN0aWNreT1cInRvcFwiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiL1wiPlByaWNlU2NyYXBlcjwvTmF2YmFyLkJyYW5kPlxuICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XG4gICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCI+XG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtZS1hdXRvXCI+XG4gICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9wcm9kdWN0c1wiPlByb2R1dG9zPC9OYXYuTGluaz5cbiAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL3RyZW5kc1wiPlRlbmTDqm5jaWFzPC9OYXYuTGluaz5cbiAgICAgICAgICA8L05hdj5cbiAgICAgICAgICA8TmF2PlxuICAgICAgICAgICAge3Nlc3Npb24gPyAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rPkJlbS12aW5kbywge3Nlc3Npb24udXNlci5uYW1lfTwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1saWdodFwiIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0+U2FpcjwvQnV0dG9uPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtbGlnaHRcIiBvbkNsaWNrPXsoKSA9PiBzaWduSW4oJ2dvb2dsZScpfT5FbnRyYXI8L0J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9OYXZiYXI+XG4gICk7XG59Il0sIm5hbWVzIjpbIk5hdmJhciIsIk5hdiIsIkNvbnRhaW5lciIsIkJ1dHRvbiIsInVzZVNlc3Npb24iLCJzaWduSW4iLCJzaWduT3V0IiwiQ3VzdG9tTmF2YmFyIiwiZGF0YSIsInNlc3Npb24iLCJiZyIsInZhcmlhbnQiLCJleHBhbmQiLCJzdGlja3kiLCJCcmFuZCIsImhyZWYiLCJUb2dnbGUiLCJhcmlhLWNvbnRyb2xzIiwiQ29sbGFwc2UiLCJpZCIsImNsYXNzTmFtZSIsIkxpbmsiLCJ1c2VyIiwibmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n\n\n\n\n\nfunction App({ Component, pageProps: { session, ...pageProps } }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {\n        session: session,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/app/frontend/pages/_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/app/frontend/pages/_app.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/frontend/pages/_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ2Y7QUFDbUI7QUFDUjtBQUUzQixTQUFTRSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUUsR0FBR0QsV0FBVyxFQUFFO0lBQzdFLHFCQUNFLDhEQUFDSiw0REFBZUE7UUFBQ0ssU0FBU0E7OzBCQUN4Qiw4REFBQ0osMERBQU1BOzs7OzswQkFDUCw4REFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJpY2Utc2NvdXQtZnJvbnRlbmQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wczogeyBzZXNzaW9uLCAuLi5wYWdlUHJvcHMgfSB9KSB7XG4gIHJldHVybiAoXG4gICAgPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uPXtzZXNzaW9ufT5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiU2Vzc2lvblByb3ZpZGVyIiwiTmF2YmFyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "react-bootstrap/Container":
/*!********************************************!*\
  !*** external "react-bootstrap/Container" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ "react-bootstrap/Nav":
/*!**************************************!*\
  !*** external "react-bootstrap/Nav" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ "react-bootstrap/Navbar":
/*!*****************************************!*\
  !*** external "react-bootstrap/Navbar" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/bootstrap"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();