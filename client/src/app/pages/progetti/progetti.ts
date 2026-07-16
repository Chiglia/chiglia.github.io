import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-progetti',
  imports: [SharedModule, TagModule],
  templateUrl: './progetti.html',
  styles: ``,
})
export class Progetti {
  projects = [
    {
      id: 'games',
      name: 'Chiglia Games',
      description: 'Piattaforma di mini-giochi interattivi e giochi arcade sviluppati in TypeScript e HTML5 Canvas, ottimizzati per la massima reattività su desktop e dispositivi mobili.',
      link: 'https://games.chiglia.ovh',
      icon: 'pi pi-play',
      category: 'Videogiochi',
      tech: ['TypeScript', 'HTML5 Canvas', 'CSS3', 'Vite'],
      image: '/progetti/games.jpg'
    },
    {
      id: 'staff',
      name: 'Staff Portal',
      description: 'Un portale gestionale completo e collaborativo per il coordinamento dei collaboratori, la pianificazione intelligente dei turni e la gestione delle comunicazioni interne.',
      link: 'https://staff.chiglia.ovh',
      icon: 'pi pi-users',
      category: 'Sistemi Gestionali',
      tech: ['Angular', 'Node.js', 'Express', 'PostgreSQL'],
      image: '/progetti/staff.jpg'
    },
    {
      id: 'findMySelf',
      name: 'FindMySelf',
      description: 'Insieme di quiz interattivi sulla personalità e test psicologici creati per aiutare gli utenti a esplorare se stessi in modo divertente e strutturato.',
      link: 'https://quiz.chiglia.ovh',
      icon: 'pi pi-question-circle',
      category: 'Web App Interattiva',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: '/progetti/findMySelf.jpg'
    },
    {
      id: 'makeCanzoniere',
      name: 'Make Canzoniere',
      description: 'Strumento digitale per creare, personalizzare, trasporre accordi all\'istante e condividere canzonieri musicali, progettato per scout e chitarristi.',
      link: 'https://songs.chiglia.ovh',
      icon: 'pi pi-music',
      category: 'Utility & Musica',
      tech: ['Angular', 'RxJS', 'PrimeNG', 'Sass'],
      image: '/progetti/scout.jpg'
    },
    {
      id: '1Hub',
      name: '1Hub',
      description: 'Un aggregatore intelligente di risorse IA che permette di chattare e confrontare in tempo reale le risposte provenienti da diversi modelli generativi d\'avanguardia.',
      link: 'https://www.1hub.ai/app/#/',
      icon: 'pi pi-sparkles',
      category: 'Intelligenza Artificiale',
      tech: ['Angular', 'FastAPI', 'Python', 'Stripe API'],
      image: '/progetti/1Hub.jpg'
    }
  ];
}
