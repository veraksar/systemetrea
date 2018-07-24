import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile.service';
import { Router } from '@angular/router';

class MenuItem {
  constructor(public caption: string, public link: any[], public hide?: boolean) { }
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  menuItems: MenuItem[];

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit() {
  }

  isLoggedIn(): boolean {
    return this.userProfileService.isLoggedIn();
  }

  isAdmin(): boolean {
    return this.userProfileService.isAdmin();
  }

  logout() {
    this.userProfileService.logout();
  }
}
