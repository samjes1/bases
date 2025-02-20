import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IonContent } from '@ionic/angular/standalone';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ContactComponent,
    SharedModule,
    IonContent,
  ]
})
export class ContactModule { }
