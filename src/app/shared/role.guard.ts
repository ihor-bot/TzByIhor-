import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute} from '@angular/router';
import {Roles, RoleService} from './role.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(
    public router: Router,
    private roleService: RoleService,
    private route: ActivatedRoute,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isNewProduct = +route.params.id;
    const permissionToEnter = this.roleService.getCurrentRole();
    if (isNewProduct === 0) {
      if (permissionToEnter && permissionToEnter === Roles.admin) {
        return true;
      }
    } else {
      if (permissionToEnter && permissionToEnter !== Roles.user) {
        return true;
      }
    }
    this.router.navigate(['']);
    return false;
  }
}
