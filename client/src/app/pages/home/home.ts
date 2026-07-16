import { Component, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { SelectButton } from 'primeng/selectbutton'; import { AccordionModule } from 'primeng/accordion';
import { SharedModule } from '../../../shared.module';

type Role = 'frontend' | 'fullstack' | 'database';

interface RoleHighlight {
  title: string;
  description: string;
  quote: string;
  skills: string[];
  actionLabel: string;
  actionLink: string;
  icon: string;
}

interface FaqItem {
  question: string;
  answer: string;
  icon: string;
}

interface SocialLink {
  href: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  imports: [
    SharedModule,
    TagModule,
    AvatarModule,
    DividerModule,
    SelectButton,
    AccordionModule,
  ],
  templateUrl: './home.html',
  styles: `
    .hover-scale {
      transition: transform 0.2s ease-in-out;
    }
    .hover-scale:hover {
      transform: translateY(-2px);
    }
  `,
})
export class Home {
  roleOptions: { label: string; value: Role; icon: string }[] = [
    { label: 'Frontend Dev', value: 'frontend', icon: 'pi pi-desktop' },
    { label: 'Full-Stack Dev', value: 'fullstack', icon: 'pi pi-server' },
    { label: 'Data & Database', value: 'database', icon: 'pi pi-database' },
  ];

  roleControl = new FormControl<Role>('frontend', { nonNullable: true });

  // PrimeNG passthrough: sostituisce gli ::ng-deep + !important precedenti,
  // resta scoped al singolo componente invece di toccare lo stile globale.
  selectButtonPt = {
    root: { class: 'bg-bg-surface-100 dark:bg-surface-800 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-2xl p-1 gap-1' },
    pcToggleButton: {
      root: {
        class:
          'border-none rounded-2xl bg-transparent text-color-secondary font-semibold text-sm px-3 py-2',
      },
    },
  };

  private selectedRole = toSignal(this.roleControl.valueChanges, {
    initialValue: this.roleControl.value,
  });

  stats = [
    { value: '3+', label: 'Anni di Esperienza', desc: 'Sviluppo software', icon: 'pi-calendar-plus' },
    { value: '5+', label: 'Progetti Chiave', desc: 'Web App & Portali live', icon: 'pi-briefcase' },
    { value: '10+', label: 'Tecnologie Prime', desc: 'Linguaggi & Framework', icon: 'pi-code' },
    { value: '100%', label: 'Clean Code', desc: 'Layout responsive', icon: 'pi-check-circle' },
  ];

  socialLinks: SocialLink[] = [
    { href: 'https://www.linkedin.com/in/davidechigliaro', icon: 'pi-linkedin' },
    { href: 'https://github.com/Chiglia', icon: 'pi-github' },
    { href: 'mailto:davide.chigliaro3@gmail.com', icon: 'pi-envelope' },
    { href: 'https://www.instagram.com/chigliadellabarca', icon: 'pi-instagram' },
  ];

  private roleDetails: Record<Role, RoleHighlight> = {
    frontend: {
      title: 'Sviluppatore Frontend • UI/UX Specialist',
      description:
        "Curo meticolosamente ogni pixel, transizione e aspetto legato alle prestazioni e all'accessibilità. Traduco design complessi in codice pulito e interfacce web reattive usando Angular (v21), React e Tailwind CSS v4.",
      quote: "L'esperienza utente non è un dettaglio, è l'applicazione stessa.",
      skills: ['Angular v21', 'TypeScript', 'Tailwind CSS v4', 'State Management & Signals', 'UI/UX Design'],
      actionLabel: 'Sfoglia Progetti Web',
      actionLink: '/progetti',
      icon: 'pi-desktop',
    },
    fullstack: {
      title: 'Sviluppatore Full-Stack • AI & Integrations',
      description:
        'Collego mondi complessi. Esperto nella progettazione di servizi asincroni, integrazione di Large Language Models (OpenAI, Anthropic, ElevenLabs), moduli di pagamento online (Stripe & PayPal) e architetture RESTful robuste.',
      quote: 'Progettare end-to-end significa scrivere flussi di dati sicuri, scalabili ed incredibilmente veloci.',
      skills: ['Node.js & FastAPI', 'RESTful APIs & WebSockets', 'AI APIs Integration', 'Stripe Payments', 'PostgreSQL / SQL'],
      actionLabel: 'Guarda le mie Esperienze',
      actionLink: '/esperienza',
      icon: 'pi-server',
    },
    database: {
      title: 'Database Developer & Data Integrator',
      description:
        'Il frontend veloce nasce da una base dati solida. Sviluppo e mantengo strutture dati ottimizzate, integrazioni ERP di livello enterprise (SAP) e query complesse su motori relazionali Oracle, MySQL e SQL Server.',
      quote: "I dati sono la fondazione invisibile su cui poggia l'intero successo di un software.",
      skills: ['Advanced SQL', 'Database Design', 'Oracle & Postgres DB', 'SAP Asset Management', 'Query Optimization & Tuning'],
      actionLabel: 'Leggi il mio Percorso',
      actionLink: '/esperienza',
      icon: 'pi-database',
    },
  };

  currentHighlight = computed<RoleHighlight>(() => this.roleDetails[this.selectedRole()]);

  faqs: FaqItem[] = [
    {
      question: 'Qual è la tua attuale disponibilità lavorativa?',
      answer:
        'Lavoro felicemente in Dedagroup collaborando a importanti soluzioni nel settore bancario. Tuttavia, sono sempre ricettivo verso sfide stimolanti, opportunità di crescita ad alto impatto tecnologico ed estensioni del mio network professionale.',
      icon: 'pi-info-circle',
    },
    {
      question: 'Come gestisci lo sviluppo di nuove applicazioni?',
      answer:
        "Seguo un approccio improntato sulla qualità: pianificazione dei flussi dati, wireframe rapidi se necessario, scelta accurata della tecnologia, sviluppo pulito e test manuali/automatizzati. Do estrema priorità alle performance reali e all'accessibilità.",
      icon: 'pi-cog',
    },
    {
      question: 'Lavori bene in team e con metodologie agili?',
      answer:
        'Assolutamente sì. Ho un background consolidato nell\'utilizzo di framework Agile/Scrum. Collaboro quotidianamente con designer, project manager e altri sviluppatori utilizzando Git, sprint planning, review e retrospettive periodiche.',
      icon: 'pi-users',
    },
  ];
}