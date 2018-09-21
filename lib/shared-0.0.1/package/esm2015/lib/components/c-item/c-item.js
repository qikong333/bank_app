/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class CItemComponent {
    constructor() {
        this.do = new EventEmitter();
    }
    /**
     * @return {?}
     */
    clickHandle() {
        this.do.emit(this.item);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
    }
}
CItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'c-item',
                template: `<ion-item detail (click)="clickHandle()">
  <ion-avatar slot="start">
      <img [src]="imgUrl">
  </ion-avatar>
  {{label}}
</ion-item>`
            },] },
];
/** @nocollapse */
CItemComponent.ctorParameters = () => [];
CItemComponent.propDecorators = {
    item: [{ type: Input, args: ['item',] }],
    imgUrl: [{ type: Input, args: ['imgUrl',] }],
    label: [{ type: Input, args: ['label',] }],
    do: [{ type: Output }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYy1pdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYy1pdGVtL2MtaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVd2RSxNQUFNO0lBTUo7a0JBRGUsSUFBSSxZQUFZLEVBQUU7S0FHaEM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pCOzs7O0lBRUQsV0FBVztLQUVWOzs7WUF6QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUU7Ozs7O1lBS0E7YUFDWDs7Ozs7bUJBRUUsS0FBSyxTQUFDLE1BQU07cUJBQ1osS0FBSyxTQUFDLFFBQVE7b0JBQ2QsS0FBSyxTQUFDLE9BQU87aUJBRWIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtaXRlbScsXG4gIHRlbXBsYXRlOiBgPGlvbi1pdGVtIGRldGFpbCAoY2xpY2spPVwiY2xpY2tIYW5kbGUoKVwiPlxuICA8aW9uLWF2YXRhciBzbG90PVwic3RhcnRcIj5cbiAgICAgIDxpbWcgW3NyY109XCJpbWdVcmxcIj5cbiAgPC9pb24tYXZhdGFyPlxuICB7e2xhYmVsfX1cbjwvaW9uLWl0ZW0+YFxufSlcbmV4cG9ydCBjbGFzcyBDSXRlbUNvbXBvbmVudCB7XG4gIEBJbnB1dCgnaXRlbScpIGl0ZW0gOiBhbnk7XG4gIEBJbnB1dCgnaW1nVXJsJykgaW1nVXJsOiBhbnk7XG4gIEBJbnB1dCgnbGFiZWwnKSBsYWJlbDogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBkbyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIGNsaWNrSGFuZGxlKCkge1xuICAgIHRoaXMuZG8uZW1pdCh0aGlzLml0ZW0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgXG4gIH1cbn1cbiJdfQ==