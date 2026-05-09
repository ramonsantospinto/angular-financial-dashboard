import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Wallet } from '../models/wallet.model';

import { Investment } from '../models/investment.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  getWallet(): Observable<Wallet> {
    return of({
      balance: 158750.45,
      monthlyProfit: 12.8,
    });
  }

  getInvestments(): Observable<Investment[]> {
    return of([
      {
        id: 1,
        name: 'PETR4',
        value: 25000,
        profit: 8.5,
      },

      {
        id: 2,
        name: 'VALE3',
        value: 18000,
        profit: 5.2,
      },

      {
        id: 3,
        name: 'BTC',
        value: 42000,
        profit: 18.9,
      },
    ]);
  }
}
