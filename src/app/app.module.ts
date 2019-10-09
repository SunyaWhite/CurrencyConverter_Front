import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm, FormsModule } from "@angular/forms";
import { HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConverterComponent } from "../CurrencyConverter/Components/Converter.component";
import { CurrenciesService} from '../CurrencyConverter/Services/CurrenciesService';

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [CurrenciesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
