import { Component } from '@angular/core';
import { CONTACT_EMAIL } from '../../data/site-data';
import { EyebrowComponent } from '../../shared/eyebrow/eyebrow';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [EyebrowComponent],
  templateUrl: './contact-page.html',
})
export class ContactPage {
  readonly email = CONTACT_EMAIL;

  prepareEmail(event: Event): void {
    event.preventDefault();
    const form = event.currentTarget;
    if (!(form instanceof HTMLFormElement) || !form.reportValidity()) return;

    const data = new FormData(form);
    const subject = `Enquiry from ${data.get('name')}`;
    const body = [
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Company: ${data.get('company') || 'Not provided'}`,
      `Interested in: ${data.get('interest') || 'Not specified'}`,
      '',
      'Message:',
      data.get('message'),
    ].join('\n');

    window.location.href = `mailto:${this.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
