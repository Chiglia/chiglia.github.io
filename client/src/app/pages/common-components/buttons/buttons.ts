import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-buttons',
  imports: [SharedModule, PanelMenuModule],
  templateUrl: './buttons.html',
  styles: ``,
})
export class Buttons {
  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: ['/'],
    },
    {
      label: 'Esperienza',
      icon: 'pi pi-star',
      routerLink: ['/esperienza'],
    },
    {
      label: 'Progetti',
      icon: 'pi pi-briefcase',
      routerLink: ['/progetti'],
    },
    {
      label: 'Competenze',
      icon: 'pi pi-book',
      routerLink: ['/skills'],
    },
  ];
}
