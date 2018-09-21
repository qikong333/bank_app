import { Injectable, Component, Directive, Input, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, Output, EventEmitter, defineInjectable, NgModule } from '@angular/core';
import { RouterOutlet, ChildrenOutletContexts } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { __extends } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SharedService = /** @class */ (function () {
    function SharedService() {
    }
    SharedService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    SharedService.ctorParameters = function () { return []; };
    /** @nocollapse */ SharedService.ngInjectableDef = defineInjectable({ factory: function SharedService_Factory() { return new SharedService(); }, token: SharedService, providedIn: "root" });
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
        { type: Component, args: [{
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
        this.do = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'c-item',
                    template: "<ion-item detail (click)=\"clickHandle()\">\n  <ion-avatar slot=\"start\">\n      <img [src]=\"imgUrl\">\n  </ion-avatar>\n  {{label}}\n</ion-item>"
                },] },
    ];
    /** @nocollapse */
    CItemComponent.ctorParameters = function () { return []; };
    CItemComponent.propDecorators = {
        item: [{ type: Input, args: ['item',] }],
        imgUrl: [{ type: Input, args: ['imgUrl',] }],
        label: [{ type: Input, args: ['label',] }],
        do: [{ type: Output }]
    };
    return CItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CMenuComponent = /** @class */ (function () {
    function CMenuComponent() {
        this.goNext = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'c-menu',
                    template: "<ion-item (click)=\"next(info.extension)\" mode=\"ios\" class=\"c-menu\">\n  <ion-card class=\"menu-card\">\n    <ion-card-header>\n      <ion-item detail=\"false\" lines=\"none\" button>\n        <ion-avatar slot=\"start\">\n          <img [src]=\"info.memo\" alt=\"Speaker profile pic\">\n        </ion-avatar>\n        {{info.name}}\n      </ion-item>\n    </ion-card-header>\n  </ion-card>\n</ion-item>\n",
                    styles: [".c-menu .menu-card{width:100%;margin-top:15px;margin-bottom:15px;background:#e3ecf3!important;border-radius:2px;box-shadow:none;display:flex;flex-direction:column}"]
                },] },
    ];
    /** @nocollapse */
    CMenuComponent.ctorParameters = function () { return []; };
    CMenuComponent.propDecorators = {
        info: [{ type: Input, args: ['data',] }],
        goNext: [{ type: Output }]
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
        this.outlet = new RouterOutlet(this.parentContexts, this.location, this.resolver, this.name, this.changeDetector);
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
        { type: Directive, args: [{
                    selector: 'named-outlet',
                    exportAs: 'outlet'
                },] },
    ];
    /** @nocollapse */
    NamedOutletDirective.ctorParameters = function () { return [
        { type: ChildrenOutletContexts },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: ChangeDetectorRef }
    ]; };
    NamedOutletDirective.propDecorators = {
        name: [{ type: Input }]
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        HttpClientModule,
                        ReactiveFormsModule,
                        IonicModule
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
        { type: Injectable },
    ];
    return PageComponent;
}());

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
        { type: Injectable },
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
        { type: Injectable },
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
        { type: Injectable },
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
        { type: Injectable },
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

export { SharedService, SharedComponent, CItemComponent, CMenuComponent, NamedOutletDirective, SharedModule, PageComponent, ListComponent, PostComponent, ViewComponent, PickComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9zaGFyZWQvbGliL3NoYXJlZC5zZXJ2aWNlLnRzIiwibmc6Ly9zaGFyZWQvbGliL3NoYXJlZC5jb21wb25lbnQudHMiLCJuZzovL3NoYXJlZC9saWIvY29tcG9uZW50cy9jLWl0ZW0vYy1pdGVtLnRzIiwibmc6Ly9zaGFyZWQvbGliL2NvbXBvbmVudHMvYy1tZW51L2MtbWVudS50cyIsIm5nOi8vc2hhcmVkL2xpYi9kaXJlY3RpdmVzL25hbWVkLm91dGxldC50cyIsIm5nOi8vc2hhcmVkL2xpYi9zaGFyZWQubW9kdWxlLnRzIiwibmc6Ly9zaGFyZWQvbGliL2Jhc2UvUGFnZUNvbXBvbmVudC50cyIsIm5nOi8vc2hhcmVkL2xpYi9iYXNlL0xpc3RDb21wb25lbnQudHMiLCJuZzovL3NoYXJlZC9saWIvYmFzZS9Qb3N0Q29tcG9uZW50LnRzIiwibmc6Ly9zaGFyZWQvbGliL2Jhc2UvVmlld0NvbXBvbmVudC50cyIsIm5nOi8vc2hhcmVkL2xpYi9iYXNlL1BpY2tDb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNoYXJlZCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBzaGFyZWQgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLWl0ZW0nLFxuICB0ZW1wbGF0ZTogYDxpb24taXRlbSBkZXRhaWwgKGNsaWNrKT1cImNsaWNrSGFuZGxlKClcIj5cbiAgPGlvbi1hdmF0YXIgc2xvdD1cInN0YXJ0XCI+XG4gICAgICA8aW1nIFtzcmNdPVwiaW1nVXJsXCI+XG4gIDwvaW9uLWF2YXRhcj5cbiAge3tsYWJlbH19XG48L2lvbi1pdGVtPmBcbn0pXG5leHBvcnQgY2xhc3MgQ0l0ZW1Db21wb25lbnQge1xuICBASW5wdXQoJ2l0ZW0nKSBpdGVtIDogYW55O1xuICBASW5wdXQoJ2ltZ1VybCcpIGltZ1VybDogYW55O1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IHN0cmluZztcblxuICBAT3V0cHV0KCkgZG8gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBjbGlja0hhbmRsZSgpIHtcbiAgICB0aGlzLmRvLmVtaXQodGhpcy5pdGVtKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIFxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjLW1lbnUnLFxuICAgIHRlbXBsYXRlOiBgPGlvbi1pdGVtIChjbGljayk9XCJuZXh0KGluZm8uZXh0ZW5zaW9uKVwiIG1vZGU9XCJpb3NcIiBjbGFzcz1cImMtbWVudVwiPlxuICA8aW9uLWNhcmQgY2xhc3M9XCJtZW51LWNhcmRcIj5cbiAgICA8aW9uLWNhcmQtaGVhZGVyPlxuICAgICAgPGlvbi1pdGVtIGRldGFpbD1cImZhbHNlXCIgbGluZXM9XCJub25lXCIgYnV0dG9uPlxuICAgICAgICA8aW9uLWF2YXRhciBzbG90PVwic3RhcnRcIj5cbiAgICAgICAgICA8aW1nIFtzcmNdPVwiaW5mby5tZW1vXCIgYWx0PVwiU3BlYWtlciBwcm9maWxlIHBpY1wiPlxuICAgICAgICA8L2lvbi1hdmF0YXI+XG4gICAgICAgIHt7aW5mby5uYW1lfX1cbiAgICAgIDwvaW9uLWl0ZW0+XG4gICAgPC9pb24tY2FyZC1oZWFkZXI+XG4gIDwvaW9uLWNhcmQ+XG48L2lvbi1pdGVtPlxuYCxcbiAgICBzdHlsZXM6IFtgLmMtbWVudSAubWVudS1jYXJke3dpZHRoOjEwMCU7bWFyZ2luLXRvcDoxNXB4O21hcmdpbi1ib3R0b206MTVweDtiYWNrZ3JvdW5kOiNlM2VjZjMhaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6MnB4O2JveC1zaGFkb3c6bm9uZTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1ufWBdXG59KVxuZXhwb3J0IGNsYXNzIENNZW51Q29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgnZGF0YScpIGluZm86IGFueTtcbiAgICBAT3V0cHV0KCkgZ29OZXh0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgbmV4dChwYXRoKSB7XG4gICAgICAgIHRoaXMuZ29OZXh0LmVtaXQocGF0aCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBWaWV3Q29udGFpbmVyUmVmLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck91dGxldCwgQ2hpbGRyZW5PdXRsZXRDb250ZXh0cyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICduYW1lZC1vdXRsZXQnLFxyXG4gICAgZXhwb3J0QXM6ICdvdXRsZXQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYW1lZE91dGxldERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIHB1YmxpYyBvdXRsZXQ6IFJvdXRlck91dGxldDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHBhcmVudENvbnRleHRzOiBDaGlsZHJlbk91dGxldENvbnRleHRzLFxyXG4gICAgICAgIHByaXZhdGUgbG9jYXRpb246IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBcclxuICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICkge31cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICB0aGlzLm91dGxldCA9IG5ldyBSb3V0ZXJPdXRsZXQodGhpcy5wYXJlbnRDb250ZXh0cywgdGhpcy5sb2NhdGlvbiwgdGhpcy5yZXNvbHZlciwgdGhpcy5uYW1lLCB0aGlzLmNoYW5nZURldGVjdG9yKTtcclxuICAgICAgdGhpcy5vdXRsZXQubmdPbkluaXQoKTtcclxuICAgIH1cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICBpZih0aGlzLm91dGxldClcclxuICAgICAgICB0aGlzLm91dGxldC5uZ09uRGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH0iLCJpbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ0l0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYy1pdGVtL2MtaXRlbSc7XG5pbXBvcnQgeyBDTWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jLW1lbnUvYy1tZW51JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmFtZWRPdXRsZXREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmFtZWQub3V0bGV0JztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaGFyZWRDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBJb25pY01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTaGFyZWRDb21wb25lbnQsXG4gICAgQ0l0ZW1Db21wb25lbnQsXG4gICAgQ01lbnVDb21wb25lbnQsXG4gICAgTmFtZWRPdXRsZXREaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNoYXJlZENvbXBvbmVudCxcbiAgICBDSXRlbUNvbXBvbmVudCxcbiAgICBDTWVudUNvbXBvbmVudCxcbiAgICBOYW1lZE91dGxldERpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7IH1cbiIsImltcG9ydCB7IE9uSW5pdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IE9uSW5pdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQYWdlQ29tcG9uZW50fSBmcm9tIFwiLi9QYWdlQ29tcG9uZW50XCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGV4dGVuZHMgUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgT25Jbml0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4vUGFnZUNvbXBvbmVudFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUG9zdENvbXBvbmVudCBleHRlbmRzIFBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBPbkluaXQsSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQYWdlQ29tcG9uZW50fSBmcm9tIFwiLi9QYWdlQ29tcG9uZW50XCI7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZpZXdDb21wb25lbnQgZXh0ZW5kcyBQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBPbkluaXQsSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BhZ2VDb21wb25lbnR9IGZyb20gXCIuL1BhZ2VDb21wb25lbnRcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBpY2tDb21wb25lbnQgZXh0ZW5kcyBQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbInRzbGli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