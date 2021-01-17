import {Component, OnInit} from "@angular/core";
import {TestService} from "../../services/test.service";
import {Book} from "../../api/api-objects";
import {BookResourceService} from "../../api/book-resource.service";
import {Router} from "@angular/router";
import {filter, switchMap, tap} from "rxjs/operators";

@Component({
    templateUrl: './tab1-list.component.html',
    providers: [BookResourceService]
})
export class Tab1ListComponent implements OnInit {
    books: Book[];

    constructor(
        private testService: TestService,
        private bookResourceService: BookResourceService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.testService.data$.pipe(
            tap((data) => {
                if (!data) {
                    this.router.navigate(['../..']);
                }
            }),
            filter((data) => data !== null),
            switchMap(({ title, author, category }) => {
                return this.bookResourceService.getBooks(title, author, category)
            }),
            tap((books) => {
                this.books = books;
            })
        ).subscribe();
    }
}