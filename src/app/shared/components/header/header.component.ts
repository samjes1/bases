import { Component, Input, OnInit } from '@angular/core';
import { NotificationsModule } from "../../../notifications/notifications.module";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [NotificationsModule],
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent  implements OnInit {

  @Input() title: string = "Título";

  constructor() { }

  ngOnInit() {}

}
