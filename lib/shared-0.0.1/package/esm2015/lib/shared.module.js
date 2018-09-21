/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { HttpClientModule } from '@angular/common/http';
import { CItemComponent } from './components/c-item/c-item';
import { CMenuComponent } from './components/c-menu/c-menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NamedOutletDirective } from './directives/named.outlet';
import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
export class SharedModule {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBdUI3QyxNQUFNOzs7WUFyQkwsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsZ0JBQWdCO29CQUNoQixtQkFBbUI7b0JBQ25CLFdBQVc7aUJBQ1o7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxjQUFjO29CQUNkLG9CQUFvQjtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxjQUFjO29CQUNkLG9CQUFvQjtpQkFDckI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jLWl0ZW0vYy1pdGVtJztcbmltcG9ydCB7IENNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2MtbWVudS9jLW1lbnUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOYW1lZE91dGxldERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9uYW1lZC5vdXRsZXQnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNoYXJlZENvbXBvbmVudCB9IGZyb20gJy4vc2hhcmVkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIElvbmljTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNoYXJlZENvbXBvbmVudCxcbiAgICBDSXRlbUNvbXBvbmVudCxcbiAgICBDTWVudUNvbXBvbmVudCxcbiAgICBOYW1lZE91dGxldERpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU2hhcmVkQ29tcG9uZW50LFxuICAgIENJdGVtQ29tcG9uZW50LFxuICAgIENNZW51Q29tcG9uZW50LFxuICAgIE5hbWVkT3V0bGV0RGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHsgfVxuIl19