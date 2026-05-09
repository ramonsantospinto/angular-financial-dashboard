import { Component, OnInit, inject } from '@angular/core';

import { CommonModule } from '@angular/common';

import { DashboardService } from '../../services/dashboard.service';

import { Wallet } from '../../models/wallet.model';

import { Investment } from '../../models/investment.model';

import { BalanceCardComponent } from '../../components/balance-card/balance-card';

import { ProfitCardComponent } from '../../components/profit-card/profit-card';

import { InvestmentsTableComponent } from '../../components/investments-table/investments-table';

@Component({
  selector: 'app-dashboard-page',

  standalone: true,

  imports: [CommonModule, BalanceCardComponent, ProfitCardComponent, InvestmentsTableComponent],

  templateUrl: './dashboard-page.component.html',

  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  private dashboardService = inject(DashboardService);

  wallet?: Wallet;

  investments: Investment[] = [];

  ngOnInit(): void {
    this.loadWallet();

    this.loadInvestments();
  }

  loadWallet(): void {
    this.dashboardService.getWallet().subscribe({
      next: (response) => {
        console.log('WALLET:', response);

        this.wallet = response;
      },
    });
  }

  loadInvestments(): void {
    this.dashboardService.getInvestments().subscribe({
      next: (response) => {
        console.log('INVESTMENTS:', response);

        this.investments = response;
      },
    });
  }
}
