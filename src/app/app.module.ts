import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfileService} from './profile.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ DataService} from './data.service';
import{CurrencyModule} from './currency/currency.module'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CurrencyModule
  ],
  providers: [
    ProfileService,
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
