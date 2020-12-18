import {Injectable} from '@angular/core';

export enum Roles {
  admin = 'ADMIN',
  user = 'USER',
  owner = 'OWNER'
}

@Injectable({providedIn: 'root'})
export class RoleService {
  private role = Roles.admin;

  getRoles(): string[] {
    return Object.values(Roles);
  }

  getCurrentRole(): Roles {
    return this.role;
  }

  setRole(selectedRole: Roles): void {
    this.role = selectedRole;
  }
}
