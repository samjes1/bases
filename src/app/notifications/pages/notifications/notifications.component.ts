import { Component, OnInit } from '@angular/core';
import { DetailNotificationComponent } from "../../components/detail-notification/detail-notification.component";
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  imports: [DetailNotificationComponent, IonContent],
})
export class NotificationsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
