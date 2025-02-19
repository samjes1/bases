import { Component, OnInit } from '@angular/core';
import { NotificationsModule } from "../../../notifications/notifications.module";
import { IconNotificationComponent } from "../../../notifications/components/icon-notification/icon-notification.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [NotificationsModule],
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
