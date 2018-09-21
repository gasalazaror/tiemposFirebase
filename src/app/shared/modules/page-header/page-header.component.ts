import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
    @Input() heading: string;
    @Input() pdf: boolean;
    @Input() nuevo: string;
    @Input() edicion: string;
    @Input() icon: string;
    @Output() myEvent = new EventEmitter();
    constructor() { }

    ngOnInit() { }

    function2() {
        this.myEvent.emit(null)
    }
}
