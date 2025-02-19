import { Component, OnInit } from '@angular/core';
import { DetailNotificationComponent } from "../../components/detail-notification/detail-notification.component";
import { NotificationsModule } from "../../notifications.module";
import { IconNotificationComponent } from "../../components/icon-notification/icon-notification.component";
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  imports: [DetailNotificationComponent, IconNotificationComponent, IonicModule],
})
export class NotificationsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
