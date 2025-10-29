import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { DrawerModule } from 'primeng/drawer';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-nav',
  imports: [SharedModule, DrawerModule, AvatarModule],
  templateUrl: './nav.html',
  styles: ``,
})
export class Nav {
  menuVisible = false;

  toggleTheme() {
    const element = document.querySelector('html');
    if (element) {
      element.classList.toggle('my-app-dark');
    }
  }
}
