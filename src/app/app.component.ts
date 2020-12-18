import {Component} from '@angular/core';
import {Roles, RoleService} from './shared/role.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Products List';

  constructor(readonly roleService: RoleService) {
  }
}
