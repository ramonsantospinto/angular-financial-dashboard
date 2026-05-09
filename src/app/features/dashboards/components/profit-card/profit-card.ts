import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profit-card',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './profit-card.html',

  styleUrls: ['./profit-card.scss'],
})
export class ProfitCardComponent {
  @Input()
  profit!: number;
}
