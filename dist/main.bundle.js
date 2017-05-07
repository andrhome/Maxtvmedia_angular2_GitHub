webpackJsonp([2],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(95);
	var app_module_1 = __webpack_require__(157);
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
/***/ (function(module, exports) {

	"use strict";
	var ParselType = (function () {
	    function ParselType() {
	    }
	    return ParselType;
	}());
	exports.ParselType = ParselType;
	

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
	var core_1 = __webpack_require__(3);
	var parsel_type_1 = __webpack_require__(97);
	var http_services_service_1 = __webpack_require__(99);
	var AddingFormComponent = (function () {
	    function AddingFormComponent(http) {
	        this.http = http;
	        this.title = '';
	        this.editMode = false;
	        this.parselItem = new parsel_type_1.ParselType();
	        this.onSubmit = new core_1.EventEmitter();
	        this.buildings = [];
	        this.suites = [];
	        this.residents = [];
	        this.isShow = false;
	    }
	    AddingFormComponent.prototype.show = function () {
	        var _this = this;
	        this.isShow = true;
	        this.http.getBuilds().subscribe(function (data) {
	            _this.buildings = data;
	            _this.http.getSuites(_this.buildings[0].id).subscribe(function (data) {
	                _this.suites = data;
	                _this.http.getResidents().subscribe(function (data) {
	                    _this.residents = data;
	                    console.log('Residents: ', _this.residents);
	                });
	            });
	        });
	    };
	    // getSuites() {
	    //     this.http.getSuites().subscribe(
	    //         data => { this.suites = data; console.log(data); }
	    //     );
	    // }
	    AddingFormComponent.prototype.hide = function () {
	        this.isShow = false;
	    };
	    AddingFormComponent.prototype.submit = function () {
	        if (this.editMode) {
	            this.onSubmit.emit({ index: this.editItemIndex, item: this.parselItem });
	        }
	        else {
	            this.onSubmit.emit({ item: this.parselItem });
	        }
	        this.hide();
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], AddingFormComponent.prototype, "title", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], AddingFormComponent.prototype, "editMode", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], AddingFormComponent.prototype, "editItemIndex", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', (typeof (_a = typeof parsel_type_1.ParselType !== 'undefined' && parsel_type_1.ParselType) === 'function' && _a) || Object)
	    ], AddingFormComponent.prototype, "parselItem", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_b = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _b) || Object)
	    ], AddingFormComponent.prototype, "onSubmit", void 0);
	    AddingFormComponent = __decorate([
	        core_1.Component({
	            // moduleId: module.id,
	            selector: 'adding-form',
	            template: __webpack_require__(356)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_c = typeof http_services_service_1.HttpService !== 'undefined' && http_services_service_1.HttpService) === 'function' && _c) || Object])
	    ], AddingFormComponent);
	    return AddingFormComponent;
	    var _a, _b, _c;
	}());
	exports.AddingFormComponent = AddingFormComponent;
	

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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(35);
	var Observable_1 = __webpack_require__(9);
	__webpack_require__(142);
	__webpack_require__(372);
	__webpack_require__(371);
	var url = 'http://maxtvmedia.requestumdemo.com/api';
	var HttpService = (function () {
	    function HttpService(http) {
	        this.http = http;
	    }
	    HttpService.prototype.createAuthorizationHeader = function (headers) {
	        headers.append('Content-Type', 'application/json;charset=utf-8');
	        headers.append('Authorization', 'Bearer MjI2Nzc3ZTUzZTNlNjdiNmY0OGNiZmU1MTNkYmEyZTg1ZDUyODIzY2EzZjFlZDUyY2E4ZmQ4MDllNGVlYWFjNQ');
	    };
	    HttpService.prototype.getDataList = function () {
	        var headers = new http_1.Headers();
	        this.createAuthorizationHeader(headers);
	        var options = new http_1.RequestOptions({ headers: headers });
	        // 'http://maxtvmedia.requestumdemo.com/api/v1/parcels'
	        return this.http.get(url + "/v1/parcels", options)
	            .map(function (resp) { return resp.json(); })
	            .catch(function (error) {
	            return Observable_1.Observable.throw(error);
	        });
	    };
	    HttpService.prototype.getBuilds = function () {
	        var headers = new http_1.Headers();
	        this.createAuthorizationHeader(headers);
	        var options = new http_1.RequestOptions({ headers: headers });
	        return this.http.get(url + "/v1/buildings", options)
	            .map(function (resp) { return resp.json(); })
	            .catch(function (error) {
	            return Observable_1.Observable.throw(error);
	        });
	    };
	    HttpService.prototype.getSuites = function (id) {
	        var headers = new http_1.Headers();
	        this.createAuthorizationHeader(headers);
	        var options = new http_1.RequestOptions({ headers: headers });
	        return this.http.get(url + "/v1/suites/building/" + id, options)
	            .map(function (resp) { return resp.json(); })
	            .catch(function (error) {
	            return Observable_1.Observable.throw(error);
	        });
	    };
	    HttpService.prototype.getResidents = function () {
	        var headers = new http_1.Headers();
	        this.createAuthorizationHeader(headers);
	        var options = new http_1.RequestOptions({ headers: headers });
	        return this.http.get(url + "/v1/residents", options)
	            .map(function (resp) { return resp.json(); })
	            .catch(function (error) {
	            return Observable_1.Observable.throw(error);
	        });
	    };
	    HttpService.prototype.addItem = function (item) {
	        var headers = new http_1.Headers();
	        this.createAuthorizationHeader(headers);
	        var options = new http_1.RequestOptions({ headers: headers });
	        return this.http.post(url + "/v1/parcels", {}, options)
	            .map(function (resp) { return resp.json(); })
	            .catch(function (error) {
	            return Observable_1.Observable.throw(error);
	        });
	    };
	    HttpService.prototype.editItem = function () {
	    };
	    HttpService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], HttpService);
	    return HttpService;
	    var _a;
	}());
	exports.HttpService = HttpService;
	

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
	var core_1 = __webpack_require__(3);
	var mainViewComponent = (function () {
	    function mainViewComponent() {
	    }
	    mainViewComponent = __decorate([
	        core_1.Component({
	            selector: 'mianView',
	            template: __webpack_require__(361)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], mainViewComponent);
	    return mainViewComponent;
	}());
	exports.mainViewComponent = mainViewComponent;
	

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
	var core_1 = __webpack_require__(3);
	var minorViewComponent = (function () {
	    function minorViewComponent() {
	    }
	    minorViewComponent = __decorate([
	        core_1.Component({
	            selector: 'minorView',
	            template: __webpack_require__(362)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], minorViewComponent);
	    return minorViewComponent;
	}());
	exports.minorViewComponent = minorViewComponent;
	

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
	var core_1 = __webpack_require__(3);
	var get_http_service_1 = __webpack_require__(105);
	var parsel_type_1 = __webpack_require__(170);
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
	        this.parselTypeName = '';
	        this.createConditions = false;
	    };
	    ParselTypeComponent = __decorate([
	        core_1.Component({
	            selector: 'parselTypeView',
	            template: __webpack_require__(363),
	            providers: [get_http_service_1.GetHttpService]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof get_http_service_1.GetHttpService !== 'undefined' && get_http_service_1.GetHttpService) === 'function' && _a) || Object])
	    ], ParselTypeComponent);
	    return ParselTypeComponent;
	    var _a;
	}());
	exports.ParselTypeComponent = ParselTypeComponent;
	

/***/ }),

/***/ 103:
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
	var core_1 = __webpack_require__(3);
	var http_services_service_1 = __webpack_require__(99);
	var adding_form_component_1 = __webpack_require__(98);
	var ParselsListComponent = (function () {
	    function ParselsListComponent(http) {
	        this.http = http;
	        this.parselsList = [];
	        this.initParselsList = function () {
	            var _this = this;
	            this.http.getDataList().subscribe(function (data) { _this.parselsList = data; console.log(data); }, function (error) { _this.error = error; console.error(error); });
	        };
	    }
	    ParselsListComponent.prototype.ngOnInit = function () {
	        this.initParselsList();
	    };
	    ParselsListComponent.prototype.addIncomingParsel = function (item) {
	        // this.http.addItem(item).subscribe(
	        //     data => { console.log(data); },
	        //     error => { console.error(error); }
	        // );
	        this.parselsList.push(item);
	    };
	    ParselsListComponent = __decorate([
	        core_1.Component({
	            selector: 'parselsListView',
	            template: __webpack_require__(364),
	            providers: [http_services_service_1.HttpService, adding_form_component_1.AddingFormComponent]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_services_service_1.HttpService !== 'undefined' && http_services_service_1.HttpService) === 'function' && _a) || Object])
	    ], ParselsListComponent);
	    return ParselsListComponent;
	    var _a;
	}());
	exports.ParselsListComponent = ParselsListComponent;
	

/***/ }),

/***/ 104:
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
	var core_1 = __webpack_require__(3);
	var get_http_service_1 = __webpack_require__(105);
	var post_service_1 = __webpack_require__(172);
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
	            template: __webpack_require__(365),
	            providers: [get_http_service_1.GetHttpService]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof get_http_service_1.GetHttpService !== 'undefined' && get_http_service_1.GetHttpService) === 'function' && _a) || Object])
	    ], PostServicesComponent);
	    return PostServicesComponent;
	    var _a;
	}());
	exports.PostServicesComponent = PostServicesComponent;
	

/***/ }),

/***/ 105:
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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(35);
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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(46);
	var app_1 = __webpack_require__(159);
	var common_1 = __webpack_require__(43);
	var platform_browser_1 = __webpack_require__(16);
	var http_1 = __webpack_require__(35);
	var app_routes_1 = __webpack_require__(158);
	var common_2 = __webpack_require__(43);
	// App views
	var main_view_module_1 = __webpack_require__(167);
	var minor_view_module_1 = __webpack_require__(168);
	var parsel_type_module_1 = __webpack_require__(169);
	var post_services_module_1 = __webpack_require__(173);
	var parsels_list_module_1 = __webpack_require__(171);
	// App modules/components
	var navigation_module_1 = __webpack_require__(164);
	var footer_module_1 = __webpack_require__(162);
	var topnavbar_module_1 = __webpack_require__(166);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            declarations: [app_1.AppComponent],
	            imports: [
	                // Angular modules
	                common_1.CommonModule,
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
	            providers: [{ provide: common_2.LocationStrategy, useClass: common_2.HashLocationStrategy }],
	            bootstrap: [app_1.AppComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;
	

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var main_view_component_1 = __webpack_require__(100);
	var minor_view_component_1 = __webpack_require__(101);
	var parsel_type_component_1 = __webpack_require__(102);
	var post_services_component_1 = __webpack_require__(104);
	var parsels_list_component_1 = __webpack_require__(103);
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
	var core_1 = __webpack_require__(3);
	var app_helpers_1 = __webpack_require__(96);
	// Core vendor styles
	__webpack_require__(349);
	__webpack_require__(350);
	__webpack_require__(348);
	// Main Inspinia CSS files
	__webpack_require__(351);
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
	            template: __webpack_require__(355),
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;
	

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
	var core_1 = __webpack_require__(3);
	var parsel_type_1 = __webpack_require__(97);
	var ListComponent = (function () {
	    function ListComponent() {
	    }
	    ListComponent.prototype.editParselItem = function (index, updatedItem) {
	        this.dataList[index] = updatedItem;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', (typeof (_a = typeof parsel_type_1.ParselType !== 'undefined' && parsel_type_1.ParselType) === 'function' && _a) || Object)
	    ], ListComponent.prototype, "dataList", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], ListComponent.prototype, "error", void 0);
	    ListComponent = __decorate([
	        core_1.Component({
	            selector: 'list-comp',
	            template: __webpack_require__(357)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ListComponent);
	    return ListComponent;
	    var _a;
	}());
	exports.ListComponent = ListComponent;
	

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
	var core_1 = __webpack_require__(3);
	var FooterComponent = (function () {
	    function FooterComponent() {
	    }
	    FooterComponent = __decorate([
	        core_1.Component({
	            selector: 'footer',
	            template: __webpack_require__(358)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FooterComponent);
	    return FooterComponent;
	}());
	exports.FooterComponent = FooterComponent;
	

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
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(16);
	var footer_component_ts_1 = __webpack_require__(161);
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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(46);
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
	            template: __webpack_require__(359)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
	    ], NavigationComponent);
	    return NavigationComponent;
	    var _a;
	}());
	exports.NavigationComponent = NavigationComponent;
	

/***/ }),

/***/ 164:
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
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(16);
	var router_1 = __webpack_require__(46);
	var navigation_component_ts_1 = __webpack_require__(163);
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
	var core_1 = __webpack_require__(3);
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
	            template: __webpack_require__(360)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TopnavbarComponent);
	    return TopnavbarComponent;
	}());
	exports.TopnavbarComponent = TopnavbarComponent;
	

/***/ }),

/***/ 166:
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
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(16);
	var topnavbar_component_ts_1 = __webpack_require__(165);
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
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(16);
	var main_view_component_ts_1 = __webpack_require__(100);
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

/***/ 168:
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
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(16);
	var minor_view_component_1 = __webpack_require__(101);
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

/***/ 169:
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
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(16);
	var forms_1 = __webpack_require__(54);
	var parsel_type_component_1 = __webpack_require__(102);
	var http_1 = __webpack_require__(35);
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

/***/ 170:
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

/***/ 171:
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
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(43);
	var platform_browser_1 = __webpack_require__(16);
	var forms_1 = __webpack_require__(54);
	var parsels_list_component_1 = __webpack_require__(103);
	var http_1 = __webpack_require__(35);
	var router_1 = __webpack_require__(46);
	var list_component_1 = __webpack_require__(160);
	var adding_form_component_1 = __webpack_require__(98);
	var ParselsListModule = (function () {
	    function ParselsListModule() {
	    }
	    ParselsListModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                common_1.CommonModule,
	                platform_browser_1.BrowserModule,
	                forms_1.FormsModule,
	                http_1.HttpModule,
	                router_1.RouterModule
	            ],
	            declarations: [
	                parsels_list_component_1.ParselsListComponent,
	                list_component_1.ListComponent,
	                adding_form_component_1.AddingFormComponent
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ParselsListModule);
	    return ParselsListModule;
	}());
	exports.ParselsListModule = ParselsListModule;
	

/***/ }),

/***/ 172:
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

/***/ 173:
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
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(16);
	var forms_1 = __webpack_require__(54);
	var post_services_component_1 = __webpack_require__(104);
	var http_1 = __webpack_require__(35);
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

/***/ 348:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 351:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 355:
/***/ (function(module, exports) {

	module.exports = "<!-- Wrapper-->\r\n<div id=\"wrapper\">\r\n\r\n    <!-- Left navigation bar -->\r\n    <navigation></navigation>\r\n\r\n    <!-- Main page wrapper -->\r\n    <div id=\"page-wrapper\" class=\"gray-bg\">\r\n\r\n        <!-- Top navigation -->\r\n        <topnavbar></topnavbar>\r\n\r\n        <!-- Main view/routes wrapper-->\r\n        <router-outlet></router-outlet>\r\n\r\n        <!-- Footer -->\r\n        <footer></footer>\r\n\r\n    </div>\r\n    <!-- End page wrapper-->\r\n\r\n</div>\r\n<!-- End wrapper-->\r\n"

/***/ }),

/***/ 356:
/***/ (function(module, exports) {

	module.exports = "<button type=\"button\" class=\"btn btn-primary\" (click)=\"show()\" [innerHTML]=\"title\"></button>\r\n\r\n<div class=\"adding-form-wrapper\" *ngIf=\"isShow\">\r\n\t<div class=\"adding-form\">\r\n\t\t<div class=\"ibox float-e-margins\">\r\n\t\t\t<div class=\"ibox-content\">\r\n\t\t\t\t<form name=\"create_parcel\" method=\"\" class=\"form-horizontal\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-4 control-label required\" for=\"parcel-building\">Building</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8\">\r\n\t\t\t\t\t\t\t<select (change)=\"getSuites(1)\" id=\"parcel-building\" name=\"create_parcel[building]\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let build of buildings\" value=\"{{build.name}}\">{{build.name}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-4 control-label required\" for=\"parcel-suite\">Suite</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8\">\r\n\t\t\t\t\t\t\t<select (change)=\"getResidents()\" id=\"parcel-suite\" name=\"create_parcel[suite]\" class=\"form-control select2\">\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let suite of suites\" value=\"{{suite.suite_number}}\">{{suite.suite_number}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-4 control-label required\" for=\"parcel-resident-name\">Recepient name</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8\">\r\n\t\t\t\t\t\t\t<select id=\"parcel-resident-name\" name=\"create_parcel[resident-name]\" class=\"form-control select2\" [(ngModel)]=\"parselItem.firstName\">\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let resident of residents\" value=\"{{resident.first_name}}\">{{resident.first_name}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-4 control-label required\" for=\"parcel-resident-surname\">Recepient surename</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8\">\r\n\t\t\t\t\t\t\t<select id=\"parcel-resident-surname\" name=\"create_parcel[resident-surname]\" class=\"form-control select2\" [(ngModel)]=\"parselItem.lastName\">\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let resident of residents\" value=\"{{resident.last_name}}\">{{resident.last_name}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-4 control-label required\" for=\"create_parcel_parcelPostService\">Delivered by</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8\">\r\n\t\t\t\t\t\t\t<select id=\"create_parcel_parcelPostService\" name=\"create_parcel[suite]\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t<option value=\"DHL\">DHL</option>\r\n\t\t\t\t\t\t\t\t<option value=\"SDN\">SDN</option>\r\n\t\t\t\t\t\t\t\t<option value=\"MVC\">MVC</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-4 control-label\" for=\"create_parcel_numberPieces\">Pieces</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" id=\"create_parcel_numberPieces\" name=\"create_parcel[numberPieces]\" class=\"form-control\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-4 control-label required\" for=\"create_parcel_parcelType\">Parcel type</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8\">\r\n\t\t\t\t\t\t\t<select id=\"create_parcel_parcelType\" name=\"create_parcel[parcelType]\" class=\"form-control\" [(ngModel)]=\"parselItem.parcelType\">\r\n\t\t\t\t\t\t\t\t<option value=\"1\">Letter</option>\r\n\t\t\t\t\t\t\t\t<option value=\"2\">Package</option>\r\n\t\t\t\t\t\t\t\t<option value=\"3\">Medication</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-4 control-label\" for=\"create_parcel_deliveryAddress\">Delivery address</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8\">\r\n\t\t\t\t\t\t\t<textarea id=\"create_parcel_deliveryAddress\" name=\"create_parcel[deliveryAddress]\" class=\"form-control\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-4 control-label\" for=\"create_parcel_notes\">Notes</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" id=\"create_parcel_notes\" name=\"create_parcel[notes]\" class=\"form-control\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-4 control-label\" for=\"create_parcel_description\">Description</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8\">\r\n\t\t\t\t\t\t\t<textarea id=\"create_parcel_description\" name=\"create_parcel[description]\" class=\"form-control\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<div class=\"col-sm-3 col-sm-offset-7\">\r\n\t\t\t\t\t\t\t<button type=\"button\"\r\n\t\t\t\t\t\t\t\t\tname=\"create_parcel[submit]\"\r\n\t\t\t\t\t\t\t\t\tclass=\"btn btn-default\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"hide()\">Cancel</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t\t<button type=\"button\"\r\n\t\t\t\t\t\t\t\t\tname=\"create_parcel[submit]\"\r\n\t\t\t\t\t\t\t\t\tclass=\"btn btn-primary\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"submit()\" [innerHTML]=\"editMode ? 'Edit' : 'Save'\">\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<input type=\"hidden\" id=\"create_parcel__token\" name=\"create_parcel[_token]\">\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"overlay\" (click)=\"hide()\"></div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 357:
/***/ (function(module, exports) {

	module.exports = "<table class=\"table\">\r\n    <thead>\r\n    <tr>\r\n        <th>#</th>\r\n        <th>Recepient name</th>\r\n        <th>Recepient surname</th>\r\n        <th>Received</th>\r\n        <th>Parcel Type</th>\r\n        <th>Delivered by</th>\r\n        <th>Picked up</th>\r\n        <th>Pieces</th>\r\n        <th>Status</th>\r\n        <th></th>\r\n    </tr>\r\n    </thead>\r\n    <tbody *ngIf=\"error\">\r\n    <tr>\r\n        <td colspan=\"7\">\r\n            <div class=\"alert alert-danger\"><strong>Error:</strong> {{error}}</div>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n    <tbody *ngIf=\"!error\">\r\n    <tr *ngFor=\"let item of dataList; let i = index;\">\r\n        <td>{{i + 1}}</td>\r\n        <td>{{item.firstName}}</td>\r\n        <td>{{item.lastName}}</td>\r\n        <td>{{item.createdAt | date:'shortDate'}}</td>\r\n        <td>{{item.parcelType}}</td>\r\n        <td>{{item.parcelPostService}}</td>\r\n        <td>...</td>\r\n        <td>{{item.numberPieces}}</td>\r\n        <td>{{item.status}}</td>\r\n        <!--<td>-->\r\n            <!--<template [ngIf]=\"item.status == 'Picked up'\">-->\r\n                <!--<span class=\"label label-primary\">{{item.status}}</span>-->\r\n            <!--</template>-->\r\n            <!--<template [ngIf]=\"item.status == 'Received'\">-->\r\n                <!--<span class=\"label label-info\">{{item.status}}</span>-->\r\n            <!--</template>-->\r\n        <!--</td>-->\r\n        <td>\r\n            <adding-form [title]=\"'<i class=\\'fa fa-paste\\'></i>Edit'\" [editMode]=\"true\" [editItemIndex]=\"i\" [parselItem]=\"item\" (onSubmit)=\"editParselItem($event.index, $event.item)\"></adding-form>\r\n            <div class=\"btn-group\">\r\n                <button data-toggle=\"dropdown\" class=\"btn btn-default dropdown-toggle\" aria-expanded=\"false\">Action <span class=\"caret\"></span></button>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li><a href=\"#\" data-id=\"\" data-action=\"pick_up\" data-title=\"\" data-toggle=\"modal\" data-target=\"#parcel_action_modal\">Pick Up</a></li>\r\n                    <li><a href=\"#\" data-id=\"\" data-action=\"return\" data-title=\"\" data-toggle=\"modal\" data-target=\"#parcel_action_modal\">Return</a></li>\r\n                </ul>\r\n            </div>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ }),

/***/ 358:
/***/ (function(module, exports) {

	module.exports = "<div class=\"footer\">\r\n    <div class=\"pull-right\">\r\n        10GB of <strong>250GB</strong> Free.\r\n    </div>\r\n    <div>\r\n        <strong>Copyright</strong> Example Company &copy; 2014-2017\r\n    </div>\r\n</div>"

/***/ }),

/***/ 359:
/***/ (function(module, exports) {

	module.exports = "<nav class=\"navbar-default navbar-static-side\" role=\"navigation\">\r\n    <div class=\"sidebar-collapse\">\r\n        <ul class=\"nav metismenu\" id=\"side-menu\">\r\n            <li class=\"nav-header\">\r\n                <div class=\"dropdown profile-element\">\r\n                    <a data-toggle=\"dropdown\" class=\"dropdown-toggle\" href=\"#\">\r\n                        <span class=\"block m-t-xs\"> <strong class=\"font-bold\">Example user</strong> </span>\r\n                        <span class=\"text-muted text-xs block\">Example <b class=\"caret\"></b> </span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu animated fadeInRight m-t-xs\">\r\n                        <li><a href=\"#\">Logout</a></li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"logo-element\">\r\n                    IN+\r\n                </div>\r\n            </li>\r\n            <li [ngClass]=\"{active: activeRoute('mainView')}\">\r\n                <a [routerLink]=\"['./mainView']\"><i class=\"fa fa-th-large\"></i> <span class=\"nav-label\">Main view</span></a>\r\n            </li>\r\n            <li [ngClass]=\"{active: activeRoute('minorView')}\">\r\n                <a [routerLink]=\"['./minorView']\"><i class=\"fa fa-desktop\"></i> <span class=\"nav-label\">Minor view</span> </a>\r\n            </li>\r\n            <li>\r\n                <a [ngClass]=\"{active: activeRoute('parselTypeView')}\"><i class=\"fa fa-bar-chart-o\"></i> <span class=\"nav-label\">Parsels</span><span class=\"fa arrow\"></span></a>\r\n                <ul class=\"nav nav-second-level collapse\">\r\n                    <li><a [routerLink]=\"['./parselTypeView']\">Parsel Type</a></li>\r\n                    <li><a [routerLink]=\"['./postServicesView']\">Post Services</a></li>\r\n                    <li><a [routerLink]=\"['./parselsListView']\">Parsels List</a></li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ 360:
/***/ (function(module, exports) {

	module.exports = "<div class=\"row border-bottom\">\r\n    <nav class=\"navbar navbar-static-top white-bg\" role=\"navigation\" style=\"margin-bottom: 0\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"minimalize-styl-2 btn btn-primary \" (click)=\"toggleNavigation()\"><i class=\"fa fa-bars\"></i> </a>\r\n            <form role=\"search\" class=\"navbar-form-custom\" method=\"post\" action=\"#\">\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" placeholder=\"Search for something...\" class=\"form-control\" name=\"top-search\" id=\"top-search\">\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <ul class=\"nav navbar-top-links navbar-right\">\r\n            <li>\r\n                <a href=\"#\">\r\n                    <i class=\"fa fa-sign-out\"></i> Log out\r\n                </a>\r\n            </li>\r\n        </ul>\r\n\r\n    </nav>\r\n</div>"

/***/ }),

/***/ 361:
/***/ (function(module, exports) {

	module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"text-center m-t-lg\">\r\n                <h1>\r\n                    Welcome in Inspinia Angular 2 Starter Project\r\n                </h1>\r\n                <small>\r\n                    It is an application skeleton for a typical web app. You can use it to quickly bootstrap your webapp projects and dev environment.\r\n                </small>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 362:
/***/ (function(module, exports) {

	module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"text-center m-t-lg\">\r\n                <h1>\r\n                    Simple example of second view\r\n                </h1>\r\n                <small>Written as an minor-view.</small>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 363:
/***/ (function(module, exports) {

	module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n    <div class=\"col-sm-4\">\r\n        <h2>Parsel type</h2>\r\n        <ol class=\"breadcrumb\">\r\n            <li>\r\n                <a href=\"/\">This is</a>\r\n            </li>\r\n            <li class=\"active\">\r\n                <strong>Breadcrumb</strong>\r\n            </li>\r\n        </ol>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n        <div class=\"title-action\">\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"wrapper wrapper-content\" *ngIf=\"!createConditions\">\r\n    <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title\">\r\n            <div class=\"ibox-tools\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"createParselType()\">Create a Parcel Type</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"ibox-content\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <th>#</th>\r\n                    <th>Name</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let parsel of parsels; let i = index\">\r\n                    <td>{{i + 1}}</td>\r\n                    <td>{{parsel.name}}</td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"wrapper wrapper-content\" *ngIf=\"createConditions\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"ibox float-e-margins\">\r\n                <div class=\"ibox-content\">\r\n                    <form name=\"create_parcel_type\" method=\"post\" class=\"form-horizontal\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"col-sm-2 control-label required\" for=\"create_parcel_type_name\">Name</label>\r\n                            <div class=\"col-sm-10\">\r\n                                <input type=\"text\" [(ngModel)]=\"parselTypeName\" id=\"create_parcel_type_name\" name=\"create_parcel_type[name]\" class=\"form-control\" required>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-sm-2\"></div>\r\n                            <div class=\"col-sm-10\">\r\n                                <button type=\"button\"\r\n                                        id=\"create_parcel_type_submit\"\r\n                                        name=\"create_parcel_type[submit]\"\r\n                                        class=\"btn btn-primary btn\"\r\n                                        (click)=\"saveParselType({name: parselTypeName})\">Save</button>\r\n                            </div>\r\n                        </div>\r\n                        <input type=\"hidden\" id=\"create_parcel_type__token\" name=\"create_parcel_type[_token]\" value=\"xGs8fk3YBnq4jMXGY7A872y2l49d5vOjLEXKA1lWXK0\">\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 364:
/***/ (function(module, exports) {

	module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n    <div class=\"col-sm-4\">\r\n        <h2>Parsels List</h2>\r\n        <ol class=\"breadcrumb\">\r\n            <li>\r\n                <a href=\"/\">This is</a>\r\n            </li>\r\n            <li class=\"active\">\r\n                <strong>Breadcrumb</strong>\r\n            </li>\r\n        </ol>\r\n    </div>\r\n</div>\r\n<div class=\"wrapper wrapper-content parsels-list-wrapper\">\r\n    <div class=\"tabs-container\">\r\n        <ul class=\"nav nav-tabs\">\r\n            <li class=\"active\"><a data-toggle=\"tab\" href=\"#parcels-tabs-incoming\">Incoming</a></li>\r\n            <li class=\"\"><a data-toggle=\"tab\" href=\"#parcels-tabs-outgoing\">Outgoing</a></li>\r\n        </ul>\r\n        <div class=\"tab-content\">\r\n            <div id=\"parcels-tabs-incoming\" class=\"tab-pane active\">\r\n                <div class=\"panel-body\">\r\n                    <div class=\"ibox float-e-margins\">\r\n                        <div class=\"ibox-title\">\r\n                            <div class=\"ibox-tools\">\r\n                                <!-- Create Incommin Parsel form -->\r\n                                <adding-form [title]=\"'Create an Incoming Parcel'\" (onSubmit)=\"addIncomingParsel($event.item)\"></adding-form>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ibox-content\">\r\n                            <list-comp [dataList]=\"parselsList\" [error]=\"error\"></list-comp>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div id=\"parcels-tabs-outgoing\" class=\"tab-pane\">\r\n                <div class=\"panel-body\">\r\n                    <div class=\"ibox-title\">\r\n                        <div class=\"ibox-tools\">\r\n                            <a href=\"#\" class=\"btn btn-primary\">Create an Outgoing Parcel</a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ibox-content\">\r\n                        <!--<h1>NgIf Directive</h1>-->\r\n                        <!--<div *ngIf=\"conditions; then thenBlock else elseBlock\">-->\r\n                            <!--<template #thenBlock>Then block</template>-->\r\n                            <!--<template #elseBlock>Else block</template>-->\r\n                        <!--</div>-->\r\n\r\n                        <list-comp [dataList]=\"parselsList\"></list-comp>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"parcel_action_modal\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                <h4 class=\"modal-title\" id=\"parcel_action_modal_label\"></h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"alert hide\"></div>\r\n                <div class=\"custom-body\"></div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\r\n                <button type=\"button\" class=\"btn btn-primary form-submit\">Submit</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 365:
/***/ (function(module, exports) {

	module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n    <div class=\"col-sm-4\">\r\n        <h2>Post services</h2>\r\n        <ol class=\"breadcrumb\">\r\n            <li>\r\n                <a href=\"/\">This is</a>\r\n            </li>\r\n            <li class=\"active\">\r\n                <strong>Breadcrumb</strong>\r\n            </li>\r\n        </ol>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n        <div class=\"title-action\">\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"wrapper wrapper-content\" *ngIf=\"!createConditions\">\r\n    <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title\">\r\n            <div class=\"ibox-tools\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"createPostService()\">Create a Post Service</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"ibox-content\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <th>#</th>\r\n                    <th>Name</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let service of services; let i = index\">\r\n                    <td>{{i + 1}}</td>\r\n                    <td>{{service.name}}</td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"wrapper wrapper-content\" *ngIf=\"createConditions\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"ibox float-e-margins\">\r\n                <div class=\"ibox-content\">\r\n                    <form name=\"create_parcel_type\" method=\"post\" class=\"form-horizontal\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"col-sm-2 control-label required\" for=\"create_parcel_type_name\">Name</label>\r\n                            <div class=\"col-sm-10\">\r\n                                <input type=\"text\" [(ngModel)]=\"postServiceName\" id=\"create_parcel_type_name\" name=\"create_parcel_type[name]\" class=\"form-control\" required>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-sm-2\"></div>\r\n                            <div class=\"col-sm-10\">\r\n                                <button type=\"button\"\r\n                                        id=\"create_parcel_type_submit\"\r\n                                        name=\"create_parcel_type[submit]\"\r\n                                        class=\"btn btn-primary btn\"\r\n                                        (click)=\"savePostService({name: postServiceName})\">Save</button>\r\n                            </div>\r\n                        </div>\r\n                        <input type=\"hidden\" id=\"create_parcel_type__token\" name=\"create_parcel_type[_token]\" value=\"xGs8fk3YBnq4jMXGY7A872y2l49d5vOjLEXKA1lWXK0\">\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(9);
	var throw_1 = __webpack_require__(380);
	Observable_1.Observable.throw = throw_1._throw;
	//# sourceMappingURL=throw.js.map

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(9);
	var catch_1 = __webpack_require__(148);
	Observable_1.Observable.prototype.catch = catch_1._catch;
	Observable_1.Observable.prototype._catch = catch_1._catch;
	//# sourceMappingURL=catch.js.map

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(9);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ErrorObservable = (function (_super) {
	    __extends(ErrorObservable, _super);
	    function ErrorObservable(error, scheduler) {
	        _super.call(this);
	        this.error = error;
	        this.scheduler = scheduler;
	    }
	    /**
	     * Creates an Observable that emits no items to the Observer and immediately
	     * emits an error notification.
	     *
	     * <span class="informal">Just emits 'error', and nothing else.
	     * </span>
	     *
	     * <img src="./img/throw.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the error notification. It can be used for composing with other
	     * Observables, such as in a {@link mergeMap}.
	     *
	     * @example <caption>Emit the number 7, then emit an error.</caption>
	     * var result = Rx.Observable.throw(new Error('oops!')).startWith(7);
	     * result.subscribe(x => console.log(x), e => console.error(e));
	     *
	     * @example <caption>Map and flattens numbers to the sequence 'a', 'b', 'c', but throw an error for 13</caption>
	     * var interval = Rx.Observable.interval(1000);
	     * var result = interval.mergeMap(x =>
	     *   x === 13 ?
	     *     Rx.Observable.throw('Thirteens are bad') :
	     *     Rx.Observable.of('a', 'b', 'c')
	     * );
	     * result.subscribe(x => console.log(x), e => console.error(e));
	     *
	     * @see {@link create}
	     * @see {@link empty}
	     * @see {@link never}
	     * @see {@link of}
	     *
	     * @param {any} error The particular Error to pass to the error notification.
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emission of the error notification.
	     * @return {Observable} An error Observable: emits only the error notification
	     * using the given error argument.
	     * @static true
	     * @name throw
	     * @owner Observable
	     */
	    ErrorObservable.create = function (error, scheduler) {
	        return new ErrorObservable(error, scheduler);
	    };
	    ErrorObservable.dispatch = function (arg) {
	        var error = arg.error, subscriber = arg.subscriber;
	        subscriber.error(error);
	    };
	    ErrorObservable.prototype._subscribe = function (subscriber) {
	        var error = this.error;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ErrorObservable.dispatch, 0, {
	                error: error, subscriber: subscriber
	            });
	        }
	        else {
	            subscriber.error(error);
	        }
	    };
	    return ErrorObservable;
	}(Observable_1.Observable));
	exports.ErrorObservable = ErrorObservable;
	//# sourceMappingURL=ErrorObservable.js.map

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var ErrorObservable_1 = __webpack_require__(375);
	exports._throw = ErrorObservable_1.ErrorObservable.create;
	//# sourceMappingURL=throw.js.map

/***/ })

});
//# sourceMappingURL=main.map