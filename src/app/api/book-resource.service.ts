import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Book} from "./api-objects";

@Injectable()
export class BookResourceService extends HttpClient {
  api = {
    url: 'https://www.googleapis.com/books/v1/volumes?q=',
    urlById: 'https://www.googleapis.com/books/v1/volumes/',
    APPID: 'AIzaSyAMrciX7Z1c6l9hz-g1A9Kpsna6EX966KE'
  }

  getBooks(titleQuery: string, authorQuery: string, categoryQuery: string): Observable<Book[]> {
    let url: string = this.api.url;

    if (titleQuery.length > 0){
      url += 'intitle:'+titleQuery+'+';
    }
    if (authorQuery.length > 0){
      url += 'inauthor:'+authorQuery+'+';
    }
    if (categoryQuery.length > 0){
      url += 'subject:'+categoryQuery+'+';
    }
    return this.get(url+'&key='+this.api.APPID).pipe(
        map((collection: { items: { id: string, volumeInfo: Book }[] }) => {
          return collection.items.map(item => ({...item.volumeInfo, id: item.id}))
        })
    );
  }

  getBook(id: string): Observable<Book> {
    return this.get(this.api.urlById+id+'?key='+this.api.APPID).pipe(
        map((item: { id: string, volumeInfo: Book }) => ({...item.volumeInfo, id: item.id}))
    )
  }
}
