import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateQuoteComponent } from './update-quote/update-quote.component';
import { UpdateModalComponent } from './update-modal/update-modal.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateQuoteComponent,
    UpdateModalComponent,
    MainPageComponent,
    AddQuoteComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  entryComponents: [
    UpdateModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
