import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, ErrorHandler, NgModule  } from '@angular/core';
import { environment } from '../environments/environment';
import * as Sentry from "@sentry/angular";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { TreeTableModule } from 'primeng/treetable';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { ListboxModule } from 'primeng/listbox';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,      
    BrowserAnimationsModule,
    TableModule,
    MatCardModule,
    TreeTableModule,
    DialogModule,
    ButtonModule,
    ToastModule,
    ProgressBarModule,
    ListboxModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    }
    /*,
    {
      provide: Sentry.TraceService,
      deps: [Router],
    }
    ,
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
    */
    
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faQuestionCircle);
  }
}




