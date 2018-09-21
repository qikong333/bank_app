/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class CMenuComponent {
    constructor() {
        this.goNext = new EventEmitter();
    }
    /**
     * @param {?} path
     * @return {?}
     */
    next(path) {
        this.goNext.emit(path);
    }
}
CMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'c-menu',
                template: `<ion-item (click)="next(info.extension)" mode="ios" class="c-menu">
  <ion-card class="menu-card">
    <ion-card-header>
      <ion-item detail="false" lines="none" button>
        <ion-avatar slot="start">
          <img [src]="info.memo" alt="Speaker profile pic">
        </ion-avatar>
        {{info.name}}
      </ion-item>
    </ion-card-header>
  </ion-card>
</ion-item>
`,
                styles: [`.c-menu .menu-card{width:100%;margin-top:15px;margin-bottom:15px;background:#e3ecf3!important;border-radius:2px;box-shadow:none;display:flex;flex-direction:column}`]
            },] },
];
/** @nocollapse */
CMenuComponent.ctorParameters = () => [];
CMenuComponent.propDecorators = {
    info: [{ type: Input, args: ['data',] }],
    goNext: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CMenuComponent.prototype.info;
    /** @type {?} */
    CMenuComponent.prototype.goNext;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYy1tZW51LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYy1tZW51L2MtbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWtCdkUsTUFBTTtJQUlGO3NCQURtQixJQUFJLFlBQVksRUFBRTtLQUdwQzs7Ozs7SUFFRCxJQUFJLENBQUMsSUFBSTtRQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFCOzs7WUEzQkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztDQVliO2dCQUNHLE1BQU0sRUFBRSxDQUFDLHFLQUFxSyxDQUFDO2FBQ2xMOzs7OzttQkFHSSxLQUFLLFNBQUMsTUFBTTtxQkFDWixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYy1tZW51JyxcbiAgICB0ZW1wbGF0ZTogYDxpb24taXRlbSAoY2xpY2spPVwibmV4dChpbmZvLmV4dGVuc2lvbilcIiBtb2RlPVwiaW9zXCIgY2xhc3M9XCJjLW1lbnVcIj5cbiAgPGlvbi1jYXJkIGNsYXNzPVwibWVudS1jYXJkXCI+XG4gICAgPGlvbi1jYXJkLWhlYWRlcj5cbiAgICAgIDxpb24taXRlbSBkZXRhaWw9XCJmYWxzZVwiIGxpbmVzPVwibm9uZVwiIGJ1dHRvbj5cbiAgICAgICAgPGlvbi1hdmF0YXIgc2xvdD1cInN0YXJ0XCI+XG4gICAgICAgICAgPGltZyBbc3JjXT1cImluZm8ubWVtb1wiIGFsdD1cIlNwZWFrZXIgcHJvZmlsZSBwaWNcIj5cbiAgICAgICAgPC9pb24tYXZhdGFyPlxuICAgICAgICB7e2luZm8ubmFtZX19XG4gICAgICA8L2lvbi1pdGVtPlxuICAgIDwvaW9uLWNhcmQtaGVhZGVyPlxuICA8L2lvbi1jYXJkPlxuPC9pb24taXRlbT5cbmAsXG4gICAgc3R5bGVzOiBbYC5jLW1lbnUgLm1lbnUtY2FyZHt3aWR0aDoxMDAlO21hcmdpbi10b3A6MTVweDttYXJnaW4tYm90dG9tOjE1cHg7YmFja2dyb3VuZDojZTNlY2YzIWltcG9ydGFudDtib3JkZXItcmFkaXVzOjJweDtib3gtc2hhZG93Om5vbmU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn1gXVxufSlcbmV4cG9ydCBjbGFzcyBDTWVudUNvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoJ2RhdGEnKSBpbmZvOiBhbnk7XG4gICAgQE91dHB1dCgpIGdvTmV4dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIG5leHQocGF0aCkge1xuICAgICAgICB0aGlzLmdvTmV4dC5lbWl0KHBhdGgpO1xuICAgIH1cblxufVxuIl19