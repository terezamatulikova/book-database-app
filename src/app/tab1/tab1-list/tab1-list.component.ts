import {Component, OnInit} from "@angular/core";
import {TestService} from "../../services/test.service";
import {Book} from "../../api/api-objects";
import {BookResourceService} from "../../api/book-resource.service";
import {Router} from "@angular/router";

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
        if (!this.testService.data) {
            this.router.navigate(['../..']);
        }

        const { title, author, category } = this.testService.data;
        this.bookResourceService.getBooks(title, author, category).subscribe(books => {
            this.books = books;
        });
    }
}