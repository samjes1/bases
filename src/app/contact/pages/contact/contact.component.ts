import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormContactComponent } from '../../components/form-contact/form-contact.component';
import { IonContent } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [SharedModule, FormContactComponent, FormsModule, IonContent]
})
export class ContactComponent  implements OnInit {

  title: string = 'Contact' 
  description: string = 'lorem ipsum dolor sit amet, consectetur adip'

  constructor() { }

  ngOnInit() {}

}
