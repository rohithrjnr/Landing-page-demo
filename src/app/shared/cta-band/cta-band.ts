import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-cta-band',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './cta-band.html',
})
export class CtaBandComponent {
  @Input({ required: true }) firstLine = '';
  @Input({ required: true }) secondLine = '';
  @Input() buttonLabel = 'Talk with us';
}
