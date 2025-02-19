import { Component, OnInit } from '@angular/core';
import { ArticleComponent } from "../../components/article/article.component";
import { IonicModule } from '@ionic/angular';
import { SharedModule } from "../../../shared/shared.module";
import { HomeModule } from '../../home.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [IonicModule, SharedModule, ArticleComponent]
 
})
export class HomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
