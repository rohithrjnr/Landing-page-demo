import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './button.html',
  styles: ':host { display: block; width: fit-content; }',
})
export class ButtonComponent {
  @Input({ required: true }) label = '';
  @Input() route = '/contact';
  @Input() variant: 'dark' | 'light' = 'dark';
}
