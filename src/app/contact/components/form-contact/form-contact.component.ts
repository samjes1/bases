import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Models } from 'src/app/models/models';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss'],
  imports: [ FormsModule, ReactiveFormsModule, CommonModule, HighlightDirective ]
})
export class FormContactComponent  implements OnInit {

  form: Models.Contact.FormContactI ={
    email: '',
    name: '',
    phone: '00000',
  }

  datosForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]]
  })


  error: string = '';

  cargando: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.datosForm.controls['email'].valueChanges.subscribe( changes => {
      console.log('change --> ' , changes);
      
    });

    this.loadInfo();
  }

  loadInfo (){
    setTimeout(() => {
      this.datosForm.controls['phone'].setValue('09875696365')
    }, 2000);
  }


  sendForm(){
/*     if (!this.form.email){
      this.error = 'write email'
      return;
    }
    this.error = ''
    console.log('envia -->', this.form); */

    this.cargando = true;
    console.log('datosFrom' , this.datosForm);
    if (this.datosForm.valid){
      console.log('valid');
      
      const data = this.datosForm.value;
    }
    this.cargando = false;
    
  }
  
  isValid(input: FormControl){
    console.log('input ->' , input.value);
    if (input.value.length != 10){
      return {mal: true}
    }
    return {};
    
  }

}
