function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/_helpers/DateTimeFormatPipe.pipe.ts":
  /*!*****************************************************!*\
    !*** ./src/app/_helpers/DateTimeFormatPipe.pipe.ts ***!
    \*****************************************************/

  /*! exports provided: DateTimeFormatPipePipe */

  /***/
  function srcApp_helpersDateTimeFormatPipePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateTimeFormatPipePipe", function () {
      return DateTimeFormatPipePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _util_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../util/Constants */
    "./src/app/util/Constants.ts");

    var DateTimeFormatPipePipe =
    /*#__PURE__*/
    function (_angular_common__WEBP) {
      _inherits(DateTimeFormatPipePipe, _angular_common__WEBP);

      function DateTimeFormatPipePipe() {
        _classCallCheck(this, DateTimeFormatPipePipe);

        return _possibleConstructorReturn(this, _getPrototypeOf(DateTimeFormatPipePipe).apply(this, arguments));
      }

      _createClass(DateTimeFormatPipePipe, [{
        key: "transform",
        value: function transform(value, args) {
          return _get(_getPrototypeOf(DateTimeFormatPipePipe.prototype), "transform", this).call(this, value, _util_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].DATE_TIME_FMT);
        }
      }]);

      return DateTimeFormatPipePipe;
    }(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]);

    DateTimeFormatPipePipe.ɵfac = function DateTimeFormatPipePipe_Factory(t) {
      return ɵDateTimeFormatPipePipe_BaseFactory(t || DateTimeFormatPipePipe);
    };

    DateTimeFormatPipePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "DateTimeFormatPipe",
      type: DateTimeFormatPipePipe,
      pure: true
    });

    var ɵDateTimeFormatPipePipe_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DateTimeFormatPipePipe);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateTimeFormatPipePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'DateTimeFormatPipe'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/auth.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_services/auth.service.ts ***!
    \*******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcApp_servicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.baseURL = 'https://localhost:44391/api/user/';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(model) {
          var _this = this;

          return this.http.post("".concat(this.baseURL, "login"), model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var user = response;

            if (user) {
              localStorage.setItem('token', user.token);
              _this.decodedToken = _this.jwtHelper.decodeToken(user.token);
              sessionStorage.setItem('username', _this.decodedToken.unique_name);
            }
          }));
        }
      }, {
        key: "register",
        value: function register(model) {
          return this.http.post("".concat(this.baseURL, "register"), model);
        }
      }, {
        key: "loggedIn",
        value: function loggedIn() {
          var token = localStorage.getItem('token');
          return !this.jwtHelper.isTokenExpired(token);
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/players.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/_services/players.service.ts ***!
    \**********************************************/

  /*! exports provided: PlayersService */

  /***/
  function srcApp_servicesPlayersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayersService", function () {
      return PlayersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PlayersService =
    /*#__PURE__*/
    function () {
      function PlayersService(http) {
        _classCallCheck(this, PlayersService);

        this.http = http;
        this.baseURL = 'https://localhost:44391/api/players';
      }

      _createClass(PlayersService, [{
        key: "getAllPlayers",
        value: function getAllPlayers() {
          console.log("aqui");
          return this.http.get(this.baseURL);
        }
      }, {
        key: "getPlayersById",
        value: function getPlayersById(id) {
          return this.http.get("".concat(this.baseURL, "/getByNome/").concat(id));
        }
      }, {
        key: "postPlayers",
        value: function postPlayers(players) {
          console.log(players);
          return this.http.post(this.baseURL, players);
        }
      }, {
        key: "putPlayers",
        value: function putPlayers(players) {
          return this.http.put("".concat(this.baseURL, "/").concat(players.id), players);
        }
      }, {
        key: "deletePlayers",
        value: function deletePlayers(id) {
          return this.http.delete("".concat(this.baseURL, "/").concat(id));
        }
      }]);

      return PlayersService;
    }();

    PlayersService.ɵfac = function PlayersService_Factory(t) {
      return new (t || PlayersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    PlayersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PlayersService,
      factory: PlayersService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/transaction-ofx.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/_services/transaction-ofx.service.ts ***!
    \******************************************************/

  /*! exports provided: TransactionOfxService */

  /***/
  function srcApp_servicesTransactionOfxServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionOfxService", function () {
      return TransactionOfxService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var TransactionOfxService =
    /*#__PURE__*/
    function () {
      function TransactionOfxService(http) {
        _classCallCheck(this, TransactionOfxService);

        this.http = http;
        this.baseURL = 'https://localhost:44391/api/players';
      }

      _createClass(TransactionOfxService, [{
        key: "transaction",
        value: function transaction() {
          return this.http.get(this.baseURL);
        }
      }]);

      return TransactionOfxService;
    }();

    TransactionOfxService.ɵfac = function TransactionOfxService_Factory(t) {
      return new (t || TransactionOfxService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    TransactionOfxService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TransactionOfxService,
      factory: TransactionOfxService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionOfxService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _user_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user/login/login.component */
    "./src/app/user/login/login.component.ts");
    /* harmony import */


    var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user/registration/registration.component */
    "./src/app/user/registration/registration.component.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");
    /* harmony import */


    var _players_players_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./players/players.component */
    "./src/app/players/players.component.ts");
    /* harmony import */


    var _upload_upload_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./upload/upload.component */
    "./src/app/upload/upload.component.ts");
    /* harmony import */


    var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./transactions/transactions.component */
    "./src/app/transactions/transactions.component.ts");

    var routes = [{
      path: 'user',
      component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
      children: [{
        path: 'login',
        component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
      }, {
        path: 'registration',
        component: _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"]
      }]
    }, {
      path: 'players',
      component: _players_players_component__WEBPACK_IMPORTED_MODULE_7__["PlayersComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'upload',
      component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_8__["UploadComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'transaction',
      component: _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_9__["TransactionsComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'NiboDevelopersChallenge2-App';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [[1, "container", 2, "font-family", "Helvetica"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
    /* harmony import */


    var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/datepicker */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _players_players_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./players/players.component */
    "./src/app/players/players.component.ts");
    /* harmony import */


    var _services_players_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./_services/players.service */
    "./src/app/_services/players.service.ts");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _helpers_DateTimeFormatPipe_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./_helpers/DateTimeFormatPipe.pipe */
    "./src/app/_helpers/DateTimeFormatPipe.pipe.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _user_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./user/login/login.component */
    "./src/app/user/login/login.component.ts");
    /* harmony import */


    var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./user/registration/registration.component */
    "./src/app/user/registration/registration.component.ts");
    /* harmony import */


    var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./auth/auth.interceptor */
    "./src/app/auth/auth.interceptor.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./transactions/transactions.component */
    "./src/app/transactions/transactions.component.ts");
    /* harmony import */


    var _upload_upload_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./upload/upload.component */
    "./src/app/upload/upload.component.ts");

    var routes = [];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_players_service__WEBPACK_IMPORTED_MODULE_11__["PlayersService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__["AuthInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
        timeOut: 3000,
        preventDuplicates: true,
        progressBar: true
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"].forRoot(routes, {
        useHash: true
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"], _helpers_DateTimeFormatPipe_pipe__WEBPACK_IMPORTED_MODULE_13__["DateTimeFormatPipePipe"], _user_user_component__WEBPACK_IMPORTED_MODULE_15__["UserComponent"], _user_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"], _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_17__["RegistrationComponent"], _players_players_component__WEBPACK_IMPORTED_MODULE_10__["PlayersComponent"], _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_20__["TransactionsComponent"], _upload_upload_component__WEBPACK_IMPORTED_MODULE_21__["UploadComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"], _helpers_DateTimeFormatPipe_pipe__WEBPACK_IMPORTED_MODULE_13__["DateTimeFormatPipePipe"], _user_user_component__WEBPACK_IMPORTED_MODULE_15__["UserComponent"], _user_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"], _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_17__["RegistrationComponent"], _players_players_component__WEBPACK_IMPORTED_MODULE_10__["PlayersComponent"], _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_20__["TransactionsComponent"], _upload_upload_component__WEBPACK_IMPORTED_MODULE_21__["UploadComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
            timeOut: 3000,
            preventDuplicates: true,
            progressBar: true
          }), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          providers: [_services_players_service__WEBPACK_IMPORTED_MODULE_11__["PlayersService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__["AuthInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (localStorage.getItem('token') !== null) {
            return true;
          } else {
            this.router.navigate(['/user/login']);
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.interceptor.ts":
  /*!******************************************!*\
    !*** ./src/app/auth/auth.interceptor.ts ***!
    \******************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppAuthAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/internal/operators/tap */
    "./node_modules/rxjs/internal/operators/tap.js");
    /* harmony import */


    var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(router) {
        _classCallCheck(this, AuthInterceptor);

        this.router = router;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this2 = this;

          if (localStorage.getItem('token') !== null) {
            var cloneReq = req.clone({
              headers: req.headers.set('Authorization', "Bearer ".concat(localStorage.getItem('token')))
            });
            return next.handle(cloneReq).pipe(Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (succ) {}, function (err) {
              if (err.status === 401) {
                _this2.router.navigateByUrl('user/login');
              }
            }));
          } else {
            return next.handle(req.clone());
          }
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)();
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 2,
      vars: 0,
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/nav/nav.component.ts":
  /*!**************************************!*\
    !*** ./src/app/nav/nav.component.ts ***!
    \**************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");

    function NavComponent_nav_0_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Jogadores");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Transa\xE7\xF5es");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Upload");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavComponent_nav_0_ul_7_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Perfil ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_nav_0_ul_7_div_4_Template_a_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r48.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Sair ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavComponent_nav_0_ul_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavComponent_nav_0_ul_7_div_4_Template, 6, 0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r45.userName(), " ");
      }
    }

    function NavComponent_nav_0_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_nav_0_button_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r50.entrar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Entrar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavComponent_nav_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "DevelopersChallenge2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavComponent_nav_0_div_6_Template, 11, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavComponent_nav_0_ul_7_Template, 5, 1, "ul", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavComponent_nav_0_button_8_Template, 2, 0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r43.loggedIn());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r43.loggedIn());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r43.loggedIn());
      }
    }

    var NavComponent =
    /*#__PURE__*/
    function () {
      function NavComponent(authService, router, toastr) {
        _classCallCheck(this, NavComponent);

        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showMenu",
        value: function showMenu() {
          return this.router.url !== '/user/login';
        }
      }, {
        key: "loggedIn",
        value: function loggedIn() {
          return this.authService.loggedIn();
        }
      }, {
        key: "entrar",
        value: function entrar() {
          this.router.navigate(['/user/login']);
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('token');
          this.toastr.show('Log Out');
          this.router.navigate(['/user/login']);
        }
      }, {
        key: "userName",
        value: function userName() {
          return sessionStorage.getItem('username');
        }
      }]);

      return NavComponent;
    }();

    NavComponent.ɵfac = function NavComponent_Factory(t) {
      return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
    };

    NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavComponent,
      selectors: [["app-nav"]],
      decls: 1,
      vars: 1,
      consts: [["class", "navbar navbar-expand-md navbar-dark bg-dark", 4, "ngIf"], [1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], [1, "container"], ["routerLink", "dashboard", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarsExampleDefault", "aria-controls", "navbarsExampleDefault", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["class", "collapse navbar-collapse", "id", "navbarsExampleDefault", 4, "ngIf"], ["class", "navbar-nav", 4, "ngIf"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], ["id", "navbarsExampleDefault", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "players", 1, "nav-link"], ["routerLink", "transactions", 1, "nav-link"], ["routerLink", "upload", 1, "nav-link"], [1, "navbar-nav"], ["dropdown", "", 1, "nav-item", "dropdown"], ["dropdownToggle", "", "id", "navbarDropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", 2, "cursor", "pointer", "text-transform", "capitalize"], ["class", "dropdown-menu", "aria-labelledby", "navbarDropdownMenuLink", 4, "dropdownMenu"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu"], [1, "dropdown-item"], ["role", "separator", 1, "divider"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], [1, "btn", "btn-success", 3, "click"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavComponent_nav_0_Template, 9, 3, "nav", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMenu());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownDirective"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownToggleDirective"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownMenuDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav',
          templateUrl: './nav.component.html',
          styleUrls: ['./nav.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/players/players.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/players/players.component.ts ***!
    \**********************************************/

  /*! exports provided: PlayersComponent */

  /***/
  function srcAppPlayersPlayersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayersComponent", function () {
      return PlayersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
    /* harmony import */


    var _services_players_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services/players.service */
    "./src/app/_services/players.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/datepicker */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
    /* harmony import */


    var _helpers_DateTimeFormatPipe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../_helpers/DateTimeFormatPipe.pipe */
    "./src/app/_helpers/DateTimeFormatPipe.pipe.ts");

    function PlayersComponent_tbody_22_tr_1_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " N\xE3o Informado ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PlayersComponent_tbody_22_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "DateTimeFormatPipe");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PlayersComponent_tbody_22_tr_1_div_13_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayersComponent_tbody_22_tr_1_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var player_r21 = ctx.$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

          return ctx_r23.editPlayer(player_r21, _r11);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayersComponent_tbody_22_tr_1_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var player_r21 = ctx.$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68);

          return ctx_r25.deletePlayer(player_r21, _r19);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r21.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r21.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r21.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r21.favoriteGame);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, player_r21.birthDate));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !player_r21.name.length);
      }
    }

    function PlayersComponent_tbody_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlayersComponent_tbody_22_tr_1_Template, 20, 8, "tr", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.players);
      }
    }

    function PlayersComponent_tfoot_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tfoot");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Nenhum jogador encontrado! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PlayersComponent_div_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nome \xE9 obrigat\xF3rio. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PlayersComponent_div_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nome deve ter no m\xEDnimo 4 Caracters. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PlayersComponent_div_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nome deve ter no m\xE1ximo 50 Caracters. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PlayersComponent_div_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email \xE9 obrigat\xF3rio. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PlayersComponent_div_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Deve ser um e-mail v\xE1lido. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PlayersComponent_div_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Data \xE9 obrigat\xF3rio. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PlayersComponent_div_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Jogo favorito \xE9 obrigat\xF3rio. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var _c1 = function _c1() {
      return {
        dateInputFormat: "DD/MM/YYYY hh:mm"
      };
    };

    Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["defineLocale"])('pt-br', ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ptBrLocale"]);

    var PlayersComponent =
    /*#__PURE__*/
    function () {
      function PlayersComponent(playersService, modalService, fb, localeService, toastr) {
        _classCallCheck(this, PlayersComponent);

        this.playersService = playersService;
        this.modalService = modalService;
        this.fb = fb;
        this.localeService = localeService;
        this.toastr = toastr;
        this.modoSalve = 'post';
        this.mostrarImagem = false;
        this.bodyDeletePlayer = '';
        this.localeService.use('pt-br');
      }

      _createClass(PlayersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validation();
          this.getPlayers();
        }
      }, {
        key: "getPlayers",
        value: function getPlayers() {
          var _this3 = this;

          this.date = new Date().getMilliseconds().toString();
          this.playersService.getAllPlayers().subscribe(function (_players) {
            _this3.players = _players;
          }, function (error) {
            _this3.toastr.error("Erro ao tentar carregar os jogadores: ".concat(error));
          });
        }
      }, {
        key: "newPlayer",
        value: function newPlayer(template) {
          this.modoSalve = 'post';
          this.openModal(template);
        }
      }, {
        key: "openModal",
        value: function openModal(template) {
          this.registerForm.reset();
          template.show();
        }
      }, {
        key: "validation",
        value: function validation() {
          this.registerForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            favoriteGame: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            birthDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "editPlayer",
        value: function editPlayer(player, template) {
          this.modoSalve = 'put';
          this.openModal(template);
          this.player = Object.assign({}, player);
          console.log("modal", this.player);
          this.registerForm.patchValue(this.players);
        }
      }, {
        key: "deletePlayer",
        value: function deletePlayer(players, template) {
          this.openModal(template);
          this.player = players;
          this.bodyDeletePlayer = "Tem certeza que deseja excluir o jogador: ".concat(players.name);
        }
      }, {
        key: "insertPlayer",
        value: function insertPlayer(template) {
          var _this4 = this;

          if (this.modoSalve === 'post') {
            this.player = Object.assign({}, this.registerForm.value);
            console.log("Caiu no insert", this.player);
            this.playersService.postPlayers(this.player).subscribe(function (newPlayer) {
              template.hide();

              _this4.getPlayers();

              _this4.toastr.success('Inserido com Sucesso!');
            }, function (error) {
              _this4.toastr.error("Erro ao Inserir: ".concat(error));
            });
          } else {
            this.player = Object.assign({
              id: this.player.id
            }, this.registerForm.value);
            this.playersService.putPlayers(this.player).subscribe(function () {
              template.hide();

              _this4.getPlayers();

              _this4.toastr.success('Editado com Sucesso!');
            }, function (error) {
              _this4.toastr.error("Erro ao Editar: ".concat(error));
            });
          }
        }
      }, {
        key: "confirmeDelete",
        value: function confirmeDelete(template) {
          var _this5 = this;

          this.playersService.deletePlayers(this.player.id).subscribe(function () {
            template.hide();

            _this5.getPlayers();

            _this5.toastr.success('Deletado com Sucesso');
          }, function (error) {
            _this5.toastr.error('Erro ao tentar Deletar');

            console.log(error);
          });
        }
      }]);

      return PlayersComponent;
    }();

    PlayersComponent.ɵfac = function PlayersComponent_Factory(t) {
      return new (t || PlayersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_players_service__WEBPACK_IMPORTED_MODULE_3__["PlayersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsLocaleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
    };

    PlayersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlayersComponent,
      selectors: [["app-players"]],
      decls: 85,
      vars: 25,
      consts: [[1, "d-flex"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "fa", "fa-plus-circle"], [1, "table", "table-striped"], [1, "thead-light"], ["colspan", "2"], [4, "ngIf"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-sizes-name1", 1, "modal", "fade"], ["template", "bs-modal"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["id", "dialog-sizes-name1", 1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup"], [1, "form-row"], [1, "form-group", "col-md-12"], ["type", "text", "formControlName", "name", "placeholder", "Insira o name", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "col-md-8"], ["type", "text", "formControlName", "email", "placeholder", "Insira o E-mail", 1, "form-control", 3, "ngClass"], [1, "form-group", "col-md-4"], ["type", "datetime", "bsDatepicker", "", "formControlName", "birthDate", "placeholder", "Data de nascimento", 1, "form-control", 3, "bsConfig", "ngClass"], [1, "form-group", "col-md-3"], ["type", "text", "formControlName", "favoriteGame", "placeholder", "Jogo Favorito", 1, "form-control", "is-invalid", 3, "ngClass"], [1, "modal-footer", "d-flex"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", "ml-auto", 3, "click"], ["confirm", "bs-modal"], [1, "modal-dialog", "modal-sm"], [1, "modal-title", "pull-left"], [1, "modal-footer", "btn-group", "d-flex"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], [4, "ngFor", "ngForOf"], [1, "btn-group"], ["tooltip", "Editar", 1, "btn", "btn-sm", "btn-success", 3, "click"], [1, "fa", "fa-edit"], ["tooltip", "Excluir", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "fa", "fa-eraser"], ["colspan", "7", 1, "text-center"], [1, "invalid-feedback"]],
      template: function PlayersComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Jogadores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayersComponent_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

            return ctx.newPlayer(_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xA0 Novo Jogador ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Jogo Favorito");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Data de nascimento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PlayersComponent_tbody_22_Template, 2, 1, "tbody", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PlayersComponent_tfoot_23_Template, 5, 0, "tfoot", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Cadastrar Stats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayersComponent_Template_button_click_31_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

            return _r11.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "form", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PlayersComponent_div_41_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, PlayersComponent_div_42_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, PlayersComponent_div_43_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, PlayersComponent_div_49_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, PlayersComponent_div_50_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Data de nascimento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, PlayersComponent_div_55_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Jogo Favorito");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, PlayersComponent_div_61_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayersComponent_Template_button_click_63_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

            return _r11.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Fechar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayersComponent_Template_button_click_65_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

            return ctx.insertPlayer(_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Salvar Altera\xE7\xF5es ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 7, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h4", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Deletando Evento ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayersComponent_Template_button_click_74_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68);

            return _r19.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayersComponent_Template_button_click_81_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68);

            return _r19.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " CANCELAR ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayersComponent_Template_button_click_83_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68);

            return ctx.confirmeDelete(_r19);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " DELETAR ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.players && ctx.players.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.players);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.registerForm.get("name").errors && ctx.registerForm.get("name").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("name").hasError("required") && ctx.registerForm.get("name").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("name").hasError("minlength") && ctx.registerForm.get("name").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("name").hasError("maxlength") && ctx.registerForm.get("name").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.registerForm.get("email").errors && ctx.registerForm.get("email").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("email").hasError("required") && ctx.registerForm.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("email").hasError("email") && ctx.registerForm.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.registerForm.get("birthDate").errors && ctx.registerForm.get("birthDate").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("birthDate").hasError("required") && ctx.registerForm.get("birthDate").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.registerForm.get("favoriteGame").errors && ctx.registerForm.get("favoriteGame").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("favoriteGame").hasError("required") && ctx.registerForm.get("favoriteGame").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bodyDeletePlayer);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerInputDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"]],
      pipes: [_helpers_DateTimeFormatPipe_pipe__WEBPACK_IMPORTED_MODULE_7__["DateTimeFormatPipePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXllcnMvcGxheWVycy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-players',
          templateUrl: './players.component.html',
          styleUrls: ['./players.component.css']
        }]
      }], function () {
        return [{
          type: _services_players_service__WEBPACK_IMPORTED_MODULE_3__["PlayersService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsLocaleService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/transactions/transactions.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/transactions/transactions.component.ts ***!
    \********************************************************/

  /*! exports provided: TransactionsComponent */

  /***/
  function srcAppTransactionsTransactionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function () {
      return TransactionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_transaction_ofx_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_services/transaction-ofx.service */
    "./src/app/_services/transaction-ofx.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TransactionsComponent_p_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "em");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Carregando...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TransactionsComponent_div_4_tr_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transaction_r42 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 4, transaction_r42.datePosted, "dd/MM/yyyy hh:mm:ss"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r42.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 7, transaction_r42.transactionAmount, "BRL", true));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r42.memo);
      }
    }

    function TransactionsComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Data");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tipo de opera\xE7\xE3o");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Valor");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Descri\xE7\xE3o");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TransactionsComponent_div_4_tr_13_Template, 11, 11, "tr", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r40.transactions);
      }
    }

    var TransactionsComponent = function TransactionsComponent(transactionOfxService, toastr) {
      var _this6 = this;

      _classCallCheck(this, TransactionsComponent);

      this.transactionOfxService = transactionOfxService;
      this.toastr = toastr;
      this.transactionOfxService.transaction().subscribe(function (_transactions) {
        _this6.transactions = _transactions;
      }, function (error) {
        _this6.toastr.error("Erro ao tentar carregar os jogadores: ".concat(error));
      });
    };

    TransactionsComponent.ɵfac = function TransactionsComponent_Factory(t) {
      return new (t || TransactionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_transaction_ofx_service__WEBPACK_IMPORTED_MODULE_1__["TransactionOfxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]));
    };

    TransactionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TransactionsComponent,
      selectors: [["app-transactions"]],
      decls: 5,
      vars: 2,
      consts: [[4, "ngIf"], [1, "table", "table-striped"], [1, "thead-light"], [4, "ngFor", "ngForOf"]],
      template: function TransactionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transa\xE7\xF5es");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TransactionsComponent_p_3_Template, 3, 0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TransactionsComponent_div_4_Template, 14, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.transactions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.transactions);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-transactions',
          templateUrl: './transactions.component.html',
          styleUrls: ['./transactions.component.css']
        }]
      }], function () {
        return [{
          type: _services_transaction_ofx_service__WEBPACK_IMPORTED_MODULE_1__["TransactionOfxService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/upload/upload.component.ts":
  /*!********************************************!*\
    !*** ./src/app/upload/upload.component.ts ***!
    \********************************************/

  /*! exports provided: UploadComponent */

  /***/
  function srcAppUploadUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadComponent", function () {
      return UploadComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["form"];

    function UploadComponent_div_10_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var fileName_r32 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fileName_r32);
      }
    }

    function UploadComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Arquivos importados:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UploadComponent_div_10_li_4_Template, 2, 1, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadComponent_div_10_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r33.save();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Salvar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadComponent_div_10_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r35.cancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancelar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r29.importedFiles);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total de transa\xE7\xF5es: ", ctx_r29.transactions.length, "");
      }
    }

    function UploadComponent_div_11_tr_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transaction_r37 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 4, transaction_r37.datePosted, "dd/MM/yyyy hh:mm:ss"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r37.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 7, transaction_r37.transactionAmount, "BRL", true));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r37.memo);
      }
    }

    function UploadComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Data");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tipo de opera\xE7\xE3o");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Valor");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Descri\xE7\xE3o");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UploadComponent_div_11_tr_13_Template, 11, 11, "tr", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r30.transactions);
      }
    }

    var UploadComponent =
    /*#__PURE__*/
    function () {
      function UploadComponent(http) {
        _classCallCheck(this, UploadComponent);

        this.http = http;
        this.importedFiles = [];
      }

      _createClass(UploadComponent, [{
        key: "upload",
        value: function upload(files) {
          var _this7 = this;

          this.formData = new FormData();
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var file = _step.value;
              this.formData.append(file.name, file);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          var uploadRequest = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', 'api/upload', this.formData, {
            reportProgress: true
          });
          this.http.request(uploadRequest).subscribe(function (event) {
            switch (event.type) {
              case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress:
                _this7.progress = Math.round(100 * event.loaded / event.total);
                break;

              case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response:
                _this7.transactions = event.body;
                _this7.importedFiles = [];
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                  for (var _iterator2 = files[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var file = _step2.value;

                    _this7.importedFiles.push(file.name);
                  }
                } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                      _iterator2.return();
                    }
                  } finally {
                    if (_didIteratorError2) {
                      throw _iteratorError2;
                    }
                  }
                }

                _this7.checkNewTransactions(_this7.transactions);

                break;
            }
          });
        }
      }, {
        key: "checkNewTransactions",
        value: function checkNewTransactions(transactions) {
          var _this8 = this;

          var uploadRequest = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', 'api/Transaction/CheckNewTransactions', this.transactions);
          this.http.request(uploadRequest).subscribe(function (event) {
            switch (event.type) {
              case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response:
                _this8.newTransactions = event.body;
                break;
            }
          });
        }
      }, {
        key: "save",
        value: function save() {
          var uploadRequest = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', 'api/Transaction/', this.newTransactions);
          this.http.request(uploadRequest).subscribe(function (event) {
            switch (event.type) {
              case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response:
                if (event.ok) alert('Dados salvos');else alert('Ocorreu um erro ao salvar as transações');
                break;
            }
          });
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.formData = new FormData();
          this.importedFiles = [];
          this.transactions = null;
          this.form.nativeElement.reset();
        }
      }]);

      return UploadComponent;
    }();

    UploadComponent.ɵfac = function UploadComponent_Factory(t) {
      return new (t || UploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UploadComponent,
      selectors: [["app-upload"]],
      viewQuery: function UploadComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
        }
      },
      decls: 12,
      vars: 2,
      consts: [["form", ""], [1, "row"], [1, "col-md-4"], ["type", "file", "multiple", "", 3, "change"], ["file", ""], [4, "ngIf"], ["class", "col-md-8 scrollable", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-success", "mr-1", 3, "click"], [1, "btn", "btn-danger", 3, "click"], [1, "col-md-8", "scrollable"], [1, "table", "table-striped"], [1, "thead-light"]],
      template: function UploadComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Importa\xE7\xE3o de arquivos OFX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", null, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadComponent_Template_input_change_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            return ctx.upload(_r28.files);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UploadComponent_div_10_Template, 14, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UploadComponent_div_11_Template, 14, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.importedFiles.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.transactions);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-upload',
          templateUrl: './upload.component.html',
          styleUrls: ['./upload.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, {
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['form']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/user/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/user/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppUserLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authService, router, toastr) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.titulo = 'Login';
        this.model = {};
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem('token') != null) {
            this.router.navigate(['/dashboard']);
          }
        }
      }, {
        key: "login",
        value: function login() {
          var _this9 = this;

          this.authService.login(this.model).subscribe(function () {
            _this9.router.navigate(['/dashboard']);

            _this9.toastr.success('Logado com Sucesso');
          }, function (error) {
            _this9.toastr.error('Falha ao tentar Logar');
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 20,
      vars: 3,
      consts: [["data-gr-c-s-loaded", "true", 1, "text-center"], [1, "form-signin", 3, "ngSubmit"], ["loginForm", "ngForm"], ["src", "", "alt", "", "width", "72", "height", "72", 1, "mb-4"], [1, "h3", "mb-3", "font-weight-normal"], ["for", "username", 1, "sr-only"], ["type", "email", "id", "username", "placeholder", "Usu\xE1rio", "name", "username", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password", 1, "sr-only"], ["type", "password", "id", "password", "placeholder", "Senha", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "disabled"], [1, "mt-5", "mb-3", "text-muted"], [1, "btn", "btn-lg", "btn-link", "btn-block", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Por favor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Usu\xE1rio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.model.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.model.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Entrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "N\xE3o tem login? Cadastre-se abaixo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener() {
            return ctx.router.navigate(["/user/registration"]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Quero me cadastrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: [".form-signin[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n  }\r\n  .form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n  }\r\n  .form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    height: auto;\r\n    padding: 10px;\r\n    font-size: 16px;\r\n  }\r\n  .form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n    z-index: 2;\r\n  }\r\n  .form-signin[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\r\n    margin-bottom: -1px;\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n  }\r\n  .form-signin[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsY0FBYztFQUNoQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QiwwQkFBMEI7RUFDNUIiLCJmaWxlIjoic3JjL2FwcC91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1zaWduaW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMzMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4gLmNoZWNrYm94IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cImVtYWlsXCJdIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/registration/registration.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/user/registration/registration.component.ts ***!
    \*************************************************************/

  /*! exports provided: RegistrationComponent */

  /***/
  function srcAppUserRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegistrationComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nome Completo \xE9 obrigat\xF3rio. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " email \xE9 obrigat\xF3rio. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Deve ser um e-mail v\xE1lido. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Usu\xE1rio \xE9 obrigat\xF3rio. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Deve conter no m\xEDnimo 4 caracters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Senha \xE9 obrigat\xF3rio. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirme a Senha ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_div_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirma\xE7\xE3o n\xE3o confere ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var RegistrationComponent =
    /*#__PURE__*/
    function () {
      function RegistrationComponent(authService, router, fb, toastr) {
        _classCallCheck(this, RegistrationComponent);

        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
      }

      _createClass(RegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validation();
        }
      }, {
        key: "validation",
        value: function validation() {
          this.registerForm = this.fb.group({
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            passwords: this.fb.group({
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
              confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }, {
              validator: this.compararSenhas
            })
          });
        }
      }, {
        key: "compararSenhas",
        value: function compararSenhas(fb) {
          var confirmSenhaCtrl = fb.get('confirmPassword');

          if (confirmSenhaCtrl.errors == null || 'mismatch' in confirmSenhaCtrl.errors) {
            if (fb.get('password').value !== confirmSenhaCtrl.value) {
              confirmSenhaCtrl.setErrors({
                mismatch: true
              });
            } else {
              confirmSenhaCtrl.setErrors(null);
            }
          }
        }
      }, {
        key: "cadastrarUsuario",
        value: function cadastrarUsuario() {
          var _this10 = this;

          if (this.registerForm.valid) {
            this.user = Object.assign({
              password: this.registerForm.get('passwords.password').value
            }, this.registerForm.value);
            this.authService.register(this.user).subscribe(function () {
              _this10.router.navigate(['/user/login']);

              _this10.toastr.success('Cadastro Realizado');
            }, function (error) {
              var erro = error.error;
              erro.forEach(function (element) {
                switch (element.code) {
                  case 'DuplicateUserName':
                    _this10.toastr.error('Cadastro Duplicado!');

                    break;

                  default:
                    _this10.toastr.error("Erro no Cadatro! CODE: ".concat(element.code));

                    break;
                }
              });
            });
          }
        }
      }]);

      return RegistrationComponent;
    }();

    RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
      return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
    };

    RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegistrationComponent,
      selectors: [["app-registration"]],
      decls: 40,
      vars: 25,
      consts: [[1, "row", "mt-4"], [1, "col-md-6", 2, "height", "450px"], [1, "row", "col-md-12", "my-auto", "side-heder"], [1, "col-md-6"], [3, "formGroup"], [1, "form-group", "required"], ["for", ""], ["type", "text", "formControlName", "fullName", "placeholder", "Insira o Nome Completo", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group"], ["type", "text", "formControlName", "email", "placeholder", "Insira o Nome Completo", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "userName", "placeholder", "Insira o nome de Usu\xE1rio", 1, "form-control", 3, "ngClass"], ["formGroupName", "passwords"], ["type", "password", "formControlName", "password", "placeholder", "Digite uma Senha", 1, "form-control", 3, "ngClass"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Confirme a Senha", 1, "form-control", 3, "ngClass"], [1, "form-row"], [1, "form-group", "col-md-8", "offset-md-2"], [1, "btn", "btn-lg", "btn-success", "btn-block", 3, "disabled", "click"], [1, "invalid-feedback"]],
      template: function RegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cadastro de Usu\xE1rio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nome Completo:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RegistrationComponent_div_11_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RegistrationComponent_div_16_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RegistrationComponent_div_17_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Usuario:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RegistrationComponent_div_22_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Senha:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RegistrationComponent_div_28_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RegistrationComponent_div_29_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Confirmar Senha:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, RegistrationComponent_div_34_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, RegistrationComponent_div_35_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_38_listener() {
            return ctx.cadastrarUsuario();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Registar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.registerForm.get("fullName").errors && ctx.registerForm.get("fullName").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("fullName").hasError("required") && ctx.registerForm.get("fullName").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.registerForm.get("email").errors && ctx.registerForm.get("email").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("email").hasError("required") && ctx.registerForm.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("email").hasError("email") && ctx.registerForm.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.registerForm.get("userName").errors && ctx.registerForm.get("userName").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("userName").hasError("required") && ctx.registerForm.get("userName").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.registerForm.get("passwords.password").errors && ctx.registerForm.get("passwords.password").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("passwords.password").hasError("minlength") && ctx.registerForm.get("passwords.password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("passwords.password").hasError("required") && ctx.registerForm.get("passwords.password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.registerForm.get("passwords.confirmPassword").errors && ctx.registerForm.get("passwords.confirmPassword").touched || ctx.registerForm.get("passwords.confirmPassword").hasError("mismatch") && ctx.registerForm.get("passwords.confirmPassword").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("passwords.confirmPassword").hasError("required") && ctx.registerForm.get("passwords.confirmPassword").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("passwords.confirmPassword").hasError("mismatch") && ctx.registerForm.get("passwords.confirmPassword").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-registration',
          templateUrl: './registration.component.html',
          styleUrls: ['./registration.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/user.component.ts":
  /*!****************************************!*\
    !*** ./src/app/user/user.component.ts ***!
    \****************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var UserComponent =
    /*#__PURE__*/
    function () {
      function UserComponent() {
        _classCallCheck(this, UserComponent);
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserComponent;
    }();

    UserComponent.ɵfac = function UserComponent_Factory(t) {
      return new (t || UserComponent)();
    };

    UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserComponent,
      selectors: [["app-user"]],
      decls: 2,
      vars: 0,
      consts: [[1, "container"]],
      template: function UserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".form-signin[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n  }\r\n  .form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n  }\r\n  .form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    height: auto;\r\n    padding: 10px;\r\n    font-size: 16px;\r\n  }\r\n  .form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n    z-index: 2;\r\n  }\r\n  .form-signin[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\r\n    margin-bottom: -1px;\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n  }\r\n  .form-signin[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDBCQUEwQjtFQUM1QiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tc2lnbmluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAzMzBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluIC5jaGVja2JveCB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJlbWFpbFwiXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user',
          templateUrl: './user.component.html',
          styleUrls: ['./user.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/util/Constants.ts":
  /*!***********************************!*\
    !*** ./src/app/util/Constants.ts ***!
    \***********************************/

  /*! exports provided: Constants */

  /***/
  function srcAppUtilConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Constants", function () {
      return Constants;
    });

    var Constants = function Constants() {
      _classCallCheck(this, Constants);
    };

    Constants.DATE_FMT = 'dd/MM/yyyy';
    Constants.DATE_TIME_FMT = "".concat(Constants.DATE_FMT, " hh:mm");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Dev\Nibo\SRC\Nibo.DevelopersChallenge2.App\NiboDevelopersChallenge2-App\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map