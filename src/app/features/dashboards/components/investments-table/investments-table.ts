import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Investment } from '../../models/investment.model';

@Component({
  selector: 'app-investments-table',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './investments-table.html',

  styleUrls: ['./investments-table.scss'],
})
export class InvestmentsTableComponent {
  @Input()
  investments!: Investment[];
}
