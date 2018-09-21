/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
export { CItemComponent };
if (false) {
    /** @type {?} */
    CItemComponent.prototype.item;
    /** @type {?} */
    CItemComponent.prototype.imgUrl;
    /** @type {?} */
    CItemComponent.prototype.label;
    /** @type {?} */
    CItemComponent.prototype.do;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYy1pdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYy1pdGVtL2MtaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFpQnJFO2tCQURlLElBQUksWUFBWSxFQUFFO0tBR2hDOzs7O0lBRUQsb0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pCOzs7O0lBRUQsb0NBQVc7OztJQUFYO0tBRUM7O2dCQXpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFFBQVEsRUFBRSxxSkFLQTtpQkFDWDs7Ozs7dUJBRUUsS0FBSyxTQUFDLE1BQU07eUJBQ1osS0FBSyxTQUFDLFFBQVE7d0JBQ2QsS0FBSyxTQUFDLE9BQU87cUJBRWIsTUFBTTs7eUJBaEJUOztTQVdhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLWl0ZW0nLFxuICB0ZW1wbGF0ZTogYDxpb24taXRlbSBkZXRhaWwgKGNsaWNrKT1cImNsaWNrSGFuZGxlKClcIj5cbiAgPGlvbi1hdmF0YXIgc2xvdD1cInN0YXJ0XCI+XG4gICAgICA8aW1nIFtzcmNdPVwiaW1nVXJsXCI+XG4gIDwvaW9uLWF2YXRhcj5cbiAge3tsYWJlbH19XG48L2lvbi1pdGVtPmBcbn0pXG5leHBvcnQgY2xhc3MgQ0l0ZW1Db21wb25lbnQge1xuICBASW5wdXQoJ2l0ZW0nKSBpdGVtIDogYW55O1xuICBASW5wdXQoJ2ltZ1VybCcpIGltZ1VybDogYW55O1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IHN0cmluZztcblxuICBAT3V0cHV0KCkgZG8gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBjbGlja0hhbmRsZSgpIHtcbiAgICB0aGlzLmRvLmVtaXQodGhpcy5pdGVtKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIFxuICB9XG59XG4iXX0=