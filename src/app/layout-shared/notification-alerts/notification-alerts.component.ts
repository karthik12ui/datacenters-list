import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notification-alerts',
  templateUrl: './notification-alerts.component.html',
  styleUrls: ['./notification-alerts.component.scss']
})
export class NotificationAlertsComponent implements OnInit {
  @Input() NotifyParam: string;
  @Input() NotifyBackgroundColor: string;
  @Input() NotifyType: string;
  @Input() Message: string;
  @Input() Id: string;
  @Input() Url: string;
  @Output() AlertCloseSelected = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.Message = '<p class="pb-0">' + this.Message + '</p>';
    const message = this.Message;

    this.Message = message.replace('click here', `<span class="alert-link">click here</span>`);
  }

  alertClose(item) {
    this.AlertCloseSelected.emit(item);
  }

}
