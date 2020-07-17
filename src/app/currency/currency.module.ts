import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyComponent } from './currency.component';
import { CurrencyService} from './currency.service';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [CurrencyComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports:[
    CurrencyComponent,
  ],
  providers:[
    CurrencyService
  ]
})
export class CurrencyModule { }
