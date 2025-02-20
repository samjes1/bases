import { Component, OnInit } from '@angular/core';
import { ArticleComponent } from "../../components/article/article.component";
import { SharedModule } from "../../../shared/shared.module";
import { IonContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [IonContent, SharedModule, ArticleComponent]
 
})
export class HomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
