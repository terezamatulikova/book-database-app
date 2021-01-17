import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class TestService {
    data: {
        title: string;
        author: string;
        category: string;
    };
}