import { Component } from '@angular/core';
import {TestService} from "../services/test.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  formGroup = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    category: new FormControl('')
  })

  constructor(
      private testService: TestService,
      private router: Router,
      private activatedRoute: ActivatedRoute
  ) {}

  click() {
    this.testService.data = this.formGroup.value;

    this.router.navigate(['result'], { relativeTo: this.activatedRoute });
  }
}
