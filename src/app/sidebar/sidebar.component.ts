import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ShellService } from '../shell/shell.service';

@Component({
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {
    constructor(private router: Router, private shellService: ShellService) {
    }

    shellNavigate(url: string) {
        this.shellService.navigate(url);
    }

    routerNavigate(url: string) {
      console.log("-> ", url);
        this.router.navigate([url]);
    }
}
