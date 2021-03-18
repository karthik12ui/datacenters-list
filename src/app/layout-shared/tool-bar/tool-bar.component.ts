import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onMenuIconClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  public sidenavToggle(){
    this.onMenuIconClick.emit();
  }

}
