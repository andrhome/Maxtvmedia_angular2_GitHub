webpackJsonp([2],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(95);
	var app_module_1 = __webpack_require__(155);
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
	// Assign polyfill
	if (!Object.assign) {
	    Object.defineProperty(Object, 'assign', {
	        enumerable: false,
	        configurable: true,
	        writable: true,
	        value: function (target, firstSource) {
	            'use strict';
	            if (target === undefined || target === null) {
	                throw new TypeError('Cannot convert first argument to object');
	            }
	            var to = Object(target);
	            for (var i = 1; i < arguments.length; i++) {
	                var nextSource = arguments[i];
	                if (nextSource === undefined || nextSource === null) {
	                    continue;
	                }
	                var keysArray = Object.keys(Object(nextSource));
	                for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
	                    var nextKey = keysArray[nextIndex];
	                    var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
	                    if (desc !== undefined && desc.enumerable) {
	                        to[nextKey] = nextSource[nextKey];
	                    }
	                }
	            }
	            return to;
	        }
	    });
	}
	

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
	var core_1 = __webpack_require__(3);
	var mainViewComponent = (function () {
	    function mainViewComponent() {
	    }
	    mainViewComponent = __decorate([
	        core_1.Component({
	            selector: 'mianView',
	            template: __webpack_require__(357)
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
	var core_1 = __webpack_require__(3);
	var minorViewComponent = (function () {
	    function minorViewComponent() {
	    }
	    minorViewComponent = __decorate([
	        core_1.Component({
	            selector: 'minorView',
	            template: __webpack_require__(358)
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
	var core_1 = __webpack_require__(3);
	var get_http_service_1 = __webpack_require__(103);
	var parsel_type_1 = __webpack_require__(167);
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
	            template: __webpack_require__(359),
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
	var core_1 = __webpack_require__(3);
	var parsels_list_1 = __webpack_require__(170);
	var CreateIncomingParselComponent = (function () {
	    function CreateIncomingParselComponent() {
	        this.onChanged = new core_1.EventEmitter();
	    }
	    CreateIncomingParselComponent.prototype.ngOnInit = function () {
	        jQuery(document).ready(function () {
	            // Select2 init
	            // jQuery('.select2').select2({allowClear: true});
	        });
	    };
	    CreateIncomingParselComponent.prototype.editIncomingFunc = function () {
	        this.onChanged.emit();
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', (typeof (_a = typeof parsels_list_1.ParselsList !== 'undefined' && parsels_list_1.ParselsList) === 'function' && _a) || Object)
	    ], CreateIncomingParselComponent.prototype, "dataParsel", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], CreateIncomingParselComponent.prototype, "onChanged", void 0);
	    CreateIncomingParselComponent = __decorate([
	        core_1.Component({
	            selector: 'create-incoming-parsel',
	            template: __webpack_require__(360)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CreateIncomingParselComponent);
	    return CreateIncomingParselComponent;
	    var _a;
	}());
	exports.CreateIncomingParselComponent = CreateIncomingParselComponent;
	

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
	var parsels_list_http_service_1 = __webpack_require__(168);
	var ParselsListComponent = (function () {
	    function ParselsListComponent(http) {
	        this.http = http;
	        this.parselsList = [];
	        this.initParselsList = function () {
	            var _this = this;
	            this.http.getData().subscribe(function (data) { return _this.parselsList = data; }, function (error) { _this.error = error; console.log(error); });
	        };
	    }
	    ParselsListComponent.prototype.ngOnInit = function () {
	        this.initParselsList();
	    };
	    // Adding new parsel
	    // addIncomingParsel(recepient: string, deliveredby: string, pieces: [number, string]) {
	    //     let parselItem: ParselsList;
	    //     parselItem.recepient = recepient;
	    //     parselItem.received = "-";
	    //     parselItem.deliveredby = deliveredby;
	    //     parselItem.pickedup = "-";
	    //     parselItem.pieces = pieces;
	    //     parselItem.status = "Received";
	    // }
	    // Update current edit parsel
	    ParselsListComponent.prototype.setCurrentEditParsel = function (index) {
	        this.currentItem = Object.assign({}, this.parselsList.find(function (item) {
	            return item.id === index;
	        }));
	        this.editParselId = index;
	    };
	    // Save changes for current parsel
	    ParselsListComponent.prototype.editIncominParsel = function () {
	        this.parselsList[this.editParselId - 1] = this.currentItem;
	        console.log('Current Item: ', this.currentItem);
	        console.log('ParselList obj: ', this.parselsList[this.editParselId - 1]);
	    };
	    ParselsListComponent = __decorate([
	        core_1.Component({
	            selector: 'parselsListView',
	            template: __webpack_require__(361),
	            providers: [parsels_list_http_service_1.ParselsListHttpService]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof parsels_list_http_service_1.ParselsListHttpService !== 'undefined' && parsels_list_http_service_1.ParselsListHttpService) === 'function' && _a) || Object])
	    ], ParselsListComponent);
	    return ParselsListComponent;
	    var _a;
	}());
	exports.ParselsListComponent = ParselsListComponent;
	

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
	var get_http_service_1 = __webpack_require__(103);
	var post_service_1 = __webpack_require__(171);
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
	            template: __webpack_require__(362),
	            providers: [get_http_service_1.GetHttpService]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof get_http_service_1.GetHttpService !== 'undefined' && get_http_service_1.GetHttpService) === 'function' && _a) || Object])
	    ], PostServicesComponent);
	    return PostServicesComponent;
	    var _a;
	}());
	exports.PostServicesComponent = PostServicesComponent;
	

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(46);
	var app_1 = __webpack_require__(157);
	var common_1 = __webpack_require__(43);
	var platform_browser_1 = __webpack_require__(16);
	var http_1 = __webpack_require__(35);
	var app_routes_1 = __webpack_require__(156);
	var common_2 = __webpack_require__(43);
	// App views
	var main_view_module_1 = __webpack_require__(164);
	var minor_view_module_1 = __webpack_require__(165);
	var parsel_type_module_1 = __webpack_require__(166);
	var post_services_module_1 = __webpack_require__(172);
	var parsels_list_module_1 = __webpack_require__(169);
	// App modules/components
	var navigation_module_1 = __webpack_require__(161);
	var footer_module_1 = __webpack_require__(159);
	var topnavbar_module_1 = __webpack_require__(163);
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

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var main_view_component_1 = __webpack_require__(97);
	var minor_view_component_1 = __webpack_require__(98);
	var parsel_type_component_1 = __webpack_require__(99);
	var post_services_component_1 = __webpack_require__(102);
	var parsels_list_component_1 = __webpack_require__(101);
	var create_incoming_parsel_component_1 = __webpack_require__(100);
	exports.ROUTES = [
	    // Main redirect
	    { path: '', redirectTo: 'mainView', pathMatch: 'full' },
	    // App views
	    { path: 'mainView', component: main_view_component_1.mainViewComponent },
	    { path: 'minorView', component: minor_view_component_1.minorViewComponent },
	    { path: 'parselTypeView', component: parsel_type_component_1.ParselTypeComponent },
	    { path: 'postServicesView', component: post_services_component_1.PostServicesComponent },
	    { path: 'parselsListView', component: parsels_list_component_1.ParselsListComponent },
	    { path: 'create-incoming-parsel', component: create_incoming_parsel_component_1.CreateIncomingParselComponent },
	    // Handle all other routes
	    { path: '**', component: main_view_component_1.mainViewComponent }
	];
	

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
	var app_helpers_1 = __webpack_require__(96);
	// Core vendor styles
	__webpack_require__(348);
	__webpack_require__(349);
	__webpack_require__(347);
	// Main Inspinia CSS files
	__webpack_require__(350);
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
	            template: __webpack_require__(353),
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;
	

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
	var core_1 = __webpack_require__(3);
	var FooterComponent = (function () {
	    function FooterComponent() {
	    }
	    FooterComponent = __decorate([
	        core_1.Component({
	            selector: 'footer',
	            template: __webpack_require__(354)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FooterComponent);
	    return FooterComponent;
	}());
	exports.FooterComponent = FooterComponent;
	

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
	var platform_browser_1 = __webpack_require__(16);
	var footer_component_ts_1 = __webpack_require__(158);
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
	            template: __webpack_require__(355)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
	    ], NavigationComponent);
	    return NavigationComponent;
	    var _a;
	}());
	exports.NavigationComponent = NavigationComponent;
	

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
	var platform_browser_1 = __webpack_require__(16);
	var router_1 = __webpack_require__(46);
	var navigation_component_ts_1 = __webpack_require__(160);
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
	            template: __webpack_require__(356)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TopnavbarComponent);
	    return TopnavbarComponent;
	}());
	exports.TopnavbarComponent = TopnavbarComponent;
	

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
	var platform_browser_1 = __webpack_require__(16);
	var topnavbar_component_ts_1 = __webpack_require__(162);
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
	var forms_1 = __webpack_require__(54);
	var parsel_type_component_1 = __webpack_require__(99);
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

/***/ 167:
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
	var http_1 = __webpack_require__(35);
	var Observable_1 = __webpack_require__(9);
	__webpack_require__(140);
	__webpack_require__(369);
	__webpack_require__(368);
	var ParselsListHttpService = (function () {
	    function ParselsListHttpService(http) {
	        this.http = http;
	    }
	    ParselsListHttpService.prototype.getData = function () {
	        return this.http.get('parsels-list.json')
	            .map(function (resp) { return resp.json(); })
	            .catch(function (error) { return Observable_1.Observable.throw(error); });
	    };
	    ParselsListHttpService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], ParselsListHttpService);
	    return ParselsListHttpService;
	    var _a;
	}());
	exports.ParselsListHttpService = ParselsListHttpService;
	

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
	var common_1 = __webpack_require__(43);
	var platform_browser_1 = __webpack_require__(16);
	var forms_1 = __webpack_require__(54);
	var parsels_list_component_1 = __webpack_require__(101);
	var http_1 = __webpack_require__(35);
	var router_1 = __webpack_require__(46);
	var create_incoming_parsel_component_1 = __webpack_require__(100);
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
	            declarations: [parsels_list_component_1.ParselsListComponent, create_incoming_parsel_component_1.CreateIncomingParselComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ParselsListModule);
	    return ParselsListModule;
	}());
	exports.ParselsListModule = ParselsListModule;
	

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

	// export class ParselsList {
	//     constructor(
	//         recepient: string,
	//         receivedDate: string,
	//         receivedFrom: string,
	//         pickedUpDate: string,
	//         pieces: [number, string],
	//         status: string
	//     ) { }
	// }
	// export class ParselsList {
	//     constructor(parselBlock: Object) {
	//         return parselBlock;
	//     }
	// }
	"use strict";


/***/ }),

/***/ 171:
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

/***/ 172:
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
	var post_services_component_1 = __webpack_require__(102);
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

/***/ 347:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

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

/***/ 353:
/***/ (function(module, exports) {

	module.exports = "<!-- Wrapper-->\n<div id=\"wrapper\">\n\n    <!-- Left navigation bar -->\n    <navigation></navigation>\n\n    <!-- Main page wrapper -->\n    <div id=\"page-wrapper\" class=\"gray-bg\">\n\n        <!-- Top navigation -->\n        <topnavbar></topnavbar>\n\n        <!-- Main view/routes wrapper-->\n        <router-outlet></router-outlet>\n\n        <!-- Footer -->\n        <footer></footer>\n\n    </div>\n    <!-- End page wrapper-->\n\n</div>\n<!-- End wrapper-->\n"

/***/ }),

/***/ 354:
/***/ (function(module, exports) {

	module.exports = "<div class=\"footer\">\n    <div class=\"pull-right\">\n        10GB of <strong>250GB</strong> Free.\n    </div>\n    <div>\n        <strong>Copyright</strong> Example Company &copy; 2014-2017\n    </div>\n</div>"

/***/ }),

/***/ 355:
/***/ (function(module, exports) {

	module.exports = "<nav class=\"navbar-default navbar-static-side\" role=\"navigation\">\n    <div class=\"sidebar-collapse\">\n        <ul class=\"nav metismenu\" id=\"side-menu\">\n            <li class=\"nav-header\">\n                <div class=\"dropdown profile-element\">\n                    <a data-toggle=\"dropdown\" class=\"dropdown-toggle\" href=\"#\">\n                        <span class=\"block m-t-xs\"> <strong class=\"font-bold\">Example user</strong> </span>\n                        <span class=\"text-muted text-xs block\">Example <b class=\"caret\"></b> </span>\n                    </a>\n                    <ul class=\"dropdown-menu animated fadeInRight m-t-xs\">\n                        <li><a href=\"#\">Logout</a></li>\n                    </ul>\n                </div>\n                <div class=\"logo-element\">\n                    IN+\n                </div>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('mainView')}\">\n                <a [routerLink]=\"['./mainView']\"><i class=\"fa fa-th-large\"></i> <span class=\"nav-label\">Main view</span></a>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('minorView')}\">\n                <a [routerLink]=\"['./minorView']\"><i class=\"fa fa-desktop\"></i> <span class=\"nav-label\">Minor view</span> </a>\n            </li>\n            <li>\n                <a [ngClass]=\"{active: activeRoute('parselTypeView')}\"><i class=\"fa fa-bar-chart-o\"></i> <span class=\"nav-label\">Parsels</span><span class=\"fa arrow\"></span></a>\n                <ul class=\"nav nav-second-level collapse\">\n                    <li><a [routerLink]=\"['./parselTypeView']\">Parsel Type</a></li>\n                    <li><a [routerLink]=\"['./postServicesView']\">Post Services</a></li>\n                    <li><a [routerLink]=\"['./parselsListView']\">Parsels List</a></li>\n                </ul>\n            </li>\n        </ul>\n    </div>\n</nav>\n"

/***/ }),

/***/ 356:
/***/ (function(module, exports) {

	module.exports = "<div class=\"row border-bottom\">\n    <nav class=\"navbar navbar-static-top white-bg\" role=\"navigation\" style=\"margin-bottom: 0\">\n        <div class=\"navbar-header\">\n            <a class=\"minimalize-styl-2 btn btn-primary \" (click)=\"toggleNavigation()\"><i class=\"fa fa-bars\"></i> </a>\n            <form role=\"search\" class=\"navbar-form-custom\" method=\"post\" action=\"#\">\n                <div class=\"form-group\">\n                    <input type=\"text\" placeholder=\"Search for something...\" class=\"form-control\" name=\"top-search\" id=\"top-search\">\n                </div>\n            </form>\n        </div>\n        <ul class=\"nav navbar-top-links navbar-right\">\n            <li>\n                <a href=\"#\">\n                    <i class=\"fa fa-sign-out\"></i> Log out\n                </a>\n            </li>\n        </ul>\n\n    </nav>\n</div>"

/***/ }),

/***/ 357:
/***/ (function(module, exports) {

	module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"text-center m-t-lg\">\n                <h1>\n                    Welcome in Inspinia Angular 2 Starter Project\n                </h1>\n                <small>\n                    It is an application skeleton for a typical web app. You can use it to quickly bootstrap your webapp projects and dev environment.\n                </small>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 358:
/***/ (function(module, exports) {

	module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"text-center m-t-lg\">\n                <h1>\n                    Simple example of second view\n                </h1>\n                <small>Written as an minor-view.</small>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 359:
/***/ (function(module, exports) {

	module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-sm-4\">\n        <h2>Parsel type</h2>\n        <ol class=\"breadcrumb\">\n            <li>\n                <a href=\"/\">This is</a>\n            </li>\n            <li class=\"active\">\n                <strong>Breadcrumb</strong>\n            </li>\n        </ol>\n    </div>\n    <div class=\"col-sm-8\">\n        <div class=\"title-action\">\n\n        </div>\n    </div>\n</div>\n<div class=\"wrapper wrapper-content\" *ngIf=\"!createConditions\">\n    <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n            <div class=\"ibox-tools\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"createParselType()\">Create a Parcel Type</button>\n            </div>\n        </div>\n        <div class=\"ibox-content\">\n            <table class=\"table\">\n                <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Name</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let parsel of parsels; let i = index\">\n                    <td>{{i + 1}}</td>\n                    <td>{{parsel.name}}</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n<div class=\"wrapper wrapper-content\" *ngIf=\"createConditions\">\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-content\">\n                    <form name=\"create_parcel_type\" method=\"post\" class=\"form-horizontal\">\n                        <div class=\"form-group\">\n                            <label class=\"col-sm-2 control-label required\" for=\"create_parcel_type_name\">Name</label>\n                            <div class=\"col-sm-10\">\n                                <input type=\"text\" [(ngModel)]=\"parselTypeName\" id=\"create_parcel_type_name\" name=\"create_parcel_type[name]\" class=\"form-control\" required>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-2\"></div>\n                            <div class=\"col-sm-10\">\n                                <button type=\"button\"\n                                        id=\"create_parcel_type_submit\"\n                                        name=\"create_parcel_type[submit]\"\n                                        class=\"btn btn-primary btn\"\n                                        (click)=\"saveParselType({name: parselTypeName})\">Save</button>\n                            </div>\n                        </div>\n                        <input type=\"hidden\" id=\"create_parcel_type__token\" name=\"create_parcel_type[_token]\" value=\"xGs8fk3YBnq4jMXGY7A872y2l49d5vOjLEXKA1lWXK0\">\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ 360:
/***/ (function(module, exports) {

	module.exports = "<!-- Modal window for creating the new parsel -->\n<div class=\"modal fade\" id=\"createIncominModal\" *ngIf=\"!dataParsel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                <h4 class=\"modal-title\"></h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"wrapper wrapper-content\">\n                    <div class=\"ibox float-e-margins\">\n                        <div class=\"ibox-content\">\n                            <form name=\"create_parcel\" method=\"\" class=\"form-horizontal\">\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label required\" for=\"parcel-building\">Building</label>\n                                    <div class=\"col-sm-10\">\n                                        <select id=\"parcel-building\" name=\"create_parcel[building]\" class=\"form-control\">\n                                            <option value=\"1\">B1</option>\n                                            <option value=\"2\">B2</option>\n                                            <option value=\"3\">B3</option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label required\" for=\"parcel-suite\">Suite</label>\n                                    <div class=\"col-sm-10\">\n                                        <select id=\"parcel-suite\" name=\"create_parcel[suite]\" class=\"form-control select2\">\n                                            <option value=\"1\">1000</option>\n                                            <option value=\"2\">1001</option>\n                                            <option value=\"3\">1002</option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label required\" for=\"parcel-resident\">Recepient</label>\n                                    <div class=\"col-sm-10\">\n                                        <select id=\"parcel-resident\" name=\"create_parcel[resident]\" class=\"form-control\" [(ngModel)]=\"recepient\">\n                                            <option value=\"Vin Diesel\">Vin Diesel</option>\n                                            <option value=\"Jenifer Lopez\">Jenifer Lopez</option>\n                                            <option value=\"Will Smith\">Will Smith</option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label required\" for=\"create_parcel_parcelPostService\">Delivered by</label>\n                                    <div class=\"col-sm-10\">\n                                        <select id=\"create_parcel_parcelPostService\" name=\"create_parcel[suite]\" class=\"form-control\" [(ngModel)]=\"deliveredby\">\n                                            <option value=\"DHL\">DHL</option>\n                                            <option value=\"SDN\">SDN</option>\n                                            <option value=\"MVC\">MVC</option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\" for=\"create_parcel_numberPieces\">Pieces</label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"text\" id=\"create_parcel_numberPieces\" name=\"create_parcel[numberPieces]\" class=\"form-control\" [(ngModel)]=\"pieces\">\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label required\" for=\"create_parcel_parcelType\">Parcel type</label>\n                                    <div class=\"col-sm-10\">\n                                        <select id=\"create_parcel_parcelType\" name=\"create_parcel[parcelType]\" class=\"form-control\">\n                                            <option value=\"1\">Letter</option>\n                                            <option value=\"2\">Package</option>\n                                            <option value=\"3\">Medication</option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\" for=\"create_parcel_deliveryAddress\">Delivery address</label>\n                                    <div class=\"col-sm-10\">\n                                        <textarea id=\"create_parcel_deliveryAddress\" name=\"create_parcel[deliveryAddress]\" class=\"form-control\"></textarea>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\" for=\"create_parcel_notes\">Notes</label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"text\" id=\"create_parcel_notes\" name=\"create_parcel[notes]\" class=\"form-control\">\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\" for=\"create_parcel_description\">Description</label>\n                                    <div class=\"col-sm-10\">\n                                        <textarea id=\"create_parcel_description\" name=\"create_parcel[description]\" class=\"form-control\"></textarea>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"col-sm-2\"></div>\n                                    <div class=\"col-sm-10\">\n                                        <button type=\"button\"\n                                                id=\"create_parcel_submit\"\n                                                name=\"create_parcel[submit]\"\n                                                class=\"btn btn-primary btn\"\n                                                data-dismiss=\"modal\" aria-label=\"Close\"\n                                                (click)=\"addIncomingParsel(recepient, deliveredby, pieces)\">Save</button>\n                                    </div>\n                                </div>\n                                <input type=\"hidden\" id=\"create_parcel__token\" name=\"create_parcel[_token]\">\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Modal window for editing the current parsel -->\n<div class=\"modal fade\" id=\"editIncominModal\" *ngIf=\"dataParsel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                <h4 class=\"modal-title\"></h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"wrapper wrapper-content\">\n                    <div class=\"ibox float-e-margins\">\n                        <div class=\"ibox-content\">\n                            <form name=\"create_parcel\" method=\"\" class=\"form-horizontal\">\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label required\" for=\"parcel-building_edit\">Building</label>\n                                    <div class=\"col-sm-10\">\n                                        <select id=\"parcel-building_edit\" name=\"create_parcel[building]\" class=\"form-control\">\n                                            <option value=\"1\">B1</option>\n                                            <option value=\"2\">B2</option>\n                                            <option value=\"3\">B3</option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label required\" for=\"parcel-suite_edit\">Suite</label>\n                                    <div class=\"col-sm-10\">\n                                        <select id=\"parcel-suite_edit\" name=\"create_parcel[suite]\" class=\"form-control select2\">\n                                            <option value=\"1\">1000</option>\n                                            <option value=\"2\">1001</option>\n                                            <option value=\"3\">1002</option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label required\" for=\"parcel-resident_edit\">Recepient</label>\n                                    <div class=\"col-sm-10\">\n                                        <select id=\"parcel-resident_edit\" name=\"create_parcel[resident]\" class=\"form-control\" [(ngModel)]=\"dataParsel.recepient\">\n                                            <option value=\"Vin Diesel\">Vin Diesel</option>\n                                            <option value=\"Jenifer Lopez\">Jenifer Lopez</option>\n                                            <option value=\"Will Smith\">Will Smith</option>\n                                            <option value=\"Ava Anderson1\">Ava Anderson1</option>\n                                            <option value=\"Ava Anderson2\">Ava Anderson2</option>\n                                            <option value=\"Ava Anderson3\">Ava Anderson3</option>\n                                            <option value=\"Ava Anderson4\">Ava Anderson4</option>\n                                            <option value=\"Ava Anderson5\">Ava Anderson5</option>\n                                            <option value=\"Ava Anderson6\">Ava Anderson6</option>\n                                            <option value=\"Ava Anderson7\">Ava Anderson7</option>\n                                            <option value=\"Ava Anderson8\">Ava Anderson8</option>\n                                            <option value=\"Ava Anderson9\">Ava Anderson9</option>\n                                            <option value=\"Ava Anderson10\">Ava Anderson10</option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label required\" for=\"create_parcel_parcelPostService_edit\">Delivered by</label>\n                                    <div class=\"col-sm-10\">\n                                        <select id=\"create_parcel_parcelPostService_edit\" name=\"create_parcel[suite]\" class=\"form-control\" [(ngModel)]=\"dataParsel.deliveredby\">\n                                            <option value=\"DHL\">DHL</option>\n                                            <option value=\"SDN\">SDN</option>\n                                            <option value=\"MVC\">MVC</option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\" for=\"create_parcel_numberPieces_edit\">Pieces</label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"text\" id=\"create_parcel_numberPieces_edit\" name=\"create_parcel[numberPieces]\" class=\"form-control\" [(ngModel)]=\"dataParsel.pieces\">\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label required\" for=\"create_parcel_parcelType_edit\">Parcel type</label>\n                                    <div class=\"col-sm-10\">\n                                        <select id=\"create_parcel_parcelType_edit\" name=\"create_parcel[parcelType]\" class=\"form-control\">\n                                            <option value=\"1\">Letter</option>\n                                            <option value=\"2\">Package</option>\n                                            <option value=\"3\">Medication</option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\" for=\"create_parcel_deliveryAddress_edit\">Delivery address</label>\n                                    <div class=\"col-sm-10\">\n                                        <textarea id=\"create_parcel_deliveryAddress_edit\" name=\"create_parcel[deliveryAddress]\" class=\"form-control\"></textarea>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\" for=\"create_parcel_notes_edit\">Notes</label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"text\" id=\"create_parcel_notes_edit\" name=\"create_parcel[notes]\" class=\"form-control\">\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\" for=\"create_parcel_description_edit\">Description</label>\n                                    <div class=\"col-sm-10\">\n                                        <textarea id=\"create_parcel_description_edit\" name=\"create_parcel[description]\" class=\"form-control\"></textarea>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"col-sm-2\"></div>\n                                    <div class=\"col-sm-10\">\n                                        <button type=\"button\"\n                                                id=\"create_parcel_edit\"\n                                                name=\"create_parcel[submit]\"\n                                                class=\"btn btn-primary btn\"\n                                                data-dismiss=\"modal\" aria-label=\"Close\"\n                                                (click)=\"editIncomingFunc()\">Edit</button>\n                                    </div>\n                                </div>\n                                <input type=\"hidden\" id=\"create_parcel__token_edit\" name=\"create_parcel[_token]\">\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 361:
/***/ (function(module, exports) {

	module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-sm-4\">\n        <h2>Parsels List</h2>\n        <ol class=\"breadcrumb\">\n            <li>\n                <a href=\"/\">This is</a>\n            </li>\n            <li class=\"active\">\n                <strong>Breadcrumb</strong>\n            </li>\n        </ol>\n    </div>\n</div>\n<div class=\"wrapper wrapper-content\">\n    <div class=\"tabs-container\">\n        <ul class=\"nav nav-tabs\">\n            <li class=\"active\"><a data-toggle=\"tab\" href=\"#parcels-tabs-incoming\">Incoming</a></li>\n            <li class=\"\"><a data-toggle=\"tab\" href=\"#parcels-tabs-outgoing\">Outgoing</a></li>\n        </ul>\n        <div class=\"tab-content\">\n            <div id=\"parcels-tabs-incoming\" class=\"tab-pane active\">\n                <div class=\"panel-body\">\n                    <div class=\"ibox float-e-margins\">\n                        <div class=\"ibox-title\">\n                            <div class=\"ibox-tools\">\n                                <a href=\"#\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#createIncominModal\">Create an Incoming Parcel</a>\n                            </div>\n                        </div>\n                        <div class=\"ibox-content\">\n                            <table class=\"table\">\n                                <thead>\n                                <tr>\n                                    <th>#</th>\n                                    <th>Recepient</th>\n                                    <th>Received</th>\n                                    <th>Delivered by</th>\n                                    <th>Picked up</th>\n                                    <th>Pieces</th>\n                                    <th>Status</th>\n                                    <th></th>\n                                </tr>\n                                </thead>\n                                <tbody *ngIf=\"error\">\n                                    <tr>\n                                        <td colspan=\"7\">\n                                            <div class=\"alert alert-danger\"><strong>Error:</strong> {{error}}</div>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                                <tbody *ngIf=\"!error\">\n                                    <tr *ngFor=\"let parselItem of parselsList; let i = index;\">\n                                        <td>{{i + 1}}</td>\n                                        <td>{{parselItem.recepient}}</td>\n                                        <td>{{parselItem.received}}</td>\n                                        <td>{{parselItem.deliveredby}}</td>\n                                        <td>{{parselItem.pickedup}}</td>\n                                        <td>{{parselItem.pieces}}</td>\n                                        <td>\n                                            <template [ngIf]=\"parselItem.status == 'Picked up'\">\n                                                <span class=\"label label-primary\">{{parselItem.status}}</span>\n                                            </template>\n                                            <template [ngIf]=\"parselItem.status == 'Received'\">\n                                                <span class=\"label label-info\">{{parselItem.status}}</span>\n                                            </template>\n                                        </td>\n                                        <td>\n                                            <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#editIncominModal\" (click)=\"setCurrentEditParsel(parselItem.id)\"><i class=\"fa fa-paste\"></i>Edit</button>\n                                            <div class=\"btn-group\">\n                                                <button data-toggle=\"dropdown\" class=\"btn btn-default dropdown-toggle\" aria-expanded=\"false\">Action <span class=\"caret\"></span></button>\n                                                <ul class=\"dropdown-menu\">\n                                                    <li><a href=\"#\" data-id=\"\" data-action=\"pick_up\" data-title=\"\" data-toggle=\"modal\" data-target=\"#parcel_action_modal\">Pick Up</a></li>\n                                                    <li><a href=\"#\" data-id=\"\" data-action=\"return\" data-title=\"\" data-toggle=\"modal\" data-target=\"#parcel_action_modal\">Return</a></li>\n                                                </ul>\n                                            </div>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div id=\"parcels-tabs-outgoing\" class=\"tab-pane\">\n                <div class=\"panel-body\">\n                    <div class=\"ibox-title\">\n                        <div class=\"ibox-tools\">\n                            <a href=\"#\" class=\"btn btn-primary\">Create an Outgoing Parcel</a>\n                        </div>\n                    </div>\n                    <div class=\"ibox-content\">\n                        <!--<h1>NgIf Directive</h1>-->\n                        <!--<div *ngIf=\"conditions; then thenBlock else elseBlock\">-->\n                            <!--<template #thenBlock>Then block</template>-->\n                            <!--<template #elseBlock>Else block</template>-->\n                        <!--</div>-->\n\n                        <table class=\"table\">\n                            <thead>\n                                <tr>\n                                    <th>#</th>\n                                    <th>Recepient</th>\n                                    <th>Received</th>\n                                    <th>Delivered by</th>\n                                    <th>Picked up</th>\n                                    <th>Pieces</th>\n                                    <th>Status</th>\n                                    <th></th>\n                                </tr>\n                            </thead>\n                            <tbody *ngIf=\"error\">\n                                <tr>\n                                    <td colspan=\"7\">\n                                        <div class=\"alert alert-danger\"><strong>Error:</strong> {{error}}</div>\n                                    </td>\n                                </tr>\n                            </tbody>\n                            <tbody *ngIf=\"!error\">\n                                <tr *ngFor=\"let parselItem of parselsList; let i = index;\">\n                                    <td>{{i + 1}}</td>\n                                    <td>{{parselItem.recepient}}</td>\n                                    <td>{{parselItem.received}}</td>\n                                    <td>{{parselItem.deliveredby}}</td>\n                                    <td>{{parselItem.pickedup}}</td>\n                                    <td>{{parselItem.pieces}}</td>\n                                    <td>\n                                        <template [ngIf]=\"parselItem.status == 'Picked up'\">\n                                            <span class=\"label label-primary\">{{parselItem.status}}</span>\n                                        </template>\n                                        <template [ngIf]=\"parselItem.status == 'Received'\">\n                                            <span class=\"label label-info\">{{parselItem.status}}</span>\n                                        </template>\n                                    </td>\n                                    <td>\n                                        <button type=\"button\" class=\"btn btn-info\"><i class=\"fa fa-paste\"></i>Edit</button>\n                                        <div class=\"btn-group\">\n                                            <button data-toggle=\"dropdown\" class=\"btn btn-default dropdown-toggle\" aria-expanded=\"false\">Action <span class=\"caret\"></span></button>\n                                            <ul class=\"dropdown-menu\">\n                                                <li><a href=\"#\" data-id=\"\" data-action=\"pick_up\" data-title=\"\" data-toggle=\"modal\" data-target=\"#parcel_action_modal\">Pick Up</a></li>\n                                                <li><a href=\"#\" data-id=\"\" data-action=\"return\" data-title=\"\" data-toggle=\"modal\" data-target=\"#parcel_action_modal\">Return</a></li>\n                                            </ul>\n                                        </div>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Create Incommin Parsel modal -->\n<create-incoming-parsel [dataParsel]=\"currentItem\" (onChanged)=\"editIncominParsel()\"></create-incoming-parsel>\n\n<div class=\"modal fade\" id=\"parcel_action_modal\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                <h4 class=\"modal-title\" id=\"parcel_action_modal_label\"></h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"alert hide\"></div>\n                <div class=\"custom-body\"></div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n                <button type=\"button\" class=\"btn btn-primary form-submit\">Submit</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ 362:
/***/ (function(module, exports) {

	module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-sm-4\">\n        <h2>Post services</h2>\n        <ol class=\"breadcrumb\">\n            <li>\n                <a href=\"/\">This is</a>\n            </li>\n            <li class=\"active\">\n                <strong>Breadcrumb</strong>\n            </li>\n        </ol>\n    </div>\n    <div class=\"col-sm-8\">\n        <div class=\"title-action\">\n\n        </div>\n    </div>\n</div>\n<div class=\"wrapper wrapper-content\" *ngIf=\"!createConditions\">\n    <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n            <div class=\"ibox-tools\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"createPostService()\">Create a Post Service</button>\n            </div>\n        </div>\n        <div class=\"ibox-content\">\n            <table class=\"table\">\n                <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Name</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let service of services; let i = index\">\n                    <td>{{i + 1}}</td>\n                    <td>{{service.name}}</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n<div class=\"wrapper wrapper-content\" *ngIf=\"createConditions\">\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-content\">\n                    <form name=\"create_parcel_type\" method=\"post\" class=\"form-horizontal\">\n                        <div class=\"form-group\">\n                            <label class=\"col-sm-2 control-label required\" for=\"create_parcel_type_name\">Name</label>\n                            <div class=\"col-sm-10\">\n                                <input type=\"text\" [(ngModel)]=\"postServiceName\" id=\"create_parcel_type_name\" name=\"create_parcel_type[name]\" class=\"form-control\" required>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-2\"></div>\n                            <div class=\"col-sm-10\">\n                                <button type=\"button\"\n                                        id=\"create_parcel_type_submit\"\n                                        name=\"create_parcel_type[submit]\"\n                                        class=\"btn btn-primary btn\"\n                                        (click)=\"savePostService({name: postServiceName})\">Save</button>\n                            </div>\n                        </div>\n                        <input type=\"hidden\" id=\"create_parcel_type__token\" name=\"create_parcel_type[_token]\" value=\"xGs8fk3YBnq4jMXGY7A872y2l49d5vOjLEXKA1lWXK0\">\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(9);
	var throw_1 = __webpack_require__(377);
	Observable_1.Observable.throw = throw_1._throw;
	//# sourceMappingURL=throw.js.map

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(9);
	var catch_1 = __webpack_require__(146);
	Observable_1.Observable.prototype.catch = catch_1._catch;
	Observable_1.Observable.prototype._catch = catch_1._catch;
	//# sourceMappingURL=catch.js.map

/***/ }),

/***/ 372:
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

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var ErrorObservable_1 = __webpack_require__(372);
	exports._throw = ErrorObservable_1.ErrorObservable.create;
	//# sourceMappingURL=throw.js.map

/***/ })

});
//# sourceMappingURL=main.map