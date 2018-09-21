/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Input, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef } from "@angular/core";
import { RouterOutlet, ChildrenOutletContexts } from "@angular/router";
export class NamedOutletDirective {
    /**
     * @param {?} parentContexts
     * @param {?} location
     * @param {?} resolver
     * @param {?} changeDetector
     */
    constructor(parentContexts, location, resolver, changeDetector) {
        this.parentContexts = parentContexts;
        this.location = location;
        this.resolver = resolver;
        this.changeDetector = changeDetector;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.outlet = new RouterOutlet(this.parentContexts, this.location, this.resolver, this.name, this.changeDetector);
        this.outlet.ngOnInit();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.outlet)
            this.outlet.ngOnDestroy();
    }
}
NamedOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: 'named-outlet',
                exportAs: 'outlet'
            },] },
];
/** @nocollapse */
NamedOutletDirective.ctorParameters = () => [
    { type: ChildrenOutletContexts },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: ChangeDetectorRef }
];
NamedOutletDirective.propDecorators = {
    name: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NamedOutletDirective.prototype.outlet;
    /** @type {?} */
    NamedOutletDirective.prototype.name;
    /** @type {?} */
    NamedOutletDirective.prototype.parentContexts;
    /** @type {?} */
    NamedOutletDirective.prototype.location;
    /** @type {?} */
    NamedOutletDirective.prototype.resolver;
    /** @type {?} */
    NamedOutletDirective.prototype.changeDetector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZWQub3V0bGV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbmFtZWQub3V0bGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsd0JBQXdCLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkksT0FBTyxFQUFFLFlBQVksRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTXZFLE1BQU07Ozs7Ozs7SUFHRixZQUNZLGdCQUNBLFVBQ0EsVUFDQTtRQUhBLG1CQUFjLEdBQWQsY0FBYztRQUNkLGFBQVEsR0FBUixRQUFRO1FBQ1IsYUFBUSxHQUFSLFFBQVE7UUFDUixtQkFBYyxHQUFkLGNBQWM7S0FDdEI7Ozs7SUFDSixRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNsSCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ3hCOzs7O0lBQ0QsV0FBVztRQUNULElBQUcsSUFBSSxDQUFDLE1BQU07WUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzdCOzs7WUFwQkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsUUFBUTthQUNyQjs7OztZQUxzQixzQkFBc0I7WUFEMkIsZ0JBQWdCO1lBQTFDLHdCQUF3QjtZQUFvQixpQkFBaUI7OzttQkFTdEcsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBPbkRlc3Ryb3ksIElucHV0LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFZpZXdDb250YWluZXJSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyT3V0bGV0LCBDaGlsZHJlbk91dGxldENvbnRleHRzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ25hbWVkLW91dGxldCcsXHJcbiAgICBleHBvcnRBczogJ291dGxldCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5hbWVkT3V0bGV0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgcHVibGljIG91dGxldDogUm91dGVyT3V0bGV0O1xyXG4gICAgQElucHV0KCkgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcGFyZW50Q29udGV4dHM6IENoaWxkcmVuT3V0bGV0Q29udGV4dHMsXHJcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFxyXG4gICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgKSB7fVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgIHRoaXMub3V0bGV0ID0gbmV3IFJvdXRlck91dGxldCh0aGlzLnBhcmVudENvbnRleHRzLCB0aGlzLmxvY2F0aW9uLCB0aGlzLnJlc29sdmVyLCB0aGlzLm5hbWUsIHRoaXMuY2hhbmdlRGV0ZWN0b3IpO1xyXG4gICAgICB0aGlzLm91dGxldC5uZ09uSW5pdCgpO1xyXG4gICAgfVxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgIGlmKHRoaXMub3V0bGV0KVxyXG4gICAgICAgIHRoaXMub3V0bGV0Lm5nT25EZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfSJdfQ==