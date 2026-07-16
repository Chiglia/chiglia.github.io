import { Component, signal } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { DrawerModule } from 'primeng/drawer';
import { AvatarModule } from 'primeng/avatar';
import { Buttons } from '../buttons/buttons';

@Component({
  selector: 'app-nav',
  imports: [SharedModule, DrawerModule, AvatarModule, Buttons],
  templateUrl: './nav.html',
  styles: ``,
})
export class Nav {
  menuVisible = false;
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
