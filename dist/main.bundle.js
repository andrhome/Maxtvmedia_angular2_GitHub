webpackJsonp([2],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(95);
	var app_module_1 = __webpack_require__(152);
	/*
	 * Bootstrap Angular app with a top level NgModule
	 */
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
	    .catch(function (err) { return console.error(err); });
	

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

	/*
	 * Inspinia js helpers:
	 *
	 * correctHeight() - fix the height of main wrapper
	 * detectBody() - detect windows size
	 * smoothlyMenu() - add smooth fade in/out on navigation show/ide
	 *
	*/
	"use strict";
	function correctHeight() {
	    var pageWrapper = jQuery('#page-wrapper');
	    var navbarHeigh = jQuery('nav.navbar-default').height();
	    var wrapperHeigh = pageWrapper.height();
	    if (navbarHeigh > wrapperHeigh) {
	        pageWrapper.css("min-height", navbarHeigh + "px");
	    }
	    if (navbarHeigh < wrapperHeigh) {
	        if (navbarHeigh < jQuery(window).height()) {
	            pageWrapper.css("min-height", jQuery(window).height() + "px");
	        }
	        else {
	            pageWrapper.css("min-height", navbarHeigh + "px");
	        }
	    }
	    if (jQuery('body').hasClass('fixed-nav')) {
	        if (navbarHeigh > wrapperHeigh) {
	            pageWrapper.css("min-height", navbarHeigh + "px");
	        }
	        else {
	            pageWrapper.css("min-height", jQuery(window).height() - 60 + "px");
	        }
	    }
	}
	exports.correctHeight = correctHeight;
	function detectBody() {
	    if (jQuery(document).width() < 769) {
	        jQuery('body').addClass('body-small');
	    }
	    else {
	        jQuery('body').removeClass('body-small');
	    }
	}
	exports.detectBody = detectBody;
	function smoothlyMenu() {
	    if (!jQuery('body').hasClass('mini-navbar') || jQuery('body').hasClass('body-small')) {
	        // Hide menu in order to smoothly turn on when maximize menu
	        jQuery('#side-menu').hide();
	        // For smoothly turn on menu
	        setTimeout(function () {
	            jQuery('#side-menu').fadeIn(400);
	        }, 200);
	    }
	    else if (jQuery('body').hasClass('fixed-sidebar')) {
	        jQuery('#side-menu').hide();
	        setTimeout(function () {
	            jQuery('#side-menu').fadeIn(400);
	        }, 100);
	    }
	    else {
	        // Remove all inline style from jquery fadeIn function to reset menu state
	        jQuery('#side-menu').removeAttr('style');
	    }
	}
	exports.smoothlyMenu = smoothlyMenu;
	

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var mainViewComponent = (function () {
	    function mainViewComponent() {
	    }
	    mainViewComponent = __decorate([
	        core_1.Component({
	            selector: 'mianView',
	            template: __webpack_require__(352)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], mainViewComponent);
	    return mainViewComponent;
	}());
	exports.mainViewComponent = mainViewComponent;
	

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var minorViewComponent = (function () {
	    function minorViewComponent() {
	    }
	    minorViewComponent = __decorate([
	        core_1.Component({
	            selector: 'minorView',
	            template: __webpack_require__(353)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], minorViewComponent);
	    return minorViewComponent;
	}());
	exports.minorViewComponent = minorViewComponent;
	

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var get_http_service_1 = __webpack_require__(102);
	var parsel_type_1 = __webpack_require__(164);
	var ParselTypeComponent = (function () {
	    function ParselTypeComponent(httpService) {
	        this.httpService = httpService;
	        this.parsels = [];
	        // Create a Parsel Type
	        this.createConditions = false;
	    }
	    ParselTypeComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.httpService.getData('parsel-type.json').subscribe(function (data) { return _this.parsels = data.json(); });
	    };
	    ParselTypeComponent.prototype.createParselType = function () {
	        this.createConditions = true;
	    };
	    ParselTypeComponent.prototype.saveParselType = function (parselType) {
	        this.parsels.push(new parsel_type_1.ParselType(parselType));
	        console.log(this.parsels);
	        this.parselTypeName = '';
	        this.createConditions = false;
	    };
	    ParselTypeComponent = __decorate([
	        core_1.Component({
	            selector: 'parselTypeView',
	            template: __webpack_require__(354),
	            providers: [get_http_service_1.GetHttpService]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof get_http_service_1.GetHttpService !== 'undefined' && get_http_service_1.GetHttpService) === 'function' && _a) || Object])
	    ], ParselTypeComponent);
	    return ParselTypeComponent;
	    var _a;
	}());
	exports.ParselTypeComponent = ParselTypeComponent;
	

/***/ }),

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var get_http_service_1 = __webpack_require__(102);
	var ParselsListComponent = (function () {
	    function ParselsListComponent(http) {
	        this.http = http;
	        this.parselsList = [];
	    }
	    ParselsListComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.http.getData('parsels-list.json').subscribe(function (data) { return _this.parselsList = data.json(); });
	    };
	    ParselsListComponent = __decorate([
	        core_1.Component({
	            selector: 'parselsListView',
	            template: __webpack_require__(355),
	            providers: [get_http_service_1.GetHttpService]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof get_http_service_1.GetHttpService !== 'undefined' && get_http_service_1.GetHttpService) === 'function' && _a) || Object])
	    ], ParselsListComponent);
	    return ParselsListComponent;
	    var _a;
	}());
	exports.ParselsListComponent = ParselsListComponent;
	

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var get_http_service_1 = __webpack_require__(102);
	var post_service_1 = __webpack_require__(166);
	var PostServicesComponent = (function () {
	    function PostServicesComponent(httpService) {
	        this.httpService = httpService;
	        this.services = [];
	        // Create a Post Service
	        this.createConditions = false;
	    }
	    PostServicesComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.httpService.getData('parsel-type.json').subscribe(function (data) { return _this.services = data.json(); });
	    };
	    PostServicesComponent.prototype.createPostService = function () {
	        this.createConditions = true;
	    };
	    PostServicesComponent.prototype.savePostService = function (serviceName) {
	        this.services.push(new post_service_1.PostService(serviceName));
	        console.log(this.services);
	        this.postServiceName = '';
	        this.createConditions = false;
	    };
	    PostServicesComponent = __decorate([
	        core_1.Component({
	            selector: 'postServicesView',
	            template: __webpack_require__(356),
	            providers: [get_http_service_1.GetHttpService]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof get_http_service_1.GetHttpService !== 'undefined' && get_http_service_1.GetHttpService) === 'function' && _a) || Object])
	    ], PostServicesComponent);
	    return PostServicesComponent;
	    var _a;
	}());
	exports.PostServicesComponent = PostServicesComponent;
	

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var http_1 = __webpack_require__(44);
	var GetHttpService = (function () {
	    function GetHttpService(http) {
	        this.http = http;
	    }
	    GetHttpService.prototype.getData = function (path) {
	        return this.http.get(path);
	    };
	    GetHttpService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], GetHttpService);
	    return GetHttpService;
	    var _a;
	}());
	exports.GetHttpService = GetHttpService;
	

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var router_1 = __webpack_require__(53);
	var app_1 = __webpack_require__(154);
	var platform_browser_1 = __webpack_require__(16);
	var http_1 = __webpack_require__(44);
	var app_routes_1 = __webpack_require__(153);
	var common_1 = __webpack_require__(52);
	// App views
	var main_view_module_1 = __webpack_require__(161);
	var minor_view_module_1 = __webpack_require__(162);
	var parsel_type_module_1 = __webpack_require__(163);
	var post_services_module_1 = __webpack_require__(167);
	var parsels_list_module_1 = __webpack_require__(165);
	// App modules/components
	var navigation_module_1 = __webpack_require__(158);
	var footer_module_1 = __webpack_require__(156);
	var topnavbar_module_1 = __webpack_require__(160);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            declarations: [app_1.AppComponent],
	            imports: [
	                // Angular modules
	                platform_browser_1.BrowserModule,
	                http_1.HttpModule,
	                // Views
	                main_view_module_1.MainViewModule,
	                minor_view_module_1.MinorViewModule,
	                parsel_type_module_1.ParselTypeModule,
	                post_services_module_1.PostServicesModule,
	                parsels_list_module_1.ParselsListModule,
	                // Modules
	                navigation_module_1.NavigationModule,
	                footer_module_1.FooterModule,
	                topnavbar_module_1.TopnavbarModule,
	                router_1.RouterModule.forRoot(app_routes_1.ROUTES)
	            ],
	            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
	            bootstrap: [app_1.AppComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;
	

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var main_view_component_1 = __webpack_require__(97);
	var minor_view_component_1 = __webpack_require__(98);
	var parsel_type_component_1 = __webpack_require__(99);
	var post_services_component_1 = __webpack_require__(101);
	var parsels_list_component_1 = __webpack_require__(100);
	exports.ROUTES = [
	    // Main redirect
	    { path: '', redirectTo: 'mainView', pathMatch: 'full' },
	    // App views
	    { path: 'mainView', component: main_view_component_1.mainViewComponent },
	    { path: 'minorView', component: minor_view_component_1.minorViewComponent },
	    { path: 'parselTypeView', component: parsel_type_component_1.ParselTypeComponent },
	    { path: 'postServicesView', component: post_services_component_1.PostServicesComponent },
	    { path: 'parselsListView', component: parsels_list_component_1.ParselsListComponent },
	    // Handle all other routes
	    { path: '**', component: main_view_component_1.mainViewComponent }
	];
	

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var app_helpers_1 = __webpack_require__(96);
	// Core vendor styles
	__webpack_require__(343);
	__webpack_require__(344);
	__webpack_require__(342);
	// Main Inspinia CSS files
	__webpack_require__(345);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent.prototype.ngAfterViewInit = function () {
	        // Run correctHeight function on load and resize window event
	        jQuery(window).bind("load resize", function () {
	            app_helpers_1.correctHeight();
	            app_helpers_1.detectBody();
	        });
	        // Correct height of wrapper after metisMenu animation.
	        jQuery('.metismenu a').click(function () {
	            setTimeout(function () {
	                app_helpers_1.correctHeight();
	            }, 300);
	        });
	    };
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            template: __webpack_require__(348),
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;
	

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var FooterComponent = (function () {
	    function FooterComponent() {
	    }
	    FooterComponent = __decorate([
	        core_1.Component({
	            selector: 'footer',
	            template: __webpack_require__(349)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FooterComponent);
	    return FooterComponent;
	}());
	exports.FooterComponent = FooterComponent;
	

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var platform_browser_1 = __webpack_require__(16);
	var footer_component_ts_1 = __webpack_require__(155);
	var FooterModule = (function () {
	    function FooterModule() {
	    }
	    FooterModule = __decorate([
	        core_1.NgModule({
	            declarations: [footer_component_ts_1.FooterComponent],
	            imports: [platform_browser_1.BrowserModule],
	            exports: [footer_component_ts_1.FooterComponent],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FooterModule);
	    return FooterModule;
	}());
	exports.FooterModule = FooterModule;
	

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var router_1 = __webpack_require__(53);
	var NavigationComponent = (function () {
	    function NavigationComponent(router) {
	        this.router = router;
	    }
	    NavigationComponent.prototype.ngAfterViewInit = function () {
	        jQuery('#side-menu').metisMenu();
	    };
	    NavigationComponent.prototype.activeRoute = function (routename) {
	        return this.router.url.indexOf(routename) > -1;
	    };
	    NavigationComponent = __decorate([
	        core_1.Component({
	            selector: 'navigation',
	            template: __webpack_require__(350)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
	    ], NavigationComponent);
	    return NavigationComponent;
	    var _a;
	}());
	exports.NavigationComponent = NavigationComponent;
	

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var platform_browser_1 = __webpack_require__(16);
	var router_1 = __webpack_require__(53);
	var navigation_component_ts_1 = __webpack_require__(157);
	var NavigationModule = (function () {
	    function NavigationModule() {
	    }
	    NavigationModule = __decorate([
	        core_1.NgModule({
	            declarations: [navigation_component_ts_1.NavigationComponent],
	            imports: [platform_browser_1.BrowserModule, router_1.RouterModule],
	            exports: [navigation_component_ts_1.NavigationComponent],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NavigationModule);
	    return NavigationModule;
	}());
	exports.NavigationModule = NavigationModule;
	

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var app_helpers_1 = __webpack_require__(96);
	var TopnavbarComponent = (function () {
	    function TopnavbarComponent() {
	    }
	    TopnavbarComponent.prototype.toggleNavigation = function () {
	        jQuery("body").toggleClass("mini-navbar");
	        app_helpers_1.smoothlyMenu();
	    };
	    TopnavbarComponent = __decorate([
	        core_1.Component({
	            selector: 'topnavbar',
	            template: __webpack_require__(351)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TopnavbarComponent);
	    return TopnavbarComponent;
	}());
	exports.TopnavbarComponent = TopnavbarComponent;
	

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var platform_browser_1 = __webpack_require__(16);
	var topnavbar_component_ts_1 = __webpack_require__(159);
	var TopnavbarModule = (function () {
	    function TopnavbarModule() {
	    }
	    TopnavbarModule = __decorate([
	        core_1.NgModule({
	            declarations: [topnavbar_component_ts_1.TopnavbarComponent],
	            imports: [platform_browser_1.BrowserModule],
	            exports: [topnavbar_component_ts_1.TopnavbarComponent],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TopnavbarModule);
	    return TopnavbarModule;
	}());
	exports.TopnavbarModule = TopnavbarModule;
	

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var platform_browser_1 = __webpack_require__(16);
	var main_view_component_ts_1 = __webpack_require__(97);
	var MainViewModule = (function () {
	    function MainViewModule() {
	    }
	    MainViewModule = __decorate([
	        core_1.NgModule({
	            declarations: [main_view_component_ts_1.mainViewComponent],
	            imports: [platform_browser_1.BrowserModule],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MainViewModule);
	    return MainViewModule;
	}());
	exports.MainViewModule = MainViewModule;
	

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var platform_browser_1 = __webpack_require__(16);
	var minor_view_component_1 = __webpack_require__(98);
	var MinorViewModule = (function () {
	    function MinorViewModule() {
	    }
	    MinorViewModule = __decorate([
	        core_1.NgModule({
	            declarations: [minor_view_component_1.minorViewComponent],
	            imports: [platform_browser_1.BrowserModule],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MinorViewModule);
	    return MinorViewModule;
	}());
	exports.MinorViewModule = MinorViewModule;
	

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var platform_browser_1 = __webpack_require__(16);
	var forms_1 = __webpack_require__(65);
	var parsel_type_component_1 = __webpack_require__(99);
	var http_1 = __webpack_require__(44);
	var ParselTypeModule = (function () {
	    function ParselTypeModule() {
	    }
	    ParselTypeModule = __decorate([
	        core_1.NgModule({
	            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
	            declarations: [parsel_type_component_1.ParselTypeComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ParselTypeModule);
	    return ParselTypeModule;
	}());
	exports.ParselTypeModule = ParselTypeModule;
	

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

	"use strict";
	var ParselType = (function () {
	    function ParselType(parselType) {
	        return parselType;
	    }
	    return ParselType;
	}());
	exports.ParselType = ParselType;
	

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var platform_browser_1 = __webpack_require__(16);
	var forms_1 = __webpack_require__(65);
	var parsels_list_component_1 = __webpack_require__(100);
	var http_1 = __webpack_require__(44);
	var ParselsListModule = (function () {
	    function ParselsListModule() {
	    }
	    ParselsListModule = __decorate([
	        core_1.NgModule({
	            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
	            declarations: [parsels_list_component_1.ParselsListComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ParselsListModule);
	    return ParselsListModule;
	}());
	exports.ParselsListModule = ParselsListModule;
	

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

	"use strict";
	var PostService = (function () {
	    function PostService(serviceItem) {
	        return serviceItem;
	    }
	    return PostService;
	}());
	exports.PostService = PostService;
	

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var platform_browser_1 = __webpack_require__(16);
	var forms_1 = __webpack_require__(65);
	var post_services_component_1 = __webpack_require__(101);
	var http_1 = __webpack_require__(44);
	var PostServicesModule = (function () {
	    function PostServicesModule() {
	    }
	    PostServicesModule = __decorate([
	        core_1.NgModule({
	            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
	            declarations: [post_services_component_1.PostServicesComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], PostServicesModule);
	    return PostServicesModule;
	}());
	exports.PostServicesModule = PostServicesModule;
	

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

	module.exports = "<!-- Wrapper-->\n<div id=\"wrapper\">\n\n    <!-- Left navigation bar -->\n    <navigation></navigation>\n\n    <!-- Main page wrapper -->\n    <div id=\"page-wrapper\" class=\"gray-bg\">\n\n        <!-- Top navigation -->\n        <topnavbar></topnavbar>\n\n        <!-- Main view/routes wrapper-->\n        <router-outlet></router-outlet>\n\n        <!-- Footer -->\n        <footer></footer>\n\n    </div>\n    <!-- End page wrapper-->\n\n</div>\n<!-- End wrapper-->\n"

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

	module.exports = "<div class=\"footer\">\n    <div class=\"pull-right\">\n        10GB of <strong>250GB</strong> Free.\n    </div>\n    <div>\n        <strong>Copyright</strong> Example Company &copy; 2014-2017\n    </div>\n</div>"

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

	module.exports = "<nav class=\"navbar-default navbar-static-side\" role=\"navigation\">\n    <div class=\"sidebar-collapse\">\n        <ul class=\"nav metismenu\" id=\"side-menu\">\n            <li class=\"nav-header\">\n                <div class=\"dropdown profile-element\">\n                    <a data-toggle=\"dropdown\" class=\"dropdown-toggle\" href=\"#\">\n                        <span class=\"block m-t-xs\"> <strong class=\"font-bold\">Example user</strong> </span>\n                        <span class=\"text-muted text-xs block\">Example <b class=\"caret\"></b> </span>\n                    </a>\n                    <ul class=\"dropdown-menu animated fadeInRight m-t-xs\">\n                        <li><a href=\"#\">Logout</a></li>\n                    </ul>\n                </div>\n                <div class=\"logo-element\">\n                    IN+\n                </div>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('mainView')}\">\n                <a [routerLink]=\"['./mainView']\"><i class=\"fa fa-th-large\"></i> <span class=\"nav-label\">Main view</span></a>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('minorView')}\">\n                <a [routerLink]=\"['./minorView']\"><i class=\"fa fa-desktop\"></i> <span class=\"nav-label\">Minor view</span> </a>\n            </li>\n            <li>\n                <a [ngClass]=\"{active: activeRoute('parselTypeView')}\"><i class=\"fa fa-bar-chart-o\"></i> <span class=\"nav-label\">Parsels</span><span class=\"fa arrow\"></span></a>\n                <ul class=\"nav nav-second-level collapse\">\n                    <li><a [routerLink]=\"['./parselTypeView']\">Parsel Type</a></li>\n                    <li><a [routerLink]=\"['./postServicesView']\">Post Services</a></li>\n                    <li><a [routerLink]=\"['./parselsListView']\">Parsels List</a></li>\n                </ul>\n            </li>\n        </ul>\n    </div>\n</nav>\n"

/***/ }),

/***/ 351:
/***/ (function(module, exports) {

	module.exports = "<div class=\"row border-bottom\">\n    <nav class=\"navbar navbar-static-top white-bg\" role=\"navigation\" style=\"margin-bottom: 0\">\n        <div class=\"navbar-header\">\n            <a class=\"minimalize-styl-2 btn btn-primary \" (click)=\"toggleNavigation()\"><i class=\"fa fa-bars\"></i> </a>\n            <form role=\"search\" class=\"navbar-form-custom\" method=\"post\" action=\"#\">\n                <div class=\"form-group\">\n                    <input type=\"text\" placeholder=\"Search for something...\" class=\"form-control\" name=\"top-search\" id=\"top-search\">\n                </div>\n            </form>\n        </div>\n        <ul class=\"nav navbar-top-links navbar-right\">\n            <li>\n                <a href=\"#\">\n                    <i class=\"fa fa-sign-out\"></i> Log out\n                </a>\n            </li>\n        </ul>\n\n    </nav>\n</div>"

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

	module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"text-center m-t-lg\">\n                <h1>\n                    Welcome in Inspinia Angular 2 Starter Project\n                </h1>\n                <small>\n                    It is an application skeleton for a typical web app. You can use it to quickly bootstrap your webapp projects and dev environment.\n                </small>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 353:
/***/ (function(module, exports) {

	module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"text-center m-t-lg\">\n                <h1>\n                    Simple example of second view\n                </h1>\n                <small>Written as an minor-view.</small>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 354:
/***/ (function(module, exports) {

	module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-sm-4\">\n        <h2>Parsel type</h2>\n        <ol class=\"breadcrumb\">\n            <li>\n                <a href=\"/\">This is</a>\n            </li>\n            <li class=\"active\">\n                <strong>Breadcrumb</strong>\n            </li>\n        </ol>\n    </div>\n    <div class=\"col-sm-8\">\n        <div class=\"title-action\">\n\n        </div>\n    </div>\n</div>\n<div class=\"wrapper wrapper-content\" *ngIf=\"!createConditions\">\n    <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n            <div class=\"ibox-tools\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"createParselType()\">Create a Parcel Type</button>\n            </div>\n        </div>\n        <div class=\"ibox-content\">\n            <table class=\"table\">\n                <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Name</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let parsel of parsels; let i = index\">\n                    <td>{{i + 1}}</td>\n                    <td>{{parsel.name}}</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n<div class=\"wrapper wrapper-content\" *ngIf=\"createConditions\">\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-content\">\n                    <form name=\"create_parcel_type\" method=\"post\" class=\"form-horizontal\">\n                        <div class=\"form-group\">\n                            <label class=\"col-sm-2 control-label required\" for=\"create_parcel_type_name\">Name</label>\n                            <div class=\"col-sm-10\">\n                                <input type=\"text\" [(ngModel)]=\"parselTypeName\" id=\"create_parcel_type_name\" name=\"create_parcel_type[name]\" class=\"form-control\" required>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-2\"></div>\n                            <div class=\"col-sm-10\">\n                                <button type=\"button\"\n                                        id=\"create_parcel_type_submit\"\n                                        name=\"create_parcel_type[submit]\"\n                                        class=\"btn btn-primary btn\"\n                                        (click)=\"saveParselType({name: parselTypeName})\">Save</button>\n                            </div>\n                        </div>\n                        <input type=\"hidden\" id=\"create_parcel_type__token\" name=\"create_parcel_type[_token]\" value=\"xGs8fk3YBnq4jMXGY7A872y2l49d5vOjLEXKA1lWXK0\">\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ 355:
/***/ (function(module, exports) {

	module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-sm-4\">\n        <h2>Parsels List</h2>\n        <ol class=\"breadcrumb\">\n            <li>\n                <a href=\"/\">This is</a>\n            </li>\n            <li class=\"active\">\n                <strong>Breadcrumb</strong>\n            </li>\n        </ol>\n    </div>\n    <div class=\"col-sm-8\">\n        <div class=\"title-action\">\n\n        </div>\n    </div>\n</div>\n<div class=\"wrapper wrapper-content\">\n    <div class=\"tabs-container\">\n        <ul class=\"nav nav-tabs\">\n            <li class=\"active\"><a data-toggle=\"tab\" href=\"#parcels-tabs-incoming\">Incoming</a></li>\n            <li class=\"\"><a data-toggle=\"tab\" href=\"#parcels-tabs-outgoing\">Outgoing</a></li>\n        </ul>\n        <div class=\"tab-content\">\n            <div id=\"parcels-tabs-incoming\" class=\"tab-pane active\">\n                <div class=\"panel-body\">\n                    <div class=\"ibox float-e-margins\">\n                        <div class=\"ibox-title\">\n                            <div class=\"ibox-tools\">\n                                <a href=\"#\" class=\"btn btn-primary\">Create an Incoming Parcel</a>\n                            </div>\n                        </div>\n                        <div class=\"ibox-content\">\n                            <table class=\"table\">\n                                <thead>\n                                <tr>\n                                    <th>#</th>\n                                    <th>Recepient</th>\n                                    <th>Received</th>\n                                    <th>Received from</th>\n                                    <th>Picked up</th>\n                                    <th>Pieces</th>\n                                    <th>Status</th>\n                                    <th></th>\n                                </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let parselItem of parselsList; let i = index;\">\n                                    <td>{{i + 1}}</td>\n                                    <td>{{parselItem.recepient}}</td>\n                                    <td>{{parselItem.received}}</td>\n                                    <td>{{parselItem.receivedFrom}}</td>\n                                    <td>{{parselItem.pickedUp}}</td>\n                                    <td>{{parselItem.pieces}}</td>\n                                    <td>\n                                        <span class=\"label label-primary\">{{parselItem.status}}</span>\n                                    </td>\n                                    <td>\n                                        <a href=\"#\" class=\"btn btn-info\"><i class=\"fa fa-paste\"></i>Edit</a>\n                                        <div class=\"btn-group\">\n                                            <button data-toggle=\"dropdown\" class=\"btn btn-default dropdown-toggle\" aria-expanded=\"false\">Action <span class=\"caret\"></span></button>\n                                            <ul class=\"dropdown-menu\">\n                                                <li><a href=\"#\" data-id=\"\" data-action=\"pick_up\" data-title=\"\" data-toggle=\"modal\" data-target=\"#parcel_action_modal\">Pick Up</a></li>\n                                                <li><a href=\"#\" data-id=\"\" data-action=\"return\" data-title=\"\" data-toggle=\"modal\" data-target=\"#parcel_action_modal\">Return</a></li>\n                                            </ul>\n                                        </div>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div id=\"parcels-tabs-outgoing\" class=\"tab-pane\">\n                <div class=\"panel-body\">\n                    <div class=\"ibox-title\">\n                        <div class=\"ibox-tools\">\n                            <a href=\"#\" class=\"btn btn-primary\">Create an Outgoing Parcel</a>\n                        </div>\n                    </div>\n                    <div class=\"ibox-content\">\n                        <table class=\"table\">\n                            <thead>\n                            <tr>\n                                <th>#</th>\n                                <th>Recepient</th>\n                                <th>Received</th>\n                                <th>Received from</th>\n                                <th>Picked up</th>\n                                <th>Pieces</th>\n                                <th>Status</th>\n                                <th></th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let parselItem of parselsList; let i = index;\">\n                                <td>{{i + 1}}</td>\n                                <td>{{parselItem.recepient}}</td>\n                                <td>{{parselItem.received}}</td>\n                                <td>{{parselItem.receivedFrom}}</td>\n                                <td>{{parselItem.pickedUp}}</td>\n                                <td>{{parselItem.pieces}}</td>\n                                <td>\n                                    <span class=\"label label-primary\">{{parselItem.status}}</span>\n                                </td>\n                                <td>\n                                    <a href=\"#\" class=\"btn btn-info\"><i class=\"fa fa-paste\"></i>Edit</a>\n                                    <div class=\"btn-group\">\n                                        <button data-toggle=\"dropdown\" class=\"btn btn-default dropdown-toggle\" aria-expanded=\"false\">Action <span class=\"caret\"></span></button>\n                                        <ul class=\"dropdown-menu\">\n                                            <li><a href=\"#\" data-id=\"\" data-action=\"pick_up\" data-title=\"\" data-toggle=\"modal\" data-target=\"#parcel_action_modal\">Pick Up</a></li>\n                                            <li><a href=\"#\" data-id=\"\" data-action=\"return\" data-title=\"\" data-toggle=\"modal\" data-target=\"#parcel_action_modal\">Return</a></li>\n                                        </ul>\n                                    </div>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"parcel_action_modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"parcel_action_modal_label\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                <h4 class=\"modal-title\" id=\"parcel_action_modal_label\"></h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"alert hide\"></div>\n                <div class=\"custom-body\"></div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n                <button type=\"button\" class=\"btn btn-primary form-submit\">Submit</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ 356:
/***/ (function(module, exports) {

	module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-sm-4\">\n        <h2>Post services</h2>\n        <ol class=\"breadcrumb\">\n            <li>\n                <a href=\"/\">This is</a>\n            </li>\n            <li class=\"active\">\n                <strong>Breadcrumb</strong>\n            </li>\n        </ol>\n    </div>\n    <div class=\"col-sm-8\">\n        <div class=\"title-action\">\n\n        </div>\n    </div>\n</div>\n<div class=\"wrapper wrapper-content\" *ngIf=\"!createConditions\">\n    <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n            <div class=\"ibox-tools\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"createPostService()\">Create a Post Service</button>\n            </div>\n        </div>\n        <div class=\"ibox-content\">\n            <table class=\"table\">\n                <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Name</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let service of services; let i = index\">\n                    <td>{{i + 1}}</td>\n                    <td>{{service.name}}</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n<div class=\"wrapper wrapper-content\" *ngIf=\"createConditions\">\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-content\">\n                    <form name=\"create_parcel_type\" method=\"post\" class=\"form-horizontal\">\n                        <div class=\"form-group\">\n                            <label class=\"col-sm-2 control-label required\" for=\"create_parcel_type_name\">Name</label>\n                            <div class=\"col-sm-10\">\n                                <input type=\"text\" [(ngModel)]=\"postServiceName\" id=\"create_parcel_type_name\" name=\"create_parcel_type[name]\" class=\"form-control\" required>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-2\"></div>\n                            <div class=\"col-sm-10\">\n                                <button type=\"button\"\n                                        id=\"create_parcel_type_submit\"\n                                        name=\"create_parcel_type[submit]\"\n                                        class=\"btn btn-primary btn\"\n                                        (click)=\"savePostService({name: postServiceName})\">Save</button>\n                            </div>\n                        </div>\n                        <input type=\"hidden\" id=\"create_parcel_type__token\" name=\"create_parcel_type[_token]\" value=\"xGs8fk3YBnq4jMXGY7A872y2l49d5vOjLEXKA1lWXK0\">\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ })

});
//# sourceMappingURL=main.map