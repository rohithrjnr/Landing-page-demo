import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eyebrow',
  standalone: true,
  templateUrl: './eyebrow.html',
})
export class EyebrowComponent {
  @Input({ required: true }) label = '';
  @Input() light = false;
}
