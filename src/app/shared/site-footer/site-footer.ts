import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTACT_EMAIL, SITE_NAME } from '../../data/site-data';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './site-footer.html',
})
export class SiteFooterComponent {
  readonly year = new Date().getFullYear();
  readonly email = CONTACT_EMAIL;
  readonly siteName = SITE_NAME;
}
