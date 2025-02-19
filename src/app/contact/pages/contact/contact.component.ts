import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormContactComponent } from '../../components/form-contact/form-contact.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [SharedModule, FormContactComponent, IonicModule]
})
export class ContactComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
