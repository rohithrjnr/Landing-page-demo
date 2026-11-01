import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button';
import { EyebrowComponent } from '../../shared/eyebrow/eyebrow';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading';
import { ServiceListComponent } from '../../shared/service-list/service-list';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, ButtonComponent, EyebrowComponent, SectionHeadingComponent, ServiceListComponent],
  templateUrl: './home-page.html',
})
export class HomePage {}
