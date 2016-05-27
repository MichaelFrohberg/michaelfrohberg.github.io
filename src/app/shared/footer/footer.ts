import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'site-footer',
    template: require('./footer.html')
})
export class Footer implements OnInit {
    constructor() { }

    ngOnInit() { }

}
