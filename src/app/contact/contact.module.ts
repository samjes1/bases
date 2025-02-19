import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IonContent } from '@ionic/angular/standalone';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    IonContent,
  ]
})
export class ContactModule { }
