import { Component } from '@angular/core';
import { APPROACH, SERVICES } from '../../data/site-data';
import { CtaBandComponent } from '../../shared/cta-band/cta-band';
import { EyebrowComponent } from '../../shared/eyebrow/eyebrow';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CtaBandComponent, EyebrowComponent, SectionHeadingComponent],
  templateUrl: './services-page.html',
})
export class ServicesPage {
  readonly services = SERVICES;
  readonly approach = APPROACH;
}
