/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrationRequestAsync = exports.registrationRequestError = exports.REGISTRATION_REQUEST_ERROR = exports.registrationRequestSuccess = exports.REGISTRATION_REQUEST_SUCCESS = exports.registrationRequest = exports.REGISTRATION_REQUEST = void 0;
var axios_1 = __importDefault(__webpack_require__(9));
exports.REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
var registrationRequest = function () { return ({
    type: exports.REGISTRATION_REQUEST,
}); };
exports.registrationRequest = registrationRequest;
exports.REGISTRATION_REQUEST_SUCCESS = 'REGISTRATION_REQUEST_SUCCESS';
var registrationRequestSuccess = function (token) { return ({
    type: exports.REGISTRATION_REQUEST_SUCCESS,
    token: token,
}); };
exports.registrationRequestSuccess = registrationRequestSuccess;
exports.REGISTRATION_REQUEST_ERROR = 'REGISTRATION_REQUEST_ERROR';
var registrationRequestError = function (error) { return ({
    type: exports.REGISTRATION_REQUEST_ERROR,
    error: error,
}); };
exports.registrationRequestError = registrationRequestError;
var registrationRequestAsync = function (req) { return function (dispatch, getState) {
    dispatch((0, exports.registrationRequest)());
    axios_1.default.post('https://reqres.in/api/register', req, {
        headers: { 'Content-Type': 'application/json' }
    })
        .then(function (resp) {
        var token = resp.data.token;
        dispatch((0, exports.registrationRequestSuccess)(token));
        localStorage.setItem('token', token);
    })
        .catch(function (error) {
        console.log(error);
        dispatch((0, exports.registrationRequestError)(String(error)));
    });
}; };
exports.registrationRequestAsync = registrationRequestAsync;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useResize = void 0;
var react_1 = __webpack_require__(0);
var useResize = function () {
    var _a = (0, react_1.useState)(window.innerWidth), width = _a[0], setWidth = _a[1];
    (0, react_1.useEffect)(function () {
        var handleResize = function () {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return function () {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return [width];
};
exports.useResize = useResize;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRequestAsync = exports.userRequestError = exports.USER_REQUEST_ERROR = exports.userRequestSuccess = exports.USER_REQUEST_SUCCESS = exports.userRequest = exports.USER_REQUEST = void 0;
var axios_1 = __importDefault(__webpack_require__(9));
exports.USER_REQUEST = 'USER_REQUEST';
var userRequest = function () { return ({
    type: exports.USER_REQUEST,
}); };
exports.userRequest = userRequest;
exports.USER_REQUEST_SUCCESS = 'USER_REQUEST_SUCCESS';
var userRequestSuccess = function (data) { return ({
    type: exports.USER_REQUEST_SUCCESS,
    data: data,
}); };
exports.userRequestSuccess = userRequestSuccess;
exports.USER_REQUEST_ERROR = 'USER_REQUEST_ERROR';
var userRequestError = function (error) { return ({
    type: exports.USER_REQUEST_ERROR,
    error: error,
}); };
exports.userRequestError = userRequestError;
var userRequestAsync = function () { return function (dispatch, getState) {
    dispatch((0, exports.userRequest)());
    axios_1.default.get('https://reqres.in/api/users', {
        params: {
            page: 1,
        }
    })
        .then(function (resp) {
        var userData = resp.data.data;
        dispatch((0, exports.userRequestSuccess)(userData));
    })
        .catch(function (error) {
        console.log(error);
        dispatch((0, exports.userRequestError)(String(error)));
    });
    dispatch((0, exports.userRequest)());
    axios_1.default.get('https://reqres.in/api/users', {
        params: {
            page: 2,
        }
    })
        .then(function (resp) {
        var userData = resp.data.data;
        dispatch((0, exports.userRequestSuccess)(userData));
    })
        .catch(function (error) {
        console.log(error);
        dispatch((0, exports.userRequestError)(String(error)));
    });
}; };
exports.userRequestAsync = userRequestAsync;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(44), exports);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = exports.validation = exports.updateRepeatPassword = exports.updatePassword = exports.updateEmail = exports.updateName = void 0;
var action_1 = __webpack_require__(4);
var reducer_1 = __webpack_require__(55);
var action_2 = __webpack_require__(6);
var reducer_2 = __webpack_require__(56);
var initialState = {
    name: '',
    email: 'eve.holt@reqres.in',
    password: '',
    repeatPassword: '',
    registration: {
        loading: false,
        token: '',
        error: '',
    },
    user: {
        loading: false,
        data: [],
        error: '',
    },
    validation: {
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
    },
};
var UPDATE_NAME = 'UPDATE_NAME';
var updateName = function (text) { return ({
    type: UPDATE_NAME,
    text: text,
}); };
exports.updateName = updateName;
var UPDATE_EMAIL = 'UPDATE_EMAIL';
var updateEmail = function (text) { return ({
    type: UPDATE_EMAIL,
    text: text,
}); };
exports.updateEmail = updateEmail;
var UPDATE_PASSWORD = 'UPDATE_PASSWORD';
var updatePassword = function (text) { return ({
    type: UPDATE_PASSWORD,
    text: text,
}); };
exports.updatePassword = updatePassword;
var UPDATE_REPEAT_PASSWORD = 'UPDATE_REPEAT_PASSWORD';
var updateRepeatPassword = function (text) { return ({
    type: UPDATE_REPEAT_PASSWORD,
    text: text,
}); };
exports.updateRepeatPassword = updateRepeatPassword;
var VALIDATION = 'VALIDATION';
var validation = function (errors) { return ({
    type: VALIDATION,
    errors: errors,
}); };
exports.validation = validation;
var rootReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case UPDATE_NAME:
            return __assign(__assign({}, state), { name: action.text });
        case UPDATE_EMAIL:
            return __assign(__assign({}, state), { email: action.text });
        case UPDATE_PASSWORD:
            return __assign(__assign({}, state), { password: action.text });
        case UPDATE_REPEAT_PASSWORD:
            return __assign(__assign({}, state), { repeatPassword: action.text });
        case action_1.REGISTRATION_REQUEST:
        case action_1.REGISTRATION_REQUEST_SUCCESS:
        case action_1.REGISTRATION_REQUEST_ERROR:
            return __assign(__assign({}, state), { registration: (0, reducer_1.registrationReducer)(state.registration, action) });
        case action_2.USER_REQUEST:
        case action_2.USER_REQUEST_SUCCESS:
        case action_2.USER_REQUEST_ERROR:
            return __assign(__assign({}, state), { user: (0, reducer_2.userReducer)(state.user, action) });
        case VALIDATION:
            return __assign(__assign({}, state), { validation: action.errors });
        default:
            return state;
    }
    ;
};
exports.rootReducer = rootReducer;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(25), exports);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(38), exports);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(40), exports);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(81), exports);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(__webpack_require__(15));
var server_1 = __importDefault(__webpack_require__(16));
var App_1 = __webpack_require__(17);
var indexTemplate_1 = __webpack_require__(102);
var app = (0, express_1.default)();
app.use("/static", express_1.default.static("./dist/client"));
app.get("/", function (req, res) {
    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));
});
app.get("*", function (req, res) {
    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));
});
app.listen(3000, function () {
    console.log("server started on port http://localhost:3000");
});


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importStar(__webpack_require__(0));
var root_1 = __webpack_require__(18);
var Layout_1 = __webpack_require__(19);
__webpack_require__(51);
var redux_1 = __webpack_require__(53);
var react_redux_1 = __webpack_require__(2);
var redux_devtools_extension_1 = __webpack_require__(54);
var reducer_1 = __webpack_require__(8);
var redux_thunk_1 = __importDefault(__webpack_require__(57));
var react_router_dom_1 = __webpack_require__(3);
var RegistrationForm_1 = __webpack_require__(58);
var UserPage_1 = __webpack_require__(72);
var store = (0, redux_1.createStore)(reducer_1.rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));
function AppComponent() {
    var _a = (0, react_1.useState)(false), mounted = _a[0], setMounted = _a[1];
    (0, react_1.useEffect)(function () {
        setMounted(true);
    }, []);
    return (react_1.default.createElement(react_redux_1.Provider, { store: store }, mounted &&
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: "/users", element: react_1.default.createElement(Layout_1.Layout, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(RegistrationForm_1.RegistrationForm, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/users/:id", element: react_1.default.createElement(UserPage_1.UserPage, null) })))));
}
;
exports.App = (0, root_1.hot)(function () { return react_1.default.createElement(AppComponent, null); });


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(20), exports);


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var CardList_1 = __webpack_require__(21);
var Content_1 = __webpack_require__(11);
var Header_1 = __webpack_require__(12);
var MainHeaderContent_1 = __webpack_require__(42);
var layout_css_1 = __importDefault(__webpack_require__(50));
function Layout() {
    return (react_1.default.createElement("div", { className: layout_css_1.default.layout },
        react_1.default.createElement(Header_1.Header, null,
            react_1.default.createElement(MainHeaderContent_1.MainHeaderContent, null)),
        react_1.default.createElement(Content_1.Content, null,
            react_1.default.createElement(CardList_1.CardList, null))));
}
exports.Layout = Layout;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(22), exports);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardList = void 0;
var classnames_1 = __importDefault(__webpack_require__(1));
var react_1 = __importStar(__webpack_require__(0));
var useResize_1 = __webpack_require__(5);
var useUserData_1 = __webpack_require__(23);
var Card_1 = __webpack_require__(24);
var CardListBtn_1 = __webpack_require__(34);
var cardlist_css_1 = __importDefault(__webpack_require__(37));
function CardList() {
    var _a = (0, useUserData_1.useUserData)(), data = _a.data, loading = _a.loading, error = _a.error;
    var width = (0, useResize_1.useResize)()[0];
    var _b = (0, react_1.useState)(false), loadMore = _b[0], setLoadMore = _b[1];
    function handleClickOpen() {
        setLoadMore(true);
    }
    ;
    function handleClickClose() {
        setLoadMore(false);
    }
    ;
    var firstPartData;
    var secondPartData;
    if (width > 1200) {
        firstPartData = data.slice(0, 8);
        secondPartData = data.slice(8, 12);
    }
    else if (width > 576) {
        firstPartData = data.slice(0, 6);
        secondPartData = data.slice(6, 12);
    }
    else {
        firstPartData = data.slice(0, 4);
        secondPartData = data.slice(4, 12);
    }
    var mainClasses = (0, classnames_1.default)(cardlist_css_1.default.mainContainer, 'container');
    return (react_1.default.createElement("div", { className: mainClasses },
        react_1.default.createElement("ul", { className: cardlist_css_1.default.cardsList },
            error && react_1.default.createElement("div", null, error),
            loading && react_1.default.createElement("div", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."),
            !loading && !error && data.length === 0 && react_1.default.createElement("div", null, "\u0412\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439"),
            !loading && firstPartData.length !== 0 && firstPartData.map(function (user) {
                return react_1.default.createElement(Card_1.Card, { name: user.first_name, surname: user.last_name, imgSrc: user.avatar, email: user.email, id: user.id, key: user.id });
            }),
            !loading && loadMore && secondPartData.length !== 0 && secondPartData.map(function (user) {
                return react_1.default.createElement(Card_1.Card, { name: user.first_name, surname: user.last_name, imgSrc: user.avatar, email: user.email, id: user.id, key: user.id });
            })),
        !loadMore &&
            react_1.default.createElement(CardListBtn_1.CardListBtn, { text: 'Показать еще', onClick: handleClickOpen }),
        loadMore &&
            react_1.default.createElement(CardListBtn_1.CardListBtn, { text: 'Скрыть', onClick: handleClickClose, inverted: true })));
}
exports.CardList = CardList;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserData = void 0;
var react_1 = __webpack_require__(0);
var react_redux_1 = __webpack_require__(2);
var action_1 = __webpack_require__(6);
function useUserData() {
    var data = (0, react_redux_1.useSelector)(function (state) { return state.user.data; });
    var loading = (0, react_redux_1.useSelector)(function (state) { return state.user.loading; });
    var error = (0, react_redux_1.useSelector)(function (state) { return state.user.error; });
    var token = localStorage.getItem('token');
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        if (token && token !== 'undefined') {
            dispatch((0, action_1.userRequestAsync)());
        }
    }, [token]);
    return {
        data: data,
        loading: loading,
        error: error
    };
}
exports.useUserData = useUserData;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var AvatarIcon_1 = __webpack_require__(10);
var card_css_1 = __importDefault(__webpack_require__(27));
var TextContent_1 = __webpack_require__(28);
var react_router_dom_1 = __webpack_require__(3);
var CardBtn_1 = __webpack_require__(31);
function Card(props) {
    var name = props.name, surname = props.surname, imgSrc = props.imgSrc, email = props.email, id = props.id;
    return (react_1.default.createElement("li", { className: card_css_1.default.card },
        react_1.default.createElement(react_router_dom_1.Link, { to: "/users/".concat(id), className: card_css_1.default.cardLink },
            react_1.default.createElement("div", { className: card_css_1.default.avatarIcon },
                react_1.default.createElement(AvatarIcon_1.AvatarIcon, { imgSrc: imgSrc, size: 124 })),
            react_1.default.createElement(TextContent_1.TextContent, { name: name, surname: surname }),
            react_1.default.createElement(CardBtn_1.CardBtn, null))));
}
exports.Card = Card;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var avataricon_css_1 = __importDefault(__webpack_require__(26));
function AvatarIcon(_a) {
    var imgSrc = _a.imgSrc, size = _a.size;
    return (react_1.default.createElement("img", { width: size, height: size, className: avataricon_css_1.default.avatarIconImg, src: imgSrc, alt: 'user_img' }));
}
exports.AvatarIcon = AvatarIcon;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"avatarIconImg": "avataricon__avatarIconImg--zCYVk"
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "card__card--2IPyw",
	"cardLink": "card__cardLink--1ZNrD",
	"avatarIcon": "card__avatarIcon--2O84v"
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(29), exports);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextContent = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var textcontent_css_1 = __importDefault(__webpack_require__(30));
function TextContent(_a) {
    var name = _a.name, surname = _a.surname;
    var fullName = name + ' ' + surname;
    return (react_1.default.createElement("p", { className: textcontent_css_1.default.textContent }, fullName));
}
exports.TextContent = TextContent;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"textContent": "textcontent__textContent--2RbM5"
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(32), exports);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardBtn = void 0;
var classnames_1 = __importDefault(__webpack_require__(1));
var react_1 = __importStar(__webpack_require__(0));
var cardbtn_css_1 = __importDefault(__webpack_require__(33));
function CardBtn() {
    var _a = (0, react_1.useState)(false), isLike = _a[0], setIsLike = _a[1];
    function handleClick(e) {
        console.log('here');
        e.stopPropagation();
        e.preventDefault();
        if (isLike) {
            setIsLike(false);
        }
        else {
            setIsLike(true);
        }
    }
    var likeBtn = (0, classnames_1.default)(cardbtn_css_1.default.cardBtn, cardbtn_css_1.default.cardBtnLike);
    return (react_1.default.createElement("button", { className: isLike ? likeBtn : cardbtn_css_1.default.cardBtn, onClick: handleClick },
        react_1.default.createElement("svg", { width: "16", height: "14", viewBox: "0 0 16 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M4.85 1C2.72375 1 1 2.72173 1 4.84548C1 8.69096 5.55 12.1869 8 13C10.45 12.1869 15 8.69096 15 4.84548C15 2.72173 13.2762 1 11.15 1C9.848 1 8.6965 1.64569 8 2.63398C7.64499 2.1289 7.17336 1.71669 6.62504 1.43226C6.07672 1.14784 5.46785 0.999565 4.85 1Z", stroke: "#151317", strokeLinecap: "round", strokeLinejoin: "round" }))));
}
exports.CardBtn = CardBtn;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardBtn": "cardbtn__cardBtn--2Et5X",
	"cardBtnLike": "cardbtn__cardBtnLike--3RWXu"
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(35), exports);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardListBtn = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var cardlistbtn_css_1 = __importDefault(__webpack_require__(36));
function CardListBtn(_a) {
    var onClick = _a.onClick, inverted = _a.inverted, text = _a.text;
    return (react_1.default.createElement("button", { className: cardlistbtn_css_1.default.listBtn, onClick: onClick },
        react_1.default.createElement("span", { className: cardlistbtn_css_1.default.listBtnText }, text),
        react_1.default.createElement("svg", { className: inverted ? cardlistbtn_css_1.default.inverted : undefined, width: "18", height: "10", viewBox: "0 0 18 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M16.497 0.989027L8.99999 8.29703L1.50299 0.989027C1.36905 0.858193 1.18923 0.784947 1.00199 0.784947C0.814751 0.784947 0.634939 0.858193 0.500992 0.989027C0.436135 1.05257 0.384611 1.12842 0.349436 1.21213C0.314261 1.29584 0.296143 1.38573 0.296143 1.47653C0.296143 1.56733 0.314261 1.65721 0.349436 1.74092C0.384611 1.82463 0.436135 1.90048 0.500992 1.96403L8.47649 9.74003C8.61655 9.87655 8.8044 9.95295 8.99999 9.95295C9.19558 9.95295 9.38343 9.87655 9.52349 9.74003L17.499 1.96553C17.5643 1.90193 17.6162 1.8259 17.6517 1.74191C17.6871 1.65792 17.7054 1.56769 17.7054 1.47653C17.7054 1.38537 17.6871 1.29513 17.6517 1.21114C17.6162 1.12715 17.5643 1.05112 17.499 0.987526C17.365 0.856693 17.1852 0.783447 16.998 0.783447C16.8108 0.783447 16.6309 0.856693 16.497 0.987526V0.989027Z", fill: "#151317" }))));
}
exports.CardListBtn = CardListBtn;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"listBtn": "cardlistbtn__listBtn--OWh01",
	"listBtnText": "cardlistbtn__listBtnText--19Nd6",
	"inverted": "cardlistbtn__inverted--36J7v"
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"mainContainer": "cardlist__mainContainer--2HRN0",
	"cardsList": "cardlist__cardsList--1bRI1"
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var content_css_1 = __importDefault(__webpack_require__(39));
function Content(_a) {
    var children = _a.children;
    return (react_1.default.createElement("main", { className: content_css_1.default.content }, children));
}
exports.Content = Content;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "content__content--2O9-S"
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var header_css_1 = __importDefault(__webpack_require__(41));
function Header(_a) {
    var children = _a.children;
    return (react_1.default.createElement("header", { className: header_css_1.default.header }, children));
}
exports.Header = Header;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header__header--bAgyG"
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(43), exports);


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainHeaderContent = void 0;
var classnames_1 = __importDefault(__webpack_require__(1));
var react_1 = __importDefault(__webpack_require__(0));
var ExitBtn_1 = __webpack_require__(7);
var HaederInfo_1 = __webpack_require__(46);
var mainheadercontent_css_1 = __importDefault(__webpack_require__(49));
function MainHeaderContent() {
    var headerContainer = (0, classnames_1.default)(mainheadercontent_css_1.default.headerContainer, "container");
    return (react_1.default.createElement("div", { className: headerContainer },
        react_1.default.createElement(HaederInfo_1.HaederInfo, null),
        react_1.default.createElement(ExitBtn_1.ExitBtn, null)));
}
exports.MainHeaderContent = MainHeaderContent;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExitBtn = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var exitbtn_css_1 = __importDefault(__webpack_require__(45));
var react_router_dom_1 = __webpack_require__(3);
var react_redux_1 = __webpack_require__(2);
var action_1 = __webpack_require__(4);
var useResize_1 = __webpack_require__(5);
function ExitBtn() {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var dispatch = (0, react_redux_1.useDispatch)();
    var width = (0, useResize_1.useResize)()[0];
    function handleClick() {
        dispatch((0, action_1.registrationRequestSuccess)(''));
        localStorage.removeItem('token');
        navigate("/");
    }
    ;
    return (react_1.default.createElement("button", { className: exitbtn_css_1.default.headerBtn, onClick: handleClick }, width > 576 ?
        'Выход' :
        react_1.default.createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M7.79 13.29C8.18 13.68 8.81 13.68 9.2 13.29L12.79 9.7C12.8827 9.60749 12.9563 9.4976 13.0064 9.37662C13.0566 9.25565 13.0824 9.12597 13.0824 8.995C13.0824 8.86403 13.0566 8.73435 13.0064 8.61338C12.9563 8.4924 12.8827 8.38251 12.79 8.29L9.2 4.7C9.01302 4.51302 8.75943 4.40798 8.495 4.40798C8.23057 4.40798 7.97698 4.51302 7.79 4.7C7.60302 4.88698 7.49798 5.14057 7.49798 5.405C7.49798 5.66943 7.60302 5.92302 7.79 6.11L9.67 8H1C0.45 8 0 8.45 0 9C0 9.55 0.45 10 1 10H9.67L7.79 11.88C7.4 12.27 7.41 12.91 7.79 13.29ZM16 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V5C0 5.55 0.45 6 1 6C1.55 6 2 5.55 2 5V3C2 2.45 2.45 2 3 2H15C15.55 2 16 2.45 16 3V15C16 15.55 15.55 16 15 16H3C2.45 16 2 15.55 2 15V13C2 12.45 1.55 12 1 12C0.45 12 0 12.45 0 13V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z", fill: "#F8F8F8" }))));
}
exports.ExitBtn = ExitBtn;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"headerBtn": "exitbtn__headerBtn--3D39Q"
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(47), exports);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HaederInfo = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var haederinfo_css_1 = __importDefault(__webpack_require__(48));
function HaederInfo() {
    return (react_1.default.createElement("div", { className: haederinfo_css_1.default.headerInfo },
        react_1.default.createElement("h1", { className: haederinfo_css_1.default.headerTitle }, "\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430"),
        react_1.default.createElement("p", { className: haederinfo_css_1.default.headerText }, "\u042D\u0442\u043E \u043E\u043F\u044B\u0442\u043D\u044B\u0435 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B, \u0445\u043E\u0440\u043E\u0448\u043E \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u044E\u0449\u0438\u0435\u0441\u044F \u0432\u043E \u0432\u0441\u0435\u0445 \u0437\u0430\u0434\u0430\u0447\u0430\u0445, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043B\u043E\u0436\u0430\u0442\u0441\u044F \u043D\u0430 \u0438\u0445 \u043F\u043B\u0435\u0447\u0438, \u0438 \u0443\u043C\u0435\u044E\u0449\u0438\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C \u0432\u044B\u0445\u043E\u0434 \u0438\u0437 \u043B\u044E\u0431\u044B\u0445, \u0434\u0430\u0436\u0435 \u0441\u0430\u043C\u044B\u0445 \u0441\u043B\u043E\u0436\u043D\u044B\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0439. ")));
}
exports.HaederInfo = HaederInfo;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"headerInfo": "haederinfo__headerInfo--2_m_m",
	"headerTitle": "haederinfo__headerTitle--1lXHh",
	"headerText": "haederinfo__headerText--1FhAJ"
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"headerContainer": "mainheadercontent__headerContainer--2evPs"
};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "layout__layout--2fANc"
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(52);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
exports.push([module.i, ":root {\n  --black:          #333333;\n  --orange:         #CC6633;\n  --green:          #A4CC33;\n  --whiteLightness: 100%;\n  --white:          hsl(0, 0%, var(--whiteLightness));\n  --grayF4:         hsl(0, 0%, calc(var(--whiteLightness) - 4%));\n  --greyF3:         hsl(0, 0%, calc(var(--whiteLightness) - 5%));\n  --greyEC:         hsl(0, 0%, calc(var(--whiteLightness) - 7%));\n  --greyD9:         hsl(0, 0%, calc(var(--whiteLightness) - 15%));\n  --greyC4:         hsl(0, 0%, calc(var(--whiteLightness) - 23%));\n  --grey99:         hsl(0, 0%, calc(var(--whiteLightness) - 40%));\n  --grey66:         hsl(0, 0%, calc(var(--whiteLightness) - 60%));\n}\n\nhtml{\n  height: 100%;\n}\n\nbody {\n  min-width: 320px;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  background-color: #FFF;\n  font-size: 14px;\n  line-height: 16px;\n  font-family: 'Roboto', serif;\n}\n\n#react_root{\n  height: 100%;\n}\n\n* {\n  color: var(--black);\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nh1, h2, h3, h4, p{\n  margin: 0;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nbutton {\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n}\n\n.container{\n  max-width: 1440px;\n  margin: 0 auto;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
    var list = []; // return the list of modules as css string
    list.toString = function toString() {
        return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
                return "@media ".concat(item[2], " {").concat(content, "}");
            }
            return content;
        }).join('');
    }; // import a list of modules into the list
    // eslint-disable-next-line func-names
    list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
        }
        var alreadyImportedModules = {};
        if (dedupe) {
            for (var i = 0; i < this.length; i++) {
                // eslint-disable-next-line prefer-destructuring
                var id = this[i][0];
                if (id != null) {
                    alreadyImportedModules[id] = true;
                }
            }
        }
        for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);
            if (dedupe && alreadyImportedModules[item[0]]) {
                // eslint-disable-next-line no-continue
                continue;
            }
            if (mediaQuery) {
                if (!item[2]) {
                    item[2] = mediaQuery;
                }
                else {
                    item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                }
            }
            list.push(item);
        }
    };
    return list;
};
function cssWithMappingToString(item, useSourceMap) {
    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring
    var cssMapping = item[3];
    if (!cssMapping) {
        return content;
    }
    if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
            return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
    }
    return [content].join('\n');
} // Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    return "/*# ".concat(data, " */");
}


/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrationReducer = void 0;
var action_1 = __webpack_require__(4);
var registrationReducer = function (state, action) {
    switch (action.type) {
        case action_1.REGISTRATION_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case action_1.REGISTRATION_REQUEST_SUCCESS:
            return __assign(__assign({}, state), { token: action.token, loading: false });
        case action_1.REGISTRATION_REQUEST_ERROR:
            return __assign(__assign({}, state), { error: action.error, loading: false });
        default:
            return state;
    }
};
exports.registrationReducer = registrationReducer;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userReducer = void 0;
var action_1 = __webpack_require__(6);
var userReducer = function (state, action) {
    var _a;
    switch (action.type) {
        case action_1.USER_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case action_1.USER_REQUEST_SUCCESS:
            return __assign(__assign({}, state), { data: (_a = state.data).concat.apply(_a, action.data), loading: false });
        case action_1.USER_REQUEST_ERROR:
            return __assign(__assign({}, state), { error: action.error, loading: false });
        default:
            return state;
    }
};
exports.userReducer = userReducer;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationForm = void 0;
var react_1 = __importStar(__webpack_require__(0));
var react_redux_1 = __webpack_require__(2);
var reducer_1 = __webpack_require__(8);
var registrationform_css_1 = __importDefault(__webpack_require__(59));
var react_router_dom_1 = __webpack_require__(3);
var FormBtn_1 = __webpack_require__(60);
var action_1 = __webpack_require__(4);
var FormFieldset_1 = __webpack_require__(63);
function RegistrationForm() {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var name = (0, react_redux_1.useSelector)(function (state) { return state.name; });
    var email = (0, react_redux_1.useSelector)(function (state) { return state.email; });
    var password = (0, react_redux_1.useSelector)(function (state) { return state.password; });
    var repeatPassword = (0, react_redux_1.useSelector)(function (state) { return state.repeatPassword; });
    var _a = (0, react_1.useState)(false), isSumbited = _a[0], setIsSubmited = _a[1];
    var dispatch = (0, react_redux_1.useDispatch)();
    function errorsInName() {
        var textErrorName = '';
        if (!name) {
            textErrorName = 'Укажите имя';
        }
        else if (name.length < 2) {
            textErrorName = 'Имя должно состоять минимум из 2-ух букв';
        }
        else if (/[^a-z]/i.test(name) && /[^а-я]/i.test(name)) {
            textErrorName = 'Имя может сожержать только буквы';
        }
        ;
        return (textErrorName);
    }
    ;
    function errorsInEmail() {
        var textErrorEmail = '';
        if (!email) {
            textErrorEmail = 'Укажите электронную почту';
        }
        else if (!validateEmail) {
            textErrorEmail = 'Проверьте адрес электронной почты';
        }
        ;
        return (textErrorEmail);
    }
    ;
    function errorsInPassword() {
        var textErrorPassword = '';
        if (!password) {
            textErrorPassword = 'Укажите пароль';
        }
        else if (password.length < 6) {
            textErrorPassword = 'Пароль не может содержать менее 6 символов';
        }
        else if (!validatePassword()) {
            textErrorPassword = 'Пароль должен содержать, хотя бы одну строчную букву';
        }
        ;
        return (textErrorPassword);
    }
    function errorsInRepeatPassword() {
        var textErrorPassword = '';
        if (!repeatPassword) {
            textErrorPassword = 'Повторите пароль';
        }
        else if (repeatPassword !== password) {
            textErrorPassword = 'Пароли должны совпадать';
        }
        ;
        return (textErrorPassword);
    }
    function validateEmail() {
        return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }
    ;
    function validatePassword() {
        return password.match(/^(?=.*[a-z]).{6,}$/);
    }
    ;
    var loading = (0, react_redux_1.useSelector)(function (state) { return state.registration.loading; });
    var error = (0, react_redux_1.useSelector)(function (state) { return state.registration.error; });
    var token = (0, react_redux_1.useSelector)(function (state) { return state.registration.token; });
    function handleSubmit(event) {
        event.preventDefault();
        var validationErrors = {
            name: errorsInName(),
            email: errorsInEmail(),
            password: errorsInPassword(),
            repeatPassword: errorsInRepeatPassword(),
        };
        dispatch((0, reducer_1.validation)(validationErrors));
        if (!errorsInName() && !errorsInEmail() && !errorsInPassword() && !errorsInRepeatPassword()) {
            var req = {
                email: email,
                password: password,
            };
            dispatch((0, action_1.registrationRequestAsync)(req));
            setIsSubmited(true);
        }
        else {
            return;
        }
        ;
    }
    ;
    (0, react_1.useEffect)(function () {
        if (token && token !== 'undefined' && isSumbited) {
            navigate("/users");
        }
        ;
    }, [token, isSumbited]);
    return (react_1.default.createElement("form", { className: registrationform_css_1.default.form, onSubmit: handleSubmit },
        react_1.default.createElement("span", { className: registrationform_css_1.default.formTitle }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"),
        react_1.default.createElement(FormFieldset_1.FormFieldset, null),
        react_1.default.createElement(FormBtn_1.FormBtn, null),
        loading &&
            react_1.default.createElement("div", { className: registrationform_css_1.default.formWarningBlock },
                react_1.default.createElement("div", { className: registrationform_css_1.default.formWarning }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")),
        error &&
            react_1.default.createElement("div", { className: registrationform_css_1.default.formWarningBlock },
                react_1.default.createElement("div", { className: registrationform_css_1.default.formWarning }, error))));
}
exports.RegistrationForm = RegistrationForm;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "registrationform__form--3cSIe",
	"formTitle": "registrationform__formTitle--2qvt3",
	"formWarningBlock": "registrationform__formWarningBlock--3RiC0",
	"formWarning": "registrationform__formWarning--2ry9u"
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(61), exports);


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormBtn = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var formbtn_css_1 = __importDefault(__webpack_require__(62));
function FormBtn() {
    return (react_1.default.createElement("button", { type: 'submit', className: formbtn_css_1.default.button }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"));
}
exports.FormBtn = FormBtn;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button": "formbtn__button--1AjsN"
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(64), exports);


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormFieldset = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var react_redux_1 = __webpack_require__(2);
var reducer_1 = __webpack_require__(8);
var InputBlock_1 = __webpack_require__(65);
var formfieldset_css_1 = __importDefault(__webpack_require__(71));
function FormFieldset() {
    var name = (0, react_redux_1.useSelector)(function (state) { return state.name; });
    var email = (0, react_redux_1.useSelector)(function (state) { return state.email; });
    var password = (0, react_redux_1.useSelector)(function (state) { return state.password; });
    var repeatPassword = (0, react_redux_1.useSelector)(function (state) { return state.repeatPassword; });
    var nameError = (0, react_redux_1.useSelector)(function (state) { return state.validation.name; });
    var emailError = (0, react_redux_1.useSelector)(function (state) { return state.validation.email; });
    var passwordError = (0, react_redux_1.useSelector)(function (state) { return state.validation.password; });
    var repeatPasswordError = (0, react_redux_1.useSelector)(function (state) { return state.validation.repeatPassword; });
    var dispatch = (0, react_redux_1.useDispatch)();
    function handleChangeName(event) {
        dispatch((0, reducer_1.updateName)(event.target.value));
    }
    ;
    function handleChangeEmail(event) {
        dispatch((0, reducer_1.updateEmail)(event.target.value));
    }
    ;
    function handleChangePassword(event) {
        dispatch((0, reducer_1.updatePassword)(event.target.value));
    }
    ;
    function handleChangeRepeatPassword(event) {
        dispatch((0, reducer_1.updateRepeatPassword)(event.target.value));
    }
    ;
    return (react_1.default.createElement("fieldset", { className: formfieldset_css_1.default.fieldset },
        react_1.default.createElement(InputBlock_1.InputBlock, { label: 'Имя', value: name, onChange: handleChangeName, error: nameError, type: 'text' }),
        react_1.default.createElement(InputBlock_1.InputBlock, { label: 'Электронная почта', value: email, onChange: handleChangeEmail, error: emailError, type: 'email' }),
        react_1.default.createElement(InputBlock_1.InputBlock, { label: 'Пароль', value: password, onChange: handleChangePassword, error: passwordError, type: 'password' }),
        react_1.default.createElement(InputBlock_1.InputBlock, { label: 'Подтвердите пароль', value: repeatPassword, onChange: handleChangeRepeatPassword, error: repeatPasswordError, type: 'password' })));
}
exports.FormFieldset = FormFieldset;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(66), exports);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputBlock = void 0;
var classnames_1 = __importDefault(__webpack_require__(1));
var react_1 = __importStar(__webpack_require__(0));
var FormInput_1 = __webpack_require__(67);
var inputblock_css_1 = __importDefault(__webpack_require__(70));
function InputBlock(_a) {
    var label = _a.label, value = _a.value, onChange = _a.onChange, error = _a.error, type = _a.type;
    var _b = (0, react_1.useState)(''), newType = _b[0], setNewType = _b[1];
    var _c = (0, react_1.useState)(false), view = _c[0], setView = _c[1];
    function handleClick(e) {
        e.stopPropagation();
        e.preventDefault();
        if (newType === 'text') {
            setNewType('password');
            setView(false);
        }
        else {
            setNewType('text');
            setView(true);
        }
        ;
    }
    ;
    var inputControlOpen = (0, classnames_1.default)(inputblock_css_1.default.inputControl, inputblock_css_1.default.view);
    return (react_1.default.createElement("div", { className: inputblock_css_1.default.inputBlock },
        react_1.default.createElement("label", { className: inputblock_css_1.default.label }, label),
        react_1.default.createElement(FormInput_1.FormInput, { value: value, onChange: onChange, ariaInvalid: error ? 'true' : undefined, type: newType ? newType : type }),
        type === 'password' &&
            react_1.default.createElement("button", { className: view ? inputControlOpen : inputblock_css_1.default.inputControl, onClick: handleClick },
                react_1.default.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("path", { d: "M10.7302 5.07319C11.1448 5.02485 11.5684 5 11.9999 5C16.6639 5 20.3998 7.90264 21.9999 12C21.6053 13.0104 21.0809 13.9482 20.4446 14.7877M6.51956 6.51944C4.47949 7.76406 2.90105 9.69259 1.99994 12C3.60008 16.0974 7.33597 19 11.9999 19C14.0375 19 15.8979 18.446 17.4805 17.4804M9.87871 9.87859C9.33576 10.4215 8.99994 11.1715 8.99994 12C8.99994 13.6569 10.3431 15 11.9999 15C12.8284 15 13.5785 14.6642 14.1214 14.1212", stroke: "#808185", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
                    react_1.default.createElement("path", { d: "M4 4L20 20", stroke: "#808185", strokeWidth: "1.5", strokeLinecap: "round" }))),
        error &&
            react_1.default.createElement("span", { className: inputblock_css_1.default.formError }, error)));
}
exports.InputBlock = InputBlock;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(68), exports);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormInput = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var forminput_css_1 = __importDefault(__webpack_require__(69));
function FormInput(_a) {
    var value = _a.value, onChange = _a.onChange, ariaInvalid = _a.ariaInvalid, type = _a.type;
    return (react_1.default.createElement("input", { className: forminput_css_1.default.input, value: value, onChange: onChange, "aria-invalid": ariaInvalid, type: type }));
}
exports.FormInput = FormInput;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"input": "forminput__input--3QpSR"
};


/***/ }),
/* 70 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"inputBlock": "inputblock__inputBlock--3rBmo",
	"label": "inputblock__label--1C490",
	"formError": "inputblock__formError--2P8eQ",
	"inputControl": "inputblock__inputControl--hIKEq",
	"view": "inputblock__view--Opa34"
};


/***/ }),
/* 71 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"fieldset": "formfieldset__fieldset--3arre"
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(73), exports);


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPage = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var userpage_css_1 = __importDefault(__webpack_require__(74));
var react_router_dom_1 = __webpack_require__(3);
var Header_1 = __webpack_require__(12);
var UserHeaderContent_1 = __webpack_require__(75);
var react_redux_1 = __webpack_require__(2);
var Content_1 = __webpack_require__(11);
var classnames_1 = __importDefault(__webpack_require__(1));
var UserTextBlock_1 = __webpack_require__(83);
var UserContactList_1 = __webpack_require__(89);
var ExitBtn_1 = __webpack_require__(7);
var StapBackBtn_1 = __webpack_require__(13);
function UserPage() {
    var id = (0, react_router_dom_1.useParams)().id;
    var data = (0, react_redux_1.useSelector)(function (state) { return state.user.data; });
    var userData = data.find(function (x) { return "".concat(x.id) === id; });
    if (!userData) {
        return (react_1.default.createElement(Header_1.Header, null,
            react_1.default.createElement("div", { className: userpage_css_1.default.userError }, "\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u043D\u0430\u0439\u0442\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"),
            react_1.default.createElement(ExitBtn_1.ExitBtn, null),
            react_1.default.createElement(StapBackBtn_1.StapBackBtn, null)));
    }
    var userPageContainer = (0, classnames_1.default)(userpage_css_1.default.infoBlock, "container");
    return (react_1.default.createElement("div", { className: userpage_css_1.default.layout },
        react_1.default.createElement(Header_1.Header, null,
            react_1.default.createElement(UserHeaderContent_1.UserHeaderContent, { name: userData.first_name, surname: userData.last_name, imgSrc: userData.avatar })),
        react_1.default.createElement(Content_1.Content, null,
            react_1.default.createElement("div", { className: userPageContainer },
                react_1.default.createElement(UserTextBlock_1.UserTextBlock, null),
                react_1.default.createElement(UserContactList_1.UserContactList, { email: userData.email })))));
}
exports.UserPage = UserPage;


/***/ }),
/* 74 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "userpage__layout--3bDvT",
	"infoBlock": "userpage__infoBlock--2OqA9",
	"userError": "userpage__userError--3XYP2"
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(76), exports);


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHeaderContent = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var AvatarIcon_1 = __webpack_require__(10);
var ExitBtn_1 = __webpack_require__(7);
var userheadercontent_css_1 = __importDefault(__webpack_require__(77));
var classnames_1 = __importDefault(__webpack_require__(1));
var HeaderUserInfo_1 = __webpack_require__(78);
var StapBackBtn_1 = __webpack_require__(13);
function UserHeaderContent(_a) {
    var name = _a.name, surname = _a.surname, imgSrc = _a.imgSrc;
    var headerContainer = (0, classnames_1.default)(userheadercontent_css_1.default.headerContainer, "container");
    return (react_1.default.createElement("div", { className: headerContainer },
        react_1.default.createElement("div", { className: userheadercontent_css_1.default.headerIcon },
            react_1.default.createElement(AvatarIcon_1.AvatarIcon, { imgSrc: imgSrc, size: 187 })),
        react_1.default.createElement(HeaderUserInfo_1.HeaderUserInfo, { name: name, surname: surname }),
        react_1.default.createElement(ExitBtn_1.ExitBtn, null),
        react_1.default.createElement(StapBackBtn_1.StapBackBtn, null)));
}
exports.UserHeaderContent = UserHeaderContent;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"headerContainer": "userheadercontent__headerContainer--OOSaN",
	"headerIcon": "userheadercontent__headerIcon--1aqmq"
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(79), exports);


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderUserInfo = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var headeruserinfo_css_1 = __importDefault(__webpack_require__(80));
function HeaderUserInfo(_a) {
    var name = _a.name, surname = _a.surname;
    var fullName = name + ' ' + surname;
    return (react_1.default.createElement("div", { className: headeruserinfo_css_1.default.headerTextContent },
        react_1.default.createElement("h1", { className: headeruserinfo_css_1.default.headerTitle }, fullName),
        react_1.default.createElement("span", { className: headeruserinfo_css_1.default.headerAddInfo }, "\u041F\u0430\u0440\u0442\u043D\u0435\u0440")));
}
exports.HeaderUserInfo = HeaderUserInfo;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"headerTextContent": "headeruserinfo__headerTextContent--Y5zh0",
	"headerTitle": "headeruserinfo__headerTitle--1oF18",
	"headerAddInfo": "headeruserinfo__headerAddInfo--u2JeM"
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StapBackBtn = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var stapbackbtn_css_1 = __importDefault(__webpack_require__(82));
var react_router_dom_1 = __webpack_require__(3);
var useResize_1 = __webpack_require__(5);
function StapBackBtn() {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var width = (0, useResize_1.useResize)()[0];
    function handleClick() {
        navigate("/users");
    }
    return (react_1.default.createElement("button", { className: stapbackbtn_css_1.default.headerBtn, onClick: handleClick }, width > 576 ?
        'Назад' :
        react_1.default.createElement("svg", { width: "7", height: "15", viewBox: "0 0 7 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M5.83749 14.0013C5.68809 14.0018 5.54048 13.9688 5.4055 13.9048C5.27052 13.8407 5.15161 13.7473 5.05749 13.6313L0.227488 7.63125C0.0804062 7.45232 0 7.22788 0 6.99625C0 6.76463 0.0804062 6.54018 0.227488 6.36125L5.22749 0.361252C5.39723 0.157036 5.64114 0.0286112 5.90556 0.0042315C6.16999 -0.0201482 6.43327 0.0615137 6.63749 0.231252C6.8417 0.400991 6.97013 0.644902 6.99451 0.909329C7.01889 1.17375 6.93723 1.43704 6.76749 1.64125L2.29749 7.00125L6.61749 12.3613C6.73977 12.508 6.81745 12.6868 6.84133 12.8763C6.86521 13.0659 6.83429 13.2583 6.75223 13.4308C6.67018 13.6034 6.54042 13.7488 6.37831 13.8499C6.2162 13.9509 6.02852 14.0035 5.83749 14.0013Z", fill: "#F8F8F8" }))));
}
exports.StapBackBtn = StapBackBtn;


/***/ }),
/* 82 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"headerBtn": "stapbackbtn__headerBtn--3LHdb"
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(84), exports);


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTextBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var UserTextParagraf_1 = __webpack_require__(85);
var usertextblock_css_1 = __importDefault(__webpack_require__(88));
var textList = [
    "\u041A\u043B\u0438\u0435\u043D\u0442\u044B \u0432\u0438\u0434\u044F\u0442 \u0432 \u043D\u0435\u043C \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0430 \u043F\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432,\n  \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0442\u0430\u043A\u0438\u0435 \u0430\u0441\u043F\u0435\u043A\u0442\u044B, \u043A\u0430\u043A \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430, \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B, \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u0438 \u0418\u0422-\u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B.\n  \u041E\u043D \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u043B\u0443\u0447\u0448\u0435 \u043F\u043E\u043D\u0438\u043C\u0430\u0442\u044C \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u0440\u0438\u0441\u043A\u043E\u0432 \u0438\u0445 \u0431\u0438\u0437\u043D\u0435\u0441\u0430,\n  \u0443\u043B\u0443\u0447\u0448\u0430\u0442\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B \u0437\u0430 \u0441\u0447\u0435\u0442 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043D\u043E\u0432\u0435\u0439\u0448\u0438\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u0438 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0434\u0430\u0436\u0438,\n  \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0441\u0430\u043C\u044B\u0435 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B.",
    "\u0412 \u0440\u0430\u0431\u043E\u0442\u0435 \u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C\u0438 \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u0440\u0435\u0448\u0438\u0442\u044C \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u0443\u044E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443 \u0438\u043B\u0438 \u043F\u043E\u043C\u043E\u0447\u044C \u0441\u043F\u0440\u0430\u0432\u0438\u0442\u044C\u0441\u044F \u0441 \u0442\u0440\u0443\u0434\u043D\u043E\u0441\u0442\u044F\u043C\u0438.\n  \u041D\u0435 \u043C\u0435\u043D\u0435\u0435 \u0432\u0430\u0436\u043D\u043E \u0443\u0434\u0435\u043B\u044F\u0442\u044C \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043E\u0431\u043C\u0435\u043D\u0443 \u0437\u043D\u0430\u043D\u0438\u044F\u043C\u0438: \"\u041E\u0434\u0438\u043D \u0438\u0437 \u0441\u0430\u043C\u044B\u0445 \u043F\u043E\u0437\u0438\u0442\u0438\u0432\u043D\u044B\u0445 \u043C\u043E\u043C\u0435\u043D\u0442\u043E\u0432 \u2014 \u044D\u0442\u043E \u043E\u0441\u043E\u0437\u043D\u0430\u043D\u0438\u0435 \u0442\u043E\u0433\u043E,\n  \u0447\u0442\u043E \u0442\u044B \u043F\u043E\u043C\u043E\u0433 \u043A\u043B\u0438\u0435\u043D\u0442\u0443 \u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E \u043D\u043E\u0432\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0442\u043D\u043E\u0441\u0442\u0438, \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0432 \u0442\u043E\u043C,\n  \u0447\u0442\u043E \u043F\u043E\u0441\u043B\u0435 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0443 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0435\u0441\u0442\u044C \u0432\u0441\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0435, \u0447\u0442\u043E\u0431\u044B \u0434\u0430\u043B\u044C\u0448\u0435 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E\".",
    "\u041F\u043E\u043C\u0438\u043C\u043E \u0440\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u043E\u0433\u043E \u0441\u0435\u043A\u0442\u043E\u0440\u0430, \u0421\u043E\u0440\u0438\u043D \u0432\u0435\u0434\u0435\u0442 \u0430\u043A\u0442\u0438\u0432\u043D\u0443\u044E \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0443\u044E \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C.\n  \u041E\u043D \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u043E\u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u043C \u0441\u0435\u0442\u0438 \u043A\u043B\u0438\u043D\u0438\u043A \u044D\u0441\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u044B \u0432 \u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0438\u0438, \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u044E\u0449\u0435\u0439 \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434 \u043A \u043A\u0440\u0430\u0441\u043E\u0442\u0435,\n  \u0430 \u0442\u0430\u043A\u0436\u0435 \u0438\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u043E\u043C \u0434\u0440\u0443\u0433\u0438\u0445 \u0431\u0438\u0437\u043D\u0435\u0441-\u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432."
];
function UserTextBlock() {
    return (react_1.default.createElement("div", { className: usertextblock_css_1.default.textBlock },
        react_1.default.createElement(UserTextParagraf_1.UserTextParagraf, { text: textList[0] }),
        react_1.default.createElement(UserTextParagraf_1.UserTextParagraf, { text: textList[1] }),
        react_1.default.createElement(UserTextParagraf_1.UserTextParagraf, { text: textList[2] })));
}
exports.UserTextBlock = UserTextBlock;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(86), exports);


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTextParagraf = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var usertextparagraf_css_1 = __importDefault(__webpack_require__(87));
function UserTextParagraf(_a) {
    var text = _a.text;
    return (react_1.default.createElement("p", { className: usertextparagraf_css_1.default.textParagraf }, text));
}
exports.UserTextParagraf = UserTextParagraf;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"textParagraf": "usertextparagraf__textParagraf--3r84e"
};


/***/ }),
/* 88 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"textBlock": "usertextblock__textBlock--1Zk4v"
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(90), exports);


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactList = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var MailIcon_1 = __webpack_require__(91);
var TelIcon_1 = __webpack_require__(93);
var UserContactItem_1 = __webpack_require__(95);
var UserContactText_1 = __webpack_require__(98);
var usercontactlist_css_1 = __importDefault(__webpack_require__(101));
function UserContactList(_a) {
    var email = _a.email;
    var tel = "+7 (954) 333-44-55";
    return (react_1.default.createElement("ul", { className: usercontactlist_css_1.default.contactList },
        react_1.default.createElement(UserContactItem_1.UserContactItem, null,
            react_1.default.createElement(TelIcon_1.TelIcon, null),
            react_1.default.createElement(UserContactText_1.UserContactText, { text: tel })),
        react_1.default.createElement(UserContactItem_1.UserContactItem, null,
            react_1.default.createElement(MailIcon_1.MailIcon, null),
            react_1.default.createElement(UserContactText_1.UserContactText, { text: email }))));
}
exports.UserContactList = UserContactList;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(92), exports);


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function MailIcon() {
    return (react_1.default.createElement("svg", { width: "22", height: "16", viewBox: "0 0 22 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M20 0.5H2C1.60218 0.5 1.22064 0.658035 0.93934 0.93934C0.658035 1.22064 0.5 1.60218 0.5 2V14C0.5 14.3978 0.658035 14.7794 0.93934 15.0607C1.22064 15.342 1.60218 15.5 2 15.5H20C20.3978 15.5 20.7794 15.342 21.0607 15.0607C21.342 14.7794 21.5 14.3978 21.5 14V2C21.5 1.60218 21.342 1.22064 21.0607 0.93934C20.7794 0.658035 20.3978 0.5 20 0.5ZM18.35 2L11 7.085L3.65 2H18.35ZM2 14V2.6825L10.5725 8.615C10.698 8.7021 10.8472 8.74877 11 8.74877C11.1528 8.74877 11.302 8.7021 11.4275 8.615L20 2.6825V14H2Z", fill: "#512689" })));
}
exports.MailIcon = MailIcon;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(94), exports);


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function TelIcon() {
    return (react_1.default.createElement("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M9.55399 5.24003L6.17099 1.33503C5.78099 0.88503 5.06599 0.88703 4.61299 1.34103L1.83099 4.12803C1.00299 4.95703 0.765988 6.18803 1.24499 7.17503C4.10661 13.1 8.88503 17.8851 14.806 20.755C15.792 21.234 17.022 20.997 17.85 20.168L20.658 17.355C21.113 16.9 21.114 16.181 20.66 15.791L16.74 12.426C16.33 12.074 15.693 12.12 15.282 12.532L13.918 13.898C13.8482 13.9712 13.7562 14.0195 13.6563 14.0354C13.5564 14.0513 13.4541 14.0339 13.365 13.986C11.1354 12.7021 9.28598 10.8503 8.00499 8.61903C7.95702 8.52978 7.93964 8.42726 7.95554 8.32719C7.97144 8.22711 8.01972 8.13502 8.09299 8.06503L9.45299 6.70403C9.86499 6.29003 9.90999 5.65003 9.55399 5.23903V5.24003Z", stroke: "#512689", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })));
}
exports.TelIcon = TelIcon;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(96), exports);


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactItem = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var usercontactitem_css_1 = __importDefault(__webpack_require__(97));
function UserContactItem(_a) {
    var children = _a.children;
    return (react_1.default.createElement("li", { className: usercontactitem_css_1.default.contactItem }, children));
}
exports.UserContactItem = UserContactItem;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"contactItem": "usercontactitem__contactItem--1uVXg"
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(99), exports);


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactText = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var usercontacttext_css_1 = __importDefault(__webpack_require__(100));
function UserContactText(_a) {
    var text = _a.text;
    return (react_1.default.createElement("span", { className: usercontacttext_css_1.default.contactItemText }, text));
}
exports.UserContactText = UserContactText;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"contactItemText": "usercontacttext__contactItemText--3UOZJ"
};


/***/ }),
/* 101 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"contactList": "usercontactlist__contactList--m5F0i"
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
var indexTemplate = function (content) { return "\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>React</title>\n  <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n</head>\n\n<body>\n  <div id=\"react_root\">".concat(content, "</div>\n</body>\n\n</html>\n"); };
exports.indexTemplate = indexTemplate;


/***/ })
/******/ ]);