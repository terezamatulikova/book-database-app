import {Component} from '@angular/core';
import {Storage} from "@ionic/storage";
import {Book} from "../api/api-objects";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  books: Book[];

  constructor(
      private storage: Storage
  ) {
  }

  ionViewWillEnter() {
    this.storage.get('favourite').then((favourite) => {
      if(favourite) {
        this.books = favourite;
      }
    })
  }

}
