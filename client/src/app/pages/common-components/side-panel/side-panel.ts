import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { Buttons } from '../buttons/buttons';

@Component({
  selector: 'app-side-panel',
  imports: [SharedModule, PanelMenuModule, AvatarModule, Buttons],
  templateUrl: './side-panel.html',
  styles: ``,
})
export class SidePanel {
  toggleTheme() {
    const element = document.querySelector('html');
    if (element) {
      element.classList.toggle('my-app-dark');
    }
  }
}
