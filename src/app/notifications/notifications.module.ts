import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { IonContent } from '@ionic/angular/standalone';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { IconNotificationComponent } from './components/icon-notification/icon-notification.component';
import { DetailNotificationComponent } from './components/detail-notification/detail-notification.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    IonContent,
    NotificationsComponent,
    IconNotificationComponent,
    DetailNotificationComponent


  ],
  exports: [IconNotificationComponent]
})
export class NotificationsModule { }
