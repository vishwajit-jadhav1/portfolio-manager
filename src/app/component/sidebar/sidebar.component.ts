import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { routes } from './sidebar'


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  routes = routes
  isOpen = true

  toggleSideBar() {
    this.isOpen = !this.isOpen
  }

  handelLogOut() {
    localStorage.clear
  }

}
