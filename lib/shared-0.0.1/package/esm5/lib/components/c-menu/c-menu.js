/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
export { CMenuComponent };
if (false) {
    /** @type {?} */
    CMenuComponent.prototype.info;
    /** @type {?} */
    CMenuComponent.prototype.goNext;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYy1tZW51LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYy1tZW51L2MtbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFzQm5FO3NCQURtQixJQUFJLFlBQVksRUFBRTtLQUdwQzs7Ozs7SUFFRCw2QkFBSTs7OztJQUFKLFVBQUssSUFBSTtRQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFCOztnQkEzQkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxRQUFRO29CQUNsQixRQUFRLEVBQUUsMFpBWWI7b0JBQ0csTUFBTSxFQUFFLENBQUMscUtBQXFLLENBQUM7aUJBQ2xMOzs7Ozt1QkFHSSxLQUFLLFNBQUMsTUFBTTt5QkFDWixNQUFNOzt5QkFyQlg7O1NBa0JhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjLW1lbnUnLFxuICAgIHRlbXBsYXRlOiBgPGlvbi1pdGVtIChjbGljayk9XCJuZXh0KGluZm8uZXh0ZW5zaW9uKVwiIG1vZGU9XCJpb3NcIiBjbGFzcz1cImMtbWVudVwiPlxuICA8aW9uLWNhcmQgY2xhc3M9XCJtZW51LWNhcmRcIj5cbiAgICA8aW9uLWNhcmQtaGVhZGVyPlxuICAgICAgPGlvbi1pdGVtIGRldGFpbD1cImZhbHNlXCIgbGluZXM9XCJub25lXCIgYnV0dG9uPlxuICAgICAgICA8aW9uLWF2YXRhciBzbG90PVwic3RhcnRcIj5cbiAgICAgICAgICA8aW1nIFtzcmNdPVwiaW5mby5tZW1vXCIgYWx0PVwiU3BlYWtlciBwcm9maWxlIHBpY1wiPlxuICAgICAgICA8L2lvbi1hdmF0YXI+XG4gICAgICAgIHt7aW5mby5uYW1lfX1cbiAgICAgIDwvaW9uLWl0ZW0+XG4gICAgPC9pb24tY2FyZC1oZWFkZXI+XG4gIDwvaW9uLWNhcmQ+XG48L2lvbi1pdGVtPlxuYCxcbiAgICBzdHlsZXM6IFtgLmMtbWVudSAubWVudS1jYXJke3dpZHRoOjEwMCU7bWFyZ2luLXRvcDoxNXB4O21hcmdpbi1ib3R0b206MTVweDtiYWNrZ3JvdW5kOiNlM2VjZjMhaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6MnB4O2JveC1zaGFkb3c6bm9uZTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1ufWBdXG59KVxuZXhwb3J0IGNsYXNzIENNZW51Q29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgnZGF0YScpIGluZm86IGFueTtcbiAgICBAT3V0cHV0KCkgZ29OZXh0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgbmV4dChwYXRoKSB7XG4gICAgICAgIHRoaXMuZ29OZXh0LmVtaXQocGF0aCk7XG4gICAgfVxuXG59XG4iXX0=