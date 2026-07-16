import { Component, signal } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AvatarModule } from 'primeng/avatar';
import { Buttons } from '../buttons/buttons';

@Component({
  selector: 'app-side-panel',
  imports: [SharedModule, PanelMenuModule, AvatarModule, Buttons],
  templateUrl: './side-panel.html',
  styles: ``,
})
export class SidePanel {
  isDarkMode = signal(true);

  constructor() {
    if (typeof document !== 'undefined') {
      const isDark = document.querySelector('html')?.classList.contains('my-app-dark');
      this.isDarkMode.set(!!isDark);
    }
  }

  toggleTheme() {
    const element = document.querySelector('html');
    if (element) {
      const newVal = element.classList.toggle('my-app-dark');
      this.isDarkMode.set(newVal);
    }
  }
}