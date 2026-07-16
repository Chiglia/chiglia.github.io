import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './services/language-service';
import { Nav } from './pages/common-components/nav/nav';
import { SidePanel } from './pages/common-components/side-panel/side-panel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidePanel, Nav],
  template: `    
    <div class="flex flex-col h-screen w-full overflow-hidden">
      <!-- Navbar visibile solo su dispositivi piccoli -->
      <app-nav class="block md:hidden flex-none"></app-nav>

      <div class="flex flex-row flex-1 overflow-hidden">
        <!-- Sidebar visibile solo da tablet in su -->
        <app-side-panel
          class="hidden md:flex flex-none w-72"
        ></app-side-panel>

        <!-- Contenuto principale con scroll singolo -->
        <div class="flex-1 overflow-y-auto">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>`,
  styles: [],
})
export class App {
  private langService = inject(LanguageService);
}
