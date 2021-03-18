import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-svg-line-style',
  templateUrl: './svg-line-style.component.html',
  styleUrls: ['./svg-line-style.component.scss']
})
export class SvgLineStyleComponent implements OnInit {

  @Input() lineStrokeColor: string;
  @Input() pathPosition: string;
  enableLeft: boolean;
  enableRight: boolean;
  constructor() { }

  ngOnInit() {
    this.enableLeft = false;
    this.enableRight = false;
    if(this.lineStrokeColor === undefined ||
      this.lineStrokeColor === null || this.lineStrokeColor === '') {
      this.lineStrokeColor = '#FFB81C'
    }
    if(this.pathPosition === undefined ||
      this.pathPosition === null || this.pathPosition === '') {
        this.enableRight = true;
      } else {
        switch (this.pathPosition) {
          case 'left':
            this.enableLeft = true;
          break;
          case 'right':
            this.enableRight = true;
          break;
          case 'both':
            this.enableRight = true;
            this.enableLeft = true;
            break;
          default:
            this.enableRight = true;
          break;
        }
      }
  }

}
