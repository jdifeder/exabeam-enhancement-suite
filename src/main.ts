import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Sentry from "@sentry/angular";
import { Integrations } from "@sentry/tracing";

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

Sentry.init({
  dsn: "https://16e328fdd849407e9bfda2d692ecbec9@o187074.ingest.sentry.io/5616904",
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: ["localhost", "https://exabeam-cloud.web.app"],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});


if (environment.production) {
  enableProdMode();
}


platformBrowserDynamic().bootstrapModule(AppModule)
.then(success => console.log('Bootstrap success'))
.catch(err => console.error(err));
