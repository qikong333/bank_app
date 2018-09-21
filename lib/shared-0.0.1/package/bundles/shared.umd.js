(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common/http'), require('@angular/forms'), require('@angular/common'), require('@ionic/angular')) :
    typeof define === 'function' && define.amd ? define('shared', ['exports', '@angular/core', '@angular/router', '@angular/common/http', '@angular/forms', '@angular/common', '@ionic/angular'], factory) :
    (factory((global.shared = {}),global.ng.core,global.ng.router,global.ng.common.http,global.ng.forms,global.ng.common,null));
}(this, (function (exports,i0,router,http,forms,common,angular) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SharedService = /** @class */ (function () {
        function SharedService() {
        }
        SharedService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        SharedService.ctorParameters = function () { return []; };
        /** @nocollapse */ SharedService.ngInjectableDef = i0.defineInjectable({ factory: function SharedService_Factory() { return new SharedService(); }, token: SharedService, providedIn: "root" });
        return SharedService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SharedComponent = /** @class */ (function () {
        function SharedComponent() {
        }
        /**
         * @return {?}
         */
        SharedComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SharedComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-shared',
                        template: "\n    <p>\n      shared works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        SharedComponent.ctorParameters = function () { return []; };
        return SharedComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CItemComponent = /** @class */ (function () {
        function CItemComponent() {
            this.do = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        CItemComponent.prototype.clickHandle = /**
         * @return {?}
         */
            function () {
                this.do.emit(this.item);
            };
        /**
         * @return {?}
         */
        CItemComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
            };
        CItemComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'c-item',
                        template: "<ion-item detail (click)=\"clickHandle()\">\n  <ion-avatar slot=\"start\">\n      <img [src]=\"imgUrl\">\n  </ion-avatar>\n  {{label}}\n</ion-item>"
                    },] },
        ];
        /** @nocollapse */
        CItemComponent.ctorParameters = function () { return []; };
        CItemComponent.propDecorators = {
            item: [{ type: i0.Input, args: ['item',] }],
            imgUrl: [{ type: i0.Input, args: ['imgUrl',] }],
            label: [{ type: i0.Input, args: ['label',] }],
            do: [{ type: i0.Output }]
        };
        return CItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CMenuComponent = /** @class */ (function () {
        function CMenuComponent() {
            this.goNext = new i0.EventEmitter();
        }
        /**
         * @param {?} path
         * @return {?}
         */
        CMenuComponent.prototype.next = /**
         * @param {?} path
         * @return {?}
         */
            function (path) {
                this.goNext.emit(path);
            };
        CMenuComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'c-menu',
                        template: "<ion-item (click)=\"next(info.extension)\" mode=\"ios\" class=\"c-menu\">\n  <ion-card class=\"menu-card\">\n    <ion-card-header>\n      <ion-item detail=\"false\" lines=\"none\" button>\n        <ion-avatar slot=\"start\">\n          <img [src]=\"info.memo\" alt=\"Speaker profile pic\">\n        </ion-avatar>\n        {{info.name}}\n      </ion-item>\n    </ion-card-header>\n  </ion-card>\n</ion-item>\n",
                        styles: [".c-menu .menu-card{width:100%;margin-top:15px;margin-bottom:15px;background:#e3ecf3!important;border-radius:2px;box-shadow:none;display:flex;flex-direction:column}"]
                    },] },
        ];
        /** @nocollapse */
        CMenuComponent.ctorParameters = function () { return []; };
        CMenuComponent.propDecorators = {
            info: [{ type: i0.Input, args: ['data',] }],
            goNext: [{ type: i0.Output }]
        };
        return CMenuComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NamedOutletDirective = /** @class */ (function () {
        function NamedOutletDirective(parentContexts, location, resolver, changeDetector) {
            this.parentContexts = parentContexts;
            this.location = location;
            this.resolver = resolver;
            this.changeDetector = changeDetector;
        }
        /**
         * @return {?}
         */
        NamedOutletDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.outlet = new router.RouterOutlet(this.parentContexts, this.location, this.resolver, this.name, this.changeDetector);
                this.outlet.ngOnInit();
            };
        /**
         * @return {?}
         */
        NamedOutletDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.outlet)
                    this.outlet.ngOnDestroy();
            };
        NamedOutletDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: 'named-outlet',
                        exportAs: 'outlet'
                    },] },
        ];
        /** @nocollapse */
        NamedOutletDirective.ctorParameters = function () {
            return [
                { type: router.ChildrenOutletContexts },
                { type: i0.ViewContainerRef },
                { type: i0.ComponentFactoryResolver },
                { type: i0.ChangeDetectorRef }
            ];
        };
        NamedOutletDirective.propDecorators = {
            name: [{ type: i0.Input }]
        };
        return NamedOutletDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        SharedModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            http.HttpClientModule,
                            forms.ReactiveFormsModule,
                            angular.IonicModule
                        ],
                        declarations: [
                            SharedComponent,
                            CItemComponent,
                            CMenuComponent,
                            NamedOutletDirective
                        ],
                        exports: [
                            SharedComponent,
                            CItemComponent,
                            CMenuComponent,
                            NamedOutletDirective
                        ]
                    },] },
        ];
        return SharedModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var PageComponent = /** @class */ (function () {
        function PageComponent() {
        }
        /**
         * @return {?}
         */
        PageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        PageComponent.decorators = [
            { type: i0.Injectable },
        ];
        return PageComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ListComponent = /** @class */ (function (_super) {
        __extends(ListComponent, _super);
        function ListComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        ListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ListComponent.decorators = [
            { type: i0.Injectable },
        ];
        return ListComponent;
    }(PageComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var PostComponent = /** @class */ (function (_super) {
        __extends(PostComponent, _super);
        function PostComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        PostComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        PostComponent.decorators = [
            { type: i0.Injectable },
        ];
        return PostComponent;
    }(PageComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ViewComponent = /** @class */ (function (_super) {
        __extends(ViewComponent, _super);
        function ViewComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        ViewComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ViewComponent.decorators = [
            { type: i0.Injectable },
        ];
        return ViewComponent;
    }(PageComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var PickComponent = /** @class */ (function (_super) {
        __extends(PickComponent, _super);
        function PickComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        PickComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        PickComponent.decorators = [
            { type: i0.Injectable },
        ];
        return PickComponent;
    }(PageComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.SharedService = SharedService;
    exports.SharedComponent = SharedComponent;
    exports.CItemComponent = CItemComponent;
    exports.CMenuComponent = CMenuComponent;
    exports.NamedOutletDirective = NamedOutletDirective;
    exports.SharedModule = SharedModule;
    exports.PageComponent = PageComponent;
    exports.ListComponent = ListComponent;
    exports.PostComponent = PostComponent;
    exports.ViewComponent = ViewComponent;
    exports.PickComponent = PickComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vc2hhcmVkL2xpYi9zaGFyZWQuc2VydmljZS50cyIsIm5nOi8vc2hhcmVkL2xpYi9zaGFyZWQuY29tcG9uZW50LnRzIiwibmc6Ly9zaGFyZWQvbGliL2NvbXBvbmVudHMvYy1pdGVtL2MtaXRlbS50cyIsIm5nOi8vc2hhcmVkL2xpYi9jb21wb25lbnRzL2MtbWVudS9jLW1lbnUudHMiLCJuZzovL3NoYXJlZC9saWIvZGlyZWN0aXZlcy9uYW1lZC5vdXRsZXQudHMiLCJuZzovL3NoYXJlZC9saWIvc2hhcmVkLm1vZHVsZS50cyIsIm5nOi8vc2hhcmVkL2xpYi9iYXNlL1BhZ2VDb21wb25lbnQudHMiLG51bGwsIm5nOi8vc2hhcmVkL2xpYi9iYXNlL0xpc3RDb21wb25lbnQudHMiLCJuZzovL3NoYXJlZC9saWIvYmFzZS9Qb3N0Q29tcG9uZW50LnRzIiwibmc6Ly9zaGFyZWQvbGliL2Jhc2UvVmlld0NvbXBvbmVudC50cyIsIm5nOi8vc2hhcmVkL2xpYi9iYXNlL1BpY2tDb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNoYXJlZCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBzaGFyZWQgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLWl0ZW0nLFxuICB0ZW1wbGF0ZTogYDxpb24taXRlbSBkZXRhaWwgKGNsaWNrKT1cImNsaWNrSGFuZGxlKClcIj5cbiAgPGlvbi1hdmF0YXIgc2xvdD1cInN0YXJ0XCI+XG4gICAgICA8aW1nIFtzcmNdPVwiaW1nVXJsXCI+XG4gIDwvaW9uLWF2YXRhcj5cbiAge3tsYWJlbH19XG48L2lvbi1pdGVtPmBcbn0pXG5leHBvcnQgY2xhc3MgQ0l0ZW1Db21wb25lbnQge1xuICBASW5wdXQoJ2l0ZW0nKSBpdGVtIDogYW55O1xuICBASW5wdXQoJ2ltZ1VybCcpIGltZ1VybDogYW55O1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IHN0cmluZztcblxuICBAT3V0cHV0KCkgZG8gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBjbGlja0hhbmRsZSgpIHtcbiAgICB0aGlzLmRvLmVtaXQodGhpcy5pdGVtKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIFxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjLW1lbnUnLFxuICAgIHRlbXBsYXRlOiBgPGlvbi1pdGVtIChjbGljayk9XCJuZXh0KGluZm8uZXh0ZW5zaW9uKVwiIG1vZGU9XCJpb3NcIiBjbGFzcz1cImMtbWVudVwiPlxuICA8aW9uLWNhcmQgY2xhc3M9XCJtZW51LWNhcmRcIj5cbiAgICA8aW9uLWNhcmQtaGVhZGVyPlxuICAgICAgPGlvbi1pdGVtIGRldGFpbD1cImZhbHNlXCIgbGluZXM9XCJub25lXCIgYnV0dG9uPlxuICAgICAgICA8aW9uLWF2YXRhciBzbG90PVwic3RhcnRcIj5cbiAgICAgICAgICA8aW1nIFtzcmNdPVwiaW5mby5tZW1vXCIgYWx0PVwiU3BlYWtlciBwcm9maWxlIHBpY1wiPlxuICAgICAgICA8L2lvbi1hdmF0YXI+XG4gICAgICAgIHt7aW5mby5uYW1lfX1cbiAgICAgIDwvaW9uLWl0ZW0+XG4gICAgPC9pb24tY2FyZC1oZWFkZXI+XG4gIDwvaW9uLWNhcmQ+XG48L2lvbi1pdGVtPlxuYCxcbiAgICBzdHlsZXM6IFtgLmMtbWVudSAubWVudS1jYXJke3dpZHRoOjEwMCU7bWFyZ2luLXRvcDoxNXB4O21hcmdpbi1ib3R0b206MTVweDtiYWNrZ3JvdW5kOiNlM2VjZjMhaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6MnB4O2JveC1zaGFkb3c6bm9uZTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1ufWBdXG59KVxuZXhwb3J0IGNsYXNzIENNZW51Q29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgnZGF0YScpIGluZm86IGFueTtcbiAgICBAT3V0cHV0KCkgZ29OZXh0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgbmV4dChwYXRoKSB7XG4gICAgICAgIHRoaXMuZ29OZXh0LmVtaXQocGF0aCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBWaWV3Q29udGFpbmVyUmVmLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck91dGxldCwgQ2hpbGRyZW5PdXRsZXRDb250ZXh0cyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICduYW1lZC1vdXRsZXQnLFxyXG4gICAgZXhwb3J0QXM6ICdvdXRsZXQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYW1lZE91dGxldERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIHB1YmxpYyBvdXRsZXQ6IFJvdXRlck91dGxldDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHBhcmVudENvbnRleHRzOiBDaGlsZHJlbk91dGxldENvbnRleHRzLFxyXG4gICAgICAgIHByaXZhdGUgbG9jYXRpb246IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBcclxuICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICkge31cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICB0aGlzLm91dGxldCA9IG5ldyBSb3V0ZXJPdXRsZXQodGhpcy5wYXJlbnRDb250ZXh0cywgdGhpcy5sb2NhdGlvbiwgdGhpcy5yZXNvbHZlciwgdGhpcy5uYW1lLCB0aGlzLmNoYW5nZURldGVjdG9yKTtcclxuICAgICAgdGhpcy5vdXRsZXQubmdPbkluaXQoKTtcclxuICAgIH1cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICBpZih0aGlzLm91dGxldClcclxuICAgICAgICB0aGlzLm91dGxldC5uZ09uRGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH0iLCJpbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ0l0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYy1pdGVtL2MtaXRlbSc7XG5pbXBvcnQgeyBDTWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jLW1lbnUvYy1tZW51JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmFtZWRPdXRsZXREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmFtZWQub3V0bGV0JztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaGFyZWRDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBJb25pY01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTaGFyZWRDb21wb25lbnQsXG4gICAgQ0l0ZW1Db21wb25lbnQsXG4gICAgQ01lbnVDb21wb25lbnQsXG4gICAgTmFtZWRPdXRsZXREaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNoYXJlZENvbXBvbmVudCxcbiAgICBDSXRlbUNvbXBvbmVudCxcbiAgICBDTWVudUNvbXBvbmVudCxcbiAgICBOYW1lZE91dGxldERpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7IH1cbiIsImltcG9ydCB7IE9uSW5pdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgT25Jbml0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BhZ2VDb21wb25lbnR9IGZyb20gXCIuL1BhZ2VDb21wb25lbnRcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgZXh0ZW5kcyBQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBPbkluaXQsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9QYWdlQ29tcG9uZW50XCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb3N0Q29tcG9uZW50IGV4dGVuZHMgUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgIH1cbn1cbiIsImltcG9ydCB7IE9uSW5pdCxJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BhZ2VDb21wb25lbnR9IGZyb20gXCIuL1BhZ2VDb21wb25lbnRcIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmlld0NvbXBvbmVudCBleHRlbmRzIFBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IE9uSW5pdCxJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGFnZUNvbXBvbmVudH0gZnJvbSBcIi4vUGFnZUNvbXBvbmVudFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGlja0NvbXBvbmVudCBleHRlbmRzIFBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICB9XG59XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIkV2ZW50RW1pdHRlciIsIklucHV0IiwiT3V0cHV0IiwiUm91dGVyT3V0bGV0IiwiRGlyZWN0aXZlIiwiQ2hpbGRyZW5PdXRsZXRDb250ZXh0cyIsIlZpZXdDb250YWluZXJSZWYiLCJDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJIdHRwQ2xpZW50TW9kdWxlIiwiUmVhY3RpdmVGb3Jtc01vZHVsZSIsIklvbmljTW9kdWxlIiwidHNsaWJfMS5fX2V4dGVuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7OzRCQUpEOzs7Ozs7O0FDQUE7UUFhRTtTQUFpQjs7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