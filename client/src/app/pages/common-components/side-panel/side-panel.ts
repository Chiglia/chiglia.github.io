import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-side-panel',
  imports: [SharedModule, PanelMenuModule, AvatarModule],
  templateUrl: './side-panel.html',
  styles: ``,
})
export class SidePanel {
  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: ['/'],
    },
    {
      label: 'Progetti',
      icon: 'pi pi-briefcase',
      routerLink: ['/projects'],
    },
    {
      label: 'Competenze',
      icon: 'pi pi-star',
      routerLink: ['/skills'],
    },
    {
      label: 'Contatti',
      icon: 'pi pi-envelope',
      routerLink: ['/contact'],
    },
  ];
  toggleTheme() {
    const element = document.querySelector('html');
    if (element) {
      element.classList.toggle('my-app-dark');
    }
  }
}
