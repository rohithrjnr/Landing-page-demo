import { Component, Input } from '@angular/core';
import { EyebrowComponent } from '../eyebrow/eyebrow';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [EyebrowComponent],
  templateUrl: './section-heading.html',
})
export class SectionHeadingComponent {
  @Input({ required: true }) eyebrow = '';
}
