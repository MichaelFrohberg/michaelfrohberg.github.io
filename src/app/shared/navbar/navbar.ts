import { Component, OnInit } from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdIcon} from 'ng2-material';

@Component({
    moduleId: module.id,
    selector: 'site-navbar',
    template: require('./navbar.html'),
    directives: [MdToolbar, MdIcon]
})
export class Navbar implements OnInit {
    constructor() { }

    ngOnInit() { }

}
