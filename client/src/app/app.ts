import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './pages/common-components/nav/nav';
import { Footer } from './pages/common-components/footer/footer';
import { SidePanel } from './pages/common-components/side-panel/side-panel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidePanel],
  template: `
    <div class="flex min-h-screen flex-auto">
      <app-side-panel class="flex-none w-18rem border-right-1 surface-border"></app-side-panel>

      <div class="flex-auto overflow-y-auto p-4">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [],
})
export class App {}
