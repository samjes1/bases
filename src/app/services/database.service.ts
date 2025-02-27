import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  
    
  //httpClient = inject(HttpClient)  
  
  getData(path: string) {
   /*  return new Promise((resolve) => { 
        this.httpClient.get(path).subscribe( data => {
            resolve(data);
            return;
        });
     })     */
  }
  }

