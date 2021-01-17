import {Component, OnInit} from "@angular/core";
import {BookResourceService} from "../../api/book-resource.service";
import {ActivatedRoute} from "@angular/router";
import {Book} from "../../api/api-objects";
import {switchMap, tap} from "rxjs/operators";

@Component({
    templateUrl: './tab1-detail.component.html',
    providers: [BookResourceService]
})
export class Tab1DetailComponent implements OnInit {
    book: Book;

    constructor(
        private bookResourceService: BookResourceService,
        private activatedRoute: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.activatedRoute.params.pipe(
            switchMap((p) => {
                return this.bookResourceService.getBook(p.id)
            }),
            tap((book: Book) => {
                this.book = book;
            })
        ).subscribe();
    }
}