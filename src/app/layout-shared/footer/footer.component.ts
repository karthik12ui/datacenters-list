import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public feedbackForm: FormGroup;
  public subscribeForm: FormGroup;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.feedbackForm = this.formBuilder.group({ 
      email: ['', Validators.compose([Validators.required])],
      message: ['', Validators.required]
    });
    this.subscribeForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])]
    })
  }

  public onFeedbackFormSubmit(values):void {
    if (this.feedbackForm.valid) {
      console.log(values);
    }
  }

  public onSubscribeFormSubmit(values):void {
    if (this.subscribeForm.valid) {
      console.log(values);
    }
  }

}
