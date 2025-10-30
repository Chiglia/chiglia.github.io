import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './pages/common-components/nav/nav';
import { Footer } from './pages/common-components/footer/footer';
import { SidePanel } from './pages/common-components/side-panel/side-panel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidePanel, Nav],
  template: `
    <!-- Navbar visibile solo su dispositivi piccoli -->
    <app-nav class="block md:hidden"></app-nav>

    <div class="flex h-screen flex-auto">
      <!-- Sidebar visibile solo da tablet in su -->
      <app-side-panel
        class="hidden md:flex flex-none w-18rem border-right-1 surface-border"
      ></app-side-panel>

      <!-- Contenuto principale -->
      <div class="flex-auto overflow-y-auto">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [],
})
export class App {}
