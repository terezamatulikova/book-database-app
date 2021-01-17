import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({providedIn: 'root'})
export class TestService {
    data$: BehaviorSubject<{
        title: string;
        author: string;
        category: string;
    }> = new BehaviorSubject<{title: string, author: string, category: string}>(null);
}