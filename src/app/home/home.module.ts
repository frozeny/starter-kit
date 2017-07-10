import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    IonicPageModule.forChild(HomeComponent)
  ],
  entryComponents: [
    HomeComponent
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    QuoteService
  ]
})
export class HomeModule { }
