import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit {
  items3: MenuItem[];

  activeItem: MenuItem;
  constructor() { }

  ngOnInit(): void {
    this.items3 = [
      {label: 'List Accept', icon: 'pi pi-fw pi-chart-bar', routerLink:'/inserts'},
      {label: 'List Reject', icon: 'pi pi-fw pi-calendar', routerLink:'/updates'}
    ];
  }

}
