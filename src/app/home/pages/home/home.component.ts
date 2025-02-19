import { Component, OnInit } from '@angular/core';
import { ArticleComponent } from "../../components/article/article.component";
import { IonicModule } from '@ionic/angular';
import { SharedModule } from "../../../shared/shared.module";
import { NotFoundComponent } from "../../../shared/pages/not-found/not-found.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [IonicModule, SharedModule, ArticleComponent, NotFoundComponent]
 
})
export class HomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
