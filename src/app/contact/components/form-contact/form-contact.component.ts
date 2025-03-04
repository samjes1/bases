import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss'],
})
export class FormContactComponent  implements OnInit {

  form: any ={
    email: '',
    name: '',
    phone: '',
  }

  constructor() { }

  ngOnInit() {}

  sendForm(){
    console.log('envia');
    
  }

}
