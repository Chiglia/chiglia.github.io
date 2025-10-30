import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-progetti',
  imports: [SharedModule],
  templateUrl: './progetti.html',
  styles: ``,
})
export class Progetti {
  projects = [
    {
      name: 'Quiz di Programmazione',
      link: 'Quiz di Programmazione',
    },
    {
      name: 'Quiz di Programmazione',
      link: 'Quiz di Programmazione',
    },
    {
      name: 'Quiz di Programmazione',
      link: 'Quiz di Programmazione',
    },
    {
      name: 'Quiz di Programmazione',
      link: 'Quiz di Programmazione',
    },
    {
      name: 'Quiz di Programmazione',
      link: 'Quiz di Programmazione',
    },
  ];
}
