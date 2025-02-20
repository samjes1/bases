import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormContactComponent } from '../../components/form-contact/form-contact.component';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [SharedModule, FormContactComponent, IonContent]
})
export class ContactComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
