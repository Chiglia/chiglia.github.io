import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-skills',
  imports: [SharedModule, ProgressBarModule],
  templateUrl: './skills.html',
  styles: ``,
})
export class Skills {}
