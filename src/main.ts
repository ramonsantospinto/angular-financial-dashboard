import { bootstrapApplication } from '@angular/platform-browser';

import { LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';

import localePt from '@angular/common/locales/pt';

import { App } from './app/app';

import { appConfig } from './app/app.config';

registerLocaleData(localePt);

bootstrapApplication(App, {
  ...appConfig,

  providers: [
    ...(appConfig.providers || []),

    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
}).catch((err) => console.error(err));
