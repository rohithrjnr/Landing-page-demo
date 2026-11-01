import { Component } from '@angular/core';
import { CtaBandComponent } from '../../shared/cta-band/cta-band';
import { EyebrowComponent } from '../../shared/eyebrow/eyebrow';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading';
import { VALUES } from '../../data/site-data';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CtaBandComponent, EyebrowComponent, SectionHeadingComponent],
  templateUrl: './about-page.html',
})
export class AboutPage {
  readonly values = VALUES;
}
