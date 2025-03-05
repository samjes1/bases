import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Models } from 'src/app/models/models';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss'],
  imports: [ FormsModule ]
})
export class FormContactComponent  implements OnInit {

  form: Models.Contact.FormContactI ={
    email: '',
    name: '',
    phone: '+581636958',
  }

  error: string = ' ';
  constructor() { }

  ngOnInit() {}

  sendForm(){
    if (!this.form.email){
      this.error = 'write email'
      return;
    }
    this.error = ''
    console.log('envia -->', this.form);
  }

}
