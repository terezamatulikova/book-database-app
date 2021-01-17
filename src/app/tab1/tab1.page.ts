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
  }, { validators: [this.validate]})

  constructor(
      private testService: TestService,
      private router: Router,
      private activatedRoute: ActivatedRoute
  ) {}

  search() {
    this.testService.data$.next(this.formGroup.value);
    this.router.navigate(['result'], { relativeTo: this.activatedRoute });
  }

  validate(formGroup: FormGroup) {
    if (!formGroup.value.title && !formGroup.value.author && !formGroup.value.category) {
      return { required: true }
    }
    return null;
  }
}
