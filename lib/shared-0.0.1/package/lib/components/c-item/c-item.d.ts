import { EventEmitter } from '@angular/core';
export declare class CItemComponent {
    item: any;
    imgUrl: any;
    label: string;
    do: EventEmitter<{}>;
    constructor();
    clickHandle(): void;
    ngOnChanges(): void;
}
