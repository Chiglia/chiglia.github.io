import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { AvatarModule } from 'primeng/avatar';
import { FieldsetModule } from 'primeng/fieldset';
import { StepperModule } from 'primeng/stepper';

@Component({
  selector: 'app-esperienza',
  imports: [SharedModule, AvatarModule, FieldsetModule, StepperModule],
  templateUrl: './esperienza.html',
  styles: ``,
})
export class Esperienza {}
