import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-balance-card',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './balance-card.html',

  styleUrls: ['./balance-card.scss'],
})
export class BalanceCardComponent {
  @Input()
  balance!: number;
}
