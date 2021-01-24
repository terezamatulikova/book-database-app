import {Component, OnInit} from "@angular/core";
import {BookResourceService} from "../../api/book-resource.service";
import {ActivatedRoute} from "@angular/router";
import {Book} from "../../api/api-objects";
import {switchMap, tap} from "rxjs/operators";
import {Storage} from "@ionic/storage";
import {from} from "rxjs";

@Component({
    templateUrl: './tab1-detail.component.html',
    providers: [BookResourceService]
})
export class Tab1DetailComponent implements OnInit {
    book: Book;
    isFavourite: boolean = false;

    constructor(
        private bookResourceService: BookResourceService,
        private activatedRoute: ActivatedRoute,
        private storage: Storage
    ) {
    }

    ngOnInit() {
        this.activatedRoute.params.pipe(
            switchMap((p) => {
                return this.bookResourceService.getBook(p.id)
            }),
            tap((book: Book) => {
                this.book = book;
            }),
            switchMap((book) => {
                return from(this.storage.get('favourite')).pipe(
                    tap((favourite: Book[]) => {
                        this.isFavourite = !!favourite?.find(b => b.id === book.id) ?? false;
                    })
                )
            })
        ).subscribe();
    }

    favButtonClick() {
        this.isFavourite = !this.isFavourite;

        this.storage.get('favourite').then((favourite) => {
            if(this.isFavourite) {
                this.storage.set('favourite', [...favourite, this.book]);
            } else {
                this.storage.set('favourite', favourite.filter(book => book.id !== this.book.id));
            }
        })
    }
}