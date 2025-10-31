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
      id: 'findMySelf',
      name: 'FindMySelf',
      description: 'Insieme di quiz per aiutare le persone a conoscersi meglio',
      link: 'https://quiz.chiglia.ovh',
    },
    {
      id: 'scout',
      name: 'Scout',
      description: 'Sito web per un gruppo scout locale',
      link: 'https://pd6.chiglia.ovh',
    },
    {
      id: 'parrocchia',
      name: 'Parrocchia',
      description: 'Sito web per una parrocchia locale',
      link: 'https://cristorepd.it/',
    },
    {
      id: '1Hub',
      name: '1Hub',
      description: 'Piattaforma di aggregazione di risorse AI',
      link: 'https://www.1hub.ai/app/#/',
    },
    {
      id: 'makeCanzoniere',
      name: 'Make Canzoniere',
      description: 'Portale per creare e condividere canzonieri digitali',
      link: 'https://songs.chiglia.ovh',
    },

    {
      id: 'bluekippe',
      name: 'Bluekippe',
      description: 'Sito per società sportiva per disabili',
      link: 'Quiz di Programmazione',
    },
  ];
}
